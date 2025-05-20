import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { RecentSales } from "@/components/dashboard/recent-sales"
import { OverviewStats } from "@/components/dashboard/overview-stats"
import { ExpensesChart } from "@/components/dashboard/expenses-chart"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, CalendarDays, Download } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 md:pl-0 pt-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Financial overview of your business</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <CalendarDays className="mr-2 h-4 w-4" />
            Last 30 days
          </Button>
          <Button variant="outline" size="sm" className="h-9">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <OverviewStats />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="md:col-span-2 lg:col-span-4">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Revenue</CardTitle>
                  <CardDescription>Monthly revenue breakdown</CardDescription>
                </div>
                <Button size="sm" variant="outline">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  View all
                </Button>
              </CardHeader>
              <CardContent>
                <RevenueChart />
              </CardContent>
            </Card>
            <Card className="md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>Latest transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="md:col-span-2 lg:col-span-4">
              <CardHeader>
                <CardTitle>Expenses</CardTitle>
                <CardDescription>Monthly expenses by category</CardDescription>
              </CardHeader>
              <CardContent>
                <ExpensesChart />
              </CardContent>
            </Card>
            <Card className="md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Payments</CardTitle>
                <CardDescription>Payments due in next 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Supplier X", amount: "$3,500", date: "Jun 10" },
                    { name: "Rent", amount: "$2,000", date: "Jun 15" },
                    { name: "Insurance", amount: "$750", date: "Jun 22" },
                    { name: "Utilities", amount: "$450", date: "Jun 28" },
                  ].map((payment) => (
                    <div key={payment.name} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{payment.name}</p>
                        <p className="text-sm text-muted-foreground">Due {payment.date}</p>
                      </div>
                      <p className="font-medium">{payment.amount}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Detailed financial analytics coming soon</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Advanced analytics features will be available in a future update.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generated reports will appear here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Go to the Financial Reports section to generate detailed reports.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
