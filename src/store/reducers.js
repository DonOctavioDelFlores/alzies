import { actionTypes } from './actions';
// import { initialState } from './store';

const initState = {
    drawer: {
        open: false
    },
    signInDialog: {
        open: false
    },
    snackbar: {
        autoHideDuration: 0,
        message: '',
        open: false
    },
}


function appReducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.TOGGLE_DRAWER:
            return {
                ...state,
                drawer: {
                    open: action.payload
                }
            }
        case actionTypes.SIGNIN_OPEN:
        case actionTypes.SIGNIN_CLOSE:
            return {
                ...state,
                signInDialog: {
                    open: action.payload
                }
            }
        case actionTypes.SNACKBAR_OPEN:
        case actionTypes.SNACKBAR_CLOSE:
            return {
                ...state,
                snackbar: {
                    ...action.payload
                }
            }

        default:
            return state;
    }
}

export default appReducer;