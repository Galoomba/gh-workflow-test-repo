// Utility functions for the project

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function receiveMessage(msg: string): void {
  console.log(`Received message: ${msg}`);
}

export function calculateTotal(items: number[]): number {
  return items.reduce((sum, item) => sum + item, 0);
}
