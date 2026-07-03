---
title: API Pagination
version: 1.0.0
status: Active
owner: Plan My Stop
category: API
last_updated: 2026-07-03
---

# API Pagination

> This document defines the pagination strategy used across all collection-based APIs within Plan My Stop.

---

# Purpose

Pagination prevents APIs from returning excessively large datasets in a single request.

Instead of returning every record, the API returns data in manageable pages.

This improves

- Performance
- Scalability
- Response Time
- User Experience
- Infrastructure Cost

---

# Objectives

The pagination system should

- Reduce API response size
- Improve frontend performance
- Reduce database load
- Support infinite scrolling
- Support traditional page navigation
- Be easy to implement
- Be consistent across all APIs

---

# Design Principles

The pagination system should be

- Simple
- Predictable
- Consistent
- Efficient
- Scalable

---

# Pagination Types

Plan My Stop supports two strategies.

## Offset Pagination

Used during MVP.

Example

```
GET

/api/v1/businesses?page=2&limit=20
```

---

## Cursor Pagination

Future implementation.

Recommended for

- Chat
- Notifications
- Activity Timeline
- AI Conversations

Example

```
/api/v1/notifications?cursor=abc123
```

---

# Query Parameters

## Page

Default

```
1
```

---

## Limit

Default

```
20
```

Maximum

```
100
```

---

# Request Example

```
GET

/api/v1/restaurants?page=3&limit=20
```

---

# Response Structure

```json
{
  "success": true,
  "data": [],

  "pagination": {
    "page": 3,
    "limit": 20,
    "totalItems": 245,
    "totalPages": 13,
    "hasNext": true,
    "hasPrevious": true
  }
}
```

---

# Default Values

| Property | Value |
|----------|------:|
| Page | 1 |
| Limit | 20 |
| Maximum Limit | 100 |

---

# Collections Using Pagination

Pagination should be implemented for

- Businesses
- Restaurants
- Hotels
- Attractions
- Trips
- Reviews
- Notifications
- Search Results
- Recommendations
- Saved Places

---

# Collections Without Pagination

Pagination is unnecessary for

- User Profile
- Journey Details
- Authentication
- Settings
- Dashboard Summary

---

# Sorting

Pagination supports sorting.

Example

```
GET

/api/v1/restaurants

?sort=rating

&order=desc

&page=1

&limit=20
```

---

# Searching

Pagination supports searching.

Example

```
GET

/api/v1/businesses

?search=pizza

&page=1

&limit=20
```

---

# Filtering

Pagination supports filtering.

Example

```
GET

/api/v1/restaurants

?city=goa

&rating=4

&open=true

&page=1

&limit=20
```

---

# Performance

Pagination should

- Fetch only required records
- Use MongoDB indexes
- Avoid full collection scans
- Minimize memory usage

---

# Database Strategy

Use

```
skip()

limit()
```

for MVP.

Future

Cursor-based pagination for large collections.

---

# API Validation

Validate

- Page >= 1
- Limit >= 1
- Limit <= 100

Invalid requests should return

```
422

Validation Error
```

---

# Empty Results

When no records exist

```json
{
    "success": true,
    "data": [],
    "pagination": {
        "page":1,
        "limit":20,
        "totalItems":0,
        "totalPages":0,
        "hasNext":false,
        "hasPrevious":false
    }
}
```

---

# Frontend Guidelines

The frontend should

- Request only required pages
- Preserve current page
- Support infinite scrolling where appropriate
- Show loading indicators
- Handle empty pages gracefully

---

# Monitoring

Track

- Average Page Size
- Average Response Time
- Popular Page Requests
- Empty Result Rate
- Database Query Time

---

# Future Enhancements

Future improvements

- Cursor Pagination
- Infinite Scroll APIs
- GraphQL Connections
- Smart Prefetching
- AI Search Pagination
- Predictive Data Loading

---

# Best Practices

Always

- Paginate large datasets
- Validate page parameters
- Return pagination metadata
- Use indexes

Never

- Return entire collections
- Allow unlimited page sizes
- Ignore invalid parameters

---

# Related Documents

- API_GUIDELINES.md
- VERSIONING.md
- DATABASE_ARCHITECTURE.md
- SEARCH_ARCHITECTURE.md

---

# Revision History

| Version | Date | Description |
|----------|------------|---------------------------|
|1.0.0|2026-07-03|Initial Pagination Standards|