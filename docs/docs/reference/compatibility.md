---
myst:
  html_meta:
    "description": "The release status of Brazilian Fields and Widgets for Plone, and the Plone, Python, and Volto versions its test suites run against."
    "property=og:description": "The release status of Brazilian Fields and Widgets for Plone, and the Plone, Python, and Volto versions its test suites run against."
    "property=og:title": "Compatibility"
    "keywords": "Plone, plonegovbr.brfields, volto-brwidgets, compatibility, Python, Volto, changelog"
---

(reference-compatibility)=

# Compatibility

This page lists the versions this repository's continuous integration tests against.

## Backend

The backend test suite runs for every combination below, against the latest release of each Plone series.

| Plone | Python 3.11 | Python 3.12 | Python 3.13 | Python 3.14 |
|---|---|---|---|---|
| 6.2 | Tested | Tested | Tested | Tested |
| 6.1 | Tested | Tested | Tested | Tested |

The matrix is defined in the repository's `.github/workflows/backend.yml`.
The package's metadata declares `Framework :: Plone :: 6.1` and `Framework :: Plone :: 6.2`.

```{versionremoved} 1.0.0b1
Support for Plone 6.0 and Python 3.10.
```

## Frontend

Code analysis, type checks, internationalization checks, and unit tests for the frontend run against the following versions.

| Dependency | Version |
|---|---|
| Volto | 19.5.1 |
| Node.js | 24 |
| React | 18, as a peer dependency |

## User interfaces

| Interface | Status |
|---|---|
| Volto | Supported. |
| Classic UI | Not supported. The fields validate in Classic UI forms, but no widget formats them. |

## Changelogs

-   [Repository changelog](https://github.com/plonegovbr/brfieldsandwidgets/blob/main/CHANGELOG.md).
-   [`plonegovbr.brfields` changelog](https://github.com/plonegovbr/brfieldsandwidgets/blob/main/backend/CHANGELOG.md).
-   [`@plonegovbr/volto-brwidgets` changelog](https://github.com/plonegovbr/brfieldsandwidgets/blob/main/frontend/packages/volto-brwidgets/CHANGELOG.md).
