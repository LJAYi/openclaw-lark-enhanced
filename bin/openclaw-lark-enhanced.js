#!/usr/bin/env node

const lines = [
  'openclaw-lark-enhanced',
  '',
  'Third-party, non-official OpenClaw Lark/Feishu enhancement plugin.',
  'It does not replace or modify the official @larksuite/openclaw-lark package.',
  '',
  'Recommended install:',
  '  openclaw plugins install openclaw-lark-enhanced',
  '',
  'Local development install:',
  '  openclaw plugins install -l /path/to/openclaw-lark-enhanced',
  '',
  'Then restart Gateway:',
  '  openclaw gateway restart',
  '',
  'Uninstall:',
  '  openclaw plugins uninstall lark-enhanced',
  ''
];

process.stdout.write(lines.join('\n'));
