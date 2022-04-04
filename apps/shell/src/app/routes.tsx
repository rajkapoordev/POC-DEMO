import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {Billing} from "remote/Billing";
//import {People} from 'remote/People';
//import {Report} from 'remote/Report';

//import LeftMenu from './component/LeftMenu';

const Routes: FC = () => (
  <BrowserRouter basename="/info">
    <>
      {/* <LeftMenu /> */}

      <Switch>
        <Route path="/billing" component={Billing} />
        {/* <Route path="/people" component={People} />
        <Route path="/report" component={Report} /> */}
        <Route exact path="/" />
      </Switch>
    </>
  </BrowserRouter>
);

export default Routes;