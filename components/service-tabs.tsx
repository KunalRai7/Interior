'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import InteriorTab from './interior-tab'
import ExteriorTab from './exterior-tab'
import BathroomTab from './bathroom-tab'
import WorkTab from './work-tab'  // Add this import
import { Home, Building, Notebook, Image } from 'lucide-react'  // Added Image icon

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState('interior')

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl mx-auto">
      <TabsList className="grid w-full grid-cols-4 mb-2">
        <TabsTrigger value="interior" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          <Home className="w-4 h-4 mr-2" /> Exterior
        </TabsTrigger>
        <TabsTrigger value="exterior" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          <Building className="w-4 h-4 mr-2" /> Interior
        </TabsTrigger>
        <TabsTrigger value="planning" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          <Notebook className="w-4 h-4 mr-2" /> Planning
        </TabsTrigger>
        <TabsTrigger value="work" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          <Image className="w-4 h-4 mr-2" /> Work
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