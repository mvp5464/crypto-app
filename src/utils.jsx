export function numberWithCommas(y) {
  const x = (Math.round(y * 100) / 100).toFixed(2);
  return "$" + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
