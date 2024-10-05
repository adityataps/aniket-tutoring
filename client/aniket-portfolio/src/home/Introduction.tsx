import React from "react";
import { Colors } from "../utilities/colors.constants";
import CustomText from "../components/CustomText";
import CustomButton from "../components/customButton";

const Introduction: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          backgroundColor: Colors.whiteColor,
          width: "50%",
          paddingTop: 100,
          paddingBottom: 100,
        }}
      >
        <div
          style={{
            marginLeft: 100,
            marginRight: 20,
            display: "flex",
            flexDirection: "column",
            rowGap: 25,
          }}
        >
          <img
            src="./src/assets/images/face.png"
            alt="Aniket face image"
            style={{ width: 120, height: 120, borderRadius: 100 }}
          />

          <CustomText fontSize={70} fontWeight={500}>
            Hello! I'm Aniket More
          </CustomText>
        </div>
      </div>
      <div style={{ backgroundColor: Colors.whiteColor, width: "50%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            rowGap: 25,
            marginLeft: 40,
            marginRight: 90,
            paddingTop: 100,
            paddingBottom: 100,
          }}
        >
          <CustomText
            fontSize={50}
            fontWeight={500}
            textColor={Colors.darkBlack}
          >
            A Full stack developer based in India.
          </CustomText>
          <CustomText fontSize={20} textColor={Colors.lightBlack}>
            Skilled in frontend, backend, database management, and cloud
            services, I build scalable, user-focused web applications using
            React.js and Node.js.
          </CustomText>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              columnGap: 30,
              marginTop: 30,
            }}
          >
            <CustomButton
              variant="contained"
              style={{
                width: "25%",
                backgroundColor: Colors.darkBlack,
                color: Colors.whiteColor,
                borderRadius: 12,
                padding: "12px 25px 12px 25px",
                fontSize: 16,
              }}
            >
              Hire me
            </CustomButton>
            <CustomButton
              variant="outlined"
              style={{
                width: "25%",
                backgroundColor: Colors.whiteColor,
                color: Colors.darkBlack,
                borderColor: Colors.darkBlack,
                borderWidth: 0.5,
                borderRadius: 12,
                padding: "12px 25px 12px 25px",
                fontSize: 16,
              }}
            >
              See my work
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
