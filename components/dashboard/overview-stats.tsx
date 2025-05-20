"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, DollarSign, CreditCard, TrendingDown, TrendingUp } from "lucide-react"

export function OverviewStats() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      description: "from last month",
      icon: DollarSign,
    },
    {
      title: "Expenses",
      value: "$12,234.59",
      change: "-2.5%",
      trend: "down",
      description: "from last month",
      icon: CreditCard,
    },
    {
      title: "Profit Margin",
      value: "72.9%",
      change: "+4.3%",
      trend: "up",
      description: "from last month",
      icon: TrendingUp,
    },
    {
      title: "Outstanding",
      value: "$6,593.21",
      change: "+12.3%",
      trend: "up",
      description: "from last month",
      icon: TrendingDown,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <div
              className={`rounded-full p-2 ${
                stat.title === "Total Revenue"
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-400"
                  : stat.title === "Expenses"
                    ? "bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-400"
                    : stat.title === "Profit Margin"
                      ? "bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-400"
                      : "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-400"
              }`}
            >
              <stat.icon className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              {stat.trend === "up" ? (
                <ArrowUp className="mr-1 h-4 w-4 text-emerald-500" />
              ) : (
                <ArrowDown className="mr-1 h-4 w-4 text-rose-500" />
              )}
              <span className={stat.trend === "up" ? "text-emerald-500" : "text-rose-500"}>{stat.change}</span>{" "}
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
