import React from "react";
import DocsSidebar from "./DocsSidebar";
import DocsContent from "./DocsContent";

const DocsPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar />

        <div className="min-w-0 flex-1">
          <DocsContent />
        </div>
      </div>
    </main>
  );
};

export default DocsPage;