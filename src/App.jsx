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
import Appointments from "./Pages/AdminDashboard/Appointments/Appointments";
import ClinicReviews from "./Pages/AdminDashboard/ClinicReviews/ClinicReviews";
import DoctorsReviews from "./Pages/AdminDashboard/DoctorsReviews/DoctorsReviews";

function App() {
  const location = useLocation();
  const hideNavbarOnRoutes = [
    "/layout",
    "/layout/table",
    "/layout/clinets",
    "/layout/doctors",
    "/layout/services",
    "/layout/appointments",
    "/layout/clinic-reviews",
    "/layout/doctor-reviews",
  ];
  const shouldHideNavbar = hideNavbarOnRoutes.includes(
    location.pathname.toLowerCase()
  );

  return (
    <>
      {!shouldHideNavbar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/restpassword" element={<ResetPassword />} />
        <Route path="/layout" element={<Layout />}>
          <Route index element={<Navigate to="table" />} />
          <Route path="table" element={<Status />} />
          <Route path="clinets" element={<Clients />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="services" element={<Services />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="clinic-reviews" element={<ClinicReviews />} />
          <Route path="doctor-reviews" element={<DoctorsReviews />} />
        </Route>
      </Routes>
      {!shouldHideNavbar && <Footer />}
    </>
  );
}

export default App;
