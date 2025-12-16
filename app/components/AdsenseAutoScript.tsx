// app/components/AdsenseAutoScript.tsx
import { useEffect } from "react";

declare global {
  interface Window {
    __ADSENSE_LOADED__?: boolean;
  }
}

export function AdsenseAutoScript({ client }: { client: string }) {
  useEffect(() => {
    if (window.__ADSENSE_LOADED__) return;
    window.__ADSENSE_LOADED__ = true;

    const load = () => {
      if (document.querySelector('script[src*="pagead/js/adsbygoogle.js"]'))
        return;

      const s = document.createElement("script");
      s.async = true;
      s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
      s.crossOrigin = "anonymous";
      document.head.appendChild(s);
    };

    // @ts-ignore
    if (window.requestIdleCallback) {
      // @ts-ignore
      window.requestIdleCallback(load, { timeout: 1500 });
    } else {
      setTimeout(load, 800);
    }
  }, [client]);

  return null;
}
