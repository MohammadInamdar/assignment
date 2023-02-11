import React from "react";

const HoroScopeInformation = () => {
  return (
    <React.Fragment>
      <div className="border border-gray-400 mt-3 mb-3 w-[90%] m-auto"></div>
      <h1 className="font-bold text-2xl mb-4">HoroScope Information</h1>
      <div className="grid grid-cols-12">
        <div className="col-span-3 md:col-span-3 sm:col-span-6">
          <div>
            <p className="text-lg font-semibold text-gray-500">Father's Name</p>
            <p className="text-lg font-medium mb-3">B.VenkatRam</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">
              Father's Profession
            </p>
            <p className="text-lg font-medium mb-3">B.VenkatRam</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Brothers</p>
            <p className="text-lg font-medium mb-3">2</p>
          </div>
      
        </div>
        <div className="col-span-3 md:col-span-3 sm:col-span-6">
          <div>
            <p className="text-lg font-semibold text-gray-500">Zodic Sign</p>
            <p className="text-lg font-medium mb-3">Scorpio</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Day</p>
            <p className="text-lg font-medium mb-3">Wednesday</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">BirthPlace</p>
            <p className="text-lg font-medium mb-3">TamilNadu</p>
          </div>
      
        </div>
        <div className="col-span-3 md:col-span-3 sm:col-span-6">
          <div>
            <p className="text-lg font-semibold text-gray-500">Tamil Month</p>
            <p className="text-lg font-medium mb-3">Audi</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Star/Foot</p>
            <p className="text-lg font-medium mb-3">kettai</p>
          </div>
        
        </div>
        <div className="col-span-3 md:col-span-3 sm:col-span-6">
          <div>
            <p className="text-lg font-semibold text-gray-500">Udayati nazhikal</p>
            <p className="text-lg font-medium mb-3">Lorem inpsun</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Laknam</p>
            <p className="text-lg font-medium mb-3">Scorpio</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HoroScopeInformation;
