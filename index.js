// code here, goodluck!!

// 1. User input handling

let prompt = require("prompt-sync")();

function getValidNumberInput(prompMessage) {
  let num;
  let flag = 0;
  do {
    flag++;
    if (flag > 1)
      console.log("Input tidak valid, silakan masukkan angka yang benar.");
    num = prompt(prompMessage);
  } while (isNaN(num) || num.trim() === "");
  return parseFloat(num);
}

function calculation(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Operator tidak valid";
  }
}

console.log("Program Calculator Sederhana");

let angka = getValidNumberInput("Masukan angka: ");

let angka2 = getValidNumberInput("Masukan angka kedua: ");

let operator = prompt("Masukan operator (+, -, *, /): ");

let hasil = calculation(parseInt(angka), parseInt(angka2), operator);

console.log("hasilnya adalah: ", hasil);

const readline = require("readline");

// 2. Basic Arithmetic Operation (Functions and Operators)

// Fungsi penjumlahan
function add(a, b) {
  return a + b;
}
console.log("Add:", add(5, 3)); // 8

// Fungsi pengurangan
function subtract(a, b) {
  return a - b;
}
console.log("Subtract:", subtract(5, 3)); // 2

// Fungsi perkalian
function multiply(a, b) {
  return a * b;
}
console.log("Multiply:", multiply(5, 3)); // 15

// Fungsi pembagian (dengan penanganan pembagian oleh nol)
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}
console.log("Divide:", divide(5, 0)); // "Error: Division by zero!"

// Fungsi modulo (sisa bagi)
function modulo(a, b) {
  return a % b;
}
console.log("Modulo:", modulo(5, 3)); // 2

// Fungsi perpangkatan
function power(a, b) {
  return a ** b;
}
console.log("Power:", power(2, 3)); // 8

// 3. Main Calculator Logic (Switch & If/Else)

// Import library untuk input
const readlineSync = require("readline-sync");

// Fungsi untuk mendapatkan input angka yang valid
function getValidNumberInput(promptMessage) {
  let number;
  while (true) {
    const input = readlineSync.question(promptMessage);
    number = Number(input);
    if (!isNaN(number)) {
      return number;
    } else {
      console.log("Input tidak valid. Harap masukkan angka yang benar.\n");
    }
  }
}

// Fungsi untuk mendapatkan operator yang valid
function getValidOperatorInput() {
  const validOperators = ["+", "-", "*", "/", "%", "**"];
  while (true) {
    const operator = readlineSync.question(
      "Masukkan operator (+, -, *, /, %, **): "
    );
    if (validOperators.includes(operator)) {
      return operator;
    } else {
      console.log("Operator tidak valid. Coba lagi.\n");
    }
  }
}

// Fungsi aritmatika dasar
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) return "Error: Division by zero!";
  return a / b;
}
function modulo(a, b) {
  return a % b;
}
function power(a, b) {
  return a ** b;
}

// Logika utama kalkulator
while (true) {
  console.log("\n=== Kalkulator Sederhana ===");

  // Dapatkan input angka dan operator
  const num1 = getValidNumberInput("Masukkan angka pertama: ");
  const operator = getValidOperatorInput();
  const num2 = getValidNumberInput("Masukkan angka kedua: ");

  let result;

  // Gunakan switch untuk menentukan operasi
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "%":
      result = modulo(num1, num2);
      break;
    case "**":
      result = power(num1, num2);
      break;
    default:
      console.log("Operator tidak dikenali!");
      continue;
  }

  console.log(`Hasil: ${result}`);

  // Tanyakan apakah ingin lanjut
  const again = readlineSync.question("Apakah ingin menghitung lagi? (y/n): ");
  if (again.toLowerCase() !== "y") {
    console.log("Kalkulator selesai. Terima kasih!");
    break;
  }
}

// 4. Data Type Analysis & Conditional Output

//Contoh operasi perhitungan
function calculate(a, b, operator) {
  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;

    case "-":
      result = a - b;
      break;

    case "*":
      result = a * b;
      break;

    case "/":
      result = b === 0 ? "Error: Division by zero!" : a / b;
      break;

    default:
      result = "Error: Invalid operator!";
  }

  // Tampilkan hasil
  console.log("Hasil:", result);
  analyzeResult(result);
  console.log("--------------------------------------------------");
}

// Fungsi untuk menganalisis hasil
function analyzeResult(result) {
  const type = typeof result;
  console.log("Tipe data:", type);

  // Jika hasil adalah number
  if (type === "number") {
    // Cek positif / negatif / nol
    if (result > 0) {
      console.log("Angka tersebut adalah Positif.");
    } else if (result < 0) {
      console.log("Angka tersebut adalah Negatif.");
    } else {
      console.log("Angka tersebut adalah Nol.");
    }

    // Cek integer atau float
    console.log(
      Number.isInteger(result)
        ? "Ini adalah bilangan Integer."
        : "Ini adalah bilangan Floating-Point."
    );

    // Ternary operator untuk cek ganjil/genap (hanya untuk integer)
    const parity =
      Number.isInteger(result) && result !== 0
        ? result % 2 === 0
          ? "Even"
          : "Odd"
        : "Tidak bisa menentukan ganjil/genap.";
    console.log("Status angka:", parity);

    // Contoh penggunaan && dan ||
    if (result > 0 && Number.isInteger(result)) {
      console.log("Angka ini Positif dan Integer.");
    }

    if (result < 0 || result === 0) {
      console.log("Angka ini Negatif atau Nol.");
    }
  }

  // Jika result adalah string (error message)
  else if (type === "string") {
    console.log("Pesan error:", result);
  }

  // Jika undefined atau null → gunakan nullish coalescing ??
  else if (result == null) {
    const msg = result ?? "Result is undefined or null, something went wrong!";
    console.log(msg);
  }
}

// Contoh pemanggilan fungsi
calculate(10, 5, "+");
calculate(10, -3, "-");
calculate(4, 2, "*");
calculate(10, 0, "/");
calculate(7.5, 2.5, "+");
calculate(10, 3, "/");

// 5. Exit Mechanism (Loops & Conditionals)

("use strict");

const input = require("readline-sync");

// Function: Perhitungan

function performCalculation(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num2 === 0 ? "Error: Division by zero!" : num1 / num2;
      break;

    default:
      result = "Error: Invalid operator!";
  }

  console.log("\nHasil:", result);
  analyzeResult(result);
  console.log("====================================\n");
}

// Function: Analisis Hasil

function analyzeResult(result) {
  const type = typeof result;

  console.log("Tipe data:", type);

  if (type === "number") {
    // Positif / negatif / nol
    if (result > 0) console.log("Angka positif.");
    else if (result < 0) console.log("Angka negatif.");
    else console.log("Angka nol.");

    // Integer / float
    const isInt = Number.isInteger(result);
    console.log(
      isInt ? "Bilangan bulat (integer)." : "Bilangan desimal (float)."
    );

    // Genap / ganjil (jika integer)
    const evenOdd = isInt
      ? result % 2 === 0
        ? "Genap."
        : "Ganjil."
      : "Tidak bisa dicek (bukan integer).";
    console.log(evenOdd);

    // Logical operators
    if (result > 0 && isInt) console.log("Angka ini positif DAN integer.");
    if (result < 0 || result === 0) console.log("Angka ini negatif ATAU nol.");
  } else if (type === "string") {
    console.log("Pesan error:", result);
  } else if (result == null) {
    console.log(result ?? "Result null/undefined.");
  }
}

// Main loop

while (true) {
  const num1 = Number(input.question("Masukkan angka pertama: "));
  const num2 = Number(input.question("Masukkan angka kedua: "));
  const operator = input.question("Masukkan operator (+, -, *, /): ");

  performCalculation(num1, num2, operator);

  const again = input.question("Ingin hitung lagi? (yes/no): ").toLowerCase();
  if (again === "no") {
    console.log("\nProgram selesai. Terima kasih!");
    break;
  }
}

// 6. Code Readability & 'use strict'

("use strict");
// Strict mode diaktifkan untuk mencegah error halus dan memastikan penulisan kode lebih aman

// Import modul untuk input terminal
const readline = require("readline-sync");

// Fungsi untuk melakukan perhitungan
function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      return b !== 0 ? a / b : "Error: Tidak bisa membagi dengan 0.";

    default:
      return "Operator tidak dikenal!";
  }
}

// Fungsi untuk menganalisis hasil
function analyzeResult(value) {
  if (typeof value !== "number") {
    console.log("Hasil tidak dapat dianalisis.");
    return;
  }

  console.log("=== Analisis Hasil ===");
  console.log(`Nilai: ${value}`);

  if (value > 0) {
    console.log("Hasil adalah bilangan positif.");
  } else if (value < 0) {
    console.log("Hasil adalah bilangan negatif.");
  } else {
    console.log("Hasil adalah nol.");
  }
}

// Program utama dengan loop exit mechanism
while (true) {
  console.log("\n=== Kalkulator Sederhana ===");

  const num1 = Number(readline.question("Masukkan angka pertama: "));
  const num2 = Number(readline.question("Masukkan angka kedua: "));
  const operator = readline.question("Masukkan operator (+, -, *, /): ");

  const result = calculate(num1, num2, operator);

  console.log(`\nHasil perhitungan: ${result}`);
  analyzeResult(result);

  // Exit mechanism
  const again = readline.question("\nIngin menghitung lagi? (yes/no): ");

  if (again.toLowerCase() === "no") {
    console.log("Terima kasih! Program selesai.");
    break; // keluar dari loop utama
  }
}
