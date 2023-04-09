import React from "react";

export default function InfoAbout() {
  return (
    <section className="w-full bg-secondary cus-font justify-around text-white hidden lg:flex">
    {/* box one */}
      <div className="flex">
        <span className="flex">
          <div className="text-5xl">1506</div>
          <span className=" px-2 items-baseline">Happy <br /> Memories</span>
        </span>
      </div>
    {/* box two */}
      <div className="bg-secondary flex">
        <span className="flex">
          <div className="text-5xl">5</div>
          <span className="px-4 items-baseline">Weeks
          </span>
        </span>
      </div>
    </section>
  );
}