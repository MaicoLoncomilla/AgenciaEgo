import axios from 'axios';

const actionCreator = {

    CARSFILTER: "CARSFILTER",
    CARSDETAILS: "CARSDETAILS",

    CARS: "CARS",
    getCars: function () {
        return dispatch => {
            const promise = axios.get(`https://challenge.agenciaego.tech/models/`)
            this._dispatchPromise(promise, this.CARS, dispatch)
        }
    },
    
    DETAILS: "DETAILS",
    getDetails: function(id){
        return dispatch => {
            const promise = axios.get(`https://challenge.agenciaego.tech/models/${id}`)
            this._dispatchPromise(promise, this.DETAILS, dispatch)
        }
    },

    _dispatchPromise: function (promise, type, dispatch) {
        return promise
            .then(({data}) => {
                dispatch({ type: type, payload: data })
            })
            .catch(err => {
                if (err.response) {
                    alert(`Error! \n Status: ${err.response.status} \n ${err.response.data}`);
                } else {
                    alert(`Error! ${err}`);
                }
            })
    }
}

export default actionCreator