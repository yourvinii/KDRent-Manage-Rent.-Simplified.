import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const SearchSection = () => {
  return (
    <section className=" max-w-7xl mx-auto px-6 py-20 ">
      <h2 className="font-bold text-2xl mb-5">Search Properties</h2>

      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Input label={"Budget"} type="text" placeholder={"Enter Your Budget"} />

        <Input label={"Budget"} type="text" placeholder={"Enter Your Budget"} />

        <Input label={"Budget"} type="text" placeholder={"Enter Your Budget"} />

        <div className="flex items-end ">
          <Button className="w-full" text={"Search"} />
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
