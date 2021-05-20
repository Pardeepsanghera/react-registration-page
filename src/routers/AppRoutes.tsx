import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/Homepage';

import Navbar from '../components/Navbar';

const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className='container-fluid'>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
      </div>
    </div>
  );
};

export default AppRoutes;
