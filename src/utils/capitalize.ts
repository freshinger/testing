export function capitalize(word: string): string {
  if (word.length == 0) return "";
  word = word.trim();
  let isProperWord = word.match(/\w+/);
  if (isProperWord !== null && isProperWord[0] !== word)
    console.warn("function capitalize used without a proper word: " + word);
  return word[0].toUpperCase() + word.slice(1);
}
