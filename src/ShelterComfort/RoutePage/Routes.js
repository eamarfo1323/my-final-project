import { Switch, Route } from 'react-router-dom';
import LandingPage from "../LandingPage/LandingPage";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUP/signUp";
import Dashboard from "../Dashboard/Dasboard";
import AdvertisePage from '../AdvertisePage/AdvertisePage'
import SearchPage from '../SearchPage/SearchPage'
import Predashboard from '../Dashboard/Predashboard'





function Routes() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/login' component={SignIn} />
      <Route exact path='/SignUp' component={SignUp} />
      <Route exact path='/Dashboard' component={Dashboard} />
      <Route exact path='/AdvertisePage' component={AdvertisePage} />
      <Route exact path='/SearchPage' component={SearchPage} />
      <Route exact path='/predashboard' component={Predashboard} />

    </Switch>
    </div>
  )
}

export default Routes;