// Check if every value in the object is a non-empty string
export function allFieldsFilled(obj: Record<string, any>): boolean {
  return Object.keys(obj).every(
    (key) => typeof obj[key] === "string" && obj[key].trim() !== ""
  );
}
