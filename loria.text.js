const pickData = require("./index.js");
const sources = [1, 2, 3, 4,5];
console.log("1.citizen-new\n2. al-jazeera-english\n3. bbc-news\n4. cnn\n5. abc-news\n");

const news_sources = {
  1:"citizen-news",
  2: "al-jazeera-english",
  3: "bbc-news",
  4: "cnn",
  5: "abc-news"
};

test("Enter a number of one to get citizen-news", () => {
  expect(news_sources)[1].tobe("citizen-news");
  expect(news_sources[2]).toBe("al-jazeera-english");
  expect(news_sources[3]).toBe("bbc-news");
  expect(news_sources[4]).toBe("cnn");
  expect(news_sources[5]).toBe("abc-news");
});