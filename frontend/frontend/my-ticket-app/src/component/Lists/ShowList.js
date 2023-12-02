import React from "react";

const ShowList = () => {
  return (
    <>
      <section className="h-screen bg-gradient-to-r from-green-500 to-blue-500">
        <div className="container md:px-12 md:py-12 md:mx-auto h-">
          <div className="mx-auto md:px-12 bg-white rounded-3xl bg-opacity-20 md:h-screen ">
            <div className="mx-auto  ">
              <p className="font-sans font-black leading-5 md:py-6 p-3 md:text-4xl text-2xl text-center">
                Shows
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-8 mt-8">
              <div className="w-4/5 md:h-20 h-15 bg-white flex flex-row justify-between rounded-2xl">
                <p className="md:p-4 p-3 md:text-4xl text-2xl">Name</p>
                <p className="md:p-4 p-2 md:text-4xl text-2xl">Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowList;
