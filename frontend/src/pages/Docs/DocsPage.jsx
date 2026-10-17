import React, { useState } from "react";
import DocsSidebar from "./DocsSidebar";
import DocsContent from "./DocsContent";

const DocsPage = () => {

  const [activeSection, setActiveSection] = useState("Introduction");

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