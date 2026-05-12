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