import Layout from "@/components/layout"

export default function LocationsPage() {
  return (
    <Layout>
      <section className="container py-12">
        <h2 className="text-3xl font-bold mb-8">Our Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Location cards will go here */}
          <div className="bg-secondary p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Downtown Location</h3>
            <p className="text-muted-foreground mb-4">123 Main St, City, State</p>
            <p className="text-muted-foreground">Open 24/7</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}