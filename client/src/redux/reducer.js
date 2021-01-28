import actionCreator from './action-creator';

const { CARS, DETAILS, CARSFILTER, CARSDETAILS } = actionCreator

const initialState = {
    cars: [],
    details: false,
    carsFilter: false,
    carsDetail: false
}
const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case CARS:
            return {
                ...state,
                cars: action.payload
            }
        case CARSFILTER:
            return {
                ...state,
                carsFilter: action.payload
            }
        case DETAILS: 
            return {
                ...state,
                details: action.payload
            }
        case CARSDETAILS:
            return {
                ...state,
                carsDetail: action.payload
            }
        default:
            return {...state}
    }
}

export default reducer