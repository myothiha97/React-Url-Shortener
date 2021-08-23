import React from "react";
import { HomePageStyle } from "./homepage.styles";
import ButtonCyan from "../../components/button-cyan/button-cyan.component";

import { ReactComponent as WorkerImg } from "../../assets/illustration-working.svg";
import UrlShortenForm from "../../components/shorten-form/shorten-form.component";
import Card from "../../components/card/card.component";

const HomePage = ({}) => {
  return (
    <HomePageStyle>
      <section className="get-started">
        <div className="left">
          <h1>More Than Just</h1>
          <h1>Shoter Links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <div className="button">
            <ButtonCyan>Get Started</ButtonCyan>
          </div>
        </div>
        <div className="right">
          <WorkerImg className="worker-img"></WorkerImg>
        </div>
        <div className="shorten-form">
          <UrlShortenForm></UrlShortenForm>
        </div>
      </section>
      <section className="statistic">
        <div className="content">
          <div className="text">
            <h1>Advanced Statistics</h1>
            <p>
              Track how links are performing across the web with our advanced
              statistics dashboard
            </p>
          </div>
          <div className="cards-container">
            <div className="cards">
              <div className="card-wrapper">
                <Card>Brand Recognition</Card>
              </div>
              <div className="card-wrapper">
                <Card>Detailed Records</Card>
              </div>
              <div className="card-wrapper">
                <Card>Fully Customizable</Card>
              </div>
            </div>
            <div className="line"> </div>
          </div>
        </div>
      </section>
      <section className="boost">
        <div className="content">
          <h1>Boost your links today</h1>
          <ButtonCyan>Get Started</ButtonCyan>
        </div>
      </section>
    </HomePageStyle>
  );
};

export default HomePage;
