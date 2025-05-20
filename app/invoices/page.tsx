"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DownloadIcon,
  PrinterIcon,
  PlusIcon,
  TrashIcon,
  SendIcon,
  CheckCircle,
  AlertCircle,
  Clock,
  XCircle,
  FileTextIcon,
  Search,
  Filter,
} from "lucide-react"

const invoices = [
  {
    id: "INV-001",
    customer: "Acme Inc.",
    date: "2024-05-01",
    dueDate: "2024-05-15",
    amount: "$3,450.00",
    status: "Paid",
  },
  {
    id: "INV-002",
    customer: "XYZ Corporation",
    date: "2024-04-28",
    dueDate: "2024-05-12",
    amount: "$1,890.50",
    status: "Pending",
  },
  {
    id: "INV-003",
    customer: "Smith & Co",
    date: "2024-04-15",
    dueDate: "2024-04-30",
    amount: "$4,200.75",
    status: "Overdue",
  },
  {
    id: "INV-004",
    customer: "Global Enterprises",
    date: "2024-04-10",
    dueDate: "2024-04-25",
    amount: "$2,780.00",
    status: "Paid",
  },
  {
    id: "INV-005",
    customer: "Tech Solutions",
    date: "2024-04-05",
    dueDate: "2024-04-20",
    amount: "$5,600.25",
    status: "Cancelled",
  },
  {
    id: "INV-006",
    customer: "Johnson Ltd",
    date: "2024-03-28",
    dueDate: "2024-04-11",
    amount: "$1,250.00",
    status: "Paid",
  },
]

export default function InvoicesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [invoiceItems, setInvoiceItems] = useState([{ id: 1, description: "", quantity: 1, price: 0, total: 0 }])

  const handleAddItem = () => {
    const newItem = {
      id: invoiceItems.length + 1,
      description: "",
      quantity: 1,
      price: 0,
      total: 0,
    }
    setInvoiceItems([...invoiceItems, newItem])
  }

  const handleRemoveItem = (id: number) => {
    setInvoiceItems(invoiceItems.filter((item) => item.id !== id))
  }

  const handleItemChange = (id: number, field: string, value: string | number) => {
    setInvoiceItems(
      invoiceItems.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value }
          if (field === "quantity" || field === "price") {
            updatedItem.total = updatedItem.quantity * updatedItem.price
          }
          return updatedItem
        }
        return item
      }),
    )
  }

  const calculateTotal = () => {
    return invoiceItems.reduce((sum, item) => sum + item.total, 0)
  }

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.customer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex-1 space-y-4 pt-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Invoices</h2>
          <p className="text-muted-foreground">Create and manage invoices for your customers</p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusIcon className="mr-2 h-4 w-4" />
                New Invoice
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>Create New Invoice</DialogTitle>
                <DialogDescription>Fill in the details to create a new invoice for your customer.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="customer">Customer</Label>
                    <Select>
                      <SelectTrigger id="customer">
                        <SelectValue placeholder="Select customer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="acme">Acme Inc.</SelectItem>
                        <SelectItem value="xyz">XYZ Corporation</SelectItem>
                        <SelectItem value="smith">Smith & Co</SelectItem>
                        <SelectItem value="global">Global Enterprises</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="invoiceNumber">Invoice Number</Label>
                    <Input id="invoiceNumber" defaultValue="INV-007" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="issueDate">Issue Date</Label>
                    <Input id="issueDate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input id="dueDate" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Invoice Items</Label>
                  <div className="border rounded-md">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[50%]">Description</TableHead>
                          <TableHead>Quantity</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Total</TableHead>
                          <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {invoiceItems.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell>
                              <Input
                                value={item.description}
                                onChange={(e) => handleItemChange(item.id, "description", e.target.value)}
                                placeholder="Item description"
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleItemChange(item.id, "quantity", Number.parseInt(e.target.value))}
                                min="1"
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                type="number"
                                value={item.price}
                                onChange={(e) => handleItemChange(item.id, "price", Number.parseFloat(e.target.value))}
                                min="0"
                                step="0.01"
                              />
                            </TableCell>
                            <TableCell>${item.total.toFixed(2)}</TableCell>
                            <TableCell>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleRemoveItem(item.id)}
                                disabled={invoiceItems.length === 1}
                              >
                                <TrashIcon className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <div className="p-3 border-t">
                      <Button variant="outline" size="sm" onClick={handleAddItem}>
                        <PlusIcon className="mr-2 h-4 w-4" />
                        Add Item
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea id="notes" placeholder="Additional notes for the customer" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between pb-2">
                      <span className="font-medium">Subtotal:</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="font-medium">Tax (10%):</span>
                      <span>${(calculateTotal() * 0.1).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t font-semibold">
                      <span>Total:</span>
                      <span>${(calculateTotal() * 1.1).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Save as Draft</Button>
                <Button>Create Invoice</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Invoices</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div className="relative w-full md:w-[300px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search invoices..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Issue Date</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInvoices.length > 0 ? (
                    filteredInvoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.customer}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.dueDate}</TableCell>
                        <TableCell>{invoice.amount}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {invoice.status === "Paid" && (
                              <span className="flex items-center text-emerald-600">
                                <CheckCircle className="mr-1 h-4 w-4" />
                                Paid
                              </span>
                            )}
                            {invoice.status === "Pending" && (
                              <span className="flex items-center text-amber-600">
                                <Clock className="mr-1 h-4 w-4" />
                                Pending
                              </span>
                            )}
                            {invoice.status === "Overdue" && (
                              <span className="flex items-center text-rose-600">
                                <AlertCircle className="mr-1 h-4 w-4" />
                                Overdue
                              </span>
                            )}
                            {invoice.status === "Cancelled" && (
                              <span className="flex items-center text-gray-600">
                                <XCircle className="mr-1 h-4 w-4" />
                                Cancelled
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <FileTextIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <PrinterIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <SendIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center">
                        No invoices found. Try a different search term or filter.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Issue Date</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices
                    .filter((invoice) => invoice.status === "Pending")
                    .map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.customer}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.dueDate}</TableCell>
                        <TableCell>{invoice.amount}</TableCell>
                        <TableCell>
                          <div className="flex items-center text-amber-600">
                            <Clock className="mr-1 h-4 w-4" />
                            Pending
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <FileTextIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <PrinterIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <SendIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="paid" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Issue Date</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices
                    .filter((invoice) => invoice.status === "Paid")
                    .map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.customer}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.dueDate}</TableCell>
                        <TableCell>{invoice.amount}</TableCell>
                        <TableCell>
                          <div className="flex items-center text-emerald-600">
                            <CheckCircle className="mr-1 h-4 w-4" />
                            Paid
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <FileTextIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <PrinterIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <SendIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="overdue" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Issue Date</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices
                    .filter((invoice) => invoice.status === "Overdue")
                    .map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.customer}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.dueDate}</TableCell>
                        <TableCell>{invoice.amount}</TableCell>
                        <TableCell>
                          <div className="flex items-center text-rose-600">
                            <AlertCircle className="mr-1 h-4 w-4" />
                            Overdue
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <FileTextIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <PrinterIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <SendIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
