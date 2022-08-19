const initialState = {
    dishes: []
};

const dishesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_DISH_TO_ORDER':
            let updatedDish, updatedDishes;

            const findExistingDish = state.dishes.find(item => item.id === action.payload.id);

            if (findExistingDish) {
                const adjustedAmount = state.dishes.filter(item => item.id === action.payload.id).reduce((acc, curr) => {
                    return acc + curr.amount
                }, action.payload.amount);

                //TODO: transform it to the number if it causes trouble during total price calculations
                const adjustedPrice = (findExistingDish.price * adjustedAmount).toFixed(2);

                updatedDish = {
                    ...findExistingDish,
                    price: adjustedPrice,
                    amount: adjustedAmount
                };

                const removeExistingDish = state.dishes.filter(item => item.id !== action.payload.id);
                updatedDishes = removeExistingDish.concat(updatedDish);

            } else{
                updatedDish = {
                    ...action.payload,
                    price: (action.payload.price * action.payload.amount).toFixed(2),
                };

                updatedDishes = state.dishes.concat(updatedDish);
            }

            return {
                ...state,
                dishes: updatedDishes
            }

        default: 
            return state;
    }
};

export default dishesReducer;