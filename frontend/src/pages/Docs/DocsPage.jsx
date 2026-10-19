import React, { useEffect, useState } from "react";
import DocsSidebar from "./DocsSidebar";
import DocsContent from "./DocsContent";

const DocsPage = () => {
  
  const [activeSection, setActiveSection] = useState("Introduction");
  useEffect(() => {
    const hash = window.location.hash.slice(1);

    if(hash){
      const section = hash.split("-")
      .map((word) => word.charAt(0).toUpperCase()+word.slice(1))
      .join(" ");
      setActiveSection(section);
    }
  },[]);

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar activeSection={activeSection} onSectionChange={setActiveSection}/>

        <div className="min-w-0 flex-1">
          <DocsContent activeSection={activeSection} />
        </div>
      </div>
    </main>
  );
};

export default DocsPage;