import React, { Suspense } from 'react';
import styles from './app.module.css';
// import NxWelcome from './nx-welcome';
import LeftMenu from './component/LeftMenu/LeftMenu';
import Logo from './component/images/logo.png'
import { Route, Link } from 'react-router-dom';

const RemoteEntry = React.lazy(() => import('remote/RemoteEntry'));
const Billing = React.lazy(() => import('remote/Billing'));
const Client = React.lazy(() => import('remote/Client'));
const Report = React.lazy(() => import('remote/Report'));


const Billinglazy = ()=>{
  return(<Suspense fallback={<div>Loading...</div>}><Billing/></Suspense>)
}
const Clientlazy = ()=>{
  return(<Suspense fallback={<div>Loading...</div>}><Client/></Suspense>)
}
const Reportlazy = ()=>{
  return(<Suspense fallback={<div>Loading...</div>}><Report/></Suspense>)
}

export function App() {
  return (
    <>
    <div className={styles['header']}>
        <div className={styles['imgLogo']}>
          <img src={Logo} alt="" />
        </div>
      <Suspense fallback={<div>Loading...</div>}>
                <RemoteEntry></RemoteEntry>
        </Suspense>
        
    </div>
     
      {/* <div /> */}

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
        
      
      <div role="navigation">
        {/* <ul>
          <li>
            <Link to="/billing">Billings</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/report">Report</Link>
          </li>
        </ul> */}
        <LeftMenu />
      </div>
      <Route
        path="/billing"
        exact
        component={Billinglazy}
      />
      <Route
        path="/client"
        exact
        component={Clientlazy}
      />
      <Route
        path="/report"
        exact
        component={Reportlazy}
      />
      {/* END: routes */}
    </>
  );
}

export default App;
