# openclaw-lark-enhanced

[![npm version](https://img.shields.io/npm/v/openclaw-lark-enhanced.svg)](https://www.npmjs.com/package/openclaw-lark-enhanced)
[![npm downloads](https://img.shields.io/npm/dm/openclaw-lark-enhanced.svg)](https://www.npmjs.com/package/openclaw-lark-enhanced)

Third-party, non-official enhancement plugin for OpenClaw Lark/Feishu setups.

This package does **not** replace, fork, or modify the official `@larksuite/openclaw-lark` package. It is an additive overlay plugin: you keep the official plugin as-is, and install this package only when you want extra behavior on top.

Current enhancement included in this release:

- keep subagent completion messages in the originating Feishu topic/thread

## Positioning

`openclaw-lark-enhanced` is meant to be a small, practical enhancement layer for real-world Lark/Feishu usage.

Today it ships with one focused fix. Over time it can host more non-invasive enhancements, while remaining clearly separate from the official plugin.

## What it does

- Hooks subagent completion delivery
- Only affects Feishu/Lark-originated requests
- Only acts when the original conversation already has a thread/topic id
- Preserves the completion message in the same Feishu thread/topic
- Leaves the official plugin package and source untouched
- Can be removed cleanly at any time

## What it does not do

- It does **not** replace `@larksuite/openclaw-lark`
- It does **not** patch files inside the official package
- It does **not** claim to be an official OpenClaw or LarkSuite release

## Install locally

```bash
openclaw plugins install -l /home/ljayi/.openclaw/workspace/plugins/openclaw-lark-enhanced
openclaw gateway restart
```

## Install from npm

```bash
openclaw plugins install openclaw-lark-enhanced
openclaw gateway restart
```

## npx helper

```bash
npx openclaw-lark-enhanced
```

This only prints recommended install and uninstall commands.

## Verify

1. Start a subagent from a Feishu topic/thread
2. Wait for the completion message
3. Confirm the completion lands in the same topic/thread

## Disable / remove

```bash
openclaw plugins uninstall lark-enhanced
openclaw gateway restart
```

## Notes

- This is a third-party plugin, not an official OpenClaw or LarkSuite release.
- The official main Feishu plugin remains `@larksuite/openclaw-lark`.
- This package is designed for additive enhancements, starting with the thread/topic completion fix.
