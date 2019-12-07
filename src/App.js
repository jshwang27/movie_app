import React from "react";
import PropTypes from "prop-types";

function Food({ name, url, rating }) {
  return (
    <div>
      <h2>{name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={url} alt={name} />
    </div>
  );
}

Food.prototype = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  rating: PropTypes.number
};

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeTucCw1w6Ak%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 3
  },
  {
    id: 2,
    name: "ramen",
    url:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fseonkyounglongest.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fshoyu-ramen-1.jpg&f=1&nofb=1",
    rating: 3.5
  },
  {
    id: 3,
    name: "samgubsal",
    url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmusingsofadilettante.files.wordpress.com%2F2011%2F11%2Fsamgyupsal.jpg&f=1&nofb=1",
    rating: 4.7
  },
  {
    id: 4,
    name: "chukumi",
    url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FC2VA28_FgY8%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 2
  }
];

function App() {
  return (
    <div>
      Hello!!!
      {foodILike.map(dish => (
        <Food name={dish.name} url={dish.url} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
