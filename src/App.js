import React, { Component } from "react";
import "./App.css";
import Page1 from "./components/Page1";
import AsyncComponent from "./components/AsyncComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "page1",
      component: null
    };
  }

  onRouteChange = route => {
    this.setState({ route });
  };

  render() {
    const { route } = this.state;
    if (route === "page1") {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else if (route === "page2") {
      const AsyncPage2 = AsyncComponent(() => import("./components/Page2"));
      return <AsyncPage2 onRouteChange={this.onRouteChange} />;
    } else if (route === "page3") {
      const AsyncPage3 = AsyncComponent(() => import("./components/Page3"));
      return <AsyncPage3 onRouteChange={this.onRouteChange} />;
    }
  }
}

export default App;
