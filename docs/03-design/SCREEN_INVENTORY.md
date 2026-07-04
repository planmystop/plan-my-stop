# SCREEN_INVENTORY.md

Version: 1.0

Status: Final

Location:
docs/03-design/SCREEN_INVENTORY.md

---

# Screen Inventory

## Overview

This document

contains

every screen

inside

Plan My Stop.

Each screen

has

a unique identifier,

purpose,

dependencies,

navigation flow,

required APIs,

AI capabilities,

and development status.

This document

is the

single source of truth

for

Design,

Development,

Testing,

Product,

and QA.

---

# Screen ID Format

Format

MODULE-NUMBER

Examples

AUTH-001

HOME-001

TRIP-004

HOTEL-006

AI-002

PROFILE-003

Every screen

must have

a permanent ID.

---

# Screen Status

NOT_STARTED

↓

WIREFRAME

↓

HI_FI_DESIGN

↓

PROTOTYPE

↓

IN_DEVELOPMENT

↓

IN_TESTING

↓

READY_FOR_RELEASE

↓

LIVE

---

# Authentication Module

---

## AUTH-001

Splash Screen

Purpose

Launch application.

Entry

Application Launch

Exit

Welcome Screen

Components

Logo

↓

Animation

↓

Version

↓

Loading

APIs

None

AI

No

Priority

Critical

---

## AUTH-002

Welcome Screen

Purpose

Introduce application.

Entry

Splash

Exit

Login

↓

Register

↓

Guest Explore (Future)

Components

Hero

↓

Benefits

↓

CTA Buttons

↓

Illustration

Priority

Critical

---

## AUTH-003

Login

Purpose

Authenticate users.

Entry

Welcome

Exit

Dashboard

Components

Email

↓

Password

↓

Social Login

↓

Passkey

↓

Forgot Password

API

Authentication

AI

No

Priority

Critical

---

## AUTH-004

Register

Purpose

Create account.

Priority

Critical

---

## AUTH-005

Forgot Password

Priority

High

---

## AUTH-006

Verify Email

Priority

High

---

## AUTH-007

Passkey Setup

Priority

Medium

---

# Onboarding Module

---

## ONBOARD-001

Travel Style

Purpose

Collect preferences.

---

## ONBOARD-002

Budget Preference

---

## ONBOARD-003

Travel Interests

---

## ONBOARD-004

Location Permission

---

## ONBOARD-005

Notification Permission

---

## ONBOARD-006

AI Introduction

---

## ONBOARD-007

Onboarding Complete

---

# Home Module

---

## HOME-001

Dashboard

Purpose

Main control center.

Entry

Login

↓

Application Start

Exit

Everything

Components

Header

↓

Search

↓

Current Journey

↓

AI Card

↓

Weather

↓

Quick Actions

↓

Upcoming Trips

↓

Nearby

↓

Recent Activity

↓

Bottom Navigation

APIs

Journey

↓

Weather

↓

Notifications

↓

AI

↓

Profile

↓

Trips

↓

Search

AI

Context Aware

Priority

Critical

---

## HOME-002

Quick Search

Purpose

Search entire platform.

---

## HOME-003

Notifications Center

---

## HOME-004

Current Journey Card

---

## HOME-005

Recent Activity

---

## HOME-006

Weather Details

---

## HOME-007

AI Daily Brief

---

# Journey Module

---

## TRIP-001

Trip List

---

## TRIP-002

Create Journey

---

## TRIP-003

Journey Overview

---

## TRIP-004

Journey Timeline

---

## TRIP-005

Journey Planner

---

## TRIP-006

Journey Map

---

## TRIP-007

Journey Participants

---

## TRIP-008

Journey Notes

---

## TRIP-009

Packing List

---

## TRIP-010

Travel Documents

---

## TRIP-011

Journey Statistics

---

## TRIP-012

Journey Settings

---

# Maps Module

---

## MAP-001

Interactive Map

---

## MAP-002

Route Planning

---

## MAP-003

Navigation

---

## MAP-004

Nearby Places

---

## MAP-005

Traffic

---

## MAP-006

Offline Maps

---

## MAP-007

Weather Layer

---

## MAP-008

Map Settings

---

# Hotel Module

---

## HOTEL-001

Hotel Search

---

## HOTEL-002

Search Results

---

## HOTEL-003

Map View

---

## HOTEL-004

Hotel Details

---

## HOTEL-005

Reviews

---

## HOTEL-006

Amenities

---

## HOTEL-007

Photo Gallery

---

## HOTEL-008

Compare Hotels

---

## HOTEL-009

Saved Hotels

---

## HOTEL-010

Booking Review

---

# Restaurant Module

---

## FOOD-001

Restaurant Search

---

## FOOD-002

Restaurant Results

---

## FOOD-003

Restaurant Details

---

## FOOD-004

Menu

---

## FOOD-005

Reviews

---

## FOOD-006

Reservations

---

## FOOD-007

Nearby Restaurants

---

## FOOD-008

Favorite Restaurants

---

# Budget Module

---

## BUDGET-001

Budget Dashboard

---

## BUDGET-002

Expense List

---

## BUDGET-003

Add Expense

---

## BUDGET-004

Expense Details

---

## BUDGET-005

Currency Converter

---

## BUDGET-006

Budget Reports

---

## BUDGET-007

AI Savings

---

# AI Module

---

## AI-001

AI Home

---

## AI-002

AI Chat

---

## AI-003

Trip Planner

---

## AI-004

Hotel Assistant

---

## AI-005

Restaurant Assistant

---

## AI-006

Budget Advisor

---

## AI-007

Travel Story

---

## AI-008

Translation

---

## AI-009

Emergency Assistant

---

## AI-010

AI Settings

---

# Memories Module

---

## MEMORY-001

Travel Timeline

---

## MEMORY-002

Albums

---

## MEMORY-003

Journal

---

## MEMORY-004

Photo Viewer

---

## MEMORY-005

AI Story

---

## MEMORY-006

Travel Statistics

---

## MEMORY-007

Export Journey

---

# Community Module

---

## COMMUNITY-001

Feed

---

## COMMUNITY-002

Travel Groups

---

## COMMUNITY-003

Reviews

---

## COMMUNITY-004

Recommendations

---

## COMMUNITY-005

Questions

---

## COMMUNITY-006

Events

---

## COMMUNITY-007

Local Guides

---

# Premium Module

---

## PREMIUM-001

Premium Home

---

## PREMIUM-002

Plans

---

## PREMIUM-003

Benefits

---

## PREMIUM-004

Billing

---

## PREMIUM-005

Payment Methods

---

## PREMIUM-006

Usage Dashboard

---

# Profile Module

---

## PROFILE-001

Profile Home

---

## PROFILE-002

Personal Information

---

## PROFILE-003

Travel Preferences

---

## PROFILE-004

Saved Places

---

## PROFILE-005

Travel Statistics

---

## PROFILE-006

Achievements

---

## PROFILE-007

Privacy

---

## PROFILE-008

Security

---

## PROFILE-009

Connected Accounts

---

# Settings Module

---

## SETTINGS-001

General

---

## SETTINGS-002

Appearance

---

## SETTINGS-003

Notifications

---

## SETTINGS-004

Language

---

## SETTINGS-005

Currency

---

## SETTINGS-006

Accessibility

---

## SETTINGS-007

AI Preferences

---

## SETTINGS-008

Offline Data

---

## SETTINGS-009

About

---

## SETTINGS-010

Help

---

# Future Modules

Enterprise

Admin

Partner Portal

Analytics Dashboard

Developer Portal

Travel Agency Portal

White Label Portal

Fleet Management

Smart Vehicle Integration

Wearables

AR Navigation

Voice Assistant

---

# Estimated Screen Count

Authentication

7

Onboarding

7

Home

7

Trips

12

Maps

8

Hotels

10

Restaurants

8

Budget

7

AI

10

Memories

7

Community

7

Premium

6

Profile

9

Settings

10

Future

50+

Current Total

118+

Projected Total

200+

---

# Design Priority

Phase 1

Authentication

↓

Home

↓

Trips

↓

Maps

↓

Hotels

↓

Restaurants

↓

AI

---

Phase 2

Budget

↓

Profile

↓

Settings

↓

Premium

↓

Community

↓

Memories

---

Phase 3

Enterprise

↓

Admin

↓

Partner Portal

↓

Analytics

↓

White Label

---

# Screen Inventory Summary

Every screen

inside

Plan My Stop

has

a unique identity,

clear responsibility,

defined navigation,

and implementation priority.

This document

is the master reference

for

Figma,

GitHub,

Development,

Testing,

and Product Planning.

Status

Version 1.0

Approved

Ready for Task Flows.
