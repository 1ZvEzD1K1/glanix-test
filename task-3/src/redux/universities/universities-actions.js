import axios from "axios";

export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_ERROR = 'GET_DATA_ERROR'
export const GET_DATA_PENDING = 'GET_DATA_PENDING'
export const RESET_UNIVERSITI = 'RESET_UNIVERSITI'

export const UniversitiesActionCreators = {
    getDataSuccess: (payload) => ({
        type: GET_DATA_SUCCESS,
        payload
    }),
    getDataError: (payload) => ({
        type: GET_DATA_ERROR,
        payload
    }),
    getDataPending: (payload) => ({
        type: GET_DATA_PENDING,
        payload
    }),
    resetUniversiti: () => ({
        type: RESET_UNIVERSITI,
    }),
    getData: (country) => async (dispatch) => {
        try {
            dispatch(UniversitiesActionCreators.getDataPending(true));
            const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`)
            //console.log("res", response.data)
            dispatch(UniversitiesActionCreators.getDataSuccess(response.data));
            dispatch(UniversitiesActionCreators.getDataPending(false));
        } catch (error) {
            dispatch(UniversitiesActionCreators.getDataError(error.response?.data.message));
        }
    }
}
