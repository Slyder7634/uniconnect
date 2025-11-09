import { fees } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle, XCircle } from "lucide-react";

export default function FeesPage() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Fee Details</h1>
        <p className="text-muted-foreground">
          An overview of your fee payments and outstanding dues.
        </p>
      </div>

      {fees.map((fee) => (
        <Card key={fee.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
                <div>
                    <CardTitle>{fee.semester} Fee Statement</CardTitle>
                    <CardDescription>Due by {new Date(fee.dueDate).toLocaleDateString()}</CardDescription>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Badge variant={fee.status === 'Paid' ? 'default' : 'destructive'} className={`${fee.status === 'Paid' ? 'bg-green-600' : ''} cursor-pointer`}>
                            {fee.status}
                        </Badge>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                                {fee.status === 'Paid' ? <CheckCircle className="text-green-600"/> : <XCircle className="text-destructive"/>}
                                Fee Status: {fee.status}
                            </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4 space-y-4">
                            {fee.status === 'Paid' && fee.paymentDetails ? (
                                <>
                                   <div>
                                        <p className="font-semibold text-lg">{formatCurrency(fee.total)}</p>
                                        <p className="text-sm text-muted-foreground">Successfully paid on {new Date(fee.paymentDetails.paymentDate).toLocaleDateString()}</p>
                                   </div>
                                    <div className="text-sm">
                                        <p><span className="font-semibold">Payment Method:</span> {fee.paymentDetails.paymentMethod}</p>
                                        <p><span className="font-semibold">Transaction ID:</span> {fee.paymentDetails.transactionId}</p>
                                    </div>
                                </>
                            ) : (
                                <div className="space-y-2">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Amount Paid</p>
                                        <p className="font-semibold">{formatCurrency(0)}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Amount Due</p>
                                        <p className="font-semibold text-lg text-destructive">{formatCurrency(fee.total)}</p>
                                    </div>
                                    <p className="text-xs text-muted-foreground pt-2">Payment is due by {new Date(fee.dueDate).toLocaleDateString()}</p>
                                </div>
                            )}
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fee.details.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.item}</TableCell>
                    <TableCell className="text-right">{formatCurrency(item.amount)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell className="font-bold">Total</TableCell>
                  <TableCell className="text-right font-bold">{formatCurrency(fee.total)}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
            {fee.status === 'Unpaid' && (
                <div className="flex justify-end mt-4">
                    <Button>Pay Now</Button>
                </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
