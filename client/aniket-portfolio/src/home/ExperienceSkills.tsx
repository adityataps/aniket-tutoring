import React from "react";
import "./exp-skills.css";
import CustomText from "../components/CustomText.tsx";
import { Colors } from "../utilities/colors.constants.ts";
import CustomButton from "../components/customButton.tsx";

export const ExperienceSkills: React.FC = () => {
  return (
    <div className="exp-skills-container">
      {/* Working experience */}
      <div className="exp-container">
        <CustomText fontSize={45}>Working Experience</CustomText>
        <div className="exp-content">
          <div className="experience-1">
            <div
              style={{ backgroundColor: Colors.whiteColor, borderRadius: 20 }}
            >
              <img
                style={{
                  width: 45,
                  height: 45,
                  padding: 20,
                }}
                src="./src/assets/images/experience.png"
                alt=""
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: 10,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <CustomText fontSize={28}>React Native Intern</CustomText>
              <CustomText
                fontSize={20}
                fontWeight={300}
                textColor={Colors.lightBlack}
              >
                May 2024 - June 2024
              </CustomText>
            </div>
          </div>
          {/* Experience 2*/}
          <div className="experience-2">
            <div
              style={{ backgroundColor: Colors.whiteColor, borderRadius: 20 }}
            >
              <img
                style={{
                  width: 45,
                  height: 45,
                  padding: 20,
                }}
                src="./src/assets/images/experience.png"
                alt=""
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: 10,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <CustomText fontSize={28}>React Native Developer</CustomText>
              <CustomText
                fontSize={20}
                fontWeight={300}
                textColor={Colors.lightBlack}
              >
                July 2024 - August 2024
              </CustomText>
            </div>
          </div>
        </div>
      </div>
      {/* Technical Skills */}
      <div className="skills-container">
        <CustomText fontSize={45}>Technical Skills</CustomText>
        <div className="skills-list">
          <CustomButton
            fontSize={22}
            fontWeight={500}
            variant="outlined"
            textColor={Colors.darkBlack}
            style={{ borderColor: Colors.mediumBlack }}
          >
            Java
          </CustomButton>
          <CustomButton
            fontSize={22}
            fontWeight={500}
            variant="outlined"
            textColor={Colors.darkBlack}
            style={{ borderColor: Colors.mediumBlack }}
          >
            Data Structures & Algorithms
          </CustomButton>
          <CustomButton
            fontSize={22}
            fontWeight={500}
            variant="outlined"
            textColor={Colors.darkBlack}
            style={{ borderColor: Colors.mediumBlack }}
          >
            React JS
          </CustomButton>
          <CustomButton
            fontSize={22}
            fontWeight={500}
            variant="outlined"
            textColor={Colors.darkBlack}
            style={{ borderColor: Colors.mediumBlack }}
          >
            Typescript
          </CustomButton>
          <CustomButton
            fontSize={22}
            fontWeight={500}
            variant="outlined"
            textColor={Colors.darkBlack}
            style={{ borderColor: Colors.mediumBlack }}
          >
            SQL
          </CustomButton>
          <CustomButton
            fontSize={22}
            fontWeight={500}
            variant="outlined"
            textColor={Colors.darkBlack}
            style={{ borderColor: Colors.mediumBlack }}
          >
            Ubuntu Linux
          </CustomButton>
          <CustomButton
            fontSize={22}
            fontWeight={500}
            variant="outlined"
            textColor={Colors.darkBlack}
            style={{ borderColor: Colors.mediumBlack }}
          >
            HTML & CSS
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
