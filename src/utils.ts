// Utility functions for the project

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

// TODO: fix typo below
export function recieveMessage(msg: string): void {
  console.log(`Recieved message: ${msg}`);
}

export function calculateTotal(items: number[]): number {
  return items.reduce((sum, item) => sum + item, 0);
}
