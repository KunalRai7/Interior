'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import InteriorTab from './interior-tab'
import ExteriorTab from './exterior-tab'
import BathroomTab from './bathroom-tab'
import { Home, Building, Notebook } from 'lucide-react'  // Updated import

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState('interior')

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl mx-auto">
      <TabsList className="grid w-full grid-cols-3 mb-2">
        <TabsTrigger value="interior">
          <Home className="w-4 h-4 mr-2" /> Exterior
        </TabsTrigger>
        <TabsTrigger value="exterior">
          <Building className="w-4 h-4 mr-2" /> Interior
        </TabsTrigger>
        <TabsTrigger value="planning">
          <Notebook className="w-4 h-4 mr-2" /> Planning
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
    </Tabs>
  )
}