"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, FileText, Home, Receipt, Settings, ShoppingCart, Package, Users, File, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

const routes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/",
    color: "text-emerald-500",
  },
  {
    label: "Financial Reports",
    icon: FileText,
    href: "/financial-reports",
    color: "text-violet-500",
  },
  {
    label: "Sales Analysis",
    icon: BarChart3,
    href: "/sales",
    color: "text-pink-700",
  },
  {
    label: "Documents",
    icon: File,
    href: "/documents",
    color: "text-orange-500",
  },
  {
    label: "Invoices",
    icon: Receipt,
    href: "/invoices",
    color: "text-emerald-700",
  },
  {
    label: "Point of Sale",
    icon: ShoppingCart,
    href: "/pos",
    color: "text-teal-500",
  },
  {
    label: "Inventory",
    icon: Package,
    href: "/inventory",
    color: "text-gray-700",
  },
  {
    label: "Customers",
    icon: Users,
    color: "text-rose-500",
    href: "/customers",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetTrigger asChild className="block md:hidden absolute left-4 top-3 z-50">
          <Button variant="outline" size="icon" className="rounded-lg">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 pt-10 w-72">
          <aside className="flex flex-col h-full py-4 border-r">
            <div className="px-4 py-2 mb-6">
              <h2 className="text-xl font-bold">FinancePro</h2>
            </div>
            <div className="flex flex-col flex-1 px-3 space-y-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent",
                    pathname === route.href ? "bg-accent text-accent-foreground" : "transparent",
                  )}
                >
                  <route.icon className={cn("h-5 w-5", route.color)} />
                  {route.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto px-3">
              <div className="py-4">
                <div className="rounded-lg bg-accent p-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900">
                      <FileText className="h-4 w-4 text-emerald-700 dark:text-emerald-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Need Help?</h4>
                    </div>
                  </div>
                  <div className="mb-2">
                    <p className="text-xs">View documentation or contact support for help.</p>
                  </div>
                  <Button size="sm" variant="secondary" className="w-full">
                    View Documentation
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </SheetContent>
      </Sheet>
      <aside className={cn("hidden md:flex h-screen w-64 flex-col fixed inset-y-0 z-50", className)}>
        <div className="flex flex-col h-full py-4 border-r">
          <div className="px-4 py-2 mb-6">
            <h2 className="text-xl font-bold">FinancePro</h2>
          </div>
          <div className="flex flex-col flex-1 px-3 space-y-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent",
                  pathname === route.href ? "bg-accent text-accent-foreground" : "transparent",
                )}
              >
                <route.icon className={cn("h-5 w-5", route.color)} />
                {route.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto px-3">
            <div className="py-4">
              <div className="rounded-lg bg-accent p-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900">
                    <FileText className="h-4 w-4 text-emerald-700 dark:text-emerald-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Need Help?</h4>
                  </div>
                </div>
                <div className="mb-2">
                  <p className="text-xs">View documentation or contact support for help.</p>
                </div>
                <Button size="sm" variant="secondary" className="w-full">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="md:pl-64" />
    </>
  )
}
