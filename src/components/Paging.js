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
      let items = [
        <Pagination.First />,
        <Pagination.Prev />,
        <Pagination.Item
          key={1}
          active={1 === active}
          onClick={() => this.onPageClick(1)}
        >
          {1}
        </Pagination.Item>
      ];
      const numPages = Math.ceil(count / 25);
      let i = active - 1;
      if (i > 2) {
        items.push(<Pagination.Ellipsis />);
      } else {
        i = 2;
      }
      let lastPage;
      for (
        let number = i;
        number <= active + 1 && number <= numPages;
        number++
      ) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === active}
            onClick={() => this.onPageClick(number)}
          >
            {number}
          </Pagination.Item>
        );
        lastPage = number;
      }
      if (lastPage < numPages) {
        if (lastPage + 1 < numPages) {
          items.push(<Pagination.Ellipsis />);
        }
        items.push(
          <Pagination.Item
            key={numPages}
            active={numPages === active}
            onClick={() => this.onPageClick(numPages)}
          >
            {numPages}
          </Pagination.Item>
        );
      }
      items.push(<Pagination.Next />);
      items.push(<Pagination.Last />);
      return <Pagination size="sm">{items}</Pagination>;
    } else {
      return null;
    }
  }
}

export const mapStateToProps = state => {
  return { count: state.count };
};

export const mapDispatchToProps = dispatch => {
  return { fetchEvents: number => dispatch(getEvents(number)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paging);
