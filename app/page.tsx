import SalesAnalytics from "@/components/sales-analytics"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* <h1 className="text-3xl font-bold text-center mb-8">RSM Kuwait CRM Ecosystem</h1> */}
        <SalesAnalytics />
      </div>
    </main>
  )
}
