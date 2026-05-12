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
async function solveAnagrams() {
  let anagramSolver = new AnagramSolver();
  await anagramSolver.getWords();
  let anagram = document.getElementById("anagram").value;
  document.getElementById("output").value = anagramSolver.solveAnagram(anagram);
}
setInterval(updateKChoices, 10);
setInterval(updateInputChoices, 10);
