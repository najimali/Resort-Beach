import React, { Component } from "react";
import { RoomContext, RoomConsumer } from "../context";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    // const value = this.context;
    const { featuredRooms: rooms } = this.context;
    console.log(rooms);
    return <div> from featured room</div>;
  }
}
