function showMeniu() {
    let meniu = `
                    ########################
                    1. ${ FOOD_1_NAME}  ${FOOD_1_PRICE}MDL
                    2. ${ FOOD_2_NAME}  ${FOOD_2_PRICE}MDL
                    3. ${ DRINK_1_NAME}  ${DRINK_1_PRICE}MDL
                    0. Exit
                    -----------------------------------------
                    total: ${total}MDL
                     ########################
                    Portions of Pizza remaining: ${quantity_food_1}
                    ----------------------
                    Portions of Pasta remaining: ${quantity_food_2}
                    ---------------------
                    Portions of Cola remaining: ${quantity_drink_1}
                    -----------------------------------------------
            `
    option = +prompt(meniu)

}