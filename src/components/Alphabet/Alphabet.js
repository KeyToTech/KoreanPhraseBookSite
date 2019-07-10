import React, { useEffect } from "react";
import "./Alphabet.css";
import AlphabetTable from "./AlphabetTable/AlphabetTable";
import { connect } from "react-redux";
import { getAlphabet } from "../../store/actions/alphabetActions";
import { compose } from "redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";

class Alphabet extends React.Component {
  componentDidMount() {
    this.props.getAlphabet(getAlphabet());
  }

  render() {
    const { loading, alphabet, error } = this.props;
    console.log(error);
    return (
      <div className="alphabet-area">
        {loading ? (
          <div>Loading...</div>
        ) : (
          alphabet &&
          Object.keys(alphabet).map(key => {
            return <AlphabetTable key={key} item={alphabet[key]} />;
          })
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loading, alphabet, error } = state.alphabet;
  return {
    loading,
    alphabet,
    error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAlphabet: () => dispatch(getAlphabet())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alphabet);
