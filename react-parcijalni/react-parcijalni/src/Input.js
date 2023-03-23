import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {
  state = {
    input: "",
  };

  onSendInput = () => {
    this.props.handleButton(this.state.input);
    this.setState({ input: "" });
  };

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      this.onSendInput();
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={(e) => this.setState({ input: e.target.value })}
          onKeyPress={this.onKeyPress}
          placeholder="Search repository"
          autoFocus
        />
        <button onClick={this.onSendInput}>Send</button>
      </div>
    );
  }
}

Input.propTypes = {
  sendInput: PropTypes.func,
};

export default Input;
