import React, { useState, useEffect } from 'react';
import Menu from './containers/Menu'
import Home from './containers/Home'
import Dashboard from './containers/Dashboard'
import Layout from '../src/Layout'
import LoadingPage from '../src/components/LoadingPage'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import axios from 'axios'
import Notification from '../src/components/Notification'
import { NotificationContext } from '../src/utils/context';


function App() {

  // authentication
  const initialUserData = {
    logged: true,
  }

  const [userData, setUserData] = useState(initialUserData);


  // notification context
  const [notificationData, setNotificationData] = useState({
    visible: false,
    text: 'text'
  });

  const { Provider } = NotificationContext;

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token !== null) {
  //     const url_cors = 'https://cors-anywhere.herokuapp.com/';
  //     axios({
  //       method: 'get',
  //       url: url_cors + 'http://185.36.169.227:5088/api/user',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //         'Authorization': token,
  //         'access-control-allow-credentials': "true",
  //         'access-control-allow-origin': '*',
  //         'crossdomain': 'true'
  //       }
  //     })
  //       .then(response => {
  //         console.log(response)
  //         setUserData(userData => ({ ...userData, logged: true }))
  //         return <Redirect to="/dashboard" />
  //       })
  //       .catch(error => {
  //         console.log(error)
  //         setUserData(userData => ({ ...userData, logged: false }))
  //       });
  //   } else {
  //     setTimeout(() => {
  //       setUserData(userData => ({ ...userData, logged: false }))
  //     }, 1000);
  //   }
  // }, [])

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        userData.logged ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          )
      }
    />
  );

  return (
    <>
      <Provider
        value={{ notificationData, setNotificationData }}
      >
        <Layout>
          {userData.logged !== null && <Menu logged={userData.logged} />}
          <Router>
            <>
              <Notification visible={notificationData.visible}>{notificationData.text}</Notification>
              {userData.logged === null ?
                <LoadingPage /> :
                userData.logged === false ?
                  <Route path="/" exact component={Home} /> :
                  <Redirect to='/dashboard' />
              }
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </>
          </Router>
        </Layout>
      </Provider>
    </>
  );
}

export default App;
