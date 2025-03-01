
export function formatDate(dateStr) {
  if (dateStr.length === 8) {
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return `${month}/${day}/${year}`;
  }
  return dateStr;
}

export function negateAmount(amountStr) {
  // Check if the amount already starts with a minus
  if (amountStr.trim().startsWith('-')) {
    return amountStr.trim().substring(1);
  } else {
    return '-' + amountStr.trim();
  }
}