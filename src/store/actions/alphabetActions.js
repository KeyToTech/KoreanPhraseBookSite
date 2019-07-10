import { alphabetConstants } from "../constants/alphabetConstants";
import fbConfig from "../../data/config/fbConfig";

export const getAlphabet = () => {
  return (dispatch, { getFirebase, getFirestore }) => {
    dispatch(request());
    const data = fbConfig.database().ref("alphabet");
    data.on("value", snap => {
      const alphabetObject = snap.val();
      if (alphabetObject) {
        dispatch(success(alphabetObject));
      } else dispatch(failure());
    });
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
function failure() {
  return { type: alphabetConstants.REQUESTED_ALPHABET_FAILED };
}
