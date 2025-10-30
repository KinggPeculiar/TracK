import React from "react";
import { useState, useMemo } from "react";
import TransactionTable from "@/components/TransactionTable";
import { mockTransactions } from "@/data/mockTransactions";
import {
  getTotalTransactions,
  getTotalAmount,
  getSuccessfulCount,
  getFailedCount,
  formatCurrency,
} from "@/utils/transactionUtils";


function Dashboard() {

    const [statusFilter, setStatusFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");

     // Filter transactions based on current filters
    const filteredTransactions = useMemo(() => {
        return mockTransactions.filter((transaction) => {
        // Status filter
        if (statusFilter !== "All" && transaction.status !== statusFilter) {
            return false;
        }

        // Search filter (terminal ID or location)
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const matchesTerminal = transaction.terminalId.toLowerCase().includes(query);
            const matchesLocation = transaction.location.toLowerCase().includes(query);
            if (!matchesTerminal && !matchesLocation) {
            return false;
            }
        }

        // Date range filter
        const transactionDate = new Date(transaction.timestamp);
        if (dateFrom) {
            const fromDate = new Date(dateFrom);
            if (transactionDate < fromDate) {
            return false;
            }
        }
        if (dateTo) {
            const toDate = new Date(dateTo);
            toDate.setHours(23, 59, 59, 999); // Include the entire "to" day
            if (transactionDate > toDate) {
            return false;
            }
        }

        return true;
        });
    }, [statusFilter, searchQuery, dateFrom, dateTo]);

    return (
        <div className="w-full min-h-full">
            <TransactionTable transactions={filteredTransactions} />
        </div>
    );
}

export default Dashboard;