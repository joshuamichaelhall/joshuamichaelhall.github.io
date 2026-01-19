---
layout: post
title: "Building a CMMC-Ready Mindset: What My Home Lab Taught Me About Compliance"
date: 2026-02-09
categories: security compliance
tags: cmmc nist-800-171 compliance home-lab infrastructure-as-code pci-dss
excerpt: "When I sold my MSP after three years with zero security breaches, I didn't realize I'd been practicing CMMC principles the entire time. I just called it 'not getting hacked.'"
published: false
---

When I sold my MSP after three years and 30+ clients with zero security breaches, I didn't realize I'd been practicing CMMC principles the entire time. I just called it "not getting hacked."

Now, after passing my CMMC CCP exam and building an enterprise-grade home lab, I see the direct connection between operational security discipline and formal compliance frameworks. The controls aren't arbitrary bureaucracy. They're the same practices that kept my clients safe, formalized into auditable requirements.

This article bridges practical infrastructure security with compliance framework thinking—whether CMMC/NIST 800-171 for defense, PCI-DSS for financial services, or HIPAA for healthcare. The principles are universal. If you're an engineer wondering why compliance matters, or a compliance professional wondering if engineers actually implement these controls, this is for you.

## The Problem with "Compliance Theater"

Most organizations treat compliance as a checkbox exercise. They document policies nobody follows, implement controls that exist only during audits, and maintain security postures that look good on paper but crumble under real-world pressure.

I've seen this firsthand. As an MSP owner, I inherited networks where the previous provider had "documented" security policies that existed only as Word documents in a SharePoint folder. The actual network had flat VLANs, default passwords on switches, and backup systems that hadn't run successfully in months.

The gap between documented compliance and operational security is where breaches happen.

CMMC exists precisely because DoD discovered that contractors were self-attesting to NIST 800-171 compliance while failing to implement basic controls. The framework doesn't introduce new security concepts. It introduces accountability for actually doing what you claim.

## Infrastructure as Code: The Foundation of Auditable Compliance

Here's what most compliance conversations miss: you can't audit what you can't reproduce.

When I built my home lab infrastructure, I made a deliberate choice to define everything in code. Not because I was preparing for CMMC assessment, but because I'd learned the hard way that undocumented infrastructure creates operational risk.

My pfSense firewall rules, VLAN configurations, Suricata IDS rules, and monitoring stack are all version-controlled. When I make a change, there's a commit message explaining why. When something breaks, I can diff against the last working state. When someone asks "how is this configured?" I can show them the actual configuration, not a diagram that might be outdated.

This is Configuration Management (CM) in NIST 800-171 terms. But I didn't implement it because a compliance framework told me to. I implemented it because I got tired of troubleshooting networks where nobody knew why the firewall had a rule allowing all traffic from a random IP address.

### The Terraform Connection

In my Cloud Resume Challenge project, I used Terraform to define all AWS infrastructure. S3 buckets, CloudFront distributions, Lambda functions, API Gateway configurations, IAM roles, WAF rules, CloudTrail logging, GuardDuty threat detection. Everything in code, everything in Git.

The compliance implications are significant:

**CM-2 (Baseline Configuration)**: My Terraform state file IS the baseline. I can prove what the current configuration should be, compare against actual state, and detect drift automatically.

**CM-3 (Configuration Change Control)**: Every infrastructure change goes through pull request review. The Git history shows who changed what, when, and why. This isn't a separate change management process bolted onto operations. It IS the operations process.

**CM-6 (Configuration Settings)**: Security hardening settings are embedded in the Terraform modules. When I deploy infrastructure, it comes with encryption at rest, TLS 1.2+, restricted security groups, and logging enabled by default. I don't have to remember to enable security. It's the default state.

**AU-12 (Audit Generation)**: CloudTrail logging is in the Terraform configuration. Every deployment automatically includes audit trail capability. I can't accidentally deploy infrastructure without logging.

When a C3PAO assessor asks "show me evidence of configuration management," I don't hand them a policy document and hope they don't dig deeper. I show them the Git repository, the Terraform state, the deployment pipeline, and the actual running infrastructure that matches all of the above.

## Network Segmentation: VLAN Design as Zero Trust Implementation

My home lab runs five VLANs:

| VLAN | Purpose | Access Level |
|------|---------|--------------|
| VLAN 10 (Management) | Infrastructure control | Highest - admin only |
| VLAN 20 (Trusted) | Workstations | High - full outbound |
| VLAN 30 (IoT) | Smart devices | Medium - internet only |
| VLAN 40 (Guest) | Visitor access | Low - isolated |
| VLAN 50 (DMZ) | Public services | Isolated - strict rules |

This isn't network design theory. It's operational reality. My Synology NAS sits on the Trusted VLAN. My Raspberry Pi honeypot sits on the DMZ. My smart thermostat sits on IoT and cannot reach anything except the internet.

### Why This Matters for CUI Protection

In CMMC Level 2 terms, this is SC-7 (Boundary Protection) implemented at home scale.

If I were handling CUI, the architecture would extend naturally:

- **CUI Assets** would live on a dedicated VLAN with the most restrictive firewall rules
- **Security Protection Assets** (SIEM, vulnerability scanners) would sit on the Management VLAN with carefully controlled access
- **Contractor Risk Managed Assets** (cloud services, third-party tools) would be isolated and monitored
- **Out-of-Scope Assets** (personal devices, IoT) would be physically or logically separated

The principle is identical whether you're protecting CUI for a defense contract or protecting client data for an MSP. Segment by trust level. Control traffic flows. Monitor everything.

### Firewall Rules as Access Control Evidence

My pfSense configuration includes explicit rules for inter-VLAN communication:

```
# Management VLAN can reach all VLANs (infrastructure admin)
# Trusted VLAN can reach DMZ services on specific ports (80, 443)
# IoT VLAN has default deny to all local networks, allow to internet
# Guest VLAN has default deny to all local networks, allow to internet
# DMZ has default deny to all local networks, specific allow for services
```

Each rule has a comment explaining its purpose. The firewall logs show which rules are being hit. I can demonstrate that the segmentation actually works, not just that it's documented.

This is AC-4 (Information Flow Enforcement). The audit evidence isn't a network diagram. It's the firewall configuration itself, plus logs showing it's being enforced.

## Monitoring and Logging: Audit Trail by Default

My monitoring stack runs Prometheus, Grafana, Alertmanager, and Loki for log aggregation. Every significant event generates data:

- Firewall blocks get logged
- Authentication attempts get logged
- System resource utilization gets collected
- Network traffic patterns get analyzed

This wasn't built for compliance. It was built because I got tired of trying to troubleshoot problems without data.

### The Compliance Bonus

When I completed my CMMC CCP training, I realized my monitoring stack already addresses multiple AU (Audit and Accountability) controls:

**AU-2 (Audit Events)**: I defined what gets logged based on security relevance, not compliance requirements. Failed logins, configuration changes, network anomalies, service restarts.

**AU-3 (Content of Audit Records)**: My logs include timestamp, source, action, and outcome. Standard syslog format, but comprehensive.

**AU-6 (Audit Review, Analysis, and Reporting)**: Grafana dashboards let me review security events. Alertmanager sends notifications for critical events. I actually look at this data weekly.

**AU-9 (Protection of Audit Information)**: Logs ship to a separate system (Loki on a different VLAN). Attackers who compromise a workstation can't easily delete their tracks.

The insight here: if you're building infrastructure with operational excellence in mind, you're probably implementing compliance controls without realizing it. The frameworks just give you vocabulary to describe what you're already doing.

## Incident Response: From Playbook to Practice

I have an incident response plan. Not because compliance requires it, but because I've responded to real incidents and learned that "figure it out in the moment" doesn't work when you're stressed and sleep-deprived.

My incident response documentation includes:

- Detection procedures (what triggers an alert, who gets notified)
- Containment playbooks (how to isolate a compromised system)
- Recovery checklists (step-by-step restoration from backup)
- Communication templates (what to say to affected parties)

During my MSP years, I used these procedures for real incidents. A client's workstation got cryptolocked. We detected it within 30 minutes because of monitoring. We isolated the machine within an hour. We restored from backup within four hours. The client lost half a day of work, not their entire business.

### IR Controls in NIST 800-171

This maps directly to the Incident Response (IR) family:

**IR-2 (Incident Response Training)**: I trained my MSP staff on these procedures. We ran tabletop exercises quarterly.

**IR-4 (Incident Handling)**: The playbooks define detection, analysis, containment, eradication, and recovery steps.

**IR-6 (Incident Reporting)**: The communication templates ensure we notify the right people at the right time.

**IR-8 (Incident Response Plan)**: The documentation exists, gets reviewed annually, and gets updated based on lessons learned.

Again, this wasn't compliance-driven. It was "I don't want to lose my business because I fumbled an incident" driven. The compliance framework just validates that these are the right things to be doing.

## The CMMC Assessment Mindset

After completing my CCP certification (exam passed, Tier 3 pending), I understand what assessors are actually looking for. It's not just "do you have a policy?" It's:

1. **Is the policy implemented?** Can you show me the actual system configuration that enforces it?
2. **Is it operating effectively?** Can you show me evidence that it's working in practice?
3. **Is it maintained?** Can you show me that it gets reviewed and updated?

For my infrastructure:

- **Implemented**: Terraform configurations, firewall rules, monitoring dashboards
- **Operating**: Logs showing controls in action, alerts firing correctly
- **Maintained**: Git history showing regular updates, review dates in documentation

This is the difference between compliance theater and actual security. The controls exist because they work, not because they check a box.

## Practical Lessons for Engineers

If you're building infrastructure and want to be "compliance-ready" without drowning in paperwork:

### 1. Document as You Build

Don't retrofit documentation after the fact. Write the commit message that explains why. Add the comment that describes the firewall rule's purpose. Create the architecture diagram when the architecture is fresh in your mind.

Future you (and future auditors) will thank present you.

### 2. Version Control Everything

If it's configuration, it belongs in Git. Firewall rules. Monitoring configs. Backup scripts. User access policies.

This isn't about compliance. It's about operational sanity. But it happens to create perfect audit trails.

### 3. Build Logging into the Foundation

Don't add monitoring as an afterthought. Design systems that generate security-relevant logs from day one.

When you're troubleshooting at 2 AM, you'll want the data. When you're responding to an assessor's evidence request, you'll have it.

### 4. Test Your Recovery Procedures

Backups that haven't been tested aren't backups. Incident response plans that haven't been exercised are fiction.

Run the restore. Walk through the playbook. Find the gaps before an actual incident.

### 5. Segment by Trust Level

Flat networks are easy to build and impossible to defend. Take the time to design proper segmentation.

Your IoT devices don't need access to your file server. Your guest WiFi doesn't need access to your management network. Make the implicit trust explicit, then remove it where it shouldn't exist.

## Framework Transferability: CMMC Skills Apply Everywhere

While this article focuses on CMMC and NIST 800-171, the skills transfer directly to other compliance frameworks:

| CMMC/NIST 800-171 | PCI-DSS | HIPAA | SOX |
|-------------------|---------|-------|-----|
| Configuration Management | Requirement 2 (Secure configurations) | Security Management Process | IT General Controls |
| Access Control | Requirement 7 (Restrict access) | Access Controls | Access Controls |
| Audit & Accountability | Requirement 10 (Track access) | Audit Controls | Audit Trail |
| Incident Response | Requirement 12 (IR procedures) | Contingency Plan | Incident Management |

If you understand how to implement and document controls for one framework, you can translate that expertise to any regulated environment. The control families map to each other because they're all solving the same fundamental security problems.

## Conclusion: Compliance as Validation, Not Burden

CMMC, NIST 800-171, PCI-DSS, HIPAA—these frameworks aren't inventing new security requirements. They're formalizing practices that experienced security professionals already follow.

When I look at my home lab infrastructure, I see:

- Configuration management (Infrastructure as Code)
- Access control (VLAN segmentation, firewall rules)
- Audit and accountability (centralized logging, monitoring)
- Incident response (documented playbooks, tested procedures)
- System integrity (IDS/IPS, change detection)

I built all of this because it's how you run secure infrastructure. CMMC just gives me the vocabulary to describe it in terms an assessor understands.

For engineers who think compliance is bureaucratic overhead: look at what you're already doing. You're probably closer than you think. The frameworks aren't asking you to do busywork. They're asking you to prove you're doing what you claim.

For compliance professionals who wonder if controls actually get implemented: find engineers who take pride in their infrastructure. The ones running monitoring dashboards because they want to, not because they have to. Those are the organizations where compliance reflects reality.

The goal isn't to pass an assessment. The goal is to build systems that don't get breached. Compliance is just external validation that you're on the right track.
