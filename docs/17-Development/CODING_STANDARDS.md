

Version: 1.0

Status: Final

Location:
docs/17-development/CODING_STANDARDS.md

---

# Coding Standards

## Overview

This document defines

the coding standards

for every project

inside

Plan My Stop.

These rules apply

to

Frontend

↓

Backend

↓

AI Services

↓

Scripts

↓

Infrastructure

↓

Shared Packages

↓

Testing

↓

Automation

↓

Documentation

Consistency

is more important

than personal preference.

---

# Core Principles

Code should be

Readable

↓

Maintainable

↓

Predictable

↓

Testable

↓

Modular

↓

Reusable

↓

Secure

↓

Documented

↓

Type Safe

↓

Simple

---

# Philosophy

Always optimize

for

the next developer,

not

the current developer.

Good code

is code

that another developer

can understand

within

five minutes.

---

# General Rules

Never

disable lint rules

without explanation.

↓

Never

ignore TypeScript errors.

↓

Never

duplicate code.

↓

Never

hardcode configuration.

↓

Never

leave commented code.

↓

Never

commit debugging statements.

↓

Never

commit secrets.

↓

Never

mix formatting styles.

---

# File Naming

React Components

PascalCase

HotelCard.tsx

JourneyTimeline.tsx

AIAssistant.tsx

---

Hooks

camelCase

useJourney.ts

useAuth.ts

useHotels.ts

---

Utilities

camelCase

formatDate.ts

calculateBudget.ts

generateSlug.ts

---

Constants

UPPER_CASE

API_TIMEOUT.ts

DEFAULT_THEME.ts

---

Types

PascalCase

Journey.ts

Hotel.ts

Budget.ts

---

Folders

kebab-case

journey-planner

hotel-search

travel-memory

---

# Function Rules

Functions

should do

one thing.

Good

calculateBudget()

Bad

calculateBudgetAndSaveTripAndNotifyUser()

Maximum

40 lines

preferred.

Split

complex logic.

---

# Component Rules

Every component

has

one responsibility.

Never create

1,000-line components.

Split into

smaller

reusable components.

---

# Component Structure

Imports

↓

Constants

↓

Types

↓

Hooks

↓

State

↓

Effects

↓

Handlers

↓

Derived Values

↓

Render

Always

same order.

---

# Variable Naming

Use

clear names.

Good

totalBudget

remainingDistance

selectedHotel

preferredCuisine

Bad

data

value

temp

abc

test

---

# Boolean Naming

Always use

is

↓

has

↓

can

↓

should

Examples

isPremium

hasNotifications

canBookHotel

shouldShowBanner

---

# Async Rules

Always use

async

await

Avoid

deep promise chains.

Always

handle errors.

---

# Error Handling

Every

external call

must have

error handling.

Never

ignore exceptions.

Always

log meaningful errors.

---

# Magic Numbers

Never

hardcode

numbers.

Bad

if(price > 1000)

Good

if(price > PREMIUM_LIMIT)

---

# Constants

Every constant

belongs

in

constants/

Never duplicate

configuration values.

---

# Environment Variables

Never

hardcode

URLs

↓

API Keys

↓

Secrets

↓

Passwords

↓

Database Names

↓

Ports

↓

Provider IDs

Everything

comes

from environment variables.

---

# Comments

Code

should explain

what.

Comments

should explain

why.

Avoid

obvious comments.

Bad

Increment counter

Good

Prevent duplicate billing

during retries.

---

# Logging

Never use

console.log

Use

Logger Service

Levels

Debug

↓

Info

↓

Warn

↓

Error

↓

Fatal

---

# Imports

Prefer

absolute imports.

Group

imports

External

↓

Internal

↓

Types

↓

Styles

↓

Assets

---

# TypeScript

Never use

any.

Prefer

unknown

or

proper types.

Strict Mode

always enabled.

---

# API Calls

Never call APIs

inside UI components.

Use

Service Layer

↓

Hooks

↓

API Client

---

# Business Logic

Business rules

never belong

inside components.

Business rules

belong

inside

Services

or

Domain Layer.

---

# Testing Rules

Every feature

must include

Unit Tests

↓

Integration Tests

↓

Edge Cases

↓

Error Cases

↓

Accessibility Tests

↓

Performance Checks

---

# Documentation

Every exported

Component

↓

Hook

↓

Utility

↓

Service

↓

API

must contain

documentation.

---

# Git Rules

One feature

per branch.

Small commits.

Meaningful messages.

Never commit

broken code.

---

# Pull Request Checklist

Code Reviewed

✅

Tests Passing

✅

Lint Passing

✅

Types Passing

✅

Accessibility

Checked

✅

Performance

Checked

✅

Documentation

Updated

✅

---

# Definition Of Done

A feature

is complete

only when

Implementation

✅

Tests

✅

Documentation

✅

Accessibility

✅

Performance

✅

Security Review

✅

AI Review

✅

Code Review

✅

Deployment Ready

✅

---

# Coding Summary

Every line

of code

must improve

the product.

Readable code

is

more valuable

than

clever code.

The codebase

should remain

consistent

regardless

of

who writes

the code.

Status

Version 1.0

Approved

Mandatory For All Contributors.
