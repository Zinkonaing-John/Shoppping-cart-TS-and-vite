const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
    });

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
  
}