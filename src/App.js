import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
  };
  getMovies = async () => {
    const moives = await axios.get("https://yts.mx/api/v2/list_movies.json");
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Lodaing" : "We are ready"}</div>;
  }
}

export default App;
