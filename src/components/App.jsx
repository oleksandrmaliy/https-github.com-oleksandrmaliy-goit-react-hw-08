import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/Home'));
const RegistrationPage = lazy(() => import('../pages/Registration'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

// import Contacts from '../pages/Contacts';

import './App.css';

const App = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Suspense>
        <Toaster />
      </Layout>
    </>
  );
};

export default App;

// import { lazy, Suspense } from "react";
// import { Route, Routes } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import Layout from "./Layout/Layout";

// const HomePage = lazy(() => import("../pages/Home"));
// const RegisterPage = lazy(() => import("../pages/Register"));
// const LoginPage = lazy(() => import("../pages/Login"));
// const TasksPage = lazy(() => import("../pages/Tasks"));

// export default function App() {
//   return (
//     <Layout>
//       <Suspense fallback={null}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/tasks" element={<TasksPage />} />
//         </Routes>
//       </Suspense>
//       <Toaster />
//     </Layout>
//   );
// }