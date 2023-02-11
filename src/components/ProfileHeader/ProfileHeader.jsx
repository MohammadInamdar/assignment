import React from "react";

const ProfileHeader = () => {
  return (
    <React.Fragment>
      <div className="h-14 flex  items-center"> 
        <span className="text-xl">Home &#62; Search &#62; </span>
        <span className="text-orange-600 ml-5 text-xl">My Profile Details</span>
      </div>
      <div className="h-16 bg-orange-500 flex flex-wrap justify-between px-5 items-center">
        <div>
          <p className="text-yellow-50 text-lg">My Profile Details</p>
        </div>
        <div>
          <button className="bg-white p-3 w-20 rounded"> Edit</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileHeader;
