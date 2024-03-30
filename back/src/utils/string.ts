import stringSimilarity from "string-similarity";

export const findBestSimilarity = (text: string, options: string[]) => {
  const matches = stringSimilarity.findBestMatch(text, options);
  return matches.bestMatch.target;
};
