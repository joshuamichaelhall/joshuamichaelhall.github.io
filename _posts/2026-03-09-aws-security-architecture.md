---
layout: post
title: "Security Architecture Decisions in My Cloud Resume Challenge: What I'd Do Differently for Production"
date: 2026-03-09
categories: aws security
tags: aws security cloud-resume-challenge terraform waf cloudtrail guardduty iam
excerpt: "When I deployed my Cloud Resume Challenge project, I made deliberate security decisions at every layer. Here's what I built, why I built it that way, and what I'd change for enterprise deployment."
published: false
---

When I deployed my Cloud Resume Challenge project, I made deliberate security decisions at every layer. Some of those decisions were exactly right. Others were conscious tradeoffs for a portfolio project that I'd handle differently in a production financial services environment.

Here's what I built, why I built it that way, and what I'd change for enterprise deployment.

## What I Built

The Cloud Resume Challenge is a standard interview project: static website with a visitor counter, deployed on AWS. Most people build it with S3, CloudFront, Lambda, and DynamoDB. I added security controls that most candidates skip.

**Architecture overview:**

- Frontend: S3 bucket serving static content through CloudFront
- Backend: API Gateway triggering Lambda, persisting to DynamoDB
- Infrastructure: 100% Terraform, no console clicking
- Security: WAF, CloudTrail, GuardDuty, encryption at rest, IAM least privilege

The architecture works. The visitor counter increments. The resume loads. But the interesting part isn't that it works. It's the security decisions embedded in every layer.

## Decisions That Worked Well

### CloudFront as Security Boundary

My S3 bucket has no public access. All traffic flows through CloudFront via Origin Access Identity (OAI). This means:

- No direct bucket enumeration attacks
- CloudFront handles TLS termination with ACM-managed certificates
- I can attach WAF rules at the edge before traffic reaches any backend
- Geographic restrictions are possible if I needed them

This isn't clever. It's the baseline. But I've seen production systems where the S3 bucket is public because "CloudFront is in front of it anyway." That's wrong. Defense in depth means every layer enforces the policy.

### WAF with Meaningful Rules

I deployed AWS WAF with three rule sets: rate limiting at 2,000 requests per IP, the AWS Managed Common Rule Set, and Known Bad Inputs.

Rate limiting prevents someone from hammering the API or running up my AWS bill. The managed rules catch common attack patterns without me maintaining signatures. Is this overkill for a visitor counter? Probably. But it demonstrates that I understand application-layer protection, not just network security.

In production, I'd add custom rules for application-specific threats and integrate with AWS Firewall Manager for centralized policy management.

### CloudTrail with Log File Validation

I enabled CloudTrail with log file validation. Every API call in my account is logged, and those logs can't be tampered with without detection. The logs ship to a dedicated S3 bucket with its own access policies.

This is audit trail 101. But here's what matters: when a compliance auditor asks "how do I know these logs weren't modified?", I can point to the validation configuration. The checksum chain proves integrity.

### GuardDuty for Threat Detection

GuardDuty watches CloudTrail logs, VPC flow logs (if I had a VPC), and DNS logs. It uses machine learning to detect unusual patterns: unexpected API calls, cryptocurrency mining, compromised credentials.

For a portfolio project, GuardDuty mostly tells me when I make mistakes from unfamiliar IP addresses. For production, it's an early warning system that operates without any maintenance on my part.

### IAM Least Privilege

My Lambda function has exactly three permissions: GetItem and UpdateItem on one specific DynamoDB table, and CreateLogGroup/CreateLogStream/PutLogEvents for CloudWatch. No wildcards. No "just give it admin so it works."

This is where I see most projects fail. Developers grant AmazonDynamoDBFullAccess because it's faster than figuring out the minimum permissions. Then that role gets compromised and the attacker has full database access.

The Terraform for my IAM policy explicitly specifies the table ARN. If I add a second table, I have to add it to the policy. That friction is a feature.

## Decisions That Were Tradeoffs

### Public S3 Website Bucket (Sort Of)

Technically, my S3 bucket allows GetObject from CloudFront's OAI. In the strictest sense, it's "public" to CloudFront. For a truly sensitive workload, I'd consider S3 access points or VPC endpoints to further restrict access paths.

For a portfolio project, OAI is sufficient. For a financial services application handling customer data, I'd want additional isolation.

### No VPC

My architecture is purely serverless: Lambda, API Gateway, DynamoDB, S3, CloudFront. None of these require a VPC. That's intentional. VPCs add cost (NAT gateways) and complexity (subnets, route tables, security groups) without adding security for this use case.

But "no VPC" means I can't use VPC endpoints for AWS service access. All API calls go over the public internet (encrypted, but public). For production financial services, I'd likely want:

- Lambda in a VPC with private subnets
- VPC endpoints for DynamoDB, S3, and other services
- No public internet access from the compute layer

This adds cost and complexity but provides defense in depth against data exfiltration.

### Single-Region Deployment

My infrastructure lives in us-east-1. CloudTrail is single-region. GuardDuty is single-region. If I deployed resources in another region, I'd have blind spots.

For a portfolio project, this is fine. For production:

- Enable GuardDuty in all regions (even unused ones, to detect unauthorized activity)
- Enable CloudTrail as a multi-region trail
- Consider AWS Organizations with Service Control Policies preventing resource creation in unauthorized regions

### No AWS Config

AWS Config tracks configuration changes and evaluates compliance with rules. I didn't enable it because it adds cost and complexity for limited benefit in a portfolio project.

For production, AWS Config is essential. It answers questions like: "Show me all S3 buckets that allow public access" and "Alert me if anyone modifies a security group." Combined with AWS Security Hub, it creates a continuous compliance monitoring system.

### No Secrets Manager

My Lambda function doesn't need secrets. It talks to DynamoDB using IAM role credentials. But if I had database passwords or API keys, I'd use AWS Secrets Manager with automatic rotation.

I've seen production systems with credentials hardcoded in Lambda environment variables. That's a ticking time bomb. Secrets Manager centralizes credential management and provides audit trails for access.

## What I'd Add for Financial Services Production

### Service Control Policies

In AWS Organizations, SCPs create guardrails that even administrators can't bypass. I'd implement:

- Deny all actions in non-approved regions
- Deny disabling CloudTrail or GuardDuty
- Deny creating IAM users with console passwords (force SSO)
- Require encryption on all new resources

SCPs prevent entire categories of misconfiguration. They're the "break glass" controls that ensure compliance even when someone makes a mistake.

### AWS Security Hub

Security Hub aggregates findings from GuardDuty, Inspector, IAM Access Analyzer, and Config. It also evaluates against compliance frameworks like CIS AWS Foundations and PCI DSS.

For my portfolio project, I check GuardDuty findings manually. For production, Security Hub provides a unified dashboard and automated remediation workflows.

### Private API Gateway Endpoints

My API Gateway is public. Anyone on the internet can call it (subject to WAF rules). For internal applications, I'd use private API Gateway endpoints accessible only from within the VPC.

For a visitor counter, public is fine. For an internal financial application, the API shouldn't be reachable from the internet at all.

### CloudWatch Alarms with SNS

I have CloudWatch Logs. I don't have alarms. If my Lambda starts failing or my WAF blocks a burst of requests, I'll see it next time I check the console.

For production, every security-relevant event needs an alarm: GuardDuty findings, unusual IAM activity, CloudTrail disabled, WAF rule triggers. Those alarms should page someone.

### Automated Response

GuardDuty can trigger Lambda functions to respond to findings automatically. Detected compromised credentials? Automatically revoke them. Unusual API calls from a new IP? Automatically add it to a WAF block list.

I haven't implemented this because the complexity isn't justified for a portfolio project. For production, automated response reduces mean time to containment from hours to seconds.

## The Infrastructure as Code Advantage

Everything I've described is in Terraform. The security controls aren't bolt-on afterthoughts. They're part of the infrastructure definition, subject to code review, tracked in Git.

When an auditor asks "show me your WAF configuration," I don't screenshot the console. I show them the Terraform file. When they ask "has this changed in the last year?", I show them the Git history.

This is Configuration Management (CM-2, CM-3, CM-6 in NIST 800-171). It's not compliance theater. It's how good engineers naturally work when given the right tools.

## Lessons for Security Engineers

**Design for audit from the start.** Every decision I made has evidence: Terraform configurations, CloudTrail logs, IAM policies. I didn't add logging after the fact. I built it in.

**Understand the tradeoffs.** No VPC was a conscious choice, not an oversight. Document why you made decisions, not just what you decided.

**Layer your controls.** OAI restricts S3 access. WAF filters requests. IAM limits Lambda permissions. DynamoDB encryption protects data at rest. No single control is sufficient. All of them together create defense in depth.

**Know when to skip complexity.** I didn't implement Security Hub or automated response because the complexity wasn't justified for my use case. Knowing when NOT to add security controls is as important as knowing how to implement them.

**Use infrastructure as code.** Manual configurations drift. Terraform configurations are authoritative. For compliance-sensitive environments, IaC isn't optional.

## The Bigger Picture

This Cloud Resume Challenge project cost me about $15-20 per month to run with all security controls enabled. The architecture would scale to handle significant traffic without modification.

More importantly, it demonstrates that I think about security at every layer: network (CloudFront, WAF), identity (IAM), data (encryption), detection (GuardDuty), and audit (CloudTrail). These aren't separate concerns bolted on at the end. They're integrated into the architecture from day one.

That's what employers are looking for. Not someone who can check compliance boxes, but someone who designs secure systems because they understand why the boxes exist.

---

*This project was developed with assistance from Anthropic's Claude AI assistant, which helped with documentation writing and debugging. Claude was used as a development aid while all architecture decisions and implementations were made by me.*
