"use client"

import { useTheme } from "next-themes"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts"

const data = [
  { name: "Payroll", value: 45 },
  { name: "Rent", value: 15 },
  { name: "Utilities", value: 10 },
  { name: "Marketing", value: 15 },
  { name: "Supplies", value: 8 },
  { name: "Other", value: 7 },
]

const COLORS = ["#10b981", "#8b5cf6", "#f43f5e", "#f59e0b", "#3b82f6", "#6b7280"]

export function ExpensesChart() {
  const { theme } = useTheme()

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value) => [`${value}%`, "Percentage"]}
          contentStyle={{
            backgroundColor: theme === "dark" ? "#1f2937" : "#ffffff",
            borderColor: theme === "dark" ? "#374151" : "#e5e7eb",
            color: theme === "dark" ? "#f3f4f6" : "#111827",
            borderRadius: "0.375rem",
          }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
