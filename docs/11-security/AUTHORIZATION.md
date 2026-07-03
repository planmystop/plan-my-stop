---
title: Authorization
version: 1.0.0
status: Active
owner: Plan My Stop
category: Security
last_updated: 2026-07-03
---

# Authorization

> This document defines the authorization model used throughout Plan My Stop. Authorization determines what an authenticated user is allowed to access or modify.

---

# Purpose

Authentication answers

> Who are you?

Authorization answers

> What are you allowed to do?

Every protected API, page, business feature, and administrative operation must validate authorization before execution.

---

# Objectives

The authorization system should

- Protect user resources
- Protect business resources
- Prevent unauthorized access
- Support scalable permission management
- Support future enterprise features

---

# Authorization Model

Plan My Stop uses

Role-Based Access Control (RBAC)

combined with

Ownership-Based Access Control (OBAC)

This means

- Roles determine general permissions.
- Ownership determines access to specific resources.

---

# Authorization Workflow

```
User Request

↓

Authentication

↓

JWT Validation

↓

Role Validation

↓

Ownership Validation

↓

Permission Check

↓

Allow

or

Deny
```

---

# User Roles

## Guest

Unauthenticated visitor.

Permissions

- Browse destinations
- Search businesses
- View attractions
- View public information

Cannot

- Save trips
- Write reviews
- Access profile

---

## User

Permissions

- Manage Profile
- Create Trips
- Save Favorites
- Write Reviews
- AI Journey Planning
- Premium Upgrade

Cannot

- Manage businesses
- Access admin tools

---

## Premium User

Includes all User permissions plus

- Unlimited AI
- Offline Trips
- Premium Features
- Advanced Recommendations

---

## Business Owner

Permissions

- Manage Business
- Update Listings
- Upload Images
- View Analytics
- Respond to Reviews
- Purchase Promotions

Cannot

- Modify another business

---

## Moderator

Permissions

- Moderate Reviews
- Review Reports
- Hide Inappropriate Content
- Suspend Listings

Cannot

- Change platform configuration

---

## Administrator

Permissions

- Manage Users
- Manage Businesses
- Manage Categories
- View Platform Analytics
- Moderate Platform

---

## Super Administrator

Complete platform access.

Includes

- Infrastructure Settings
- Platform Configuration
- Security Settings
- Role Management

---

# Ownership Rules

Users may only modify resources they own.

Examples

A user may edit

- Their profile
- Their trips
- Their reviews
- Their saved places

A business owner may edit

- Their business
- Their promotions
- Their analytics

Ownership must always be verified.

---

# Resource Authorization

Protected resources include

- Users
- Trips
- Journeys
- Favorites
- Reviews
- Businesses
- Promotions
- Notifications
- Subscriptions

Each request must verify

1. Authentication
2. Role
3. Ownership

---

# Permission Matrix

| Resource | Guest | User | Premium | Business | Moderator | Admin |
|----------|-------|------|----------|----------|------------|--------|
|View Destinations|✅|✅|✅|✅|✅|✅|
|Create Trip|❌|✅|✅|❌|❌|✅|
|AI Planning|❌|Limited|Unlimited|Limited|Limited|Unlimited|
|Write Review|❌|✅|✅|✅|✅|✅|
|Manage Business|❌|❌|❌|✅|❌|✅|
|Moderate Reviews|❌|❌|❌|❌|✅|✅|
|Manage Users|❌|❌|❌|❌|❌|✅|

---

# API Authorization

Every protected API should validate

- Authentication
- User Role
- Resource Ownership
- Subscription (if required)

---

# Page Authorization

Protected pages include

- Dashboard
- My Trips
- Business Portal
- Admin Portal
- Subscription Management

Unauthorized users should be redirected appropriately.

---

# Feature Authorization

Features may depend on

- User Role
- Subscription Plan
- Business Verification
- Feature Flags

Example

```
Premium AI Planner

↓

Authenticated?

↓

Premium User?

↓

Feature Enabled?

↓

Access Granted
```

---

# Business Authorization

Business owners can only access

- Their listings
- Their analytics
- Their subscriptions
- Their promotions

Business isolation is mandatory.

---

# Administrative Authorization

Administrative actions require

- Administrator Role
- Audit Logging
- Permission Validation

Critical operations may require additional confirmation.

---

# Authorization Failures

Unauthorized requests return

```
403 Forbidden
```

Example

```json
{
    "success": false,
    "error": {
        "code": "FORBIDDEN",
        "message": "You do not have permission to perform this action."
    }
}
```

---

# Audit Logging

Authorization events should log

- User ID
- Role
- Resource
- Action
- Timestamp
- Result

---

# Security Best Practices

Always

- Verify ownership
- Verify role
- Deny by default
- Log permission failures
- Apply least privilege

Never

- Trust client roles
- Expose hidden APIs
- Skip authorization checks

---

# Future Enhancements

Future improvements

- Attribute-Based Access Control (ABAC)
- Dynamic Permissions
- Organization Roles
- Team Collaboration
- Resource Sharing
- Temporary Permissions
- Permission Delegation

---

# Related Documents

- SECURITY_ARCHITECTURE.md
- AUTHENTICATION.md
- AUTHENTICATION_ARCHITECTURE.md
- API_GUIDELINES.md

---

# Revision History

| Version | Date | Description |
|----------|------------|--------------------------|
|1.0.0|2026-07-03|Initial Authorization Documentation|