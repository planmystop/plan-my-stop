---
title: Secrets Management
version: 1.0.0
status: Active
owner: Plan My Stop
category: Security
last_updated: 2026-07-03
---

# Secrets Management

> This document defines how sensitive credentials, API keys, tokens, certificates, and other confidential configuration values are securely managed throughout the Plan My Stop platform.

---

# Purpose

Secrets Management protects confidential information from unauthorized access.

Secrets should never appear in

- Source Code
- Git Repository
- Logs
- Error Messages
- Client Applications

Every secret should have a controlled lifecycle.

---

# Objectives

The secrets management system should

- Protect confidential information
- Prevent accidental exposure
- Support secure deployments
- Simplify secret rotation
- Support multiple environments
- Minimize operational risk

---

# What Is A Secret

A secret is any information that grants access to a protected resource.

Examples

- Database Password
- JWT Secret
- API Keys
- OAuth Client Secret
- Encryption Keys
- SMTP Credentials
- Payment Gateway Keys
- AI Provider Keys
- Cloud Credentials

---

# Secret Classification

## Critical

Examples

- JWT Secret
- Encryption Keys
- Database Credentials

Exposure could compromise the platform.

---

## High

Examples

- OpenAI API Key
- Google Maps API Key
- Payment Gateway Secret

Exposure could generate financial loss.

---

## Medium

Examples

- SMTP Credentials
- Analytics Keys
- Monitoring Tokens

---

## Low

Examples

- Public Configuration
- Public API URLs

These are configuration values rather than secrets.

---

# Secret Storage

Secrets should be stored only in

- Vercel Environment Variables
- GitHub Secrets
- Cloud Provider Secret Manager (Future)

Never store secrets inside

- Git Repository
- Source Code
- JSON Files
- Markdown Files
- Documentation

---

# Environment Separation

Every environment has independent secrets.

Development

```
.env.local
```

Staging

Environment Variables

Production

Environment Variables

Secrets must never be shared across environments.

---

# Example Environment Variables

```env
MONGODB_URI=

OPENAI_API_KEY=

JWT_SECRET=

NEXTAUTH_SECRET=

RESEND_API_KEY=

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=

CLOUDFLARE_R2_ACCESS_KEY=

CLOUDFLARE_R2_SECRET_KEY=
```

Actual values should never be committed.

---

# Access Policy

Only the application should access secrets.

Developers should access only the secrets necessary for their work.

Principle

Least Privilege

---

# Secret Rotation

Secrets should be rotated

- Immediately after compromise
- Periodically
- After employee departure
- After infrastructure migration

Rotation should not require code changes.

---

# Secret Lifecycle

```
Generate Secret

↓

Store Securely

↓

Application Uses Secret

↓

Rotate Secret

↓

Revoke Old Secret

↓

Audit
```

---

# Git Rules

Never commit

```
.env

.env.local

.env.production

.env.staging
```

Include

```
.env.example
```

inside the repository.

The example file should contain placeholders only.

---

# Logging Rules

Logs must never include

- Passwords
- JWT Tokens
- API Keys
- Database Credentials
- OAuth Secrets
- Payment Tokens

Sensitive values should be masked automatically.

Example

```
OPENAI_API_KEY

sk-****************************
```

---

# Frontend Rules

Never expose

- JWT Secret
- Database URI
- OpenAI Secret
- SMTP Password
- Payment Secret

Only public configuration may be exposed.

Example

```
NEXT_PUBLIC_APP_URL
```

---

# Third-Party Services

Secrets may exist for

Authentication

- Google
- Apple

AI

- OpenAI

Email

- Resend

Maps

- Google Maps (Future)

Payments

- Stripe
- Razorpay

Storage

- Cloudflare R2

Monitoring

- Better Stack

---

# Secret Validation

Application startup should verify

- Required secrets exist
- Secret format is valid
- Missing secrets prevent deployment

---

# Emergency Response

If a secret is exposed

1. Revoke immediately.
2. Generate a new secret.
3. Update deployment.
4. Redeploy application.
5. Review audit logs.
6. Investigate exposure.

---

# Audit Requirements

Maintain records of

- Secret Creation
- Secret Rotation
- Secret Access
- Secret Revocation
- Security Incidents

---

# Local Development

Developers should

- Use `.env.local`
- Never share secrets through chat
- Never email secrets
- Never upload secrets to AI tools

Use placeholder values whenever possible.

---

# CI/CD

GitHub Actions should access secrets only through

GitHub Secrets

Never hardcode secrets inside workflow files.

---

# Security Checklist

Before deployment verify

- No secrets committed
- Environment variables configured
- GitHub Secrets configured
- Production secrets validated
- Logs sanitized
- Secret rotation documented

---

# Future Enhancements

Future improvements

- HashiCorp Vault
- AWS Secrets Manager
- Azure Key Vault
- Google Secret Manager
- Automatic Secret Rotation
- Secret Expiration Monitoring

---

# Best Practices

Always

- Store secrets securely
- Rotate secrets
- Mask sensitive values
- Separate environments
- Validate configuration

Never

- Commit secrets
- Log secrets
- Share secrets publicly
- Embed secrets in frontend code

---

# Related Documents

- SECURITY_ARCHITECTURE.md
- AUTHENTICATION.md
- DEPLOYMENT_ARCHITECTURE.md
- CI_CD.md

---

# Revision History

| Version | Date | Description |
|----------|------------|-------------------------|
|1.0.0|2026-07-03|Initial Secrets Management Documentation|