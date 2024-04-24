import { Route, Routes } from 'react-router-dom'; // Import Routes and Route
import './App.css';
import AccountCreationSuccessful from './components/accountCreationSuccessful';
import AccountCreationTerminated from './components/accountCreationTerminated';
import Header from './components/header';
import Header2 from './components/header2';
import HelpCenter from './components/helpcenter';
import Homepage from './components/homepage';
import LabAccount from './components/labAccountForm';
import LoggingOut from './components/loggingOut';
import Login from './components/login';
import PersonalAccount from './components/personalAccountForm';
import ViewProfileDetails from './components/viewProfileDetails';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Routes>
        <Route path="/" element={<Login />} /> {/* Set Login as the root component */}
        <Route path="/welcome" element={<Welcome />} /> {/* Optional: move Welcome to another route */}
        {/* Add more routes as needed */}
      </Routes>
      <Header2/>
      <Homepage/>
      <PersonalAccount/>
      <LabAccount/>
      <AccountCreationSuccessful/>
      <AccountCreationTerminated/>
      <LoggingOut/>
      <HelpCenter/>
      <ViewProfileDetails/>
    </div>
  );
}

export default App;
