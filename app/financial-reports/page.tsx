"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DatePickerWithRange } from "@/components/date-range-picker"
import { Download, FileText, Filter } from "lucide-react"

export default function FinancialReportsPage() {
  const [reportType, setReportType] = useState("income")

  return (
    <div className="flex-1 space-y-4 pt-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Financial Reports</h2>
          <p className="text-muted-foreground">Generate and view detailed financial statements</p>
        </div>
        <div className="flex items-center gap-2">
          <DatePickerWithRange />
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="income" onValueChange={setReportType} className="space-y-4">
        <TabsList>
          <TabsTrigger value="income">Income Statement</TabsTrigger>
          <TabsTrigger value="balance">Balance Sheet</TabsTrigger>
          <TabsTrigger value="cashflow">Cash Flow</TabsTrigger>
          <TabsTrigger value="tax">Tax Reports</TabsTrigger>
        </TabsList>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Income</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gross Profit</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$63,489.65</div>
              <p className="text-xs text-muted-foreground">+18.7% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tax Liability</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$8,932.45</div>
              <p className="text-xs text-muted-foreground">+5.2% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Operating Expenses</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$21,083.04</div>
              <p className="text-xs text-muted-foreground">-3.4% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <CardTitle>
                {reportType === "income" && "Income Statement"}
                {reportType === "balance" && "Balance Sheet"}
                {reportType === "cashflow" && "Cash Flow Statement"}
                {reportType === "tax" && "Tax Reports"}
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Select defaultValue="month">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">Monthly</SelectItem>
                    <SelectItem value="quarter">Quarterly</SelectItem>
                    <SelectItem value="year">Yearly</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <TabsContent value="income" className="m-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Current Month</TableHead>
                    <TableHead className="text-right">YTD</TableHead>
                    <TableHead className="text-right">Previous Year</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="font-medium">
                    <TableCell>Revenue</TableCell>
                    <TableCell className="text-right">$105,432.89</TableCell>
                    <TableCell className="text-right">$876,234.56</TableCell>
                    <TableCell className="text-right">$980,123.45</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Product Sales</TableCell>
                    <TableCell className="text-right">$92,345.67</TableCell>
                    <TableCell className="text-right">$765,432.10</TableCell>
                    <TableCell className="text-right">$845,678.90</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Service Revenue</TableCell>
                    <TableCell className="text-right">$13,087.22</TableCell>
                    <TableCell className="text-right">$110,802.46</TableCell>
                    <TableCell className="text-right">$134,444.55</TableCell>
                  </TableRow>
                  <TableRow className="font-medium">
                    <TableCell>Cost of Revenue</TableCell>
                    <TableCell className="text-right">$41,943.24</TableCell>
                    <TableCell className="text-right">$349,527.00</TableCell>
                    <TableCell className="text-right">$392,049.38</TableCell>
                  </TableRow>
                  <TableRow className="font-medium">
                    <TableCell>Gross Profit</TableCell>
                    <TableCell className="text-right">$63,489.65</TableCell>
                    <TableCell className="text-right">$526,707.56</TableCell>
                    <TableCell className="text-right">$588,074.07</TableCell>
                  </TableRow>
                  <TableRow className="font-medium">
                    <TableCell>Operating Expenses</TableCell>
                    <TableCell className="text-right">$21,083.04</TableCell>
                    <TableCell className="text-right">$174,989.23</TableCell>
                    <TableCell className="text-right">$196,024.69</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Salaries & Benefits</TableCell>
                    <TableCell className="text-right">$14,043.56</TableCell>
                    <TableCell className="text-right">$116,561.55</TableCell>
                    <TableCell className="text-right">$130,549.73</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Rent & Utilities</TableCell>
                    <TableCell className="text-right">$3,560.89</TableCell>
                    <TableCell className="text-right">$29,674.08</TableCell>
                    <TableCell className="text-right">$33,242.20</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Marketing</TableCell>
                    <TableCell className="text-right">$3,478.59</TableCell>
                    <TableCell className="text-right">$28,753.60</TableCell>
                    <TableCell className="text-right">$32,232.76</TableCell>
                  </TableRow>
                  <TableRow className="font-medium">
                    <TableCell>Operating Income</TableCell>
                    <TableCell className="text-right">$42,406.61</TableCell>
                    <TableCell className="text-right">$351,718.33</TableCell>
                    <TableCell className="text-right">$392,049.38</TableCell>
                  </TableRow>
                  <TableRow className="font-medium">
                    <TableCell>Taxes</TableCell>
                    <TableCell className="text-right">$8,932.45</TableCell>
                    <TableCell className="text-right">$74,055.44</TableCell>
                    <TableCell className="text-right">$82,462.85</TableCell>
                  </TableRow>
                  <TableRow className="font-medium bg-muted/50">
                    <TableCell>Net Income</TableCell>
                    <TableCell className="text-right">$33,474.16</TableCell>
                    <TableCell className="text-right">$277,662.89</TableCell>
                    <TableCell className="text-right">$309,586.53</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="balance" className="m-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Account</TableHead>
                    <TableHead className="text-right">Current Period</TableHead>
                    <TableHead className="text-right">Previous Period</TableHead>
                    <TableHead className="text-right">Change (%)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="font-medium">
                    <TableCell>Assets</TableCell>
                    <TableCell className="text-right"></TableCell>
                    <TableCell className="text-right"></TableCell>
                    <TableCell className="text-right"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Cash & Equivalents</TableCell>
                    <TableCell className="text-right">$142,356.78</TableCell>
                    <TableCell className="text-right">$125,987.45</TableCell>
                    <TableCell className="text-right">+13.0%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Accounts Receivable</TableCell>
                    <TableCell className="text-right">$87,654.32</TableCell>
                    <TableCell className="text-right">$92,345.67</TableCell>
                    <TableCell className="text-right">-5.1%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Inventory</TableCell>
                    <TableCell className="text-right">$65,432.10</TableCell>
                    <TableCell className="text-right">$58,765.43</TableCell>
                    <TableCell className="text-right">+11.3%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Fixed Assets</TableCell>
                    <TableCell className="text-right">$234,567.89</TableCell>
                    <TableCell className="text-right">$245,678.90</TableCell>
                    <TableCell className="text-right">-4.5%</TableCell>
                  </TableRow>
                  <TableRow className="font-medium">
                    <TableCell>Total Assets</TableCell>
                    <TableCell className="text-right">$530,011.09</TableCell>
                    <TableCell className="text-right">$522,777.45</TableCell>
                    <TableCell className="text-right">+1.4%</TableCell>
                  </TableRow>
                  <TableRow className="font-medium">
                    <TableCell>Liabilities</TableCell>
                    <TableCell className="text-right"></TableCell>
                    <TableCell className="text-right"></TableCell>
                    <TableCell className="text-right"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Accounts Payable</TableCell>
                    <TableCell className="text-right">$43,210.98</TableCell>
                    <TableCell className="text-right">$45,678.90</TableCell>
                    <TableCell className="text-right">-5.4%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Short-term Debt</TableCell>
                    <TableCell className="text-right">$32,109.87</TableCell>
                    <TableCell className="text-right">$34,567.89</TableCell>
                    <TableCell className="text-right">-7.1%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Long-term Debt</TableCell>
                    <TableCell className="text-right">$98,765.43</TableCell>
                    <TableCell className="text-right">$105,432.10</TableCell>
                    <TableCell className="text-right">-6.3%</TableCell>
                  </TableRow>
                  <TableRow className="font-medium">
                    <TableCell>Total Liabilities</TableCell>
                    <TableCell className="text-right">$174,086.28</TableCell>
                    <TableCell className="text-right">$185,678.89</TableCell>
                    <TableCell className="text-right">-6.2%</TableCell>
                  </TableRow>
                  <TableRow className="font-medium">
                    <TableCell>Equity</TableCell>
                    <TableCell className="text-right">$355,924.81</TableCell>
                    <TableCell className="text-right">$337,098.56</TableCell>
                    <TableCell className="text-right">+5.6%</TableCell>
                  </TableRow>
                  <TableRow className="font-medium bg-muted/50">
                    <TableCell>Total Liabilities & Equity</TableCell>
                    <TableCell className="text-right">$530,011.09</TableCell>
                    <TableCell className="text-right">$522,777.45</TableCell>
                    <TableCell className="text-right">+1.4%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="cashflow" className="m-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Activity</TableHead>
                    <TableHead className="text-right">Current Period</TableHead>
                    <TableHead className="text-right">YTD</TableHead>
                    <TableHead className="text-right">Previous Year</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="font-medium">
                    <TableCell>Operating Activities</TableCell>
                    <TableCell className="text-right"></TableCell>
                    <TableCell className="text-right"></TableCell>
                    <TableCell className="text-right"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Net Income</TableCell>
                    <TableCell className="text-right">$33,474.16</TableCell>
                    <TableCell className="text-right">$277,662.89</TableCell>
                    <TableCell className="text-right">$309,586.53</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Depreciation</TableCell>
                    <TableCell className="text-right">$5,432.10</TableCell>
                    <TableCell className="text-right">$45,267.50</TableCell>
                    <TableCell className="text-right">$50,765.43</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Changes in Working Capital</TableCell>
                    <TableCell className="text-right">$3,456.78</TableCell>
                    <TableCell className="text-right">$28,765.40</TableCell>
                    <TableCell className="text-right">$32,198.76</TableCell>
                  </TableRow>
                  <TableRow className="font-medium">
                    <TableCell>Net Cash from Operating</TableCell>
                    <TableCell className="text-right">$42,363.04</TableCell>
                    <TableCell className="text-right">$351,695.79</TableCell>
                    <TableCell className="text-right">$392,550.72</TableCell>
                  </TableRow>
                  <TableRow className="font-medium">
                    <TableCell>Investing Activities</TableCell>
                    <TableCell className="text-right"></TableCell>
                    <TableCell className="text-right"></TableCell>
                    <TableCell className="text-right"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Capital Expenditures</TableCell>
                    <TableCell className="text-right">-$12,345.67</TableCell>
                    <TableCell className="text-right">-$102,880.58</TableCell>
                    <TableCell className="text-right">-$115,234.56</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Investments</TableCell>
                    <TableCell className="text-right">-$5,432.10</TableCell>
                    <TableCell className="text-right">-$45,267.50</TableCell>
                    <TableCell className="text-right">-$50,654.32</TableCell>
                  </TableRow>
                  <TableRow className="font-medium">
                    <TableCell>Net Cash from Investing</TableCell>
                    <TableCell className="text-right">-$17,777.77</TableCell>
                    <TableCell className="text-right">-$148,148.08</TableCell>
                    <TableCell className="text-right">-$165,888.88</TableCell>
                  </TableRow>
                  <TableRow className="font-medium">
                    <TableCell>Financing Activities</TableCell>
                    <TableCell className="text-right"></TableCell>
                    <TableCell className="text-right"></TableCell>
                    <TableCell className="text-right"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Debt Payments</TableCell>
                    <TableCell className="text-right">-$8,765.43</TableCell>
                    <TableCell className="text-right">-$73,045.25</TableCell>
                    <TableCell className="text-right">-$81,765.43</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-6">Dividends</TableCell>
                    <TableCell className="text-right">-$4,321.09</TableCell>
                    <TableCell className="text-right">-$36,009.08</TableCell>
                    <TableCell className="text-right">-$40,321.09</TableCell>
                  </TableRow>
                  <TableRow className="font-medium">
                    <TableCell>Net Cash from Financing</TableCell>
                    <TableCell className="text-right">-$13,086.52</TableCell>
                    <TableCell className="text-right">-$109,054.33</TableCell>
                    <TableCell className="text-right">-$122,086.52</TableCell>
                  </TableRow>
                  <TableRow className="font-medium bg-muted/50">
                    <TableCell>Net Change in Cash</TableCell>
                    <TableCell className="text-right">$11,498.75</TableCell>
                    <TableCell className="text-right">$94,493.38</TableCell>
                    <TableCell className="text-right">$104,575.32</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="tax" className="m-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tax Category</TableHead>
                    <TableHead className="text-right">Current Quarter</TableHead>
                    <TableHead className="text-right">YTD</TableHead>
                    <TableHead className="text-right">Previous Year</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Income Tax</TableCell>
                    <TableCell className="text-right">$7,654.32</TableCell>
                    <TableCell className="text-right">$63,785.33</TableCell>
                    <TableCell className="text-right">$70,987.65</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sales Tax</TableCell>
                    <TableCell className="text-right">$4,567.89</TableCell>
                    <TableCell className="text-right">$38,065.75</TableCell>
                    <TableCell className="text-right">$42,456.78</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Property Tax</TableCell>
                    <TableCell className="text-right">$1,234.56</TableCell>
                    <TableCell className="text-right">$10,298.00</TableCell>
                    <TableCell className="text-right">$11,432.56</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Payroll Tax</TableCell>
                    <TableCell className="text-right">$3,210.98</TableCell>
                    <TableCell className="text-right">$26,758.17</TableCell>
                    <TableCell className="text-right">$29,876.54</TableCell>
                  </TableRow>
                  <TableRow className="font-medium bg-muted/50">
                    <TableCell>Total Tax Liability</TableCell>
                    <TableCell className="text-right">$16,667.75</TableCell>
                    <TableCell className="text-right">$138,907.25</TableCell>
                    <TableCell className="text-right">$154,753.53</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Previous Period</Button>
            <Button variant="outline">Next Period</Button>
          </CardFooter>
        </Card>
      </Tabs>
    </div>
  )
}
