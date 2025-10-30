import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, formatDate, formatTime } from "@/utils/transactionUtils";

export default function TransactionTable({ transactions }) {

  const getStatusColor = (status) => {
    switch (status) {
      case "Successful":
        return "bg-chart-2/10 text-chart-2 hover:bg-chart-2/20";
      case "Failed":
        return "bg-chart-3/10 text-chart-3 hover:bg-chart-3/20";
      case "Pending":
        return "bg-chart-4/10 text-chart-4 hover:bg-chart-4/20";
      default:
        return "";
    }
  };

  return (
      <div className="overflow-x-auto">
        <div className="px-10">
          <div className="">
            <table className="w-full border border-separate rounded-lg  border-gray-300">
              <thead className="bg-[#F6F7FB] border-2">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Terminal
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-[#F6F7FB]">
                {transactions.map((transaction) => (
                  <tr 
                    key={transaction.id} 
                    className="hover-elevate transition-colors duration-150"
                    data-testid={`row-transaction-${transaction.id}`}
                  >
                    <td className="px-6 py-4 text-sm font-mono text-foreground">
                      {transaction.id}
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-foreground">
                      {transaction.terminalId}
                    </td>
                    <td className="px-6 py-4 text-sm font-mono font-semibold tabular-nums text-foreground">
                      {formatCurrency(transaction.amount)}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <Badge 
                        className={`${getStatusColor(transaction.status)} no-default-hover-elevate`}
                        data-testid={`status-${transaction.id}`}
                      >
                        {transaction.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      <div className="flex flex-col">
                        <span>{formatDate(transaction.timestamp)}</span>
                        <span className="text-xs text-muted-foreground">{formatTime(transaction.timestamp)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      {transaction.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>          
          </div>          
        </div>
      </div>
  )
}
