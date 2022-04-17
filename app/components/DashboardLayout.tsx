import React from "react";
import SideBar from "./SideBar";

function DashboardLayout({ children }: any) {
  return (
    <>
      <section className="max-w-12xl mx-auto flex">
        <SideBar />
        {children}
      </section>
    </>
  );
}

export default DashboardLayout;
