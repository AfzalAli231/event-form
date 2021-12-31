import React from 'react';
//import { Counter } from './features/counter/Counter';

import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
//import { theme } from "./component/theme";
import { createTheme } from '@mui/material/styles';
import { purple, deepPurple } from '@mui/material/colors';

import '@fontsource/roboto/300.css';
import { BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";


import SignIn from './component/account/SignIn';
import SignUp from './component/account/Signup';
import Logout from './component/account/Logout';

import ForgotPassword from './component/account/ForgotPassword';
import VerifyUser from './component/account/VerifyUser';
import ChangePassword from './component/account/ChangePassword';

import Home from './component/Home';
import Client from "./component/Clients/App";
import Event from "./component/Clients/Dashboard"


import Dashboard from './component/admin/Dashboard';
import Extra from './component/admin/Extra';
import AddExtra from './component/admin/AddExtra';
import EditExtra from './component/admin/EditExtra';
import Users from './component/admin/Users';
import AddUsers from './component/admin/AddUsers';
import EditUsers from './component/admin/EditUsers';
import Vendors from './component/admin/Vendors';

import Events from './component/admin/Events';
import Biddings from './component/admin/Biddings';
import VenueFormm from "./component/Clients/venueForm";

function App() {
  const [darkState, setDarkState] = React.useState(null);
  const mainPrimaryColor = darkState ? deepPurple[500] : purple[500];
  const mainSecondaryColor = darkState ? purple[900] : deepPurple[500];
  const palletType = darkState ? "dark" : "light";
  const token = localStorage.getItem("token");
  const theme = createTheme({
      root: {
        fontWeight: 200 // or 'bold'
      },
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor   
      },
      secondary: {
        main: mainSecondaryColor
      }  
    },
   
    
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

   
console.log("token",token);

  return (
    <ThemeProvider theme={theme}>
    <div className="App" >

    <CssBaseline />
{/* <Switch checked={darkState} onChange={handleThemeChange} /> */}
    <Router>
      <Routes>
        <Route path="/admin" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
          <Route path="adduser" element={<AddUsers />}/>
          <Route path="edituser/:id" element={<EditUsers />}/>
          <Route path="vendors" element={<Vendors />} />
          <Route path="extra" element={<Extra />} />
          <Route path="addextra" element={<AddExtra />} />
          <Route path="editextra/:id" element={<EditExtra />} />
          <Route path="events" element={<Events />} />
          <Route path="biddings" element={<Biddings />} />
        </Route>

        <Route path="/user" element={<Client />}>
          <Route path="eventdashboard" element={<Event />} />
          <Route path="venue" element={<VenueFormm />}/>
          {/* <Route path="edituser/:id" element={<EditUsers />}/>
          <Route path="vendors" element={<Vendors />} />
          <Route path="extra" element={<Extra />} />
          <Route path="addextra" element={<AddExtra />} />
          <Route path="editextra/:id" element={<EditExtra />} />
          <Route path="events" element={<Events />} />
          <Route path="biddings" element={<Biddings />} /> */}
        </Route>
{/* <Route path="example" element={<Example />} /> */}
        <Route path="/" element={<Home />}/>
        <Route path="/signin"  element={!token ? <SignIn /> : <Navigate to="/" />} />
        <Route path="/signup" element={!token ? <SignUp />: <Navigate to="/" />}/>
        <Route path="/forgotpassword" element={<ForgotPassword />}/>
        <Route path="/logout" element={!token ? <Navigate to="/" />:<Logout />}/>
       </Routes>
    </Router>
   
  
     </div>
  </ThemeProvider>
  );
}

export default App;
