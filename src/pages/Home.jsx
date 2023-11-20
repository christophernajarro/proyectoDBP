import React from "react";
import Header from "./../components/Header";
import BannerSlider from "./../components/BannerSlider";
import PaymentBlock from "./../components/PaymentBlock";
import Container from "./../components/Container";
import SampleCardGrid from "./../components/SampleCardGrid";


const Home = () => {
  return (
    <>
      <Header />
      <BannerSlider />
      <Container>
        <PaymentBlock />
      </Container>
      <Container>
        <SampleCardGrid />
      </Container>

    </>
  );
};

export default Home;