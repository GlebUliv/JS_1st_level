function chooseQuantity() {
    switch (option) {
        case 1:
            let value_portions_food_1 = +prompt(`Youve chosen "${FOOD_1_NAME}"\nHow many portions?`);
            // запомнить кол-во порций . проверить, если значение не меньше 1 . вычислить и при помоци alert  вывести стоимость выбранного количества порций
            ////////////////////////////////////////////////////////////// -> function calculateOption (q, price, name)
            if (value_portions_food_1 < 1) {
                alert("Nope")
            } else {
                alert("No problem!")
                cost_food_1 = value_portions_food_1 * FOOD_1_PRICE;
                alert("The price will be : " + value_portions_food_1 + " " + "x" + " " + FOOD_1_NAME + " " + "=" + " " + cost_food_1 + "MDL");
                total += cost_food_1;
            }
            quantity_food_1 = quantity_food_1 - value_portions_food_1;
            portions_food_1 += quantity_food_1;
            //////////////////////////////////////////////////////////////////////

            break;
        case 2:
            let value_portions_food_2 = +prompt(`Youve chosen "${FOOD_2_NAME}"\nHow many portions?`);
            if (value_portions_food_2 < 1) {
                alert("Nope")
            } else {
                alert("No problem!")
                cost_food_2 = value_portions_food_2 * FOOD_2_PRICE;
                alert("The price will be : " + value_portions_food_2 + " " + "x" + " " + FOOD_2_NAME + " " + "=" + " " + cost_food_2 + "MDL");
                total += cost_food_2;
            }
            quantity_food_2 = quantity_food_2 - value_portions_food_2;
            portions_food_2 += quantity_food_2;
            break;

        case 3:
            let value_portions_drink_1 = +prompt(`Youve chosen "${DRINK_1_NAME}"\nHow many portions?`);
            if (value_portions_drink_1 < 1) {
                alert("Nope")
            } else {
                alert("No problem!")
                cost_drink_1 = value_portions_drink_1 * DRINK_1_PRICE;
                alert("The price will be : " + value_portions_drink_1 + " " + "x" + " " + DRINK_1_NAME + " " + "=" + " " + cost_drink_1 + "MDL");
                total += cost_drink_1;
            }
            quantity_drink_1 = quantity_drink_1 - value_portions_drink_1;
            portions_drink_1 += quantity_drink_1;

            break;

        case 0:
            if (total > 300) {
                alert("Your delivery will be FREE!!!!")
            } else {
                total = total + 50
                alert("Your delivery will cost +50 MDL to total price!")
            }
            alert("Thank you for your order! Total price will be:" + " " + total + " " + "MDL"); break;

        default: alert("We dont have such option!")
    }
}

//пока выбранная опция не равно 0, продолжаем цикл
while (option != 0) {
    showMeniu();
    chooseQuantity();
}