import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales() {
  const recentSales = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: "+$1,999.00",
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: "+$1,459.00",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: "+$1,289.00",
    },
    {
      name: "William Kim",
      email: "will.kim@email.com",
      amount: "+$799.00",
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      amount: "+$699.00",
    },
  ]

  return (
    <div className="space-y-4">
      {recentSales.map((sale) => (
        <div key={sale.email} className="flex items-center">
          <Avatar className="h-9 w-9 mr-3">
            <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt={sale.name} />
            <AvatarFallback>
              {sale.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">{sale.email}</p>
          </div>
          <div className="font-medium text-emerald-600 dark:text-emerald-400">{sale.amount}</div>
        </div>
      ))}
    </div>
  )
}
