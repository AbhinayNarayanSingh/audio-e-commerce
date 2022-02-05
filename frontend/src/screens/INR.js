export const inr = (number) => {
  return new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 20,
  }).format(number);
};
