---
layout: post
title: "What Running an MSP Taught Me About Security That Certifications Don't Cover"
date: 2026-01-26
categories: security career
tags: msp security-operations leadership lessons-learned compliance
excerpt: "I ran a managed service provider for three years with zero security breaches. None of that came from certifications. It came from 2am phone calls, inherited disasters, and learning to say no."
published: false
---

I ran a managed service provider for three years. I served 30+ businesses across healthcare, legal, and professional services. I maintained zero security breaches while preventing an estimated $300K in ransomware damages.

None of that came from certifications. It came from 2am phone calls, inherited disasters, and learning to say no.

## The Gap Between Certification Knowledge and Operational Reality

Security+ taught me the CIA triad. CMMC training taught me the 110 controls in NIST 800-171. AWS certifications taught me IAM policies and encryption options.

None of them taught me how to tell a client that their "computer guy nephew" had created a flat network with the admin password written on a sticky note attached to the server. None of them taught me how to handle a business owner who wanted to skip backups to save $50 per month. None of them taught me how to fire a client who refused to patch their systems.

Operational security isn't about knowing the controls. It's about implementing them when people don't want to cooperate, when budgets are tight, and when the politically easy choice is also the insecure one.

## Lesson 1: Security Is a People Problem Wearing a Technical Disguise

My worst inherited network had default passwords on everything. The firewall was set to "allow all." The backup "system" was an external hard drive that hadn't been plugged in for six months.

The previous IT provider knew this was wrong. They had the certifications. But the client pushed back on every security recommendation, and the provider didn't want to lose the account.

When I took over, I had a choice: accept the risk or have an uncomfortable conversation. I chose the conversation. I explained, in business terms, what a ransomware attack would cost. I showed them news articles about similar businesses that had closed after breaches. I presented security not as an IT expense but as business continuity insurance.

Some clients listened. Some didn't. The ones who didn't hear from me that I couldn't continue providing service. That hurt in the short term, but it protected my reputation and my other clients in the long term.

**What this taught me:** Technical controls are worthless without stakeholder buy-in. The skill isn't knowing what to implement. It's knowing how to explain why it matters to someone who doesn't speak security.

## Lesson 2: Incident Response Is 90% Preparation, 10% Execution

I had a client hit with ransomware on a Tuesday morning. Cryptolocker variant. Every shared drive encrypted.

We detected it within 30 minutes because we had monitoring in place. We isolated the infected workstation within an hour because we had network segmentation and knew which VLAN it was on. We restored from backup within four hours because we had tested our recovery procedures the previous quarter.

The incident that could have destroyed the business became a four-hour inconvenience.

Here's what made that possible:

- **Tested backups:** We didn't just run backups. We tested restores quarterly. I knew exactly how long recovery would take because we'd practiced.
- **Network segmentation:** The infected workstation was on a user VLAN. The server VLAN was isolated. The malware couldn't spread laterally.
- **Documented procedures:** I wasn't figuring out what to do during a crisis. I was following a playbook we'd written months earlier.
- **Communication templates:** The client knew what was happening within an hour because I had a pre-written incident notification template. I didn't waste time composing emails while systems burned.

**What this taught me:** The best incident response happens before the incident. Every hour spent on preparation saves ten hours during a crisis.

## Lesson 3: Compliance Frameworks Validate Good Engineering

I didn't learn about NIST 800-171 until I started studying for CMMC certifications. But when I read the control families, I recognized everything. Configuration Management? That's why I version-controlled my firewall rules. Audit and Accountability? That's why I shipped logs to a separate system. Incident Response? That's the playbook I wrote after the cryptolocker incident.

The framework wasn't teaching me new concepts. It was giving me vocabulary for concepts I'd learned through operational necessity.

This is the difference between compliance theater and actual security. A company that builds secure systems will find compliance straightforward. A company that treats compliance as a checklist will never actually be secure.

**What this taught me:** Good security practices are universal. The framework doesn't matter. What matters is whether you're doing the work.

## Lesson 4: The Hardest Skill Is Saying No

The most dangerous phrase in IT services is "the client wants." The client wants to skip the firewall upgrade. The client wants to use the same password for everything. The client wants to give the intern admin access "just for today."

Every one of those requests is a future breach. And the MSP that says yes to everything is the MSP that eventually presides over a catastrophic incident.

I lost clients because I said no. I told a legal firm they couldn't use unsecured email for client data. They found another provider who would let them. Six months later, they were in the news for a data breach.

I told a healthcare practice they needed to encrypt their laptops. They said it was too expensive. They found another provider. I don't know what happened to them, but I know HIPAA enforcement is not gentle.

The short-term cost of saying no is real. The long-term cost of saying yes is worse.

**What this taught me:** Professional integrity isn't optional. Your reputation follows you. The clients you lose for being too strict will be replaced by clients who value security.

## Lesson 5: Documentation Is Your Defense

I closed my MSP in 2023. The last thing I did was spend weeks documenting every client environment and personally transitioning them to a trusted successor.

That documentation existed not because I knew I'd be closing. It existed because I'd learned that you can't manage what you can't see. Every firewall rule was documented with a reason. Every user account had a creation date and a purpose. Every exception to policy had a business justification in writing.

When I handed over those environments, the receiving MSP could understand what they were inheriting. More importantly, if something had gone wrong during the transition, I could prove what the state was when I left.

**What this taught me:** Documentation isn't overhead. It's evidence. In security, the question isn't just "what happened?" It's "can you prove what happened?"

## Lesson 6: Scale Requires Systems, Not Hours

I worked 70+ hours a week at my peak. That's not a brag. That's a failure mode.

I attracted clients with complex environments because I could handle things other MSPs couldn't. Linux servers, Mac workstations, custom integrations, advanced networking. I was solving hard problems, but I was solving them personally.

That doesn't scale. You can't hire at MSP wages for senior-level expertise. You can't train junior technicians to handle problems that require 15 years of experience. You eventually hit a wall where the business demands more than one person can deliver.

I closed the MSP not because of lack of demand, but because the business model was unsustainable at my level of technical complexity.

**What this taught me:** Being the best engineer isn't the same as running a viable business. Systems and processes scale. Individual heroics don't.

## Lesson 7: Exit with Integrity

When I decided to close, I had options. I could have sold the client list and walked away. I could have let contracts lapse and let clients figure it out. I could have cut corners to maximize my exit value.

Instead, I worked without billing to ensure every client transitioned safely. I paid off all business debts. I dissolved the LLC properly with creditor notifications. I left with zero collections, zero judgments, and zero angry former clients.

That decision cost me money in the short term. It preserved my reputation permanently. Every reference from that period is positive. Every former client would take my call.

**What this taught me:** How you end things matters as much as how you start them. Integrity compounds.

## What This Means for Enterprise Security

Running an MSP was a masterclass in applied security. Not theoretical controls. Not checkbox compliance. Actual security that protected real businesses from real threats.

The skills that mattered weren't technical. I learned those from certifications and experience. The skills that mattered were:

- **Communication:** Explaining security to non-technical stakeholders in terms they care about
- **Prioritization:** Knowing which risks to address first when everything is on fire
- **Negotiation:** Getting clients to accept security recommendations they don't want
- **Documentation:** Creating evidence that survives personnel changes and audits
- **Integrity:** Saying no when yes would be easier but wrong

These are the skills that separate security engineers from security administrators. They're the skills that determine whether controls are implemented or ignored. They're the skills that certifications don't test.

## The Bottom Line

I'm pursuing enterprise security roles because I want to apply these lessons at scale. The problems are the same. The stakeholders are larger. The stakes are higher.

When I walk into an interview, I don't just bring certifications. I bring three years of keeping 30+ businesses secure despite tight budgets, resistant users, and constant pressure to cut corners.

I bring the experience of a real ransomware incident handled in four hours because we'd prepared. I bring the scars from inherited disasters created by providers who said yes when they should have said no. I bring the integrity of an exit that prioritized clients over profit.

That's what running an MSP taught me about security that certifications don't cover.

---

*This article was developed with assistance from Anthropic's Claude AI assistant, which helped with structure and editing. The experiences and lessons described are from my direct operational experience running an MSP from 2020-2023.*
