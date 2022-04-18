import React, { ReactNode } from "react";
import SideBar from "./SideBar";

function DashboardLayout({ children }:{children: ReactNode}) {
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
