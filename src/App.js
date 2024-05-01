import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SelectAccountType from "./components/SelectAccountType/SelectAccountType";
import LayoutPage from "./pages/LayoutPage/LayoutPage";
import LabFormComponent from "./components/LabFormComponent/LabFormComponent";
import PersonalFormComponent from "./components/FormComponent/PersonalFormComponent";
import ViewProfileDetails from "./components/ViewProfileDetails/viewProfileDetails";
import HelpCenter from "./components/HelpCenter/helpcenter";
import Logout from "./components/LogOut/LogOut";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/user" element={<LayoutPage />}>
        <Route path="" element={<SelectAccountType />} />
        <Route path="createaccount" element={<PersonalFormComponent />} />
        <Route path="createlabaccoount" element={<LabFormComponent />} />
        <Route path="profile" element={<ViewProfileDetails />} />
        <Route path="helpcenter" element={<HelpCenter />} />
        <Route path="logout" element={<Logout />} />
      </Route>
    </Routes>
  );
}

export default App;
