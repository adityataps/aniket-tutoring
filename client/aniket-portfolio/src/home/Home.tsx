import React from "react";
import "./home.css";
import CustomButton from "../components/customButton";
import { Colors } from "../utilities/colors.constants";
import CustomText from "../components/CustomText";
import XIcon from "@mui/icons-material/X";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="main-container">
        <div className="sidebar">
          <div className="sidebar-content">
            <div className="am-logo">
              <img
                src="./src/assets/images/AM-logo.png"
                alt="AM tag logo"
                style={{ width: "55%" }}
              />
            </div>
            <div className="navigation-container">
              <CustomButton
                variant="contained"
                startIcon={
                  <img
                    src="./src/assets/images/home-logo.png
                  "
                    style={{
                      width: 35,
                      height: 35,
                      marginRight: 10,
                    }}
                  />
                }
                textColor={Colors.darkBlack}
                fontSize={25}
                fontWeight={400}
                style={{
                  padding: 10,
                  backgroundColor: "#D8E7FF",
                  display: "flex",
                  justifyContent: "flex-start",
                  paddingLeft: 60,
                  borderRadius: 10,
                }}
              >
                Home
              </CustomButton>
              <CustomButton
                variant="contained"
                startIcon={
                  <img
                    src="./src/assets/images/projects-logo.png
                  "
                    style={{
                      width: 35,
                      height: 35,
                      marginRight: 10,
                    }}
                  />
                }
                textColor={Colors.darkBlack}
                fontSize={25}
                fontWeight={400}
                style={{
                  padding: 10,
                  backgroundColor: "#D8E7FF",
                  display: "flex",
                  justifyContent: "flex-start",
                  paddingLeft: 60,
                  borderRadius: 10,
                }}
              >
                Projects
              </CustomButton>
              <CustomButton
                variant="contained"
                startIcon={
                  <img
                    src="./src/assets/images/resume-logo.png
                  "
                    style={{
                      width: 35,
                      height: 35,
                      marginRight: 10,
                    }}
                  />
                }
                textColor={Colors.darkBlack}
                fontSize={25}
                fontWeight={400}
                style={{
                  padding: 10,
                  backgroundColor: "#D8E7FF",
                  display: "flex",
                  justifyContent: "flex-start",
                  paddingLeft: 60,
                  borderRadius: 10,
                }}
              >
                Resume
              </CustomButton>
              <CustomButton
                variant="contained"
                startIcon={
                  <img
                    src="./src/assets/images/about-me-logo.png
                  "
                    style={{
                      width: 35,
                      height: 35,
                      marginRight: 10,
                    }}
                  />
                }
                textColor={Colors.darkBlack}
                fontSize={25}
                fontWeight={400}
                style={{
                  padding: 10,
                  backgroundColor: "#D8E7FF",
                  display: "flex",
                  justifyContent: "flex-start",
                  paddingLeft: 60,
                  borderRadius: 10,
                }}
              >
                About me
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="home-content">
          <img src="" className="profile-img" />
          <CustomText fontSize={70} fontWeight={700}>
            I'm Aniket More
          </CustomText>
          <CustomText
            fontSize={20}
            fontWeight={300}
            textColor={Colors.lightBlack}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, cum
            nulla neque totam, debitis id esse saepe iste minus quasi
            praesentium a porro in qui illo? debitis id esse saepe iste minus
            quasi praesentium a porro in qui illo?
          </CustomText>

          <div className="social-media-links">
            <div className="social-media">
              <img
                src="./src/assets/images/linkedin-icon.png"
                style={{ width: 33, height: 33 }}
              />
            </div>
            <div className="social-media">
              <img
                src="./src/assets/images/github-icon.png"
                style={{ width: 33, height: 33 }}
              />
            </div>
            <div className="social-media">
              <XIcon style={{ width: 33, height: 33 }} />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar"></div>
    </div>
  );
};

export default Home;
