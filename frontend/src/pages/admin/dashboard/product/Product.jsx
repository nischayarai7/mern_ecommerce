import React, { useEffect } from "react";
import { handleGetOperation } from "../../../../handleOperation/handleOperation";
import { apiLinks } from "../../../../handleOperation/apiLinks";

const Product = () => {
  useEffect(() => {
    const fetchProduct = async () => {
      console.log(apiLinks.getAllProduct);
      const result = await handleGetOperation(apiLinks.getAllProduct);
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <div className="flex flex-col overflow-y-auto h-full">
        <table className="min-w-full bg-white border undefined">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 h-6 sticky top-0 z-10 transition-all ease-in-out ">
            <tr>
              <th className="px-2 2xl:px-6 py-3 bg-gray-200 w-8" />
              <th className="px-2 2xl:px-6 py-3 bg-gray-200">Project</th>
              <th className="px-2 2xl:px-6 py-3 bg-gray-200">Brand</th>
              <th className="px-2 2xl:px-6 py-3 bg-gray-200">Action</th>
              <th className="px-2 2xl:px-6 py-3 bg-gray-200">State</th>
              <th className="px-2 2xl:px-6 py-3 bg-gray-200 w-6" />
            </tr>
          </thead>
          <tbody className="undefined select-none">
            <tr className="border-b">
              <td className="px-6 py-1.5 whitespace-nowrap text-sm">
                <div className="flex items-center gap-2">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/amethgalarcio.appspot.com/o/images%2FCaptura%20de%20pantalla%202024-11-08%20151438.png?alt=media&token=60ba8e16-f724-49d2-9e34-8c812ccd212b"
                    alt="image"
                    className="aspect-square rounded-lg object-cover h-16"
                  />
                  <p className="font-bold">SendBot 🤖</p>
                </div>
              </td>
              <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                mar, 5 nov de 2024
              </td>
              <td className="px-6 py-1.5 whitespace-nowrap text-sm   flex justify-center items-center h-full gap-2">
                <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                  <button className="text-xs font-bold me-2 px-2.5 shadow py-2  bg-green-200 text-green-600 font-semibold rounded-lg shadow">
                    edit
                  </button>
                  <button className="text-xs font-bold me-2 px-2.5 shadow py-2  bg-red-500 text-white font-semibold rounded-lg shadow">
                    delete
                  </button>
                </td>
                <div className="relative inline-block text-left select-none ">
                  <div className="rounded-full py-4 hover:bg-gray-100 focus:outline- cursor-pointer ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={26}
                      height={26}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"
                      ></path>
                    </svg>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
