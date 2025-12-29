"use client"
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import Sidebar from "./Sidebar";

const DynamicHeader = () => {
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <HeaderMenu onOpenSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default DynamicHeader;
