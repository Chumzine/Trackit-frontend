import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import  VerifyWithOTP from "./component/Pages/Verify/Verify";
import { LandingPage } from "./component/Pages/LandingPage/LandingPage";
import LoginPage from './component/Pages/Login/Login';
import { SignupPage } from './component/Pages/Signup';
import { Profile } from './component/Pages/ProfileSettings';
import { Support } from './component/Pages/Support';
import { HomePage } from "./component/Home/Home";
import { Orders} from "./component/Pages/Orders/index"
import {Tracking} from "./component/Pages/Tracking/Tracking"
import Chatbox from "./component/Pages/Chatbot/index"
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
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
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "chatbox",
    element: <Chatbox/>,
  },
  // {
  //   path: "",
  //   element: (
  //     <IsProtectedRoute>
  //       <VerifyWithOTP />
  //     </IsProtectedRoute>
  //   ),
  // },
  {
    path: 'profile',
    element: <Profile />
  },
  {
    path: 'support',
    element: <Support />
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
//   <SideNav />
//   <Switch>
//     <Route path='/' />
//   </Switch>
// </Router>
// </>
