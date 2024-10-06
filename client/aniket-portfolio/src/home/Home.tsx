import React from "react";
import NavBar from "./NavBar.tsx";
import Introduction from "./Introduction.tsx";
import { ExperienceSkills } from "./ExperienceSkills.tsx";

const Home: React.FC = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Introduction />
      <ExperienceSkills></ExperienceSkills>
    </div>
  );
};

export default Home;
