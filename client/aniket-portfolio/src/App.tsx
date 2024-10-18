import "./App.css";
import AboutMe from "./pages/about-me/AboutMe";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Resume from "./pages/resume/Resume";
import {
  createBrowserRouter,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  BrowserRouter,
} from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Home />}>
//       <Route index element={<Home />} />
//       <Route path="projects" element={<Projects />} />
//       <Route path="resume" element={<Resume />} />
//       <Route path="about-me" element={<AboutMe />} />
//     </Route>
//   )
// );

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "projects",
//     element: <Projects />,
//   },
//   {
//     path: "resume",
//     element: <Resume />,
//   },
//   {
//     path: "about-me",
//     element: <AboutMe />,
//   },
// ]);

function App() {
  return (
    <BrowserRouter>
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
                <NavLink to={"/"} className="navlink">
                  <img src="./src/assets/images/home-logo.png" />
                  <li>Home</li>
                </NavLink>
                <NavLink to={"/projects"} className="navlink">
                  <img src="./src/assets/images/projects-logo.png" />
                  <li>Projects</li>
                </NavLink>
                <NavLink to={"/resume"} className="navlink">
                  <img src="./src/assets/images/resume-logo.png" />
                  <li>Resume</li>
                </NavLink>
                <NavLink to={"/about-me"} className="navlink">
                  <img src="./src/assets/images/about-me-logo.png" />
                  <li>About me</li>
                </NavLink>
              </div>
            </div>
          </div>
          <div>
            {/* <RouterProvider router={router} /> */}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="projects" element={<Projects />} />
              <Route path="resume" element={<Resume />} />
              <Route path="about-me" element={<AboutMe />} />
            </Routes>
          </div>
        </div>
        <div className="bottom-bar"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
