import React from 'react'
import { useState } from 'react'
import ModelsHero from './ModelsHero'
import ModelsSearch from './ModelsSearch'
import ModelsFilters from './ModelsFilters'
import ModelsCard from './ModelsCard'

function ModelsPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  return (
   <main className="min-h-screen bg-white">
   <ModelsHero/>
      <ModelsSearch
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
   {/* <ModelsFilters/> */}
   <ModelsCard search={search} sortBy={sortBy}/>  
   </main>
  )
}

export default ModelsPage