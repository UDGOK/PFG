import Layout from "@/components/layout"

export default function CareersPage() {
  return (
    <Layout>
      <section className="container py-12">
        <h2 className="text-3xl font-bold mb-8">Join Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Why Work With Us?</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Competitive pay and benefits</li>
              <li>Flexible scheduling</li>
              <li>Career growth opportunities</li>
              <li>Positive work environment</li>
            </ul>
          </div>
          <div className="bg-secondary p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Current Openings</h3>
            <p className="text-muted-foreground">
              Check back soon for available positions
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}