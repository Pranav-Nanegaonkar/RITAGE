import React from "react";
import FrontPage from "./pages/FrontPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import StudentHome, { studentLoader } from "./pages/StudentHome";
import ProtectedRoute from "./layouts/ProtectedRoute";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<FrontPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/student-home" element={<StudentHome />} loader={studentLoader} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
