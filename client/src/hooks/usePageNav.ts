import { useLocation } from "wouter";
import { getPageNav } from "@/lib/navigation";

export function usePageNav() {
  const [location] = useLocation();
  return getPageNav(location);
}
