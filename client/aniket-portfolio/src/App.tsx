import "./App.css";
import CustomButton from "./components/customButton";
import Home from "./home/Home";
import { Colors } from "./utilities/colors.constants";

function App() {
  return (
    <div>
      <div className="page-container">
        <div className="main-container">
          <div className="sidebar">
            <div className="sidebar-content">
              <div className="am-logo">
                <img
                  src="./src/assets/images/AM-logo.png"
                  className="am-logo-img"
                  alt="AM tag logo"
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
                    justifyContent: "center",
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
                    justifyContent: "center",
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
                    justifyContent: "center",
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
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                >
                  About me
                </CustomButton>
              </div>
            </div>
          </div>
          <Home></Home>
        </div>
        <div className="bottom-bar"></div>
      </div>
    </div>
  );
}

export default App;
