# Design Tokens

**Project:** Plan My Stop

**Version:** 1.0

**Status:** Approved

**Owner:** Design System Team

---

# Purpose

Design Tokens define the visual foundation of Plan My Stop.

They provide a single source of truth for every visual property used throughout the application.

Every designer,
every developer,
and every AI coding assistant
must reference these tokens instead of creating custom values.

---

# Philosophy

Never hardcode.

Everything comes from tokens.

Good

Button Radius

↓

radius-lg

Bad

border-radius:18px

---

# Token Categories

Spacing

↓

Colors

↓

Typography

↓

Radius

↓

Shadows

↓

Elevation

↓

Opacity

↓

Motion

↓

Breakpoints

↓

Sizing

↓

Icons

↓

Z Index

↓

Blur

---

# Naming Convention

Tokens use

category.scale

Examples

spacing.4

radius.lg

font.body.md

shadow.md

motion.fast

---

# Spacing System

Based on

8 Point Grid

Allowed Values

0

2

4

8

12

16

20

24

32

40

48

56

64

72

80

96

128

160

192

256

Never invent spacing values.

---

# Spacing Tokens

spacing-0

0px

spacing-1

4px

spacing-2

8px

spacing-3

12px

spacing-4

16px

spacing-5

20px

spacing-6

24px

spacing-8

32px

spacing-10

40px

spacing-12

48px

spacing-16

64px

spacing-20

80px

spacing-24

96px

---

# Border Radius

radius-none

0

radius-sm

8px

radius-md

12px

radius-lg

16px

radius-xl

20px

radius-2xl

24px

radius-3xl

28px

radius-full

9999px

---

# Shadow System

shadow-none

No Shadow

shadow-xs

Very Small

shadow-sm

Small

shadow-md

Medium

shadow-lg

Large

shadow-xl

Extra Large

shadow-floating

Floating Elements

Never create custom shadows.

---

# Elevation Levels

Level 0

Background

Level 1

Surface

Level 2

Card

Level 3

Floating Card

Level 4

Dialog

Level 5

Modal

Level 6

Toast

Level 7

Critical Alert

---

# Color Token Structure

Primary

Secondary

Accent

Success

Warning

Error

Info

Neutral

Background

Surface

Border

Text

Disabled

Overlay

Actual color values are defined in COLOR_SYSTEM.md.

---

# Typography Tokens

Display

Heading

Title

Subtitle

Body

Caption

Label

Button

Code

Typography is never defined manually.

---

# Font Scale

Display XL

Display LG

Display MD

Heading XL

Heading LG

Heading MD

Heading SM

Body LG

Body MD

Body SM

Caption

Overline

---

# Font Weight

Thin

100

Extra Light

200

Light

300

Regular

400

Medium

500

Semi Bold

600

Bold

700

Extra Bold

800

Black

900

---

# Line Height

Tight

Normal

Comfortable

Relaxed

Loose

Use token names.

Never percentages.

---

# Letter Spacing

Tighter

Tight

Normal

Wide

Wider

Widest

---

# Icon Sizes

12

16

20

24

28

32

40

48

64

Icons should align with spacing tokens.

---

# Avatar Sizes

XS

24

SM

32

MD

40

LG

56

XL

72

XXL

96

---

# Component Heights

Input

48

Button

48

Navigation

64

Bottom Navigation

72

Search

56

Card Header

64

Toolbar

64

---

# Container Widths

Mobile

390

Tablet

768

Laptop

1280

Desktop

1440

Ultra Wide

1920

---

# Breakpoints

Mobile

0

Tablet

768

Laptop

1024

Desktop

1440

Ultra Wide

1920

---

# Grid System

Mobile

4 Columns

Tablet

8 Columns

Desktop

12 Columns

Large Desktop

12 Columns

---

# Motion Tokens

Instant

0ms

Fast

100ms

Standard

200ms

Medium

300ms

Slow

500ms

Very Slow

700ms

---

# Motion Curves

Linear

Ease

Ease In

Ease Out

Ease In Out

Spring

Default motion

Spring

---

# Animation Tokens

Fade

Slide

Scale

Expand

Collapse

Rotate

Use only predefined animation types.

---

# Blur Tokens

None

4

8

12

16

24

32

Used for

Dialogs

Sheets

Glass

Overlays

---

# Opacity Tokens

0

5

10

20

30

40

50

60

70

80

90

100

Never use arbitrary opacity.

---

# Z Index

Background

0

Content

10

Header

20

Sticky

30

Dropdown

40

Popover

50

Dialog

60

Toast

70

Critical

80

Developer Tools

90

---

# Border Width

0

1

2

4

8

Never use

3px

5px

7px

---

# Image Ratios

1:1

4:3

3:2

16:9

21:9

3:4

9:16

Use predefined ratios.

---

# Touch Targets

Minimum

48px

Preferred

56px

Large

64px

Accessibility always wins.

---

# Focus Ring

Width

2px

Offset

2px

Radius

Matches Component Radius

Focus should always be visible.

---

# Scrollbar

Minimal

Rounded

Thin

Visible on hover

Consistent across platforms.

---

# Loading Tokens

Skeleton Radius

Matches Component

Animation

Pulse

Duration

1200ms

---

# Empty State Tokens

Illustration

Large

Heading

Medium

Description

Body

Primary Button

Large

---

# Error Tokens

Icon

Large

Title

Heading

Description

Body

Primary Action

Contained Button

Secondary Action

Text Button

---

# AI Component Tokens

AI Badge

Small

AI Card

Medium

AI Insight

Floating Card

AI Recommendation

Highlight Surface

AI components should feel integrated,

not separate.

---

# Accessibility Tokens

Minimum Contrast

WCAG AA

Preferred

AAA

Minimum Font Size

16px

Touch Target

48px

Reduced Motion

Supported

High Contrast

Supported

---

# Performance Tokens

Animation FPS

60

Maximum Transition

500ms

Interaction Delay

<100ms

Search Feedback

<150ms

Launch

<2s

---

# AI Rules

AI-generated code

must

Reference tokens

↓

Never hardcode values

↓

Reuse existing scales

↓

Respect spacing

↓

Respect typography

↓

Respect motion

↓

Respect accessibility

---

# Design System Rules

Never

❌ Hardcode colors

❌ Hardcode spacing

❌ Hardcode radius

❌ Create custom shadows

❌ Create custom typography

❌ Invent breakpoints

Always

✓ Use tokens

✓ Reuse components

✓ Follow hierarchy

✓ Maintain consistency

---

# Future Compatibility

These tokens are designed to support

Web

↓

PWA

↓

React Native

↓

Flutter

↓

Desktop

↓

Wearables

↓

Future Platforms

One system.

Multiple platforms.

---

# Success Criteria

The Design Token System is complete when

✓ Every visual value comes from a token

✓ Designers use the same tokens as developers

✓ AI-generated code references tokens

✓ Figma variables match implementation

✓ No duplicate visual values exist

---

# Design Manifesto

Consistency creates quality.

Quality creates trust.

Trust creates loyalty.

Design Tokens are the invisible foundation

that makes every screen feel like

Plan My Stop.

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | Initial Release | Enterprise Design Token System |