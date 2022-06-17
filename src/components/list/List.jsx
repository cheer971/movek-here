import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import "./list.scss";
import React from "react";
import ListItem from "../listItem/ListItem";

function List() {
  return (
    <div className="list">
      <div className="list-title">Continue to watch</div>
      <div className="list-films">
        <ArrowBackIosOutlined />
        <div className="films-container">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined />
      </div>
    </div>
  );
}

List.propTypes = {};

export default List;
