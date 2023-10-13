import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import LoadingSkeleton from 'components/LoadingSkeleton';
import Booking from "./pages/booking"

// Import your components using React.lazy
const Home1 = lazy(() => import('pages/Home1'));
const DesktopThree = lazy(() => import('pages/DesktopThree'));


const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<React.Suspense fallback={<LoadingSkeleton />}><Home1 /></React.Suspense>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/gallery" element={<React.Suspense fallback={<LoadingSkeleton />}><DesktopThree /></React.Suspense>} />
        <Route path="/booking" element={<React.Suspense fallback={<LoadingSkeleton />}><Booking /></React.Suspense>} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
