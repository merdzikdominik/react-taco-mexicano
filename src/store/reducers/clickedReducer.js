const initialState = {
    isFillingForm: false
};

export default function clickedReducer(state = initialState, action) {
    switch(action.type) {
        case 'FILLING_THE_FORM': {
            let currentlyFilling;

            if (action.payload === true) currentlyFilling = action.payload;
            else return; 

            return {
                ...state,
                isFillingForm: currentlyFilling
            }
        }

        case 'FINISHED_FILLING_THE_FORM': {
            let currentlyFilling;

            if (action.payload === false) currentlyFilling = action.payload;
            else return; 

            return {
                ...state,
                isFillingForm: currentlyFilling
            }
        }

        default: 
            return state;
    }
};
