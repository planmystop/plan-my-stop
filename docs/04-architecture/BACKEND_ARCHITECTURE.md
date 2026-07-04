

Version: 1.0

Status: Draft

Location:
docs/04-architecture/BACKEND_ARCHITECTURE.md

---

# Backend Architecture

## Overview

The backend powers

every interaction

inside Plan My Stop.

It manages

Users

↓

Journeys

↓

Maps

↓

Hotels

↓

Restaurants

↓

Artificial Intelligence

↓

Expenses

↓

Travel Memories

↓

Notifications

↓

Community

↓

Enterprise

↓

Payments

↓

Analytics

↓

Search

↓

Media

↓

Security

The backend is designed as

a Modular Monolith

with

clear module boundaries.

This architecture

supports

rapid development,

low operational cost,

and future migration

to microservices.

---

# Why Modular Monolith?

Advantages

Single deployment

↓

Simpler debugging

↓

Lower infrastructure cost

↓

Easy local development

↓

Shared transactions

↓

Fast feature delivery

↓

No network overhead

↓

Future migration path

Microservices

are introduced

only when

required.

---

# Architectural Principles

Business Domains

↓

Loose Coupling

↓

High Cohesion

↓

Dependency Injection

↓

Event Driven

↓

API First

↓

Domain Driven Design

↓

SOLID Principles

↓

Clean Architecture

↓

Testability

---

# High Level Structure

Backend

│

├── API Layer

├── Application Layer

├── Domain Layer

├── Infrastructure Layer

├── Shared Layer

└── Integrations

---

# API Layer

Responsibilities

REST Controllers

↓

Authentication

↓

Validation

↓

Serialization

↓

Authorization

↓

Rate Limiting

↓

Error Handling

↓

OpenAPI

↓

Request Logging

The API Layer

contains

no business logic.

---

# Application Layer

Coordinates

business use cases.

Examples

Create Journey

↓

Optimize Trip

↓

Select Hotel

↓

Calculate Budget

↓

Generate Story

↓

Create Expense

↓

Book Restaurant

↓

Notify User

Application Layer

calls

Domain Services.

---

# Domain Layer

Contains

business rules.

Examples

Journey Rules

↓

Budget Rules

↓

AI Rules

↓

Hotel Matching

↓

Restaurant Ranking

↓

Travel Policies

↓

Community Rules

↓

Premium Rules

This is

the heart

of the application.

---

# Infrastructure Layer

Contains

Database

↓

Redis

↓

Email

↓

Maps

↓

Weather

↓

Payments

↓

AI Providers

↓

Storage

↓

Notifications

↓

Queues

↓

Search

↓

Analytics

Infrastructure

never contains

business rules.

---

# Shared Layer

Contains

Utilities

↓

Configuration

↓

Logging

↓

Constants

↓

Exceptions

↓

Events

↓

Security

↓

Common Types

↓

Feature Flags

↓

Date Utilities

↓

Localization

Everything reusable

belongs here.

---

# Business Modules

Authentication

↓

Users

↓

Journeys

↓

Hotels

↓

Restaurants

↓

Maps

↓

AI

↓

Budget

↓

Community

↓

Premium

↓

Notifications

↓

Media

↓

Analytics

↓

Enterprise

↓

Payments

↓

Search

↓

Settings

Every module

owns

its logic.

---

# Module Structure

journey/

controllers/

application/

domain/

infrastructure/

repositories/

entities/

dto/

events/

validators/

tests/

README.md

Every module

uses

the same structure.

---

# Domain Model

Each domain

contains

Entities

↓

Value Objects

↓

Services

↓

Factories

↓

Repositories

↓

Policies

↓

Events

↓

Specifications

↓

Aggregates

The domain

contains

business knowledge.

---

# Repository Pattern

Repositories

abstract

database access.

Application Layer

never

knows

SQL.

Example

JourneyRepository

HotelRepository

RestaurantRepository

BudgetRepository

AIRepository

---

# Event Driven Backend

Modules communicate

through

Domain Events.

Examples

UserRegistered

↓

JourneyCreated

↓

JourneyStarted

↓

HotelSelected

↓

RestaurantVisited

↓

ExpenseAdded

↓

RecommendationAccepted

↓

TripCompleted

↓

PhotoUploaded

↓

PremiumPurchased

Events

reduce coupling.

---

# Background Jobs

Long-running work

runs

as background jobs.

Examples

AI Story Generation

↓

Travel Reports

↓

Image Processing

↓

Email Delivery

↓

Push Notifications

↓

Search Indexing

↓

Analytics

↓

Embeddings

↓

Daily Brief

↓

Data Cleanup

Queues

prevent

slow APIs.

---

# Scheduler

Runs

Periodic Tasks

Examples

Daily AI Brief

↓

Trip Reminders

↓

Weather Updates

↓

Price Monitoring

↓

Subscription Renewal

↓

Cleanup Jobs

↓

Analytics Aggregation

↓

Cache Refresh

↓

Travel Insights

---

# Search Service

Indexes

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

AI Knowledge

↓

Places

↓

Events

Search updates

automatically

through events.

---

# Media Service

Stores

Photos

↓

Videos

↓

Travel Documents

↓

Receipts

↓

AI Reports

↓

Travel Books

↓

Profile Images

↓

Exports

Object Storage

is mandatory.

---

# AI Integration

Backend

never

calls LLMs

directly.

Instead

Journey Module

↓

AI Gateway

↓

Context Builder

↓

Prompt Builder

↓

Provider

↓

Validator

↓

Result

↓

Journey Module

AI remains

isolated.

---

# Notification Service

Supports

Push

↓

Email

↓

SMS

↓

In-App

↓

WhatsApp (Future)

↓

Enterprise

↓

Emergency

↓

Marketing

↓

Transactional

Every notification

passes

through one service.

---

# Caching Strategy

Redis

caches

Popular Hotels

↓

Popular Restaurants

↓

Search

↓

Weather

↓

AI Context

↓

Journey Summary

↓

User Session

↓

Configuration

↓

Exchange Rates

Cache

never replaces

the database.

---

# File Processing

Uploads

↓

Virus Scan

↓

Metadata

↓

Storage

↓

Thumbnail

↓

Compression

↓

AI Analysis

↓

CDN

↓

Database Record

Files

are immutable.

---

# Security

Authentication

↓

Authorization

↓

JWT

↓

RBAC

↓

Encryption

↓

Secrets

↓

Rate Limiting

↓

Audit Logs

↓

API Keys

↓

Input Validation

↓

Output Encoding

Security

is implemented

everywhere.

---

# Logging

Structured Logs

↓

Request Logs

↓

Error Logs

↓

AI Logs

↓

Business Events

↓

Audit Logs

↓

Performance

↓

Warnings

↓

Metrics

Every request

receives

Correlation ID.

---

# Error Handling

Centralized

Error Middleware

Validation Errors

↓

Business Errors

↓

Authentication Errors

↓

Infrastructure Errors

↓

AI Errors

↓

Unknown Errors

Every error

returns

standard responses.

---

# Monitoring

Monitor

Latency

↓

CPU

↓

Memory

↓

Database

↓

Queues

↓

Cache

↓

AI Usage

↓

Payments

↓

Notifications

↓

Errors

↓

Business KPIs

Observability

is mandatory.

---

# Testing

Unit Tests

↓

Integration Tests

↓

Contract Tests

↓

API Tests

↓

Load Tests

↓

Security Tests

↓

AI Evaluation Tests

↓

End-to-End Tests

Every module

must

be testable

independently.

---

# Scalability Path

Phase 1

Modular Monolith

↓

Phase 2

Extract AI Service

↓

Phase 3

Extract Search Service

↓

Phase 4

Extract Notification Service

↓

Phase 5

Extract Analytics Service

↓

Phase 6

Full Microservice Platform

Migration

requires

minimal code changes.

---

# Backend Summary

The backend

is built

around

business domains,

not technical layers.

Each module

owns

its business logic,

communicates

through events,

shares

platform services,

and can evolve

independently.

This architecture

supports

rapid development,

enterprise quality,

and future scalability.

Status

Version 1.0

Ready for Event Architecture.
