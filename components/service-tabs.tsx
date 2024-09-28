'use client'

import { useState, Suspense } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Home, Building, Notebook, Image } from 'lucide-react'
import dynamic from 'next/dynamic'

const InteriorTab = dynamic(() => import('./interior-tab'), { 
  loading: () => <p>Loading...</p>
})
const ExteriorTab = dynamic(() => import('./exterior-tab'), { 
  loading: () => <p>Loading...</p>
})
const BathroomTab = dynamic(() => import('./bathroom-tab'), { 
  loading: () => <p>Loading...</p>
})
const WorkTab = dynamic(() => import('./work-tab'), { 
  loading: () => <p>Loading...</p>
})

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
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Tabs>
  )
}