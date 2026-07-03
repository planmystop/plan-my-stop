# COLLECTIONS.md

Version: 1.0.0
Status: Approved
Project: Plan My Stop
Owner: Rupesh

---

# Purpose

This document provides a complete overview of every logical database collection used by Plan My Stop.

It acts as the central navigation document for all database domains.

This document intentionally does not define individual schemas or field-level structures.

Detailed schema definitions belong in dedicated schema documentation.

---

# Database Organization Philosophy

The database is organized around business domains rather than technical modules.

Every collection belongs to exactly one primary business domain.

Each domain owns its own data, lifecycle, security requirements, indexes, and business rules.

This separation improves scalability, maintainability, and long-term evolution.

---

# Database Domains

The database is divided into the following domains.

1. User Domain

2. Profile Domain

3. Journey Domain

4. Location Domain

5. Business Domain

6. AI Domain

7. Premium Domain

8. Notification Domain

9. Analytics Domain

10. Administration Domain

11. System Domain

---

# Domain Relationship Overview

```
System
   │
   ├──────────────┐
   │              │
Users         Businesses
   │              │
Profiles      Reviews
   │              │
Journeys ───── Stops
   │
AI Recommendations
   │
Notifications
   │
Analytics
```

---

# USER DOMAIN

Purpose

Manages identity, authentication, authorization, and user ownership.

Business Owner

Authentication System

Collections

users

userSessions

userDevices

userPreferences

roles

permissions

loginHistory

Responsibilities

Identity

Authentication

Authorization

Device Management

Access Control

Relationships

Users own:

Profiles

Journeys

Reviews

Subscriptions

Notifications

AI History

Security Level

Critical

---

# PROFILE DOMAIN

Purpose

Stores personal profile information.

Collections

profiles

emergencyContacts

savedAddresses

travelPreferences

Responsibilities

Personal Information

Emergency Information

Travel Preferences

Privacy Settings

Security Level

High

---

# JOURNEY DOMAIN

Purpose

Core business domain of the platform.

Collections

journeys

journeyStops

journeyRoutes

tripTemplates

savedTrips

sharedTrips

travelCompanions

offlineTrips

Responsibilities

Journey Planning

Route Storage

Trip Sharing

Offline Availability

Journey History

Business Importance

Highest

---

# LOCATION DOMAIN

Purpose

Stores geographical information.

Collections

countries

states

cities

places

pointsOfInterest

fuelStations

restaurants

hotels

hospitals

touristAttractions

weatherCache

trafficCache

mapCache

Responsibilities

Location Search

Nearby Discovery

Travel Intelligence

Map Data

Weather Data

Future

Geospatial indexing

---

# BUSINESS DOMAIN

Purpose

Business marketplace ecosystem.

Collections

businesses

businessCategories

businessBranches

businessOwners

businessClaims

businessVerification

businessReviews

businessImages

offers

coupons

Responsibilities

Business Discovery

Business Verification

Offers

Promotions

Marketplace

Security

Very High

---

# AI DOMAIN

Purpose

Artificial Intelligence services.

Collections

aiRecommendations

aiHistory

promptLogs

personalization

travelInsights

aiFeedback

Responsibilities

Journey Intelligence

Personalization

Travel Assistant

Recommendation Engine

Rule

AI data never replaces user data.

---

# PREMIUM DOMAIN

Purpose

Subscription management.

Collections

premiumPlans

subscriptions

payments

transactions

billingHistory

refunds

Responsibilities

Premium Access

Billing

Payments

Invoices

Financial Records

Security Level

Highest

---

# NOTIFICATION DOMAIN

Purpose

Communication platform.

Collections

notifications

notificationPreferences

pushTokens

emailQueue

smsQueue

announcementHistory

Responsibilities

Push Notifications

Email

SMS

Journey Alerts

Promotional Messages

---

# ANALYTICS DOMAIN

Purpose

Business intelligence.

Collections

analyticsEvents

featureUsage

searchAnalytics

journeyAnalytics

businessAnalytics

performanceMetrics

crashReports

Responsibilities

User Analytics

Business Analytics

Performance Monitoring

Decision Support

Rule

Analytics should never contain unnecessary personal information.

---

# ADMINISTRATION DOMAIN

Purpose

Administrative operations.

Collections

adminUsers

auditLogs

reportedContent

supportTickets

featureFlags

moderationQueue

Responsibilities

Administration

Moderation

Auditing

Support

Platform Control

Security

Highest

---

# SYSTEM DOMAIN

Purpose

Application configuration.

Collections

appSettings

appVersions

countriesMaster

languages

currencies

systemLogs

maintenanceWindows

Responsibilities

Configuration

Reference Data

Application Metadata

Version Control

---

# Cross-Domain Relationships

```
User
│
├── Profile
│
├── Journeys
│     │
│     ├── Stops
│     ├── Routes
│     └── AI Recommendations
│
├── Reviews
│
├── Notifications
│
├── Premium Subscription
│
└── Analytics
```

---

# Collection Naming Standards

Collection names must:

Use lowercase.

Use plural nouns.

Be descriptive.

Avoid abbreviations.

Examples

users

journeys

businesses

notifications

subscriptions

Incorrect

User

JourneyData

tbl_users

user_tbl

---

# Collection Ownership

Every collection must have:

Business owner

Technical owner

Documentation

Schema definition

Index strategy

Security policy

Lifecycle policy

No anonymous collections are permitted.

---

# Collection Lifecycle

Every collection follows:

Design

↓

Documentation

↓

Review

↓

Implementation

↓

Testing

↓

Production

↓

Maintenance

↓

Version Update

---

# Security Classification

Level 1

Public

Example

Countries

Cities

---

Level 2

Internal

Reference data

Configuration

---

Level 3

Sensitive

User Profiles

Travel Preferences

Reviews

---

Level 4

Critical

Authentication

Payments

Subscriptions

Administrative Data

---

# Future Expansion

Future domains may include:

Advertising

Events

Community

Social Networking

Enterprise

Fleet Management

Logistics

Travel Insurance

Public Transportation

Loyalty Programs

These should become separate domains rather than expanding existing ones.

---

# Related Documentation

DATABASE_ARCHITECTURE.md

DATABASE_STANDARDS.md

INDEXING_STRATEGY.md

DATA_RETENTION.md

BACKUP_STRATEGY.md

USER_SCHEMA.md

JOURNEY_SCHEMA.md

BUSINESS_SCHEMA.md

AI_SCHEMA.md

---

# Final Statement

The database architecture of Plan My Stop is organized around business domains instead of technical convenience.

Each collection exists to fulfill a clearly defined business responsibility.

Maintaining strict ownership, documentation, naming standards, and security boundaries ensures that the database remains scalable, understandable, and maintainable as the platform evolves into a global Journey Intelligence Platform.

---

END OF DOCUMENT