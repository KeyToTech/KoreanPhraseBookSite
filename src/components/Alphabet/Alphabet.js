import React, { useEffect } from "react";
import "./Alphabet.css";
import AlphabetTable from "./AlphabetTable/AlphabetTable";
import { connect } from "react-redux";
import { getAlphabet } from "../../store/actions/alphabetActions";

class Alphabet extends React.Component {
  componentDidMount() {
    this.props.getAlphabet(getAlphabet());
  }

  render() {
    console.log(this.props.alphabet);
    const { loading, alphabet, error } = this.props;
    return (
      <div className="alphabet-area">
        {loading ? (
          <div>Loading...</div>
        ) : (
          alphabet.alphabet &&
          alphabet.alphabet.map(item => {
            return <AlphabetTable item={item} />;
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
