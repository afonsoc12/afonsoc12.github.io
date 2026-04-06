# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog],
and this project adheres to [Semantic Versioning].

## [0.1.1] - 2026-04-06

### Fixed

- Mobile scroll now works across the full screen; sections no longer create inner scroll containers
- iOS keyboard no longer pushes the header off-screen (fixed shell + Visual Viewport API)
- Contact form no longer zooms on mobile when focused (16px font on inputs)
- Hamburger menu closes on tap outside or nav link click

### Changed

- Contact divider text updated to "or find me on"
- Reduced section vertical padding on mobile
- Removed dead CSS and redundant HTML comments

## [0.1.0] - 2026-04-05

### Added

- Health endpoint at `/healthz`

## [0.0.5] - 2026-04-05

### Changed

- Increased terminal size in desktop
- Added Short commit SHA to version

### Fixed

- Fixed iOS zooming in terminal due to font-size less than 16px

## [0.0.4] - 2026-04-05

### Added

- Contact form

### Fixed

- Terminal prompt in mobile

## [0.0.3] - 2026-04-05

### Added

- Custom 404 page

### Fixed

- Fix bug where terminal prompt would show when scrolling
- Fix profile pic not showing in sidebar in mobile
- Added version to navbar in mobile
- Fix GA implementation

## [0.0.2] - 2026-04-05

### Added

- Readme & Changelog
- Google Analytics

### Fixed

- Improved mobile rendering and snapping logic

## [0.0.1] - 2026-03-28

- Initial release

<!-- Links -->

[Keep a Changelog]: https://keepachangelog.com/en/1.0.0/
[Semantic Versioning]: https://semver.org/spec/v2.0.0.html

<!-- Versions -->

[unreleased]: https://github.com/Author/afonsoc12.github.io/compare/v0.0.2...HEAD
[0.0.1]: https://github.com/afonsoc12/afonsoc12.github.io/releases/tag/v0.0.1
