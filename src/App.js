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
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

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
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/listyouryard" component={BasicForms} />
        <Route exact path="/yardlisting" component={YardListing} />
        <Route exact path="/detailpage" component={DetailsPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/subscription" component={Subscription} />
        <Route exact path="/caruserprofile" component={CaruserProfile} />
        <Route exact path="/yarduserprofile" component={YarduserProfile} />
        <Route exact path="/forgotpassword" component={Forgot} />
        <Route exact path="/resetpassword" component={ResetPassword} />
        <Route
          exact
          path="/bidform"
          render={() => (isLogin ? <BidForm /> : <Redirect to="/login" />)}
        />
        <Route exact path="/carlisting" component={CarListing} />
        <Route exact path="/cardetail" component={CarDetail} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
