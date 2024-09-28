'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Home, Building, Notebook, Briefcase } from 'lucide-react'
import InteriorTab from './interior-tab'
import ExteriorTab from './exterior-tab'
import BathroomTab from './bathroom-tab'
import WorkTab from './work-tab'

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState('interior')

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl mx-auto md:max-w-4xl lg:max-w-5xl">
      <TabsList className="grid w-full grid-cols-4 mb-2">
        <TabsTrigger value="interior" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm px-1 sm:px-2">
          <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> Exterior
        </TabsTrigger>
        <TabsTrigger value="exterior" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm px-1 sm:px-2">
          <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> Interior
        </TabsTrigger>
        <TabsTrigger value="planning" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm px-1 sm:px-2">
          <Notebook className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> Planning
        </TabsTrigger>
        <TabsTrigger value="work" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm px-1 sm:px-2">
          <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> Work
        </TabsTrigger>
      </TabsList>
      <TabsContent value="interior">
        <InteriorTab />
      </TabsContent>
      <TabsContent value="exterior">
        <ExteriorTab />
      </TabsContent>
      <TabsContent value="planning">
        <BathroomTab />
      </TabsContent>
      <TabsContent value="work">
        <WorkTab />
      </TabsContent>
    </Tabs>
  )
}