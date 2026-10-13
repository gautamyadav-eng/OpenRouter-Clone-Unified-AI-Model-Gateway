import React from 'react'
import ModelsHero from './ModelsHero'
import ModelsSearch from './ModelsSearch'
import ModelsFilters from './ModelsFilters'
import ModelsCard from './ModelsCard'

function ModelsPage() {
  return (
   <main className="min-h-screen bg-white">
   <ModelsHero/>
   <ModelsSearch/>
   <ModelsFilters/>
   <ModelsCard/>  
   </main>
  )
}

export default ModelsPage