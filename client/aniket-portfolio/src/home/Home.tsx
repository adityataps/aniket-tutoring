import React from "react";
import "./home.css";
import CustomText from "../components/CustomText";
import XIcon from "@mui/icons-material/X";
import { Colors } from "../utilities/colors.constants";

const Home: React.FC = () => {
  return (
    <div className="home-content">
      <img src="" className="profile-img" />
      <CustomText fontSize={70} fontWeight={700}>
        I'm Aniket More
      </CustomText>
      <CustomText fontSize={20} fontWeight={300} textColor={Colors.lightBlack}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, cum
        nulla neque totam, debitis id esse saepe iste minus quasi praesentium a
        porro in qui illo? debitis id esse saepe iste minus quasi praesentium a
        porro in qui illo?
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
  );
};

export default Home;
