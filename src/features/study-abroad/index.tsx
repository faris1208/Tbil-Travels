import React from "react";
import StudyAbroadHero from "./components/hero";
import StudyAbroadExplore from "./components/explore";
import StudyAbroadOurServices from "./components/our-services";
import StudyAbroadRecentNews from "./components/recent-news";
import StudyAbroadSponsors from "./components/sponsors";

export default function StudyAbroadPage() {
  return (
    <div>
      <StudyAbroadHero />
      <StudyAbroadExplore />
      <StudyAbroadOurServices />
      <StudyAbroadSponsors />
      <StudyAbroadRecentNews />
    </div>
  );
}
