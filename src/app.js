import React, { Component } from "react";
import { MainStyle } from "./main.styles";
import GlobalStyle from "./global.styles";
import Routes from "./routes/route";
import NavBar from "./components/navbar/navbar.component";
import "@fortawesome/fontawesome-free/css/all.css";
import Footer from "./components/footer/footer.component";

class App extends Component {
  state = {};
  render() {
    return (
      <MainStyle>
        <GlobalStyle />
        <NavBar></NavBar>
        <Routes></Routes>
        <Footer></Footer>
      </MainStyle>
    );
  }
}

export default App;
