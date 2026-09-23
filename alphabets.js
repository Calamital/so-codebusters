class Alphabets {
  constructor(plainText) {
    this.keywords = new Keywords(plainText);
    this.normalAlphabet = [];
    this.shuffledAlphabets = [];
    this.shiftedAlphabet = [];
    this.k1Alphabets = [];
    this.k2Alphabets = [];
    this.k3Alphabets = [];
    this.polybiusAlphabet = [];
    this.baconianAlphabet = new Map();
    this.numberBaconian = new Map();
    this.wordBaconian = {};
  }
  test() {
    console.log(this.normalAlphabet);
    console.log(this.shuffledAlphabets);
    console.log(this.k1Alphabets);
    console.log(this.k2Alphabets);
    console.log(this.k3Alphabets);
    console.log(this.polybiusAlphabet);
    console.log(this.baconianAlphabet);
    console.log(this.numberBaconian);
    console.log(this.wordBaconian);
  }
  generateAlphabets() {
    this.generateNormalAlphabet();
    this.generateShuffledAlphabets();
    this.generateShiftedAlphabet();
    this.generateK1Alphabets();
    this.generateK2Alphabets();
    this.generateK3Alphabets();
    this.generatePolybiusAlphabet();
    this.generateBaconianAlphabet();
    this.generateNumberBaconian();
    this.generateWordBaconianWords();
  }
  insertKeyword(shift, keyword) {
    let newAlphabet = [...this.normalAlphabet];
    for (let i = 0; i < 26; i++) {
      let letter = newAlphabet[i];
      if (keyword.includes(letter)) {
        newAlphabet.splice(i, 1);
        i--;
      }
    }
    const firstHalf = newAlphabet.slice(newAlphabet.length - shift);
    const secondHalf = newAlphabet.slice(0, newAlphabet.length - shift);
    let keywordArray = [...firstHalf, ...keyword.split(""), ...secondHalf];
    return keywordArray;
  }
  generateNormalAlphabet() {
    for (let letter = 0; letter < 26; letter++) {
      this.normalAlphabet.push(String.fromCharCode(letter + 65));
    }
  }
  generateNumberBaconian() {
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 5; i++) {
      let index = Math.floor(Math.random() * digits.length);
      let digit = digits[index];
      this.numberBaconian.set(digit, "A");
      digits.splice(index, 1);
    }
    for (let i = 0; i < 5; i++) {
      let index = Math.floor(Math.random() * digits.length);
      let digit = digits[index];
      this.numberBaconian.set(digit, "B");
      digits.splice(index, 1);
    }
  }
  generateWordBaconianWords() {
    this.wordBaconian = {
      "letters": {},
      "words": {}
    };
    this.baconianAlphabet.forEach((key, value) => {
      this.wordBaconian.words[key] = [];
    });
    let letters = this.normalAlphabet.slice();
    let patterns = ["AABBAB", "ABAB", "AAABABBB", "ABBBAA", "BAAABB", "ABBA", "BAAB"];
    let pattern = patterns[Math.floor(Math.random() * patterns.length)];
    for (let i = 0; i < 26; i++) {
      let letter = letters[i];
      document.getElementById("hint").innerHTML = pattern[i % pattern.length];
      this.wordBaconian.letters[letter] = pattern[i % pattern.length];
    }
    this.keywords.fiveLetterWords.forEach((word) => {
      let baconian = "";
      word.split("").forEach((letter) => {
        baconian += this.wordBaconian.letters[letter.toUpperCase()];
      });
      this.baconianAlphabet.forEach((key, value) => {
        if (key == baconian) {
          this.wordBaconian.words[key].push(word);
        }
      });
    });
  }
  generateBaconianAlphabet() {
    this.baconianAlphabet.set("A", "AAAAA");
    this.baconianAlphabet.set("B", "AAAAB");
    this.baconianAlphabet.set("C", "AAABA");
    this.baconianAlphabet.set("D", "AAABB");
    this.baconianAlphabet.set("E", "AABAA");
    this.baconianAlphabet.set("F", "AABAB");
    this.baconianAlphabet.set("G", "AABBA");
    this.baconianAlphabet.set("H", "AABBB");
    this.baconianAlphabet.set("I", "ABAAA");
    this.baconianAlphabet.set("J", "ABAAA");
    this.baconianAlphabet.set("K", "ABAAB");
    this.baconianAlphabet.set("L", "ABABA");
    this.baconianAlphabet.set("M", "ABABB");
    this.baconianAlphabet.set("N", "ABBAA");
    this.baconianAlphabet.set("O", "ABBAB");
    this.baconianAlphabet.set("P", "ABBBA");
    this.baconianAlphabet.set("Q", "ABBBB");
    this.baconianAlphabet.set("R", "BAAAA");
    this.baconianAlphabet.set("S", "BAAAB");
    this.baconianAlphabet.set("T", "BAABA");
    this.baconianAlphabet.set("U", "BAABB");
    this.baconianAlphabet.set("V", "BAABB");
    this.baconianAlphabet.set("W", "BABAA");
    this.baconianAlphabet.set("X", "BABAB");
    this.baconianAlphabet.set("Y", "BABBA");
    this.baconianAlphabet.set("Z", "BABBB");
  }
  generateShuffledAlphabets() {
    let shuffledAlphabet = [...this.normalAlphabet];
    for (let iterator = shuffledAlphabet.length - 1; iterator > 0; iterator--) {
      let switchWith = Math.floor(Math.random() * iterator);
      [shuffledAlphabet[iterator], shuffledAlphabet[switchWith]] = [
        shuffledAlphabet[switchWith],
        shuffledAlphabet[iterator],
      ];
    }
    this.shuffledAlphabets.push(this.normalAlphabet);
    this.shuffledAlphabets.push(shuffledAlphabet);
  }
  generateShiftedAlphabet() {
    this.shiftedAlphabet[0] = Math.floor(Math.random() * 25);
    let newAlphabet = [];
    for (let i = 0; i < 26; i++) {
      newAlphabet.push(String.fromCharCode(((i + this.shiftedAlphabet[0]) % 26) + 65));
    }
    this.shiftedAlphabet[1] = newAlphabet;
  }
  generateK1Alphabets() {
    const k1Keyword = this.keywords.removeRepeats(this.keywords.keyword1);
    let alphabetSorter = [
      this.normalAlphabet,
      this.insertKeyword(Math.floor(Math.random() * 24), k1Keyword),
    ];
    let toSort = [];
    for (let i = 0; i < 26; i++) {
      toSort.push([alphabetSorter[0][i], alphabetSorter[1][i]]);
    }
    toSort.sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0));
    let alphabet1 = [];
    let alphabet2 = [];
    for (let i = 0; i < 26; i++) {
      alphabet1.push(toSort[i][0]);
      alphabet2.push(toSort[i][1]);
    }
    this.k1Alphabets.push(alphabet1);
    this.k1Alphabets.push(alphabet2);
  }
  generateK2Alphabets() {
    const k2Keyword = this.keywords.removeRepeats(this.keywords.keyword1);
    this.k2Alphabets.push(
      this.insertKeyword(Math.floor(Math.random() * 24), k2Keyword),
    );
    this.k2Alphabets.push(this.normalAlphabet);
  }
  generateK3Alphabets() {
    const k3Keyword = this.keywords.removeRepeats(this.keywords.keyword1);
    let alphabetSorter = [];
    let shift1 = Math.floor(Math.random() * 24);
    alphabetSorter.push(this.insertKeyword(shift1, k3Keyword));
    alphabetSorter.push(
      this.insertKeyword(
        (shift1 + 1 + Math.floor(Math.random() * 4)) % 26,
        k3Keyword,
      ),
    );
    let toSort = [];
    for (let i = 0; i < 26; i++) {
      toSort.push([alphabetSorter[0][i], alphabetSorter[1][i]]);
    }
    toSort.sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0));
    let alphabet1 = [];
    let alphabet2 = [];
    for (let i = 0; i < 26; i++) {
      alphabet1.push(toSort[i][0]);
      alphabet2.push(toSort[i][1]);
    }
    this.k3Alphabets.push(alphabet1);
    this.k3Alphabets.push(alphabet2);
  }
  generatePolybiusAlphabet() {
    const keyword = this.keywords.removeRepeats(this.keywords.keyword1);
    this.polybiusAlphabet = this.insertKeyword(0, keyword).filter(letter => letter != "J");
  }
}