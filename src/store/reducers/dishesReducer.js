const initialState = {
    dishes: []
};

const dishesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_DISH_TO_ORDER':
            const updatedDishes = state.dishes.concat(action.payload);

            return {
                ...state,
                dishes: updatedDishes
            }

        default: 
            return state;
    }
};

export default dishesReducer;