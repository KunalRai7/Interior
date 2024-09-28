import ServiceTabs from '@/components/service-tabs'

export const revalidate = 3600 // revalidate every hour

export default function Home() {
  return (
    <div className="w-full py-4">
      <ServiceTabs />
    </div>
  )
}