// import React from 'react'
// import { BrowserRouter, Routes, Route, useLocation,Navigate } from "react-router-dom";
// import Navbar from './components/Navbar'
// import Navbar2 from './components/Navbar2'
// import Footer from './components/Footer'
// import Home from './Pages/Home'
// import About from './Pages/About'
// import Services from './Pages/Services'
// import Contact from './Pages/Contact'
// import Faq from './Pages/Faq'
// import Scroll from './components/Scroll'
// import Website from './components2/website'
// import VAPTServices from './components2/Vapt'
// import Mobileapp from "./components2/Mobileapp"
// import Digitalmarket from "./components2/Digitalmarket"
// import Dataanalytics from "./components2/Dataanalytics"
// import Researchdev from "./components2/Researchdev"
// import { Toaster } from "react-hot-toast";
// import Adminlogin from "./admin/Adminlogin";
// import Admindashboard from "./admin/Admindashboard";


// const App = () => {
//   return (
//     <BrowserRouter>
//       <Scroll />
//       <Navbar />
//       <Navbar2 />
//       <Toaster
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar={true}
//         closeButton={false}
//         newestOnTop
//         closeOnClick={false}
//         pauseOnHover
//       />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/faq" element={<Faq />} />
//         <Route path="/website" element={<Website />} />
//         <Route path="/vapt" element={<VAPTServices />} />
//         <Route path="/app" element={<Mobileapp />} />
//         <Route path="/digitalmarketing" element={<Digitalmarket />} />
//         <Route path="/dataanalytics" element={<Dataanalytics />} />
//         <Route path="/research" element={<Researchdev />} />
//         <Route path="/admin" element={<Adminlogin />} />
//         <Route path="/admindashboard" element={<Admindashboard />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App





// import React, { useEffect } from "react";
// import { useState } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Navigate,
//   useLocation,
// } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Navbar2 from "./components/Navbar2";
// import Footer from "./components/Footer";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Services from "./Pages/Services";
// import Contact from "./Pages/Contact";
// import Faq from "./Pages/Faq";
// import Scroll from "./components/Scroll";
// import Website from "./components2/website";
// import VAPTServices from "./components2/Vapt";
// import Mobileapp from "./components2/Mobileapp";
// import Digitalmarket from "./components2/Digitalmarket";
// import Dataanalytics from "./components2/Dataanalytics";
// import Researchdev from "./components2/Researchdev";
// import { Toaster } from "react-hot-toast";
// import Adminlogin from "./admin/Adminlogin";
// import Admindashboard from "./admin/Admindashboard";
// import Blog from "./Pages/Blog";
// import BlogDetail from "./Pages/Blogdetail";
// import Career from "./Pages/Career";
// import WhatsAppButton from "./components2/Whatsup";
// import EnquiryFormModal from "./components2/Enquiryform";
// import Couses from "./Pages/Couses";
// import Workshop from "./Pages/Workshop";
// import Intershipdrive from "./Pages/Intershipdrive";
// import Events from "./Pages/Events"
// import Newspaper from "./Pages/Newspaper";
// import CursorWrapper from "./components2/cursoranimation";

// //  import Projects from "./Pages/Projects";

// const EnquiryPopupController = () => {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (
//       location.pathname === "/admin" ||
//       location.pathname === "/admindashboard"
//     ) {
//       setIsOpen(false);
//       return;
//     }
//     // Open popup on page refresh or route change
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 1000); // delay for better UX

//     return () => clearTimeout(timer);
//   }, []); 

//   return <EnquiryFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
// };


// /* 🔒 Protected Route Logic */
// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("adminToken");
//   return token ? children : <Navigate to="/admin" replace />;
// };

// /* 🔁 Layout Wrapper to hide Navbar/Footer */
// const Layout = ({ children }) => {
//   const location = useLocation();
//   const isAdminDashboard = location.pathname === "/admindashboard";
  

//   return (
//     <>
//       {!isAdminDashboard  && <Navbar />}
//       {!isAdminDashboard && <Navbar2 />}
//       {children}
//       {!isAdminDashboard && <Footer />}
//       {!isAdminDashboard && <WhatsAppButton />}
//     </>
//   );
// };


// const App = () => {
//   return (
//     <CursorWrapper>
//       <BrowserRouter>
//         <EnquiryPopupController />
//         <Scroll />
//         <Toaster
//           position="top-center"
//           autoClose={3000}
//           hideProgressBar
//           closeButton={false}
//           newestOnTop
//           closeOnClick={false}
//           pauseOnHover
//         />

//         <Layout>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/faq" element={<Faq />} />
//             <Route path="/website/:slug" element={<Website />} />
//             <Route path="/vapt/:slug" element={<VAPTServices />} />
//             <Route path="/app/:slug" element={<Mobileapp />} />
//             <Route path="/digitalmarketing/:slug" element={<Digitalmarket />} />
//             <Route path="/dataanalytics/:slug" element={<Dataanalytics />} />
//             <Route path="/research/:slug" element={<Researchdev />} />
//             <Route path="/admin" element={<Adminlogin />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/blog/:slug" element={<BlogDetail />} />
//             <Route path="/career" element={<Career />} />
//             <Route path="/courses" element={<Couses />} />
//             <Route path="/workshop" element={<Workshop />} />
//             <Route path="/internship" element={<Intershipdrive />} />
//             <Route path="/events" element={<Events />} />
//             <Route path="/newspaper" element={<Newspaper />} />
            

//             {/* 🔐 Protected Admin Dashboard */}
//             <Route
//               path="/admindashboard"
//               element={
//                 <ProtectedRoute>
//                   <Admindashboard />
//                 </ProtectedRoute>
//               }
//             />
//           </Routes>
//         </Layout>
//       </BrowserRouter>
//     </CursorWrapper>
//   );
// };

// export default App;




import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import Scroll from "./components/Scroll";
import Website from "./components2/website";
import VAPTServices from "./components2/Vapt";
import Mobileapp from "./components2/Mobileapp";
import Digitalmarket from "./components2/Digitalmarket";
import Dataanalytics from "./components2/Dataanalytics";
import Researchdev from "./components2/Researchdev";
import { Toaster } from "react-hot-toast";
import Adminlogin from "./admin/Adminlogin";
import Admindashboard from "./admin/Admindashboard";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/Blogdetail";
import Career from "./Pages/Career";
import WhatsAppButton from "./components2/Whatsup";
import EnquiryFormModal from "./components2/Enquiryform";
import Couses from "./Pages/Couses";
import Workshop from "./Pages/Workshop";
import Intershipdrive from "./Pages/Intershipdrive";
import Events from "./Pages/Events";
import Newspaper from "./Pages/Newspaper";
import CursorWrapper from "./components2/cursoranimation";
import NotFound from "./Pages/Pagenotfound"; 
import Jaspreet from "./Pages/Jaspreet";

// Enquiry Popup 
const EnquiryPopupController = () => { 
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   if (
  //     location.pathname === "/tryhackme" ||
  //     location.pathname === "/accessgranted" ||
  //     location.pathname === "/not-found"
  //   ) {
  //     setIsOpen(false);
  //     return;
  //   }

  //   const timer = setTimeout(() => {
  //     setIsOpen(true);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);




  useEffect(() => {
    const disablePopupRoutes = [
      "/",
      "/tryhackme",
      "/accessgranted",
      "/not-found",
    ];

    if (disablePopupRoutes.includes(location.pathname)) {
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);



  

  return <EnquiryFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
};

/* Protected Route */
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/tryhackme" replace />;
};

/* Layout Wrapper */
const Layout = ({ children }) => {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/accessgranted" ||
    location.pathname === "/tryhackme" ||
    location.pathname === "/not-found" ||
    location.pathname === "/jaspreet";

  return (
    <>
      {!hideLayout && <Navbar />}
      {!hideLayout && <Navbar2 />}
      {children}
      {!hideLayout && <Footer />}
      {!hideLayout && <WhatsAppButton />}
     
    </>
  );
};


const App = () => {
  return (
    <CursorWrapper>
      <BrowserRouter>
        <EnquiryPopupController />
        <Scroll />

        <Toaster
          position="top-center"
          autoClose={3000}
          hideProgressBar
          closeButton={false}
        />

        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/website/:slug" element={<Website />} />
            <Route path="/vapt/:slug" element={<VAPTServices />} />
            <Route path="/app/:slug" element={<Mobileapp />} />
            <Route path="/digitalmarketing/:slug" element={<Digitalmarket />} />
            <Route path="/dataanalytics/:slug" element={<Dataanalytics />} />
            <Route path="/research/:slug" element={<Researchdev />} />
            <Route path="/tryhackme" element={<Adminlogin />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/career" element={<Career />} />
            <Route path="/courses" element={<Couses />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/internship" element={<Intershipdrive />} />
            <Route path="/events" element={<Events />} />
            <Route path="/newspaper" element={<Newspaper />} />
            <Route path="/jaspreet" element={<Jaspreet />} />

            {/*Admin Dashboard */}
            <Route
              path="/accessgranted"
              element={
                <ProtectedRoute>
                  <Admindashboard />
                </ProtectedRoute>
              }
            />

            {/*  Not Found */}
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CursorWrapper>
  );
};

export default App;


