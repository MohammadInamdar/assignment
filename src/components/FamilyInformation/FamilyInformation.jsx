import React from "react";


const FamilyInformation = () => {
  return (
    <React.Fragment>
      <div className="border border-gray-400 mt-3 mb-3 w-[90%] m-auto"></div>
      <h1 className="font-bold text-2xl mb-4">Family Information</h1>
      <div className="grid grid-cols-12">
        <div className="col-span-3 md:col-span-3 sm:col-span-6">
          <div>
            <p className="text-lg font-semibold text-gray-500">Father's Name</p>
            <p className="text-lg font-medium mb-3">B.Venkataramam</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">
              Father's Profession
            </p>
            <p className="text-lg font-medium mb-3">ex Army Officer</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Brothers</p>
            <p className="text-lg font-medium mb-3">2</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Sisters</p>
            <p className="text-lg font-medium mb-3">1</p>
          </div>
        </div>
        <div className="col-span-3 md:col-span-3 sm:col-span-6  ">
          <div>
            <p className="text-lg font-semibold text-gray-500">Mother's Name</p>
            <p className="text-lg font-medium mb-3">Vasantha Gokilam</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Mother's Profession</p>
            <p className="text-lg font-medium mb-3">Teacher</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Fathr's Name</p>
            <p className="text-lg font-medium mb-3">Fathr's Name</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Eilder Brother</p>
            <p className="text-lg font-medium mb-3">1</p>
          </div>
        </div>
        <div className="col-span-3 md:col-span-3 sm:col-span-6">
          <div>
            <p className="text-lg font-semibold text-gray-500"> Father Native</p>
            <p className="text-lg font-medium mb-3">Coimbatore</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Phone Number</p>
            <p className="text-lg font-medium mb-3">9632457896</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Younger Brother</p>
            <p className="text-lg font-medium mb-3">5</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Younger Sister</p>
            <p className="text-lg font-medium mb-3">3</p>
          </div>
        </div>
        <div className="col-span-3 md:col-span-3 sm:col-span-6">
          <div>
            <p className="text-lg font-semibold text-gray-500">Mother Native</p>
            <p className="text-lg font-medium mb-3">Coimbatore</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Address</p>
            <p className="text-lg font-medium mb-3">West Arasur,Arasur,Coimbatore</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Marred </p>
            <p className="text-lg font-medium mb-3">2</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">single</p>
            <p className="text-lg font-medium mb-3">0</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FamilyInformation;
