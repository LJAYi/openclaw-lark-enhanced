# openclaw-lark-enhanced

Third-party, non-official enhancement plugin for OpenClaw Lark/Feishu.

`openclaw-lark-enhanced` does **not** replace or modify the official `@larksuite/openclaw-lark` package. It is an additive overlay plugin for small, practical enhancements that are useful in real deployments.

## Initial release: 0.1.1

First public release includes one focused enhancement:

- keep subagent completion messages in the originating Feishu topic/thread

## Why this exists

In some Feishu topic/thread workflows, subagent completion messages may fall out of the original thread context. This plugin adds a lightweight routing override so completion messages stay where the conversation started.

## Install

```bash
openclaw plugins install openclaw-lark-enhanced
openclaw gateway restart
```

## Positioning note

This is a third-party community plugin, not an official OpenClaw or LarkSuite release.
The official main Feishu plugin remains `@larksuite/openclaw-lark`.
