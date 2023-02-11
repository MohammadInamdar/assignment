import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import FamilyInformation from "./components/FamilyInformation/FamilyInformation";
import HoroScopeInformation from "./components/HoroScopeInformation/HoroScopeInformation";
import Profile from "./components/Profile/Profile";
import HoroScopeChart from "./components/HoroScopeChart/HoroScopeChart";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="mr-20 ml-10 pl-10">
        <ProfileHeader />
      </div>
      <div className="bg-white p-2 mx-20 pl-10">
        <Profile />
        <FamilyInformation />
        <HoroScopeInformation />
        <HoroScopeChart />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
