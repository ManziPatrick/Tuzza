import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "pages/NotFound";
const DesktopThree = React.lazy(() => import("pages/DesktopThree"));

const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/gallary" element={<DesktopThree />} />
          </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

