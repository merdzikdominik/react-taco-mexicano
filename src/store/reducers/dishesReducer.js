const initialState = {
    dishes: [],
    totalPrice: 0
};

export default function dishesReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_DISH_TO_ORDER': {
            let updatedTotalPrice, updatedDishes, updatedDish;
            
            updatedTotalPrice = state.totalPrice + action.payload.price * action.payload.amount;

            const foundDishIndex = state.dishes.findIndex(dish => dish.id === action.payload.id);
            const foundDish = state.dishes[foundDishIndex];
            
            if (foundDish) {
                updatedDish = {
                    ...foundDish,
                    amount: foundDish.amount + action.payload.amount,
                };

                updatedDishes = [...state.dishes];
                updatedDishes[foundDishIndex] = updatedDish;
                updatedTotalPrice = state.totalPrice + foundDish.price * action.payload.amount;

            } else {
                updatedDishes = state.dishes.concat(action.payload);
            }

            return {
                ...state,
                dishes: updatedDishes,
                totalPrice: updatedTotalPrice
            }
        }

        case 'REMOVE_DISH_FROM_ORDER': {
            let updatedDish, updatedDishes, updatedTotalPrice;

            const foundDish = state.dishes.find(dish => dish.id === action.payload.id);
            const foundDishIndex = state.dishes.findIndex(dish => dish.id === action.payload.id);
            const foundDishAmount = foundDish.amount;

            if (foundDish) {
                updatedDish = {
                    ...foundDish,
                    amount: foundDish.amount - 1
                }

                updatedDishes = [...state.dishes];
                updatedDishes[foundDishIndex] = updatedDish;
                updatedTotalPrice = state.totalPrice - updatedDishes[foundDishIndex].price;

            }

            if (foundDishAmount === 1) {
                updatedDishes = state.dishes.filter(dish => dish.id !== action.payload.id);
            }

            return {
                ...state,
                dishes: updatedDishes,
                totalPrice: updatedTotalPrice
            }
        }

        case 'CLEAR_DISHES': {
            return {
                ...state,
                dishes: [],
                totalPrice: 0
            }
        }

        default: 
            return state;
    }
};
