export const formatCurrency = (value) => {
  const formatted = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
  return formatted.replace("₦", "#");
};
export const maskCurrency = (value) => {
  const formatted = formatCurrency(value);
  const visiblePart = formatted.slice(-3); // last 3 digits
  const maskedPart = "*".repeat(formatted.length)
  return maskedPart;
};