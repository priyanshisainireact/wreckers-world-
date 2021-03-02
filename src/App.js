import React, { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {
  auth,
  firebase,
  createUserProfileDocument,
} from "./firebase/firebase.utils";

import { Helmet } from "react-helmet";

import ChooseProfile from "./views/pages/profile/ChooseProfile";

import Spinner from "./views/spinner/Spinner";
const Header = lazy(() => import("./header/Header"));
const Footer = lazy(() => import("./footer/Footer"));
const Homepage = lazy(() => import("./views/pages/homepage/Homepage"));
const BasicForms = lazy(() => import("./views/pages/yardlisting/form"));
const YardListing = lazy(() => import("./views/pages/yardlisting/YardListing"));
const DetailsPage = lazy(() => import("./views/pages/yardlisting/DetailsPage"));
const Login = lazy(() => import("./views/pages/login/Login"));
const Register = lazy(() => import("./views/pages/register/Register"));
const Subscription = lazy(() =>
  import("./views/pages/subscription/Subscription")
);
const CaruserProfile = lazy(() =>
  import("./views/pages/profile/Caruserprofile")
);
const YarduserProfile = lazy(() =>
  import("./views/pages/profile/Yarduserprofile")
);
const Forgot = lazy(() =>
  import("./views/pages/forgotpassword/ForgotPassword")
);
const BidForm = lazy(() => import("./views/pages/bidding/BidForm"));
const CarListing = lazy(() => import("./views/pages/bidding/CarListing"));
const CarDetail = lazy(() => import("./views/pages/bidding/CarDetail"));
const ResetPassword = lazy(() =>
  import("./views/pages/forgotpassword/ResetPassword")
);
const Faq = lazy(() => import("./views/pages/StaticPages/Faq"));
const Contact = lazy(() => import("./views/pages/StaticPages/Contact"));
const CarUserForm = lazy(() => import("./views/pages/profile/carUser"));
const YardUserForm = lazy(() => import("./views/pages/profile/yardUser"));
const BidSubscription = lazy(() =>
  import("./views/pages/subscription/bidSubscription")
);
const AdminEventForms = lazy(() =>
  import("./views/pages/admin/event/eventForm")
);
const CaruserRating = lazy(() => import("./views/pages/profile/carUserRating"));
const Admin = lazy(() => import("./views/pages/admin/admin"));

const App = () => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [isLogin, setIsLogin] = React.useState(false);
  React.useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }
      setCurrentUser({ userAuth });
      setIsLogin(true);
    });
    return () => {
      unsubscribeFromAuth();
      setIsLogin(false);
    };
  }, []);
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>WreckersWorld-AppPage</title>
        <meta name="description" content="This Is App Page" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Header currentUser={currentUser} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/homepage">
              <Homepage />
            </Route>
            <Route exact path="/listyouryard">
              <BasicForms />
            </Route>
            <Route exact path="/yardlisting">
              <YardListing />
            </Route>
            <Route exact path="/detailpage">
              <DetailsPage />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/subscription">
              <Subscription />
            </Route>
            <Route exact path="/caruserprofile">
              <CaruserProfile />
            </Route>
            <Route exact path="/yarduserprofile">
              <YarduserProfile />
            </Route>
            <Route exact path="/forgotpassword">
              <Forgot />
            </Route>
            <Route exact path="/resetpassword">
              <ResetPassword />
            </Route>
            <Route exact path="/bidform">
              <BidForm />
            </Route>
            <Route exact path="/carlisting">
              <CarListing />
            </Route>
            <Route exact path="/cardetail">
              <CarDetail />
            </Route>
            <Route exact path="/faq">
              <Faq />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/caruserdetail" currentUser={currentUser}>
              <CarUserForm />
            </Route>
            <Route exact path="/bidsubscription">
              <BidSubscription />
            </Route>
            <Route exact path="/eventform">
              <AdminEventForms />
            </Route>
            <Route exact path="/yarduserdetail">
              <YardUserForm />
            </Route>
            <Route exact path="/caruserrating">
              <CaruserRating />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route exact path="/yarduser">
              <YardUserForm />
            </Route>
            <Route exact path="/caruser">
              <CarUserForm />
            </Route>
            <Route exact path="/chooseprofile">
              <ChooseProfile />
            </Route>
          </Switch>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
