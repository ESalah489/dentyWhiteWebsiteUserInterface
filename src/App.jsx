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
import RoleProtectedRoute from "./guards/RoleProtectedRoute";
import Unauthorized from "./Pages/RolesPages/Unauthorized";
import Notfound from "./Pages/RolesPages/Notfound";
import BookAppointment from "./Pages/AppointmentPages/Appointment/BookAppointment"
import MyAppointments from "./Pages/AppointmentPages/MyAppointments/MyAppointments";
import CreatePayment from "./Pages/PaymentPages/CreatePayment";
import SuccessPayment from "./Pages/PaymentPages/SuccessPayment";
import FailedPayment from "./Pages/PaymentPages/FailedPayment";
import SelectPaymentMethod from "./Pages/PaymentPages/SelectPaymentMethod";

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
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route element={<RoleProtectedRoute allowedRoles={["admin"]} />}>
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
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/payment/create/:appointmentId/:gateway" element={<CreatePayment />} />
        <Route path="/payment/success" element={<SuccessPayment />} />
        <Route path="/payment/failure" element={<FailedPayment />} />
        <Route path="/payment/method/:appointmentId" element={<SelectPaymentMethod />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
      {!shouldHideNavbar && <Footer />}
    </>
  );
}

export default App;
