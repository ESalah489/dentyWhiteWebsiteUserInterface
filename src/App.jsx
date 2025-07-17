import { Navigate, Route, Routes, useLocation } from "react-router";
import "./App.css";
import SignIn from "./Pages/Auth/SignIn/SignIn";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import ForgetPassword from "./Pages/Auth/ForgetPassword/ForgetPassword";
import ResetPassword from "./Pages/Auth/ResetPassword/ResetPassword";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Layout from "./Pages/AdminDashboard/Layout";
import Status from "./Pages/AdminDashboard/Status";
import Clients from "./Pages/AdminDashboard/Clients/Clients";
import Doctors from "./Pages/AdminDashboard/Doctors/Doctors";
import Services from "./Pages/AdminDashboard/Services/Services";
import Categories from "./Pages/AdminDashboard/Categories/Categories";
import Appointments from "./Pages/AdminDashboard/Appointments/Appointments";
import ClinicReviews from "./Pages/AdminDashboard/ClinicReviews/ClinicReviews";
import DoctorsReviews from "./Pages/AdminDashboard/DoctorsReviews/DoctorsReviews";
import RoleProtectedRoute from "./guards/RoleProtectedRoute";
import Unauthorized from "./Pages/RolesPages/Unauthorized";
import Notfound from "./Pages/RolesPages/Notfound";
import Profile from "./Pages/Profiles/Profile";
import Information from "./Pages/Profiles/Information/Information";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();
  const hideNavbarOnRoutes = [
    "/layout",
    "/layout/table",
    "/layout/clinets",
    "/layout/doctors",
    "/layout/services",
    "/layout/categories",
    "/layout/appointments",
    "/layout/clinic-reviews",
    "/layout/doctor-reviews",
    "/profile/appointments",
    "/profile/services",
    "/profile/information",
  ];
  const shouldHideNavbar = hideNavbarOnRoutes.includes(
    location.pathname.toLowerCase()
  );

  return (
    <>
      {!shouldHideNavbar && <NavBar />}{" "}
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route element={<RoleProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/layout" element={<Layout />}>
            <Route index element={<Navigate to="table" />} />
            <Route path="table" element={<Status />} />
            <Route path="clinets" element={<Clients />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="services" element={<Services />} />
            <Route path="categories" element={<Categories />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="clinic-reviews" element={<ClinicReviews />} />
            <Route path="doctor-reviews" element={<DoctorsReviews />} />
          </Route>
        </Route>
        <Route
          element={
            <RoleProtectedRoute allowedRoles={["client", "doctor", "admin"]} />
          }
        >
          <Route path="/profile" element={<Profile />}>
            <Route index element={<Navigate to="information" />} />
            <Route path="information" element={<Information />} />
            <Route path="services" />
            <Route path="appointments" />
          </Route>
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      {!shouldHideNavbar && <Footer />}
    </>
  );
}

export default App;
