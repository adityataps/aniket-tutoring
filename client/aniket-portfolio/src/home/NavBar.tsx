import React from "react";
import { Colors } from "../utilities/colors.constants";
import CustomText from "../components/CustomText";
import CustomButton from "../components/customButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";

const NavBar: React.FC = () => {
  return (
    <nav
      style={{
        backgroundColor: Colors.whiteColor,
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            columnGap: 80,
            marginLeft: 50,
          }}
        >
          <img
            src="./src/assets/images/AM-logo.png"
            style={{ width: 55, height: 55, marginRight: 40 }}
          ></img>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: 60,
              marginTop: 20,
            }}
          >
            <CustomText fontSize={22} fontWeight={300} onClick={() => {}}>
              Home
            </CustomText>
            <CustomText fontSize={22} fontWeight={300} onClick={() => {}}>
              Projects
            </CustomText>
            <CustomText fontSize={22} fontWeight={300} onClick={() => {}}>
              Resume
            </CustomText>
            <CustomText fontSize={22} fontWeight={300} onClick={() => {}}>
              About me
            </CustomText>
          </div>
        </ul>

        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: 30,
            marginRight: 80,
          }}
        >
          <a href="https://www.linkedin.com/in/aniketmore19/">
            <CustomButton
              variant="outlined"
              style={{
                borderRadius: 100,
                borderColor: Colors.mediumBlack,
                width: 65,
                height: 65,
              }}
            >
              {
                <LinkedInIcon
                  style={{
                    color: Colors.mediumBlack,
                    width: 30,
                    height: 30,
                  }}
                />
              }
            </CustomButton>
          </a>
          <a href="https://github.com/Aniket-More-19">
            <CustomButton
              variant="outlined"
              style={{
                borderRadius: 100,
                borderColor: Colors.mediumBlack,
                width: 65,
                height: 65,
              }}
            >
              <GitHubIcon
                style={{ color: Colors.mediumBlack, width: 30, height: 30 }}
              />
            </CustomButton>
          </a>
          <a href="https://x.com/AniketMore19a">
            <CustomButton
              variant="outlined"
              style={{
                borderRadius: 100,
                borderColor: Colors.mediumBlack,
                width: 65,
                height: 65,
              }}
            >
              <XIcon
                style={{ color: Colors.mediumBlack, width: 30, height: 30 }}
              />
            </CustomButton>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
