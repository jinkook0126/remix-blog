import { useEffect, useRef } from "react";
import { useLocation } from "@remix-run/react";

export function AdsenseAutoRefresh() {
  const location = useLocation();
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    // 동일 경로 중복 호출 방지
    if (prevPathRef.current === location.pathname) return;
    prevPathRef.current = location.pathname;

    // ads 스크립트 아직 없으면 패스
    const w = window as any;
    if (!w.adsbygoogle) return;

    try {
      // Auto ads에게 DOM 재스캔 요청
      w.adsbygoogle.push({});
    } catch (e) {
      // 중복 push 에러는 무시 (정상)
    }
  }, [location.pathname]);

  return null;
}
