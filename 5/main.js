const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= 10; i += 1) {
    console.log(i);

    if (i === 7) {
        console.log("Число 7, отже закінчую виконання циклу");
        break
    }
}