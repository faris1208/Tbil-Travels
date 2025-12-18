import React from "react";
import StudyAbroadNavbar from "@/src/components/study-abroad-navbar";

export default function StudyAbroadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <StudyAbroadNavbar />
      <main>{children}</main>
    </div>
  );
}

