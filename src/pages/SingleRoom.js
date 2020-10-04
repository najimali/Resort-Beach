import React, { Component } from "react";
import { withRouter } from "react-router";
class SingleRoom extends Component {
  state = {
    id: this.props.match.params.slug,
  };
  render() {
    return <div>Hello from Single Room Page & id is {this.state.id}</div>;
  }
}
export default withRouter(SingleRoom);
