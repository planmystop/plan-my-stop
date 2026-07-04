

Version: 1.0

Status: Draft

Location:
docs/04-architecture/DATABASE_ARCHITECTURE.md

---

# Database Architecture

## Overview

Plan My Stop stores

millions of

users,

journeys,

locations,

recommendations,

AI conversations,

expenses,

memories,

and analytics.

The database must support

Fast Reads

↓

Fast Writes

↓

Offline Synchronization

↓

AI Context Retrieval

↓

Analytics

↓

Scalability

↓

Data Privacy

↓

Future Expansion

The database

is designed using

Domain Driven Design.

Each business domain

owns

its own data.

---

# Database Principles

Every table

belongs to

one domain.

No table

belongs

to multiple services.

Each service

owns

its own schema.

Services communicate

through APIs,

never

direct database queries.

---

# Database Technology

Primary Database

PostgreSQL

Reason

Reliable

↓

ACID

↓

JSON Support

↓

GIS Extensions

↓

Full Text Search

↓

Scalable

↓

Open Source

---

# Additional Storage

Redis

Purpose

Caching

↓

Sessions

↓

Temporary Data

↓

Rate Limiting

↓

AI Context Cache

---

Object Storage

Purpose

Images

↓

Videos

↓

Receipts

↓

Travel Documents

↓

Generated Reports

↓

AI Files

↓

Profile Photos

↓

Journal Attachments

---

Vector Database

Purpose

AI Memory

↓

Embeddings

↓

Semantic Search

↓

Recommendation Engine

↓

Knowledge Retrieval

↓

Travel Context

---

Search Index

Purpose

Hotels

↓

Restaurants

↓

Journeys

↓

Photos

↓

Journal

↓

Travel Guides

↓

Community

↓

Places

↓

Events

---

# Database Domains

Authentication

↓

Users

↓

Trips

↓

Maps

↓

Hotels

↓

Restaurants

↓

Expenses

↓

Community

↓

AI

↓

Enterprise

↓

Analytics

↓

Notifications

↓

Payments

↓

Media

Each domain

has

its own schema.

---

# Authentication Schema

Tables

users

↓

roles

↓

permissions

↓

sessions

↓

refresh_tokens

↓

oauth_accounts

↓

devices

↓

passkeys

↓

audit_logs

---

# User Schema

Tables

profiles

↓

preferences

↓

travel_styles

↓

languages

↓

currencies

↓

emergency_contacts

↓

favorite_places

↓

saved_searches

↓

privacy_settings

↓

notification_settings

---

# Journey Schema

Tables

journeys

↓

journey_days

↓

journey_stops

↓

itineraries

↓

activities

↓

travel_documents

↓

checklists

↓

packing_lists

↓

journey_notes

↓

trip_statistics

↓

journey_versions

---

# Hotel Schema

Tables

hotels

↓

hotel_reviews

↓

hotel_prices

↓

hotel_bookmarks

↓

hotel_images

↓

hotel_ai_scores

↓

hotel_comparisons

↓

hotel_availability

---

# Restaurant Schema

Tables

restaurants

↓

restaurant_reviews

↓

restaurant_images

↓

restaurant_ai_scores

↓

restaurant_bookmarks

↓

restaurant_menus

↓

restaurant_specialties

↓

food_preferences

---

# Maps Schema

Tables

saved_locations

↓

routes

↓

route_history

↓

navigation_sessions

↓

fuel_stations

↓

charging_stations

↓

parking_locations

↓

traffic_snapshots

↓

weather_snapshots

---

# Budget Schema

Tables

budgets

↓

expenses

↓

expense_categories

↓

currencies

↓

exchange_rates

↓

receipts

↓

expense_splits

↓

financial_reports

↓

travel_wallet

---

# AI Schema

Tables

ai_memory

↓

ai_sessions

↓

ai_messages

↓

recommendations

↓

decision_logs

↓

feedback

↓

context_snapshots

↓

prompt_templates

↓

model_usage

↓

embeddings

---

# Community Schema

Tables

groups

↓

members

↓

shared_trips

↓

shared_photos

↓

recommendations

↓

travel_guides

↓

local_experts

↓

comments

↓

votes

↓

community_reports

---

# Media Schema

Tables

photos

↓

videos

↓

documents

↓

travel_books

↓

albums

↓

file_metadata

↓

storage_links

---

# Notification Schema

Tables

notifications

↓

notification_preferences

↓

templates

↓

delivery_logs

↓

scheduled_notifications

↓

push_tokens

↓

email_logs

↓

sms_logs

---

# Enterprise Schema

Tables

organizations

↓

employees

↓

departments

↓

travel_requests

↓

approval_workflows

↓

corporate_expenses

↓

travel_policies

↓

fleet

↓

vendors

↓

enterprise_reports

---

# Analytics Schema

Tables

events

↓

sessions

↓

feature_usage

↓

retention

↓

funnels

↓

crashes

↓

performance_metrics

↓

user_metrics

↓

business_metrics

---

# Payments Schema

Tables

subscriptions

↓

plans

↓

invoices

↓

transactions

↓

refunds

↓

coupons

↓

affiliate_commissions

↓

payment_methods

---

# Relationships

User

↓

owns

↓

Journey

↓

contains

↓

Days

↓

contains

↓

Stops

↓

references

↓

Hotels

↓

Restaurants

↓

Expenses

↓

Photos

↓

Journal

↓

AI Recommendations

Everything

is connected

through IDs.

Never

duplicate data.

---

# Indexing Strategy

Index

User ID

↓

Journey ID

↓

Location

↓

Hotel ID

↓

Restaurant ID

↓

Date

↓

Status

↓

Country

↓

City

↓

AI Session

↓

Recommendation

↓

Created Time

↓

Updated Time

Composite indexes

only

where needed.

---

# Soft Deletes

Never

physically delete

important user data.

Use

deleted_at

timestamps.

This allows

Recovery

↓

Audit

↓

Compliance

↓

Undo

---

# Audit Strategy

Every important table

contains

created_at

↓

updated_at

↓

created_by

↓

updated_by

↓

version

↓

deleted_at

↓

audit_id

History

is valuable.

---

# Offline Synchronization

Every synchronized table

contains

sync_status

↓

device_id

↓

last_synced

↓

version

↓

conflict_status

↓

updated_at

Supports

offline-first

architecture.

---

# AI Optimization

The AI

never scans

the full database.

Instead,

Context Service

builds

temporary

context objects

from

multiple domains.

This improves

performance

and security.

---

# Scaling Strategy

Read Replicas

↓

Partitioning

↓

Caching

↓

Search Index

↓

CDN

↓

Object Storage

↓

Background Jobs

↓

Event Bus

↓

Queue Workers

↓

Microservices

The database

should scale

to tens of millions

of users.

---

# Backup Strategy

Hourly Backups

↓

Daily Snapshots

↓

Weekly Archives

↓

Monthly Archives

↓

Point In Time Recovery

↓

Geo Replication

↓

Disaster Recovery

---

# Security

Encryption At Rest

↓

Encryption In Transit

↓

Role Based Access

↓

Database Secrets

↓

Audit Logs

↓

Backup Encryption

↓

PII Protection

↓

GDPR Ready

↓

Data Retention Policies

---

# Database Summary

The database

is organized

by business domains,

not

by screens.

Every service

owns

its own schema.

Every table

has

a single responsibility.

Artificial Intelligence

consumes

context,

not

raw tables.

The architecture

supports

rapid development,

high performance,

offline capability,

and long-term scalability.

Status

Version 1.0

Ready for API Architecture.