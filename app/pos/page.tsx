"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  BarChart4,
  ShoppingCart,
  Trash2,
  CreditCard,
  CurrencyIcon as Cash,
  QrCode,
  ArrowRight,
  Plus,
  Minus,
  Search,
  CheckCircle,
} from "lucide-react"

const categories = ["All", "Electronics", "Clothing", "Food", "Furniture", "Books", "Toys"]

const products = [
  { id: 1, name: "Laptop", price: 1299.99, category: "Electronics", image: "/placeholder.svg?height=80&width=80" },
  { id: 2, name: "Smartphone", price: 799.99, category: "Electronics", image: "/placeholder.svg?height=80&width=80" },
  { id: 3, name: "T-shirt", price: 24.99, category: "Clothing", image: "/placeholder.svg?height=80&width=80" },
  { id: 4, name: "Jeans", price: 49.99, category: "Clothing", image: "/placeholder.svg?height=80&width=80" },
  { id: 5, name: "Coffee", price: 3.99, category: "Food", image: "/placeholder.svg?height=80&width=80" },
  { id: 6, name: "Sandwich", price: 7.99, category: "Food", image: "/placeholder.svg?height=80&width=80" },
  { id: 7, name: "Chair", price: 149.99, category: "Furniture", image: "/placeholder.svg?height=80&width=80" },
  { id: 8, name: "Table", price: 249.99, category: "Furniture", image: "/placeholder.svg?height=80&width=80" },
  { id: 9, name: "Novel", price: 14.99, category: "Books", image: "/placeholder.svg?height=80&width=80" },
  { id: 10, name: "Textbook", price: 79.99, category: "Books", image: "/placeholder.svg?height=80&width=80" },
  { id: 11, name: "Action Figure", price: 19.99, category: "Toys", image: "/placeholder.svg?height=80&width=80" },
  { id: 12, name: "Board Game", price: 34.99, category: "Toys", image: "/placeholder.svg?height=80&width=80" },
]

type CartItem = {
  id: number
  productId: number
  name: string
  price: number
  quantity: number
  total: number
}

export default function POSPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false)

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const addToCart = (product: (typeof products)[0]) => {
    const existingItem = cartItems.find((item) => item.productId === product.id)

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.productId === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: (item.quantity + 1) * item.price,
              }
            : item,
        ),
      )
    } else {
      setCartItems([
        ...cartItems,
        {
          id: Date.now(),
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          total: product.price,
        },
      ])
    }
  }

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, change: number) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change)
          return {
            ...item,
            quantity: newQuantity,
            total: newQuantity * item.price,
          }
        }
        return item
      }),
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.total, 0)
  }

  const calculateTax = () => {
    return calculateSubtotal() * 0.1
  }

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax()
  }

  const handlePayment = (method: string) => {
    // Simulate payment processing
    setTimeout(() => {
      setIsPaymentSuccess(true)
      setTimeout(() => {
        setIsPaymentSuccess(false)
        clearCart()
      }, 3000)
    }, 1000)
  }

  return (
    <div className="flex-1 space-y-4 pt-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Point of Sale</h2>
          <p className="text-muted-foreground">Process sales transactions and manage inventory</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <BarChart4 className="mr-2 h-4 w-4" />
            Sales Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Product Selection */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <CardTitle>Products</CardTitle>
                <div className="w-full md:w-[300px]">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex overflow-x-auto pb-2 mb-4">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="mr-2 flex-shrink-0"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="cursor-pointer" onClick={() => addToCart(product)}>
                    <CardContent className="p-4 flex flex-col items-center">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-20 w-20 object-contain mb-2"
                      />
                      <h3 className="text-sm font-medium text-center">{product.name}</h3>
                      <Badge className="mt-1 bg-emerald-500 hover:bg-emerald-600">${product.price.toFixed(2)}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cart */}
        <div>
          <Card className="h-full flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Cart
                </CardTitle>
                <Button variant="outline" size="icon" onClick={clearCart} disabled={cartItems.length === 0}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto">
              {isPaymentSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="rounded-full bg-emerald-100 p-3 dark:bg-emerald-900">
                    <CheckCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">Payment Successful!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">The transaction has been processed successfully.</p>
                </div>
              ) : cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">Your cart is empty</h3>
                  <p className="text-sm text-muted-foreground mt-2">Add products to the cart to create a sale</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between pb-4 border-b">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
                      </div>
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-10 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="ml-4 text-right">
                        <p className="font-medium">${item.total.toFixed(2)}</p>
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeFromCart(item.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex-col border-t pt-4">
              {!isPaymentSuccess && (
                <>
                  <div className="w-full space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${calculateSubtotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (10%)</span>
                      <span>${calculateTax().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>Total</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>

                  <Tabs defaultValue="card" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="card">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Card
                      </TabsTrigger>
                      <TabsTrigger value="cash">
                        <Cash className="mr-2 h-4 w-4" />
                        Cash
                      </TabsTrigger>
                      <TabsTrigger value="mobile">
                        <QrCode className="mr-2 h-4 w-4" />
                        Mobile
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="card">
                      <Button
                        className="w-full"
                        onClick={() => handlePayment("card")}
                        disabled={cartItems.length === 0}
                      >
                        Pay with Card
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </TabsContent>
                    <TabsContent value="cash">
                      <Button
                        className="w-full"
                        onClick={() => handlePayment("cash")}
                        disabled={cartItems.length === 0}
                      >
                        Pay with Cash
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </TabsContent>
                    <TabsContent value="mobile">
                      <Button
                        className="w-full"
                        onClick={() => handlePayment("mobile")}
                        disabled={cartItems.length === 0}
                      >
                        Pay with Mobile
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </TabsContent>
                  </Tabs>
                </>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
