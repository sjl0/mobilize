import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents } from "../actions/events";
import Event from "./Event";
import { FETCHING, FAILURE, INIT } from "../constants/status";
import Pagination from "react-bootstrap/Pagination";

export class Paging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1
    };
  }

  onPageClick = number => {
    this.props.fetchEvents(number);
    this.setState({ active: number });
  };

  render() {
    const { count } = this.props;
    if (count > 0) {
      const { active } = this.state;
      let items = [];
      for (let number = 1; number <= count / 25; number++) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === active}
            onClick={() => this.onPageClick(number)}
          >
            {number}
          </Pagination.Item>
        );
      }
      return <Pagination>{items}</Pagination>;
    } else {
      return null;
    }
  }
}

export const mapStateToProps = state => {
  return { count: state.count };
};

export const mapDispatchToProps = dispatch => {
  return { fetchEvents: () => dispatch(getEvents()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paging);
