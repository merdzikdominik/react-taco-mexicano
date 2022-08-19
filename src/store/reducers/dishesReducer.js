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

                updatedDish = {
                    ...findExistingDish,
                    amount: adjustedAmount
                };

                const removeExistingDish = state.dishes.filter(item => item.id !== action.payload.id);
                updatedDishes = removeExistingDish.concat(updatedDish);

            } else{
                updatedDishes = state.dishes.concat(action.payload);
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