import { useEffect } from "react";

const BASE_TITLE = "Lyra — Builder OS";

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Lyra` : BASE_TITLE;
    return () => {
      document.title = BASE_TITLE;
    };
  }, [title]);
}
