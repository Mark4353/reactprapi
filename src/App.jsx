import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }list

  componentDidMount() {
    axios
      .get("https://hn.algolia.com/api/v1/search?query=react")
      .then((response) => {
        this.setState({ articles: response.data.hits });
      });
  }

  render() {
    return (
      <div>
        <ul className="list">
          {this.state.articles.map(({ title, url, objectID }) => (
            <li key={objectID} className="item">
              <a href={url} className="item-link">
                {title}
              </a>
              
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;