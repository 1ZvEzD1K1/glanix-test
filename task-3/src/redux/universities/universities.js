import { GET_DATA_ERROR, GET_DATA_PENDING, GET_DATA_SUCCESS, RESET_UNIVERSITI } from "./universities-actions";

const initialState = {
    data: null,
    error: "",
    isLoading: false,
};

export default function imagesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_PENDING:
            return { ...state, isLoading: action.payload };
        case GET_DATA_SUCCESS:
            return { ...state, data: action.payload.map((el, index) => {
                return { ...el, index: index + 1, save: false}
            })};
        case GET_DATA_ERROR:
            return { ...state, error: action.payload };
        case RESET_UNIVERSITI:
            return { ...state, data: null}
        default:
            return state;
    }
}