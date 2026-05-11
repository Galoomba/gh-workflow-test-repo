// Utility functions for the project

/**
 * Formats a Date object into an ISO 8601 date string (YYYY-MM-DD).
 *
 * @param date - The Date object to format.
 * @returns The formatted date string.
 */
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

// TODO: fix typo below
/**
 * Logs a received message to the console.
 *
 * @param msg - The message string to log.
 */
export function recieveMessage(msg: string): void {
  console.log(`Recieved message: ${msg}`);
}

/**
 * Calculates the sum of an array of numbers.
 *
 * @param items - An array of numbers to sum.
 * @returns The total sum of all items.
 */
export function calculateTotal(items: number[]): number {
  return items.reduce((sum, item) => sum + item, 0);
}
