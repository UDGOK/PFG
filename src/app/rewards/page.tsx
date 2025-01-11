import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"

export default function RewardsPage() {
  return (
    <Layout>
      <section className="container py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Perfect Rewards</h2>
          <p className="text-muted-foreground mb-8">
            Join our rewards program and start earning points on every purchase
          </p>
          <Button className="bg-primary hover:bg-primary/90">
            Sign Up for Rewards
          </Button>
        </div>
      </section>
    </Layout>
  )
}