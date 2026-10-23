import React from "react";
import Hero from "./hero";
import Stats from "./stats";
import QuickActions from "./quickAction"
import RecentActivity from "./recentActivity"
import Features from "./feature.jsx"
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <Hero />

        <Stats />

        <QuickActions />

        <RecentActivity />

        <Features />
      </div>
    </div>
  );
};

export default Home;
