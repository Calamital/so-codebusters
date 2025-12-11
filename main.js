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
class TableConstructor {
  constructor() {}
  deleteTable() {
    let table = document.getElementById("table");
    try {
      table.remove();
      document.getElementById("cipherText").innerHTML = "";
      document.getElementById("author").innerHTML = "";
    } catch {}
  }
  trueModulo(a, b) {
    return ((a % b) + b) % b;
  }
  createAristocratTable(encoder) {
    let table = document.createElement("table");
    table.id = "table";
    table.className = "cipherTable";
    document.getElementById("cipher").appendChild(table);
    let row1 = table.insertRow(0);
    let title1 = row1.insertCell(0);
    let row2 = table.insertRow(1);
    let title2 = row2.insertCell(0);
    title2.innerHTML = "Frequency";
    let row3 = table.insertRow(2);
    let title3 = row3.insertCell(0);
    title3.innerHTML = "Replacement";
    let alphabetSorter = [
      encoder.alphabets.shuffledAlphabets[1],
      encoder.alphabets.shuffledAlphabets[0],
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
    const row1Alphabet = alphabet1;
    const row3Alphabet = alphabet2;
    for (let i = 0; i < 26; i++) {
      let frequency = encoder.cipherText.split(row1Alphabet[i]).length - 1;
      row1.insertCell(i + 1).innerHTML = row1Alphabet[i];
      if (frequency > 0) {
        row2.insertCell(i + 1).innerHTML = frequency;
      } else {
        row2.insertCell(i + 1);
      }
      if (encoder.viewAnswer) {
        row3.insertCell(i + 1).innerHTML = row3Alphabet[i];
      } else {
        row3.insertCell(i + 1);
      }
    }
  }
  createAristocratK1Table(encoder) {
    let table = document.createElement("table");
    table.id = "table";
    table.className = "cipherTable";
    document.getElementById("cipher").appendChild(table);
    let row1 = table.insertRow(0);
    let title1 = row1.insertCell(0);
    title1.innerHTML = "K1";
    let row2 = table.insertRow(1);
    let title2 = row2.insertCell(0);
    title2.innerHTML = "Frequency";
    let row3 = table.insertRow(2);
    let title3 = row3.insertCell(0);
    title3.innerHTML = "Replacement";
    const row1Alphabet = encoder.alphabets.k1Alphabets[0];
    const row3Alphabet = encoder.alphabets.k1Alphabets[1];
    for (let i = 0; i < 26; i++) {
      let frequency = encoder.cipherText.split(row1Alphabet[i]).length - 1;
      row1.insertCell(i + 1).innerHTML = row1Alphabet[i];
      if (frequency > 0) {
        row2.insertCell(i + 1).innerHTML = frequency;
      } else {
        row2.insertCell(i + 1);
      }
      if (encoder.viewAnswer) {
        row3.insertCell(i + 1).innerHTML = row3Alphabet[i];
      } else {
        row3.insertCell(i + 1);
      }
    }
  }
  createAristocratK2Table(encoder) {
    let table = document.createElement("table");
    table.id = "table";
    table.className = "cipherTable";
    document.getElementById("cipher").appendChild(table);
    let row1 = table.insertRow(0);
    let title1 = row1.insertCell(0);
    title1.innerHTML = "Replacement";
    let row2 = table.insertRow(1);
    let title2 = row2.insertCell(0);
    title2.innerHTML = "K2";
    let row3 = table.insertRow(2);
    let title3 = row3.insertCell(0);
    title3.innerHTML = "Frequency";
    const row1Alphabet = encoder.alphabets.k2Alphabets[0];
    const row2Alphabet = encoder.alphabets.k2Alphabets[1];
    for (let i = 0; i < 26; i++) {
      let frequency = encoder.cipherText.split(row2Alphabet[i]).length - 1;
      row2.insertCell(i + 1).innerHTML = row2Alphabet[i];
      if (frequency > 0) {
        row3.insertCell(i + 1).innerHTML = frequency;
      } else {
        row3.insertCell(i + 1);
      }
      if (encoder.viewAnswer) {
        row1.insertCell(i + 1).innerHTML = row1Alphabet[i];
      } else {
        row1.insertCell(i + 1);
      }
    }
  }
  createAristocratK3Table(encoder) {
    let table = document.createElement("table");
    table.id = "table";
    table.className = "cipherTable";
    document.getElementById("cipher").appendChild(table);
    let row1 = table.insertRow(0);
    let title1 = row1.insertCell(0);
    title1.innerHTML = "K3";
    let row2 = table.insertRow(1);
    let title2 = row2.insertCell(0);
    title2.innerHTML = "Frequency";
    let row3 = table.insertRow(2);
    let title3 = row3.insertCell(0);
    title3.innerHTML = "Replacement";
    const row1Alphabet = encoder.alphabets.k3Alphabets[0];
    const row3Alphabet = encoder.alphabets.k3Alphabets[1];
    for (let i = 0; i < 26; i++) {
      let frequency = encoder.cipherText.split(row1Alphabet[i]).length - 1;
      row1.insertCell(i + 1).innerHTML = row1Alphabet[i];
      if (frequency > 0) {
        row2.insertCell(i + 1).innerHTML = frequency;
      } else {
        row2.insertCell(i + 1);
      }
      if (encoder.viewAnswer) {
        row3.insertCell(i + 1).innerHTML = row3Alphabet[i];
      } else {
        row3.insertCell(i + 1);
      }
    }
  }
  createPortaTable() {
    let table = document.createElement("table");
    table.id = "table";
    table.className = "cipherTable";
    document.getElementById("cipher").appendChild(table);
    let topRow = table.insertRow(0);
    let topLeft = topRow.insertCell(0);
    let bold = document.createElement("b");
    topLeft.appendChild(bold);
    bold.innerHTML = "Keys";
    for (let i = 0; i < 13; i++) {
      let cell = topRow.insertCell(i + 1);
      let bold = document.createElement("b");
      cell.appendChild(bold);
      bold.innerHTML = String.fromCharCode(65 + i);
    }
    for (let i = 0; i < 13; i++) {
      let row = table.insertRow(i + 1);
      let header = row.insertCell(0);
      let bold = document.createElement("b");
      bold.innerHTML =
        String.fromCharCode(65 + i * 2) + "," + String.fromCharCode(66 + i * 2);
      header.appendChild(bold);
      for (let v = 0; v < 13; v++) {
        let cell = row.insertCell(v + 1);
        cell.innerHTML = String.fromCharCode(78 + this.trueModulo(i + v, 13));
      }
    }
  }
  createPolybiusTable() {
    let table = document.createElement("table");
    table.id = "table";
    table.className = "cipherTable";
    document.getElementById("cipher").appendChild(table);
    for (let i = 0; i < 6; i++) {
      let row = table.insertRow(i);
      for (let v = 0; v < 6; v++) {
        row.insertCell(v);
      }
    }
  }
}
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
  }
  test() {
    console.log(this.normalAlphabet);
    console.log(this.shuffledAlphabets);
    console.log(this.k1Alphabets);
    console.log(this.k2Alphabets);
    console.log(this.k3Alphabets);
    console.log(this.polybiusAlphabet);
  }
  generateAlphabets() {
    this.generateNormalAlphabet();
    this.generateShuffledAlphabets();
    this.generateShiftedAlphabet();
    this.generateK1Alphabets();
    this.generateK2Alphabets();
    this.generateK3Alphabets();
    this.generatePolybiusAlphabet();
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
class Encoder {
  constructor(viewAnswer) {
    this.plainText = "";
    this.cipherText = "";
    this.cipherType = "";
    this.hint = "";
    this.author = "";
    this.tableConstructor = new TableConstructor();
    this.viewAnswer = false || viewAnswer == true;
  }
  async prepareEncoder(override) {
    if (!override) {
      let quote = await new Quotes().fetchQuote();
      this.plainText = quote[0];
      this.author = quote[1];
      this.hint = document.getElementById("cipherType").value;
      this.alphabets = new Alphabets(this.plainText);
      this.keywords = this.alphabets.keywords;
      await this.keywords.generateKeywords();
      this.alphabets.generateAlphabets();
    } else {
      this.alphabets = new Alphabets(this.plainText);
      this.keywords = this.alphabets.keywords;
      this.keywords.generateCrib();
      this.alphabets.generateAlphabets();
    }
  }
  fillCipherText() {
    document.getElementById("name").innerHTML =
      "this " + this.cipherType + " cipher is a quote by " + this.author;
    document.getElementById("cipherText").innerHTML = this.cipherText;
    function setKeyword(encoder) {
      document.getElementById("hint").innerHTML =
        "the keyword is " + encoder.keywords.keyword1;
    }
    function noKeyword(encoder) {
      document.getElementById("hint").innerHTML = "";
    }
    function crib(encoder) {
      document.getElementById("hint").innerHTML =
        "the word " + encoder.keywords.crib + " appears somewhere in the text";
    }
    function mainCase(encoder) {
      switch (encoder.hint) {
        case "simple":
          return setKeyword(encoder);
        case "crib":
          return crib(encoder);
        case "cryptanalysis":
          return noKeyword(encoder);
      }
    }
    function nihilist(encoder) {
      switch (encoder.hint) {
        case "simple":
          document.getElementById("hint").innerHTML = 
            "the polybius keyword is " + encoder.keywords.keyword1 +
            " and the text keyword is " + encoder.keywords.keyword2;
          break;
        case "crib":
          return crib(encoder);
        case "cryptanalysis":
          return noKeyword(encoder);
      }
    }
    function edgeCase(encoder) {
      switch (encoder.hint) {
        case "simple":
          return noKeyword(encoder);
        case "crib":
          return crib(encoder);
        case "cryptanalysis":
          return noKeyword(encoder);
      }
    }
    switch (this.cipherType) {
      case "aristocrat":
        edgeCase(this);
        break;
      case "k1 aristocrat":
        mainCase(this);
        break;
      case "k2 aristocrat":
        mainCase(this);
        break;
      case "k3 aristocrat":
        mainCase(this);
        break;
      case "checkerboard":
        mainCase(this);
        break;
      case "nihilist":
        nihilist(this);
        break;
      case "patristocrat":
        edgeCase(this);
        break;
      case "k1 patristocrat":
        mainCase(this);
        return;
      case "k2 patristocrat":
        mainCase(this);
        break;
      case "porta":
        mainCase(this);
    }
  }
  encodeAristocrat(patristocrat) {
    this.cipherType = "aristocrat";
    if (patristocrat) {
      this.cipherType = "patristocrat";
    }
    let quoteArray = [...this.plainText];
    let spaces = 0;
    quoteArray.forEach((character) => {
      if (patristocrat && (this.cipherText.length - spaces) % 5 == 0) {
        spaces++;
        this.cipherText += " ";
      }
      if (/\w/g.test(character)) {
        this.cipherText +=
          this.alphabets.shuffledAlphabets[1][
            this.alphabets.normalAlphabet.indexOf(character)
          ];
      } else {
        if (!patristocrat) {
          this.cipherText += character;
        }
      }
    });
    this.fillCipherText();
    this.tableConstructor.createAristocratTable(this);
  }
  encodeAristocratK1(patristocrat) {
    this.cipherType = "k1 aristocrat";
    if (patristocrat) {
      this.cipherType = "k1 patristocrat";
    }
    let quoteArray = [...this.plainText];
    let alphabetSorter = [
      this.alphabets.k1Alphabets[1],
      this.alphabets.k1Alphabets[0],
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
    let spaces = 0;
    quoteArray.forEach((character) => {
      if (patristocrat && (this.cipherText.length - spaces) % 5 == 0) {
        spaces++;
        this.cipherText += " ";
      }
      if (/\w/g.test(character)) {
        this.cipherText +=
          alphabet2[this.alphabets.normalAlphabet.indexOf(character)];
      } else {
        if (!patristocrat) {
          this.cipherText += character;
        }
      }
    });
    this.fillCipherText();
    this.tableConstructor.createAristocratK1Table(this);
  }
  encodeAristocratK2(patristocrat) {
    this.cipherType = "k2 aristocrat";
    if (patristocrat) {
      this.cipherType = "k2 patristocrat";
    }
    let quoteArray = [...this.plainText];
    let alphabetSorter = [
      this.alphabets.k2Alphabets[0],
      this.alphabets.k2Alphabets[1],
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
    let spaces = 0;
    quoteArray.forEach((character) => {
      if (patristocrat && (this.cipherText.length - spaces) % 5 == 0) {
        spaces++;
        this.cipherText += " ";
      }
      if (/\w/g.test(character)) {
        this.cipherText += alphabet1[alphabet2.indexOf(character)];
      } else {
        if (!patristocrat) {
          this.cipherText += character;
        }
      }
    });
    this.fillCipherText();
    this.tableConstructor.createAristocratK2Table(this);
  }
  encodeAristocratK3() {
    this.cipherType = "k3 aristocrat";
    let quoteArray = [...this.plainText];
    let alphabetSorter = [
      this.alphabets.k3Alphabets[0],
      this.alphabets.k3Alphabets[1],
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
    quoteArray.forEach((character) => {
      if (/\w/g.test(character)) {
        this.cipherText += alphabet1[alphabet2.indexOf(character)];
      } else {
        this.cipherText += character;
      }
    });
    this.fillCipherText();
    this.tableConstructor.createAristocratK3Table(this);
  }
  encodePorta() {
    this.cipherType = "porta";
    const keyword = this.keywords.keyword1;
    function encodeLetter(encoder, keyLetter, plainLetter) {
      const row = Math.floor((keyLetter.charCodeAt(0) - 65) / 2);
      const letter = plainLetter.charCodeAt(0) - 65;
      if (letter < 13) {
        const newLetter = (13 + ((row + letter) % 13));
        return String.fromCharCode(65 + newLetter);
      } else {
        const newLetter = encoder.tableConstructor.trueModulo(letter - 13 - row, 13);
        return String.fromCharCode(65 + newLetter);
      }
    }
    let letterCount = 0;
    for (let i = 0; i < this.plainText.length; i++) {
      let letter = this.plainText[i];
      if (/\w/.test(letter)) {
        this.cipherText += encodeLetter(this, keyword[letterCount % keyword.length], letter);
        letterCount++;
      } else if (letter == " ") {
        this.cipherText += letter;
      }
    }
    this.fillCipherText();
    this.tableConstructor.createPortaTable();
  }
  encodeCheckerboard() {
    this.cipherType = "checkerboard";
    this.plainText.split("").forEach((letter) => {
      if (/\w/.test(letter)) {
        let index = this.alphabets.polybiusAlphabet.indexOf(letter);
        if (letter == "J") {
          index = this.alphabets.polybiusAlphabet.indexOf("I");
        }
        let row = Math.floor(index / 5);
        let column = index % 5;
        this.cipherText += this.keywords.rowDesignator[row] + this.keywords.columnDesignator[column] + " ";
      }
    })
    this.fillCipherText();
    this.tableConstructor.createPolybiusTable();
  }
  encodeNihilist() {
    this.cipherType = "nihilist";
    const keyword = this.keywords.keyword2;
    let letterIndex = 0;
    this.plainText.split("").forEach((letter) => {
      if (/\w/.test(letter)) {
        let index = this.alphabets.polybiusAlphabet.indexOf(letter);
        if (letter == "J") {
          index = this.alphabets.polybiusAlphabet.indexOf("I");
        }
        let keywordLetter = keyword[letterIndex % keyword.length];
        let keywordIndex = this.alphabets.polybiusAlphabet.indexOf(keywordLetter);
        if (keywordLetter == "J") {
          keywordIndex = this.alphabets.polybiusAlphabet.indexOf("I");
        }
        letterIndex++;
        let letterRow = 1 + Math.floor(index / 5);
        let letterColumn = 1 + (index % 5);
        let letterValue = (10 * letterRow) + letterColumn;
        let keywordRow = 1 + Math.floor(keywordIndex / 5);
        let keywordColumn = 1 + (keywordIndex % 5);
        let keywordValue = (10 * keywordRow) + keywordColumn;
        this.cipherText += letterValue + keywordValue + " ";
      }
    })
    this.fillCipherText();
    this.tableConstructor.createPolybiusTable();
  }
}
async function main(cipher, override, newAuthor, newPlainText, newKeywords, newDesignators) {
  let encoder = new Encoder();
  encoder.tableConstructor.deleteTable();
  await encoder.prepareEncoder();
  if (override) {
    encoder.author = newAuthor;
    encoder.plainText = newPlainText;
    encoder.keywords.plainText = newPlainText;
    encoder.keywords.keyword1 = newKeywords[0].toUpperCase();
    encoder.keywords.keyword2 = newKeywords[1].toUpperCase();
    encoder.keywords.rowDesignator = newDesignators[0].toUpperCase();
    encoder.keywords.columnDesignator = newDesignators[1].toUpperCase();
  }
  switch (cipher) {
    case "aristocrat":
      encoder.encodeAristocrat(false);
      break;
    case "aristocratk1":
      encoder.encodeAristocratK1(false);
      break;
    case "aristocratk2":
      encoder.encodeAristocratK2(false);
      break;
    case "aristocratk3":
      encoder.encodeAristocratK3();
      break;
    case "checkerboard":
      encoder.encodeCheckerboard();
      break;
    case "nihilist":
      encoder.encodeNihilist();
      break;
    case "patristocrat":
      encoder.encodeAristocrat(true);
      break;
    case "patristocratk1":
      encoder.encodeAristocratK1(true);
      break;
    case "patristocratk2":
      encoder.encodeAristocratK2(true);
      break;
    case "porta":
      encoder.encodePorta();
      break;
  }
}
let generationMode = false;
async function spawnCipher(override, newAuthor, newPlainText, newKeywords, newDesignators) {
  const select = document.getElementById("selectCipher");
  const k = document.getElementById("k").value;
  let cipher = select.value;
  if (k != "none") {
    cipher += k;
  }
  if (!override) {
    await main(cipher, override, "", "", ["", ""], ["", ""]);
    return;
  }
  await main(cipher, override, newAuthor, newPlainText, newKeywords, newDesignators);
}
async function randomGeneration() {
  generationMode = false;
}
async function customGeneration() {
  generationMode = true;
}
async function generate() {
  if (!generationMode) {
    await spawnCipher(false);
  } else {
    const author = document.getElementById("author").value;
    const plainText = document.getElementById("plainText").value.toUpperCase();
    const keyword1 = document.getElementById("keyword1").value.toUpperCase();
    const keyword2 = document.getElementById("keyword2").value.toUpperCase();
    const row = document.getElementById("row").value.toUpperCase();
    const column = document.getElementById("column").value.toUpperCase();
    const cipher = document.getElementById("selectCipher").value;
    const k = document.getElementById("k").value;
    if ((cipher == "aristocrat") || (cipher == "patristocrat")) {
      if (k != "none") {
        await spawnCipher(true, author, plainText, [keyword1, ""], ["", ""]);
        return;
      }
      await spawnCipher(true, author, plainText, ["", ""], ["", ""]);
    }
    if ((cipher == "porta")) {
      await spawnCipher(true, author, plainText, [keyword1, ""], ["", ""]);
    }
    if ((cipher == "checkerboard")) {
      await spawnCipher(true, author, plainText, [keyword1, ""], [row, column]);
    }
    if ((cipher == "nihilist")) {
      await spawnCipher(true, author, plainText, [keyword1, keyword2], ["", ""]);
    }
  }
}
function updateKChoices() {
  const k1 = document.getElementById("k1");
  const k2 = document.getElementById("k2");
  const k3 = document.getElementById("k3");
  const cipher = document.getElementById("selectCipher").value;
  k1.style.display = "none";
  k2.style.display = "none";
  k3.style.display = "none";
  if ((cipher != "aristocrat") && (cipher != "patristocrat")) {
    document.getElementById("k").value = "none";
  }
  switch (cipher) {
    case "aristocrat":
      k1.style.display = "";
      k2.style.display = "";
      k3.style.display = "";
      break;
    case "patristocrat":
      k1.style.display = "";
      k2.style.display = "";
      k3.style.display = "none";
      break;
  }
}
function updateInputChoices() {
  const author = document.getElementById("author");
  const plainText = document.getElementById("plainText");
  const keyword1 = document.getElementById("keyword1");
  const keyword2 = document.getElementById("keyword2");
  const row = document.getElementById("row");
  const column = document.getElementById("column");
  const cipher = document.getElementById("selectCipher").value;
  const k = document.getElementById("k").value;
  author.style.display = "none";
  plainText.style.display = "none";
  keyword1.style.display = "none";
  keyword2.style.display = "none";
  row.style.display = "none";
  column.style.display = "none";
  if (generationMode) {
    author.style.display = "";
    plainText.style.display = "";
    if (k != "none") {
      keyword1.style.display = "";
    }
    if (k == "k4") {
      keyword2.style.display = "";
    }
    switch (cipher) {
      case "porta":
        keyword1.style.display = "";
        break;
      case "nihilist":
        keyword1.style.display = "";
        break;
      case "checkerboard":
        row.style.display = "";
        column.style.display = "";
        keyword1.style.display = "";
        break;
    }
  }
}
setInterval(updateKChoices, 10);
setInterval(updateInputChoices, 10);
