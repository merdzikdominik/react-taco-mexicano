const initialState = {
    dishes: 'asd'
};

const dishesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_DISH_TO_ORDER':
            // const updatedDishes = state.dishes.concat(action.payload);

            console.log(state.dishes);
            return {
                ...state,
                dishes: state.dishes
            }

        default: 
            return state;
    }
};

export default dishesReducer;