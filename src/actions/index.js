import axios from "axios"

export const KANYE_LOAD_START = "KANYE_LOAD_START"
export const KANYE_LOAD_SUCCESS = "KANYE_LOAD_SUCCESS"
export const KANYE_LOAD_ERR = "KANYE_LOAD_ERR"

export const fetchKanyeQuote = () => dispatch => {

    dispatch({ type: KANYE_LOAD_START });
    axios.get(`https://api.kanye.rest`)
        .then(response => dispatch({ type: KANYE_LOAD_SUCCESS, payload: response.data.quote }))
        .catch(er => dispatch({ type: KANYE_LOAD_ERR, payload: `${er}` })
        )
}
