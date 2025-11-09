import { fees, studentNames } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle, XCircle } from "lucide-react";

export default function TeacherFeesPage() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
  };
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Student Fee Status</h1>
            <p className="text-muted-foreground">
                View fee payment status for students.
            </p>
        </div>
        <div className="w-1/4">
            <Input placeholder="Search by student ID or name..."/>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Fee Payment Records</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student ID</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Semester</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fees.map((fee, index) => (
                <TableRow key={fee.id}>
                  <TableCell className="font-medium">student{String(index + 1).padStart(2, '0')}</TableCell>
                  <TableCell>{studentNames[index % studentNames.length]}</TableCell>
                  <TableCell>{fee.semester}</TableCell>
                  <TableCell className="text-right">{formatCurrency(fee.total)}</TableCell>
                  <TableCell className="text-center">
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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
