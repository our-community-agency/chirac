export type PromptPayload = {
  prompt: string;
  title?: string;
  services?: string[];
};

export type PromptDispatchMode = "native" | "parent" | "local";

const PROMPT_EVENT = "chicago-amp:prompt";

declare global {
  interface Window {
    sendPrompt?: (prompt: string) => void;
  }
}

export function triggerPrompt(payload: PromptPayload): PromptDispatchMode {
  if (typeof window === "undefined") {
    return "local";
  }

  window.dispatchEvent(new CustomEvent<PromptPayload>(PROMPT_EVENT, { detail: payload }));

  if (typeof window.sendPrompt === "function") {
    window.sendPrompt(payload.prompt);
    return "native";
  }

  try {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage(
        {
          type: "sendPrompt",
          source: "chicago-amp",
          payload,
        },
        "*",
      );
      return "parent";
    }
  } catch {
    // Ignore cross-origin access issues and fall back to the on-page brief.
  }

  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  return "local";
}

export function subscribeToPromptBridge(handler: (payload: PromptPayload) => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const listener = (event: Event) => {
    handler((event as CustomEvent<PromptPayload>).detail);
  };

  window.addEventListener(PROMPT_EVENT, listener);

  return () => {
    window.removeEventListener(PROMPT_EVENT, listener);
  };
}
