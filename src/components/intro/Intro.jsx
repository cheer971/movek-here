import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import BackgroundImage from "../../assets/images/netflix-background.jpg";
import PropTypes from "prop-types";
import "./intro.scss";

Intro.propTypes = {
  type: PropTypes.string,
};

function Intro({ type }) {
  return (
    <div className="intro">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select className="category__select" name="genre" id="genre">
            <option> Genre</option>
            <option value="action"> Action</option>
            <option value="honor"> Honor</option>
            <option value="18+"> 18+</option>
            <option value="lovestory"> Lovestory</option>
            <option value="gameshow"> Gameshow</option>
          </select>
        </div>
      )}
      <img className="background" src={BackgroundImage} alt="background" />
      <div className="info">
        <img className="info-img" src="https://picsum.photos/400/200" alt="" />
        <span className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          esse. Laborum cum natus possimus distinctio ut libero, eos magnam amet
          iure molestiae corrupti voluptate accusamus quae, perferendis vel
          labore quod?
        </span>
        <div className="event-btns">
          <div className="btn play">
            <PlayArrow />
            <span>Play</span>
          </div>
          <div className="btn more">
            <InfoOutlined />
            <span>Info</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
