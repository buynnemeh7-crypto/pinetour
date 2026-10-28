const seats = [
  ["🟩", "🟩", "🔴", "🟩"],
  ["🔴", "🟩", "🟩", "🟩"],
  ["🟩", "🟩", "🟩", "🔴"],
];
const row = 1;
const seat = 2;
const rowIndex = row - 1;
const seatIndex = seat - 1;

// Суудлын төлөвийг шалгаж хэвлэх
if (seats[rowIndex][seatIndex] === "🟩") {
  console.log(`✅ Эгнээ ${row}, суудал ${seat} сул байна`);
} else {
  console.log(`❌ Эгнээ ${row}, суудал ${seat} захиалагдсан`);
}
const classroom = [
  ["Бат", "Сараа", "Ану"], // урд эгнээ
  ["Болд", "Тэмүүлэн", "Нараа"], // арын эгнээ
];
console.log(
  classroom.length,
  "эгнээ ×",
  classroom[0].length,
  "ширээ =",
  classroom[1].length + classroom[0].length,
);
console.log("↘️ Хамгийн ард, баруун талд:", classroom[1][2]);
console.log("⬆️ Урд эгнээний голд:", classroom[0][1]);

const pixels = [
  [0, 1, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1],

  [, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
];
for (let i = 0; i < pixels.length; i++) {
  let line = "";
  for (let j = 0; j < pixels[i].length; j++) {
    if (pixels[i][j] === 1) {
      line += "🟥";
    } else {
      line += "⬜️";
    }
  }
  console.log(line);
}
