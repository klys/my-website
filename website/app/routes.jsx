import RootLayout, { ErrorBoundary } from "./root";
import AboutPage from "./routes/about";
import AcademicCredentialsPage from "./routes/academic-credentials";
import Home from "./routes/home";
import ProfessionalExperiencePage from "./routes/professional-experience";
import ProjectPage from "./routes/projects";

export default [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <AboutPage /> },
      { path: "home", element: <Home /> },
      { path: "projects", element: <ProjectPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "professional-experience", element: <ProfessionalExperiencePage /> },
      { path: "academic-credentials", element: <AcademicCredentialsPage /> },
    ],
  },
];
