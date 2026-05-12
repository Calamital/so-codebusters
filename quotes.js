class Quotes {
  constructor() {}
  async getQuotes() {
    const quoteURL =
      "https://raw.githubusercontent.com/dwyl/quotes/refs/heads/main/quotes.json";
    const data = await fetch(quoteURL);
    if (data.ok) {
      const result = await data.json();
      return result;
    }
    return null;
  }
  async fetchQuote() {
    const quotes = await this.getQuotes();
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return [quote.text.toUpperCase(), quote.author.toLowerCase()];
  }
}