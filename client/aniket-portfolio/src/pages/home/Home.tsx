import "./home.css";
import CustomText from "../../components/CustomText";
import { Colors } from "../../utilities/colors.constants";

function Home() {
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
          <a href="https://www.linkedin.com/in/aniketmore19/">
            <img src="./src/assets/images/linkedin-icon.png" />
          </a>
        </div>
        <div className="social-media">
          <a href="https://github.com/Aniket-More-19">
            <img src="./src/assets/images/github-icon.png" />
          </a>
        </div>
        <div className="social-media">
          <a href="https://x.com/AniketMore19a">
            <img src="./src/assets/images/x-icon.png" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
