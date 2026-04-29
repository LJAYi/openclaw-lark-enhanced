import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";

export default definePluginEntry({
  id: "lark-enhanced",
  name: "OpenClaw Lark Enhanced",
  description: "Third-party, non-official Lark/Feishu enhancement plugin for OpenClaw. Current feature: keep subagent completion back in the originating Feishu thread/topic.",
  register(api) {
    api.on("subagent_delivery_target", (event) => {
      const origin = event.requesterOrigin;
      if (!origin) return;
      if (origin.channel !== "feishu") return;
      if (!origin.to) return;
      if (origin.threadId == null || String(origin.threadId).trim() === "") return;
      if (!event.expectsCompletionMessage) return;

      return {
        origin: {
          channel: origin.channel,
          accountId: origin.accountId,
          to: origin.to,
          threadId: origin.threadId,
        },
      };
    });
  },
});
