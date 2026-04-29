# QUICKSTART

## 1) Local install

```bash
openclaw plugins install -l /home/ljayi/.openclaw/workspace/plugins/openclaw-lark-enhanced
openclaw gateway restart
```

## 2) Verify

在 Feishu thread/topic 里起一个最小 subagent，确认 completion 仍然回到原 thread。

## 3) Uninstall

```bash
openclaw plugins uninstall lark-enhanced
openclaw gateway restart
```

## 4) Publish later (npm)

发布后推荐安装方式：

```bash
openclaw plugins install openclaw-lark-enhanced
```

`npx openclaw-lark-enhanced` 只用于打印安装提示，不直接打补丁。
