import "./App.css";
import "leaflet/dist/leaflet.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VerifyWithOTP from "./component/Pages/Verify/Verify";
import { LandingPage } from "./component/Pages/LandingPage/LandingPage";
import LoginPage from './component/Pages/Login/Login';
import { SignupPage } from './component/Pages/Signup';
import { Profile } from './component/Pages/ProfileSettings';
import { Support } from './component/Pages/Support';
import { HomePage } from "./component/Pages/Home/Home";
import { Orders } from "./component/Pages/Orders/index";
import { IsProtectedRoute } from './hoc/IsProtectedRoute';
import { Tracking } from "./component/Pages/Tracking/Tracking";
import { PayStack } from "./component/Pages/Payment";
import { Wallet } from "./component/Pages/Wallet";
import { WebReceipt } from "./component/Pages/Receipt";
import Chatbot from "./component/Pages/Chatbot/ChatBot";
import RiderInfo from "./component/Pages/Tracking/Riderweb2";
import RiderStatus from "./component/Pages/Tracking/Riderweb1";
import CancelConfirmation from "./component/Pages/Tracking/Cancelrequest";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "orders",
    element: <Orders />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "tracking",
    element: <Tracking />,
  },
  {
    path: "verify",
    element: (
      <IsProtectedRoute>
        <VerifyWithOTP />
      </IsProtectedRoute>
    )
  },
  {
     path: "chatbot",
     element: <Chatbot />,
  },
  {
    path: 'settings',
    element: <Profile />
  },
  {
    path: 'support',
    element: <Support />
  },
  {
    path: 'wallet',
    element: <Wallet />
  },
  {
    path: 'payment',
    element: <PayStack />
  },
  {
    path: 'receipt',
    element: <WebReceipt />
  },
  {
    path: "confirmorder2",
    element: <RiderInfo />,
  },
  {
    path: "confirmorder",
    element: <RiderStatus />,
  },
  {
    path: "cancelrequest",
    element: <CancelConfirmation />,
  },
  {
    path: '*',
    element: <h1 style={{ color: 'black', fontSize: 100}}>404</h1>
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// import { BrowserRouter as Route, Switch, Router } from 'react-router-dom';
// <>
// <Router>
//   <CustomSideNav />
//   <Switch>
//     <Route path='/' />
//   </Switch>
// </Router>
// </>
