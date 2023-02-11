import React from "react";

const Profile = () => {
  return (
    <React.Fragment>
      <h1 className="font-bold text-2xl mb-4">V. Megha Akash</h1>
      <div className="grid grid-cols-12">
        <div className="col-span-3 md:col-span-3 sm:col-span-6">
          <div>
            <p className="text-lg font-semibold text-gray-500">Email</p>
            <p className="text-lg font-medium mb-3">akash123@gmail.com</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">
              Age
            </p>
            <p className="text-lg font-medium mb-3">28 Years</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Hight</p>
            <p className="text-lg font-medium mb-3">5.6 Inch</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Cast</p>
            <p className="text-lg font-medium mb-3">MBC</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Career</p>
            <p className="text-lg font-medium mb-3">Software Engineer</p>
          </div>
        </div>
        <div className="col-span-3 md:col-span-3 sm:col-span-6">
          <div>
            <p className="text-lg font-semibold text-gray-500">Phone</p>
            <p className="text-lg font-medium mb-3">8532568900</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Star</p>
            <p className="text-lg font-medium mb-3">Hastham</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Qualification</p>
            <p className="text-lg font-medium mb-3">Msc</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Family Porperty</p>
            <p className="text-lg font-medium mb-3">Own House,Land</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Salary</p>
            <p className="text-lg font-medium mb-3">40000/per month</p>
          </div>
        </div>
        <div className="col-span-3 md:col-span-3 sm:col-span-6">
          <div>
            <p className="text-lg font-semibold text-gray-500">Date Of Birth</p>
            <p className="text-lg font-medium mb-3">22 feb 1994</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Marriage Status</p>
            <p className="text-lg font-medium mb-3">Unmarried</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Color</p>
            <p className="text-lg font-medium mb-3">White</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Type of Food</p>
            <p className="text-lg font-medium mb-3">Vegiterain</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500">Sisters</p>
            <p className="text-lg font-medium mb-3">1</p>
          </div>
        </div>
        <div className="col-span-3 md:col-span-3 sm:col-span-6">
          <div>
            <img
              src="https://media.istockphoto.com/photos/young-man-standing-confidently-picture-id973481352?b=1&k=20&m=973481352&s=612x612&w=0&h=ouv4cuKwjhyGDkt94XOSCCgqahvSVBHd_u6Tso41D-g="
              className="mb-2"
            />
            <div className="flex">
              <img
                src="https://media.istockphoto.com/photos/young-man-standing-confidently-picture-id973481352?b=1&k=20&m=973481352&s=612x612&w=0&h=ouv4cuKwjhyGDkt94XOSCCgqahvSVBHd_u6Tso41D-g="
                className="w-[33%] h-20 object-cover pl-2"
              />
              <img
                src="https://media.istockphoto.com/photos/young-man-standing-confidently-picture-id973481352?b=1&k=20&m=973481352&s=612x612&w=0&h=ouv4cuKwjhyGDkt94XOSCCgqahvSVBHd_u6Tso41D-g="
                className="w-[33%] h-20 object-cover px-2"
              />
              <img
                src="https://media.istockphoto.com/photos/young-man-standing-confidently-picture-id973481352?b=1&k=20&m=973481352&s=612x612&w=0&h=ouv4cuKwjhyGDkt94XOSCCgqahvSVBHd_u6Tso41D-g="
                className="w-[33%] h-20 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
