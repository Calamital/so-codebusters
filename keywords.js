class Keywords {
  constructor(plainText) {
    this.plainText = plainText;
    this.keyword1 = "";
    this.keyword2 = "";
    this.rowDesignator = "";
    this.columnDesignator = "";
    this.crib = "";
  }
  test() {
    console.log(this.keyword1);
    console.log(this.keyword2);
    console.log(this.rowDesignator);
    console.log(this.columnDesignator);
    console.log(this.crib);
  }
  removeRepeats(word) {
    let letterSet = new Set(word);
    return [...letterSet].join("");
  }
  async generateKeywords() {
    await this.generateKeyword1();
    await this.generateKeyword2();
    await this.generateRowDesignator();
    await this.generateColumnDesignator();
    this.generateCrib();
  }
  async generateKeyword(minLength, maxLength, repeatingLetters) {
    let wordListURL =
      "https://raw.githubusercontent.com/first20hours/google-10000-english/refs/heads/master/google-10000-english-no-swears.txt";
    let words = await fetch(wordListURL);
    if (words.ok) {
      let split = (await words.text()).split("\n");
      let wordsList = split.filter(
        (word) => word.length >= minLength && word.length <= maxLength,
      );
      if (repeatingLetters) {
        return wordsList[
          Math.floor(Math.random() * wordsList.length)
        ].toUpperCase();
      } else {
        let nonRepeating = wordsList.filter(
          (word) => new Set(word).size == word.length,
        );
        return nonRepeating[
          Math.floor(Math.random() * nonRepeating.length)
        ].toUpperCase();
      }
    }
    return null;
  }
  async generateKeyword1() {
    let keyword = await this.generateKeyword(5, 10, true);
    this.keyword1 = keyword.toUpperCase();
  }
  async generateKeyword2() {
    let keyword = await this.generateKeyword(5, 10, true);
    while (keyword == this.keyword1) {
      keyword = await this.generateKeyword();
    }
    this.keyword2 = keyword.toUpperCase();
  }
  async generateRowDesignator() {
    let designator = await this.generateKeyword(5, 5, false);
    this.rowDesignator = designator.toUpperCase();
  }
  async generateColumnDesignator() {
    let designator = await this.generateKeyword(5, 5, false);
    while (designator == this.rowDesignator) {
      designator = await this.generateKeyword(5, 5, false);
    }
    this.columnDesignator = designator.toUpperCase();
  }
  generateCrib() {
    let punctuationRemoved = this.plainText.replace(/([^\w\s]+)()/g, "$2");
    let words = punctuationRemoved
      .split(" ")
      .sort((a, b) => b.length - a.length);
    this.crib = words[Math.floor(Math.random() * 3)];
  }
}