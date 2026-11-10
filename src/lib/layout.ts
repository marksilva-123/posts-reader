export const readingColumnClassName = "mx-auto w-full max-w-prose";

export function toParagraphs(text: string): string[] {
  return text
    .trim()
    .split(/\r?\n\s*\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}
