import RootLayout, { ErrorBoundary } from "./root";
import AboutPage from "./routes/about";
import Home from "./routes/home";
import ProjectPage from "./routes/projects";

export default [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <ProjectPage /> },
      { path: "about", element: <AboutPage/>}
    ],
  },
];
