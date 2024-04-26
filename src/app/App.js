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
import { IsProtectedRoute } from './hoc/IsProtectedRoute';
import { CustomSideNav } from "./component/CustomSideNav/CustomSideNavigation";


const router = createBrowserRouter([
  {
    path: "landingpage",
    element: <LandingPage />,
  },
  {
    path: "orders",
    element: <Orders/>,
  },
  {
    path: "home",
    element: <HomePage />,
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
    path: "verify",
    element: (
      <IsProtectedRoute>
        <VerifyWithOTP />
      </IsProtectedRoute>
    ),
  },
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
