export const addToCart = (itemObject) => {
    return {
        type: 'ADD_DISH_TO_ORDER',
        payload: itemObject
    };
};

export const increment = (id) => {
    return {
        type: 'INCREMENT',
        payload: {
            id
        }
    };
};

export const decrement = (id) => {
    return {
        type: 'REMOVE_DISH_FROM_ORDER',
        payload: {
            id
        }
    };
};
