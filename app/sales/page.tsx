"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Download, TrendingUp, DollarSign, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DatePickerWithRange } from "@/components/date-range-picker"

const salesData = [
  { month: "Jan", online: 4000, inStore: 2400, total: 6400 },
  { month: "Feb", online: 3000, inStore: 1398, total: 4398 },
  { month: "Mar", online: 2000, inStore: 9800, total: 11800 },
  { month: "Apr", online: 2780, inStore: 3908, total: 6688 },
  { month: "May", online: 1890, inStore: 4800, total: 6690 },
  { month: "Jun", online: 2390, inStore: 3800, total: 6190 },
  { month: "Jul", online: 3490, inStore: 4300, total: 7790 },
  { month: "Aug", online: 4000, inStore: 2400, total: 6400 },
  { month: "Sep", online: 3000, inStore: 1398, total: 4398 },
  { month: "Oct", online: 2000, inStore: 9800, total: 11800 },
  { month: "Nov", online: 2780, inStore: 3908, total: 6688 },
  { month: "Dec", online: 3890, inStore: 4800, total: 8690 },
]

const productData = [
  { name: "Product A", sales: 4000 },
  { name: "Product B", sales: 3000 },
  { name: "Product C", sales: 2000 },
  { name: "Product D", sales: 2780 },
  { name: "Product E", sales: 1890 },
]

const COLORS = ["#10b981", "#8b5cf6", "#f43f5e", "#f59e0b", "#3b82f6"]

export default function SalesAnalysisPage() {
  const { theme } = useTheme()
  const [timeRange, setTimeRange] = useState("year")

  return (
    <div className="flex-1 space-y-4 pt-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Sales Analysis</h2>
          <p className="text-muted-foreground">Analyze your sales data and identify trends</p>
        </div>
        <div className="flex items-center gap-2">
          <DatePickerWithRange />
          <Button variant="outline" size="sm" className="h-9">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <div className="rounded-full bg-emerald-100 p-2 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400">
              <DollarSign className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div />
          </CardContent>
          <CardContent>
            <div className="text-2xl font-bold">$82,496.32</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <TrendingUp className="mr-1 h-4 w-4 text-emerald-500" />
              <span className="text-emerald-500">+18.2%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <div className="rounded-full bg-violet-100 p-2 text-violet-600 dark:bg-violet-900 dark:text-violet-400">
              <TrendingUp className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.3%</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <TrendingUp className="mr-1 h-4 w-4 text-emerald-500" />
              <span className="text-emerald-500">+2.4%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
            <div className="rounded-full bg-rose-100 p-2 text-rose-600 dark:bg-rose-900 dark:text-rose-400">
              <ShoppingBag className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$124.32</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <TrendingUp className="mr-1 h-4 w-4 text-emerald-500" />
              <span className="text-emerald-500">+5.1%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Sales Overview</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <CardTitle>Sales Trends</CardTitle>
                  <CardDescription>Compare online and in-store sales</CardDescription>
                </div>
                <Select defaultValue={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">Last Month</SelectItem>
                    <SelectItem value="quarter">Last Quarter</SelectItem>
                    <SelectItem value="year">Last Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={salesData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="online" name="Online Sales" fill="#10b981" />
                  <Bar dataKey="inStore" name="In-Store Sales" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Sales by Channel</CardTitle>
                <CardDescription>Distribution of sales across channels</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Online", value: 63 },
                        { name: "In-Store", value: 27 },
                        { name: "Phone", value: 10 },
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {[0, 1, 2].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Monthly Growth</CardTitle>
                <CardDescription>Month-over-month sales growth</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={salesData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="#10b981" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
              <CardDescription>Best-selling products by revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  layout="vertical"
                  data={productData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 50,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" name="Sales ($)" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Analytics</CardTitle>
              <CardDescription>Customer acquisition and retention metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">New vs Returning Customers</h4>
                  <div className="flex items-center">
                    <div className="w-full bg-muted rounded-full h-4 mr-4 overflow-hidden">
                      <div className="bg-emerald-500 h-4 rounded-full" style={{ width: "65%" }} />
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">65% / 35%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Customer Retention Rate</h4>
                  <div className="flex items-center">
                    <div className="w-full bg-muted rounded-full h-4 mr-4 overflow-hidden">
                      <div className="bg-violet-500 h-4 rounded-full" style={{ width: "73%" }} />
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">73%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Customer Satisfaction</h4>
                  <div className="flex items-center">
                    <div className="w-full bg-muted rounded-full h-4 mr-4 overflow-hidden">
                      <div className="bg-rose-500 h-4 rounded-full" style={{ width: "89%" }} />
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">89%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
