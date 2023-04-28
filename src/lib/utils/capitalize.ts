export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeAllLetters(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
