# Contributing

Thanks for contributing to `openclaw-lark-enhanced`.

## Scope

This project is a **third-party, non-official enhancement plugin** for OpenClaw Lark/Feishu.

Please keep contributions:

- additive rather than invasive
- clearly separated from the official `@larksuite/openclaw-lark` package
- small, practical, and easy to remove if upstream behavior changes

## Good contribution candidates

- thread/topic routing improvements
- non-invasive delivery fixes
- release/documentation improvements
- compatibility fixes for newer OpenClaw versions

## Please avoid

- modifying or vendoring the official plugin code here
- bundling unrelated features into a single change
- adding behavior that is difficult to disable or reason about

## Local workflow

```bash
npm pack
```

For local OpenClaw testing:

```bash
openclaw plugins install -l /path/to/openclaw-lark-enhanced
openclaw gateway restart
```

## Release flow

- update files as needed
- commit to `main`
- bump `package.json` version when preparing a release
- push a matching tag like `v0.1.3`
- GitHub Actions publishes npm and creates the GitHub Release

## Version / tag rule

`package.json` version and git tag must match.

Example:

- `package.json`: `0.1.3`
- git tag: `v0.1.3`
