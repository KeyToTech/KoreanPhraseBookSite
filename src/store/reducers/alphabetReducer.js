import { alphabetConstants } from "../constants/alphabetConstants";

const initState = {
  loading: false,
  alphabet: [],
  error: false
};

const alphabetReducer = (state = initState, action) => {
  switch (action.type) {
    case alphabetConstants.REQUESTED_ALPHABET:
      return {
        loading: true,
        alphabet: [],
        error: false
      };
    case alphabetConstants.REQUESTED_ALPHABET_SUCCEEDED:
      return {
        loading: false,
        alphabet: action.alphabet,
        error: false
      };
    case alphabetConstants.REQUESTED_ALPHABET_FAILED:
      return {
        loading: false,
        alphabet: [],
        error: true
      };
    default:
      return state;
  }
};

export default alphabetReducer;
