import { KANYE_LOAD_START, KANYE_LOAD_SUCCESS, KANYE_LOAD_ERR } from '../actions'

const initialState = {
  isLoading: false,
  error: '',
  quote: '👆🏾 ask Kanye',
  isCartoon: false
}

 const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case KANYE_LOAD_START: { console.log(action.payload)
            
            return {
        ...state, isLoading: true, isCartoon: !state.isCartoon

      }}
    case KANYE_LOAD_SUCCESS: {
      console.log(action.payload)
            return {
        ...state,
        quote: [action.payload],
        isLoading: false
      }}
    case KANYE_LOAD_ERR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }}
    default:
      return state

    }
}
export default fetchReducer
