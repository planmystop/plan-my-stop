# Responsive Design Guidelines

**Document Version:** 1.0

**Status:** Approved

**Owner:** UX Team

**Applies To**

- Web Application
- Mobile Application
- Tablet
- Desktop
- PWA
- Future Devices

---

# Purpose

Responsive Design ensures that Plan My Stop provides an optimal user experience across every supported device.

Users should never feel that the application was designed for another screen size.

The interface should naturally adapt to available space while maintaining consistency, usability, accessibility, and performance.

---

# Goals

Our responsive design aims to

- Support all screen sizes
- Maintain usability
- Reduce scrolling
- Improve readability
- Optimize touch interactions
- Preserve performance
- Improve accessibility
- Enable future device compatibility

---

# Responsive Philosophy

Design once

Adapt everywhere.

Every screen should feel native on

Phone

↓

Tablet

↓

Laptop

↓

Desktop

↓

Ultra-wide Monitor

↓

Vehicle Display

↓

Foldable Device

---

# Responsive Principles

Every layout should be

Flexible

↓

Adaptive

↓

Consistent

↓

Scalable

↓

Accessible

↓

Performance Optimized

↓

Content First

---

# Supported Devices

The application officially supports

• Mobile Phones

• Tablets

• Laptops

• Desktop Computers

• Large Monitors

• Foldable Devices

• In-Car Displays

• Smart TVs (Future)

---

# Breakpoints

Recommended breakpoints

| Device | Width |
|---------|-------|
| Extra Small | < 480 px |
| Small Mobile | 480–767 px |
| Tablet | 768–1023 px |
| Laptop | 1024–1439 px |
| Desktop | 1440–1919 px |
| Ultra Wide | ≥1920 px |

Breakpoints should be treated as design guides, not strict limitations.

---

# Layout Strategy

Use

Flexible Grid

↓

Fluid Containers

↓

Responsive Components

↓

Adaptive Navigation

↓

Dynamic Spacing

Never create separate designs for every device.

---

# Grid System

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Maintain consistent spacing throughout.

---

# Responsive Containers

Containers should

Expand

↓

Shrink

↓

Wrap

↓

Reorder

↓

Collapse

based on available space.

---

# Navigation

Desktop

Persistent Sidebar

Tablet

Collapsible Sidebar

Mobile

Bottom Navigation

Large Screens

Sidebar + Workspace

---

# Typography Scaling

Text should scale automatically.

Recommended

| Type | Mobile | Desktop |
|------|---------|----------|
| H1 | 32px | 48px |
| H2 | 28px | 40px |
| H3 | 24px | 32px |
| Body | 16px | 18px |
| Caption | 14px | 16px |

Avoid fixed typography.

---

# Responsive Images

Images should

Resize

↓

Crop Responsively

↓

Lazy Load

↓

Support Retina Displays

↓

Maintain Aspect Ratio

Never stretch images.

---

# Responsive Cards

Desktop

Multiple Columns

Tablet

Two Columns

Mobile

Single Column

Cards should maintain readable spacing.

---

# Responsive Tables

Desktop

Full Table

Tablet

Horizontal Scroll

Mobile

Card Layout

Avoid forcing users to zoom.

---

# Forms

Desktop

Two Columns

Tablet

Two Columns

Mobile

Single Column

Large touch targets are mandatory.

---

# Buttons

Desktop

Standard Size

Mobile

Full Width (where appropriate)

Minimum Height

48 px

Spacing

8 px minimum

---

# Maps

Desktop

Large Interactive Map

Tablet

Split View

Mobile

Full Screen Map

Floating Controls

Bottom Sheet

---

# Dashboard Layout

Desktop

Three Columns

Tablet

Two Columns

Mobile

Single Column

Widgets should rearrange automatically.

---

# AI Panel

Desktop

Side Panel

Tablet

Sliding Panel

Mobile

Bottom Sheet

Never cover important content.

---

# Responsive Navigation

Navigation adapts based on screen size.

Desktop

Sidebar

Tablet

Collapsible Sidebar

Mobile

Bottom Navigation

Navigation should remain predictable.

---

# Orientation Support

Support

Portrait

↓

Landscape

↓

Folded

↓

Unfolded

Layouts should adjust automatically.

---

# Foldable Devices

Support

Single Screen

↓

Dual Screen

↓

Expanded Layout

↓

Tabletop Mode

Future devices should require minimal redesign.

---

# Vehicle Displays

Prioritize

Navigation

↓

Large Controls

↓

Voice Commands

↓

Minimal Distractions

Reduce interaction complexity.

---

# Responsive Motion

Animations should adapt.

Reduce

Large Movements

↓

Heavy Effects

↓

Complex Transitions

on smaller devices.

---

# Responsive Performance

Optimize

Images

↓

Fonts

↓

Animations

↓

JavaScript

↓

API Calls

↓

Maps

↓

AI Requests

Performance should improve on smaller devices.

---

# Responsive Accessibility

Support

Large Text

↓

Zoom

↓

Voice

↓

Keyboard

↓

Screen Readers

↓

High Contrast

↓

Reduced Motion

Accessibility rules remain identical across devices.

---

# Responsive AI

AI should adapt to

Screen Size

↓

Device Capability

↓

Battery Level

↓

Connectivity

↓

User Context

AI responses should fit available space.

---

# Offline Behaviour

Responsive design must also support

Offline Maps

↓

Cached Data

↓

Saved Trips

↓

Queued Actions

↓

Background Synchronization

---

# Design Tokens

Never hardcode

Spacing

↓

Margins

↓

Padding

↓

Breakpoints

↓

Typography

↓

Colors

↓

Radius

Use centralized design tokens.

---

# Performance Targets

Initial Load

<2 seconds

Screen Resize

Smooth

Animations

60 FPS

Touch Response

<16 ms

Search

<150 ms

---

# Testing Matrix

Every screen must be tested on

✓ Mobile Portrait

✓ Mobile Landscape

✓ Tablet Portrait

✓ Tablet Landscape

✓ Laptop

✓ Desktop

✓ Ultra Wide

✓ Foldable

---

# Common Responsive Patterns

Support

Responsive Grid

↓

Responsive Navigation

↓

Adaptive Cards

↓

Adaptive Forms

↓

Responsive Tables

↓

Flexible Layouts

↓

Responsive Maps

↓

Adaptive Dashboards

---

# Anti-Patterns

Never

❌ Fixed Width Layouts

❌ Horizontal Scrolling

❌ Tiny Touch Targets

❌ Hidden Navigation

❌ Desktop-only Components

❌ Fixed Typography

❌ Stretched Images

❌ Overlapping Content

❌ Broken Layouts

---

# Developer Checklist

Every screen must support

✓ Responsive Grid

✓ Breakpoints

✓ Fluid Layout

✓ Flexible Components

✓ Accessibility

✓ Performance

✓ Offline Support

✓ Dark Mode

✓ AI Compatibility

---

# AI Coding Rules

AI-generated layouts must

Use Flex/Grid layouts

Respect breakpoints

Avoid fixed dimensions

Support responsive typography

Reuse design tokens

Maintain accessibility

Optimize performance

Never generate desktop-only interfaces

---

# Success Criteria

Responsive design is complete when

✓ Every supported device passes testing

✓ No horizontal scrolling

✓ Accessibility passes

✓ Performance targets met

✓ Layout remains consistent

✓ Components resize correctly

✓ Navigation adapts properly

✓ AI adapts to screen size

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | Initial Release | Responsive Design Guidelines |