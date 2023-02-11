import React from "react";
import "./HoroScopeChart.module.css";
const HoroScopeChart = () => {
  return (
    <React.Fragment>
      <div className="border border-gray-400 mt-3 mb-3 w-[90%] m-auto"></div>
      <h1 className="font-bold text-2xl mb-4">HoroScope Chart</h1>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6 max-sm:col-span-12">
          <table border="1" className="border border-black w-full text-center">
            <tr className="border border-black">
              <td className="border border-black">1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td colspan="2" rowspan="2">
                1
              </td>
              <td>1</td>
            </tr>{" "}
            <tr>
              <td>1</td>
              <td>1</td>
            </tr>{" "}
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </table>
        </div>
        <div className="col-span-6 max-sm:col-span-12 mr-5 pb-5">
          <table border="1" className="w-full text-center">
            <tr className="border border-black">
              <td className="border border-black">1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td colspan="2" rowspan="2">
                1
              </td>
              <td>1</td>
            </tr>{" "}
            <tr>
              <td>1</td>
              <td>1</td>
            </tr>{" "}
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HoroScopeChart;
