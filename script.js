
// ********************* БАНКОМАТ *********************
//
// Пользователь вводит сумму
// Выдать ответ пользователю каким количеством купюр номинала можно выдать сумму купюрами 500 200 100 50

// var moneyDraw = +process.argv[2];


// if (moneyDraw >= 50) {
//     if ((moneyDraw >= 500) && (moneyDraw % 500 == 0)) {
//         countNote = moneyDraw / 500;
//         console.log('Можно снять ' + moneyDraw + ' купюрами по 500 в количестве ' + countNote + '.');
//     } else if ((moneyDraw >= 200) && (moneyDraw % 200 == 0)) {
//         countNote = moneyDraw / 200;
//         console.log('Можно снять ' + moneyDraw + ' купюрами по 200 в количестве ' + countNote + '.');
//     } else if ((moneyDraw >= 100) && (moneyDraw % 100 == 0)) {
//         countNote = moneyDraw / 100;
//         console.log('Можно снять ' + moneyDraw + ' купюрами по 100 в количестве ' + countNote + '.');
//     } else if ((moneyDraw >= 50) && (moneyDraw % 50 == 0)) {
//         countNote = moneyDraw / 50;
//         console.log('Можно снять ' + moneyDraw + ' купюрами по 50 в количестве ' + countNote + '.');
//     }
// } else
//     console.log('Ошибка. Доступные купюры: 50.')



// ********************* № 2 ПЕРИМЕТР ФИГУРЫ *********************
//
// Пользователь вводит от 1 до 6 парамметров
// Это стороны фигуры
// Необходимо посчитать перимметр и вывести название фигуры

// var a = +process.argv[2],
//     b = +process.argv[3],
//     c = +process.argv[4],
//     d = +process.argv[5],
//     e = +process.argv[6],
//     f = +process.argv[7];


// if (isNaN(c)) {
//     console.log('Ошибка. Введите от 3-х до 6-ти параметров.');
// } else if ((a > 0) && (b > 0) && (c > 0) && (isNaN(d))) {
//     perimetr = a + b + c;
//     console.log('Это треугольник. Периметр равен ' + perimetr + '.');
// } else if (((a > 0) && (b > 0) && (c > 0) && (d > 0) && (isNaN(e))) && ((a == b) && (a == c) && (a == d))) {
//     perimetr = a + b + c + d;
//     console.log('Это квадрат или ромб. Периметр равен ' + perimetr + '.');
// } else if ((a > 0) && (b > 0) && (c > 0) && (d > 0) && (isNaN(e)) && ((a == c) && (b == d))) {
//     perimetr = 2 * (a + b);
//     console.log('Это прямоугольник или параллелограмм. Периметр равен ' + perimetr + '.');
// } else if ((a > 0) && (b > 0) && (c > 0) && (d > 0) && (isNaN(e))) {
//     perimetr = a + b + c + d;
//     console.log('Это трапеция. Периметр равен ' + perimetr + '.');
// } else if ((a > 0) && (b > 0) && (c > 0) && (d > 0) && (e > 0) && (f > 0)) {
//     perimetr = a + b + c + d + e + f;
//     console.log('Периметр фигуры равен ' + perimetr + '.');
// } else if ((a > 0) && (b > 0) && (c > 0) && (d > 0) && (e > 0)) {
//     perimetr = a + b + c + d + e;
//     console.log('Периметр фигуры равен ' + perimetr + '.');
// } else
//     console.log('Введены некорректные данные, стороны не могут быть отрицательными или равняться нулю.');




// ********************* №3 Определение треугольника *********************

// Пользователь вводит от 1 до 3 парамметров
// Необходимо определить какой это треугольник



// var a = +process.argv[2],
//     b = +process.argv[3],
//     c = +process.argv[4];



// if ((a > 0) && (b > 0) && (c > 0)) {
//     if ((a == b) && (a == c)) {
//         console.log('Равнобедренный');
//     } else if ((a == b) || (a == c)) {
//         console.log('Равносторонний');
//     } else {
//         console.log('Разносторонний');
//     }
// } else
//     console.log('Ошибка, возможно не все значения или введено отрицательное число.');