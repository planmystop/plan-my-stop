---
title: Dependency Policy
version: 1.0.0
status: Active
owner: Plan My Stop
category: Operations
last_updated: 2026-07-03
---

# Dependency Policy

> This document defines how third-party libraries, frameworks, SDKs, APIs, and development tools are evaluated, approved, maintained, upgraded, and removed within Plan My Stop.

---

# Purpose

Every dependency becomes part of the product.

Adding a dependency means

- More code
- More maintenance
- More security risk
- Larger bundle size
- More updates
- More technical debt

Every dependency must justify its existence.

---

# Philosophy

The best dependency is the one you never needed.

Before installing any package ask

> Can this be solved using native JavaScript or TypeScript?

If yes,

Do not install another dependency.

---

# Objectives

The dependency policy should

- Reduce technical debt
- Improve security
- Reduce bundle size
- Improve performance
- Simplify maintenance
- Reduce long-term cost

---

# Dependency Principles

Every dependency should

- Solve a real problem
- Be actively maintained
- Be well documented
- Have a strong community
- Be production proven
- Have minimal dependencies
- Be MIT or similarly permissive licensed

---

# Dependency Evaluation

Before installing a package verify

- Last release date
- GitHub activity
- Open issues
- Security history
- Weekly downloads
- Documentation quality
- License compatibility
- Bundle size

---

# Approval Checklist

Every dependency must answer

✓ Why is this required?

✓ Can native APIs solve this?

✓ Is it actively maintained?

✓ Is it secure?

✓ Is it lightweight?

✓ Does it reduce engineering effort?

✓ Does it fit our architecture?

---

# Allowed Dependency Categories

Framework

- Next.js

Language

- TypeScript

Database

- MongoDB Driver
- Mongoose

Validation

- Zod

Authentication

- Better Auth (or approved replacement)

UI

- Tailwind CSS
- shadcn/ui
- Radix UI

Forms

- React Hook Form

State

- TanStack Query

Testing

- Jest
- Playwright
- React Testing Library

Utilities

Only when justified.

---

# Avoid Dependencies For

Avoid installing libraries only for

- Date formatting
- Small string utilities
- Basic array manipulation
- Simple HTTP requests
- UUID generation (modern browser APIs)

Native APIs should be preferred whenever possible.

---

# AI SDKs

Only approved AI SDKs may be used.

Examples

- OpenAI SDK
- Vercel AI SDK

Avoid experimental AI libraries unless required.

---

# UI Libraries

Approved

- Tailwind CSS
- shadcn/ui
- Radix UI

Avoid

Large UI frameworks that introduce unnecessary complexity or limit customization.

---

# Icon Libraries

Approved

- Lucide Icons

Avoid installing multiple icon libraries.

---

# Charts

Preferred

- Recharts

Future

Evaluate only when dashboard complexity requires additional capabilities.

---

# Maps

Preferred

- MapLibre GL
- OpenStreetMap

Avoid vendor lock-in whenever possible.

---

# Image Handling

Preferred

Next.js Image

Avoid additional image optimization libraries unless required.

---

# HTTP Client

Preferred

Native Fetch API

Avoid Axios unless a clear technical requirement exists.

---

# Date Handling

Preferred

Native JavaScript

If complexity increases

Use

date-fns

Avoid

Moment.js

---

# Form Validation

Preferred

React Hook Form

+

Zod

---

# Package Size

Prefer

Small

↓

Focused

↓

Tree Shakeable

↓

Modular

Avoid large monolithic packages.

---

# Security

Before installation verify

- No known vulnerabilities
- Active maintenance
- Trusted maintainers
- Secure release history

Run

```
npm audit
```

regularly.

---

# Versioning

Prefer

Stable Releases

Avoid

- Alpha
- Beta
- Release Candidates

unless absolutely necessary.

---

# Updating Dependencies

Update

- Security patches immediately
- Minor updates regularly
- Major updates after testing

Never update blindly.

---

# Deprecated Packages

If a dependency becomes

- Deprecated
- Unmaintained
- Insecure

Plan migration immediately.

---

# License Policy

Approved licenses

- MIT
- Apache 2.0
- BSD

Review carefully

- GPL
- AGPL
- Commercial licenses

License compatibility must be verified before adoption.

---

# Dependency Lifecycle

```
Requirement

↓

Evaluation

↓

Approval

↓

Installation

↓

Documentation

↓

Usage

↓

Maintenance

↓

Upgrade

↓

Retirement
```

---

# Documentation

Every approved dependency should document

- Purpose
- Reason for selection
- Alternatives considered
- Risks
- Future replacement options

---

# Monitoring

Monitor

- Security Advisories
- Package Updates
- Deprecated APIs
- Performance Impact
- Bundle Size

---

# Bundle Size

Every dependency should justify its impact.

Large dependencies should be analyzed before adoption.

Bundle size should remain as small as possible.

---

# Dependency Removal

Remove dependencies that are

- Unused
- Deprecated
- Replaced
- No longer maintained

Unused packages increase risk.

---

# Future Review

Review all dependencies every

6 Months

Verify

- Security
- Maintenance
- Alternatives
- Performance

---

# MVP Philosophy

As a solo founder

Choose

Reliable

↓

Simple

↓

Low Maintenance

↓

Long-Term Stable

Avoid introducing technology simply because it is popular.

---

# Best Practices

Always

- Prefer native APIs
- Install only what is necessary
- Keep packages updated
- Monitor vulnerabilities
- Document dependency decisions

Never

- Install packages without evaluation
- Ignore security warnings
- Keep unused packages
- Use abandoned libraries
- Introduce unnecessary complexity

---

# Related Documents

- ENGINEERING_STANDARDS.md
- TECH_STACK.md
- SECURITY_ARCHITECTURE.md
- CI_CD.md

---

# Revision History

| Version | Date | Description |
|----------|------------|---------------------------|
| 1.0.0 | 2026-07-03 | Initial Dependency Policy |