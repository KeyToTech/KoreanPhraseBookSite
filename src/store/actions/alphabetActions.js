import { alphabetConstants } from "../constants/alphabetConstants";

export const getAlphabet = () => {
  return dispatch => {
    dispatch(request());
    setTimeout(() => {
      dispatch(
        success({
          alphabet: [
            {
              koreanLetter: "ㄱ",
              translateLetter: "к / ґ",
              uid: "97a6c7da-bec2-4df1-9f39-f9e60a6fbcec"
            },
            {
              koreanLetter: "32",
              translateLetter: "f / ґ",
              uid: "97a6fsda-bec2-4df1-9f39-f9e60a6fbcec"
            },
            {
              koreanLetter: "1",
              translateLetter: "s / ґ",
              uid: "97a6cfsd-bec2-4df1-9f39-f9e60a6fbcec"
            }
          ]
        })
      );
    }, 3000);
  };
};

// eslint-disable-next-line
function request() {
  return { type: alphabetConstants.REQUESTED_ALPHABET };
}
// eslint-disable-next-line
function success(alphabet) {
  return { type: alphabetConstants.REQUESTED_ALPHABET_SUCCEEDED, alphabet };
}
// eslint-disable-next-line
function failure(error) {
  return { type: alphabetConstants.REQUESTED_ALPHABET_FAILED, error };
}
