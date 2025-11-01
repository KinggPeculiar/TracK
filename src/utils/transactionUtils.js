// Utility functions for transaction calculations
// These functions compute metrics from transaction data

/**
 * Get total count of transactions
 * @param {Array} transactions - Array of transaction objects
 * @returns {number} Total transaction count
 */
export function getTotalTransactions(transactions) {
  return transactions.length;
}

/**
 * Calculate total amount from all transactions
 * @param {Array} transactions - Array of transaction objects
 * @returns {number} Sum of all transaction amounts
 */
export function getTotalAmount(transactions) {
  return transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
}

/**
 * Count successful transactions
 * @param {Array} transactions - Array of transaction objects
 * @returns {number} Count of successful transactions
 */
export function getSuccessfulCount(transactions) {
  return transactions.filter(transaction => transaction.status === "Successful").length;
}

/**
 * Count failed transactions
 * @param {Array} transactions - Array of transaction objects
 * @returns {number} Count of failed transactions
 */
export function getFailedCount(transactions) {
  return transactions.filter(transaction => transaction.status === "Failed").length;
}

/**
 * Count pending transactions
 * @param {Array} transactions - Array of transaction objects
 * @returns {number} Count of pending transactions
 */
export function getPendingCount(transactions) {
  return transactions.filter(transaction => transaction.status === "Pending").length;
}

/**
 * Format currency in Nigerian Naira
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount) {
  return `₦${amount.toLocaleString('en-NG')}`;
}

/**
 * Format date to readable string
 * @param {string} timestamp - ISO timestamp
 * @returns {string} Formatted date string
 */
export function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

/**
 * Format time to readable string
 * @param {string} timestamp - ISO timestamp
 * @returns {string} Formatted time string
 */
export function formatTime(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('en-NG', {
    hour: '2-digit',
    minute: '2-digit'
  });
}
