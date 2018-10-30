//Домашнее задание:
//Создать пустой массив.Наполнить его числами от 1 до 20. Вывести массив.
//Отфильтровать оставив только НЕ четные.Вывести массив.
//Вывести сумму оставшихся в массиве чисел.Вывести массив.
//Вывод массива оформить в виде функции, внутри функции
//цикл обхода и вывода каждого элемента(не просто document.write(arr)).

var arr = [];

function print(array) {
    document.write("<br>");
    for (var i in array) {
        document.write(array[i]);
        document.write(" ");
        console.log(array);
    }
}
for (var i = 0; i < 20; i++) {

    arr.push(i + 1);
}

print(arr);

arr = arr.filter(function (value) {
    return value % 2 != 0;
})

print(arr);

var arrsum = arr.reduce(function (sum, current) {
    return sum + current;
});
document.write("<br>");
document.write(arrsum);