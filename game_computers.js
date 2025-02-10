function game() {

    let min_border = 1;
    let max_border = 100;
    let result = Math.floor(Math.random() * (max_border-min_border+1)) + min_border;
    let step = 1;

    console.log(`Машина выбрала это число: ${result}\n`)

    while(step < 8) {

        let guess_number = Math.floor((min_border + max_border) / 2);

        console.log(`Шаг номер: ${step} c диапозоном от [${min_border}, ${max_border}]`);
        console.log(`Компьютер 2: Пробую число ${guess_number}.`);

        if (guess_number > result) {
            max_border = guess_number-1;
            console.log("Компьютер 1: Меньше.\n");
        } else if (guess_number < result) {
            min_border = guess_number+1;
            console.log("Компьютер 1: Больше.\n");
        } else {
            console.log(`Компьютер 1: Угадал! ${guess_number}`);
            break;
        }
        step++;
    }
}

game()

