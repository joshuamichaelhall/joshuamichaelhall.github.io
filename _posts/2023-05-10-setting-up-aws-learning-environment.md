---
layout: post
title: "Setting Up a Secure AWS Learning Environment for DevOps Practice"
date: 2023-05-10 10:00:00 -0500
categories: infrastructure
tags: aws terraform security best-practices
---

# Setting Up a Secure AWS Learning Environment for DevOps Practice

When starting a DevOps learning journey, having the right environment to practice is crucial. This post details how I've set up my AWS learning environment with security and financial services best practices in mind from the beginning. By following a "defense in depth" approach even for learning projects, I'm building security habits that will be essential for production environments.

## Starting with Security in Mind

Many tutorials suggest setting up AWS environments with admin access and default configurations for simplicity. However, I've intentionally taken a different approach, focusing on:

1. **Least privilege principle**: Using minimal permissions for each service
2. **Multi-account structure**: Separating concerns and environments
3. **Cost controls**: Setting up budgets and alerts
4. **IAM best practices**: Using roles and groups properly
5. **Audit logging**: Enabling relevant tracking from the start

This approach aligns with financial services requirements and builds good habits from day one.

## Multi-Account Structure for Learning

I've set up my AWS environment with a simplified version of a production multi-account strategy:

```
Root Account
├── Organization Management Account (limited to org management only)
├── Security & Audit Account
├── DevOps Learning Account
└── Sandbox Account (for experimentation)
```

This allows me to:
- Practice cross-account access patterns
- Implement proper security controls
- Understand isolation boundaries

## Setting Up the Security Foundation

The following components form the security foundation for my learning environment:

### 1. IAM Configuration

I've implemented:
- A dedicated IAM admin user (not root) with MFA
- Custom policies following least privilege
- IAM roles for cross-account access
- IAM groups for organizing users

### 2. CloudTrail and Logging

Essential audit capabilities include:
- Organization-wide CloudTrail logs
- Log consolidation in the Security account
- Monitoring for specific API events
- Automated alerting for security-relevant actions

### 3. VPC Design

My base network includes:
- Public and private subnets
- Proper network ACLs and security groups
- VPC Flow Logs for network monitoring
- Transit Gateway for cross-account connectivity

### 4. Automated Cost Controls

To prevent unexpected costs:
- AWS Budgets with notification thresholds
- Service quotas and limits
- Auto-shutdown for non-production resources
- Cost allocation tags

## Infrastructure as Code Implementation

All of the above is implemented using Terraform, organized as follows:

```
terraform/
├── modules/
│   ├── security/
│   │   ├── iam.tf
│   │   ├── logging.tf
│   │   └── guardduty.tf
│   ├── networking/
│   │   ├── vpc.tf
│   │   ├── subnets.tf
│   │   └── security_groups.tf
│   └── cost_management/
│       ├── budgets.tf
│       └── alerts.tf
├── environments/
│   ├── security/
│   ├── devops-learning/
│   └── sandbox/
└── shared/
    └── organization.tf
```

This structure allows me to:
- Reuse common modules across accounts
- Test changes in isolation
- Practice Terraform organization patterns

## Compliance Considerations

Even for a learning environment, I've incorporated basic compliance controls relevant to financial services:

- Resource tagging for classification
- Encryption for data at rest and in transit
- Boundary controls for network traffic
- Regular security scanning using AWS Config Rules
- Documentation of security controls for reference

## Automating Environment Setup and Teardown

To manage costs and facilitate experimentation, I've created automation to:

1. Spin up isolated environments for specific learning tasks
2. Automatically tear down resources after a defined period
3. Preserve state and logs for reference
4. Reset to a clean baseline when needed

This allows me to freely experiment without maintaining costly infrastructure when not in use.

## Next Steps in My Learning Journey

With this foundation in place, I'm now focusing on building the following on top of this environment:

1. CI/CD pipelines for infrastructure changes
2. Containerization with ECS and EKS
3. Monitoring and observability implementation
4. Automated compliance verification

## Resources and Code

The Terraform code for this environment setup is available in my GitHub repository: [AWS Learning Environment](https://github.com/JoshuaMichaelHall/aws-learning-env).

This is a living repository that I'll continue to update as I refine my approach and add more components to my learning environment.

---

This environment strikes a balance between production-like security practices and learning flexibility. By incorporating financial services security patterns from the beginning, I'm building muscle memory for the practices I'll need in professional DevOps roles.

*This post is part of my ongoing series documenting my DevOps career transition journey. Follow along with my progress on my [learning roadmap](/roadmap).*