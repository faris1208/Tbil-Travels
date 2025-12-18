"use client";

import { usePathname } from "next/navigation";
import Navbar from "../navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Hide main navbar on study abroad pages
  if (pathname?.startsWith("/study-abroad")) {
    return null;
  }
  
  return <Navbar />;
}

