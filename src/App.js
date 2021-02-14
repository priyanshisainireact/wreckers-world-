import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import './scss/style.scss';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Homepage from "./views/pages/homepage/Homepage";
import BasicForms from "./views/pages/yardlisting/form";
// import YardDetails from './views/pages/yardlisting/YardDetails';
import YardListing from "./views/pages/yardlisting/YardListing";
import DetailsPage from "./views/pages/yardlisting/DetailsPage";
import Login from "./views/pages/login/Login";
import Register from "./views/pages/register/Register";
import Subscription from "./views/pages/subscription/Subscription";
import CaruserProfile from "./views/pages/profile/Caruserprofile";
import YarduserProfile from "./views/pages/profile/Yarduserprofile";
import Forgot from "./views/pages/forgotpassword/ForgotPassword";
import BidForm from "./views/pages/bidding/BidForm";
import CarListing from "./views/pages/bidding/CarListing";
import CarDetail from "./views/pages/bidding/CarDetail";
import ResetPassword from "./views/pages/forgotpassword/ResetPassword";
import Faq from "./views/pages/StaticPages/Faq";
import Contact from "./views/pages/StaticPages/Contact";
import CarUserForm from "./views/pages/profile/carUser";
import BidSubscription from "./views/pages/subscription/bidSubscription";
import AdminEventForms from "./views/pages/admin/event/eventForm";
// import CarUserForm from "./views/pages/profile/carUser";
import YardUserForm from "./views/pages/profile/yardUser";
import {
  auth,
  firebase,
  createUserProfileDocument,
} from "./firebase/firebase.utils";
// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// )

// Containers
// const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// // Pages
// const Login = React.lazy(() => import('./views/pages/login/Login'));
// const Register = React.lazy(() => import('./views/pages/register/Register'));
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
//  const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
//  const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
// class App extends Component {

//   render() {
//     return (
//       // <HashRouter>
//       //     <React.Suspense fallback={loading}>
//       //       <Switch>
//       //         <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
//       //         <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
//       //         <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
//       //         <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
//       //         <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
//       //       </Switch>
//       //     </React.Suspense>
//       // </HashRouter>
//       <>
//        <Header/>
//       <Homepage/>
//       <BasicForms />
//       </>
//     );
//   }
// }

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
    <BrowserRouter>
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
        <Route
          exact
          path="/bidform"
          // render={() => (currentUser ? <Redirect to="/" /> : <BidForm />)}
        >
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
        <Route exact path="/yarduser">
          <YardUserForm />
        </Route>
        <Route exact path="/caruser">
          <CarUserForm />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
