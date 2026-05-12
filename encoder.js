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