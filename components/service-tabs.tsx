'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import InteriorTab from './interior-tab'
import ExteriorTab from './exterior-tab'
import BathroomTab from './bathroom-tab'

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState('interior')

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl mx-auto">
      <TabsList className="grid w-full grid-cols-3 mb-2">
        <TabsTrigger value="interior">Interior</TabsTrigger>
        <TabsTrigger value="exterior">Exterior</TabsTrigger>
        <TabsTrigger value="bathroom">Bathroom</TabsTrigger>
      </TabsList>
      <TabsContent value="interior">
        <InteriorTab />
      </TabsContent>
      <TabsContent value="exterior">
        <ExteriorTab />
      </TabsContent>
      <TabsContent value="bathroom">
        <BathroomTab />
      </TabsContent>
    </Tabs>
  )
}