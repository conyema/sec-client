export default function moneyFormatter(amount, currencyCode) {
  // Arguments not supplied and amount is greater than zero
  if (!(amount > 0 && currencyCode)) {
    return "";
  }

  const formattedAmount = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: 'narrowSymbol'
  }).format(amount);

  return formattedAmount;
} 
