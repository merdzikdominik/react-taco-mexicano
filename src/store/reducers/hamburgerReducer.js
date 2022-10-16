const initialState = {
    isClicked: false
};

export default function hamburgerReducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_HAMBURGER_STATE': {
            const updatedState = {
                isClicked: !state.isClicked
            };

            return updatedState;
        }

        default: 
            return state;
    }
};
