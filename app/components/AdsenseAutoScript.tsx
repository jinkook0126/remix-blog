// app/components/AdsenseAutoScript.tsx
import { useEffect } from "react";

export function AdsenseAutoScript({ client }: { client: string }) {
  useEffect(() => {
    // 중복 삽입 방지
    if (document.querySelector('script[data-adsbygoogle="true"]')) return;

    const s = document.createElement("script");
    s.async = true;
    s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
    s.crossOrigin = "anonymous";
    s.setAttribute("data-adsbygoogle", "true");
    document.head.appendChild(s);
  }, [client]);

  return null;
}
