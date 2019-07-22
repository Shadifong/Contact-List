import React from "react";
import Header from "./components/header/header";
import "./app.css";
import CardContainer from "./containers/cardContainer";
export default class App extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    fetch("http://private-05627-frontendnewhire.apiary-mock.com/contact_list")
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(rejected => {
        console.log(rejected);
      });
  }
  render() {
    return (
      <>
        <Header data={this.state.data} func={data => this.setState(data)} />
        <CardContainer data={this.state.data} />
      </>
    );
  }
}
