import React from 'react';
import mainBG from './images/bg-pattern-desktop.svg';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Header';
import {
  Paragraph,
  Heading
} from './components/Typography';
import heroMobile from './images/hero-mobile.jpg';
import heroDesktop from './images/hero-desktop.jpg';
import Form from './components/Form/Form';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    font-family: 'Josefin Sans', sans-serif;
    color: hsl(0, 36%, 70%);
    font-size: 16px;
  }
  img {
    max-width: 100%;
  }
  .app {
    max-width: min(100%, 1440px);
    margin: 0 auto;
    background: url(${mainBG});
    background-size: contain;
    background-repeat: no-repeat;
    padding-top: 1px;
  }
  .container {
    padding: 0 1em;
    margin: 1em 0;

    @media (min-width: 600px) {
      > img {
        margin-top: 4em;
      }
    }

    @media (min-width: 900px) {
      padding: 0 1em 0 10em;
    }
  }
  .row {
    @media (min-width: 600px) {
      display: flex;
    }
  }
  .hero__mobile {
    @media (min-width: 600px) {
      display: none;
    }
  }
  .info {
    @media (min-width: 600px) {
      width: min(50%, 600px);
    }
  }
  .hero__desktop {
    display: none;
    margin-left: auto;
    @media (min-width: 600px) {
      display: block;
      width: min(45%, 610px);
      object-fit: cover;
      justify-self: flex-end;
    }
  }
`


function App() {
  return (
    <main className="app">
      <GlobalStyle />
      <div className="row">
        <div className="info">
          <Header />
          <img className="hero__mobile"
            src={heroMobile}
            alt="Model posing"
            srcSet={`${heroMobile} 375w, ${heroDesktop} 610w`}
          />
          <div className="container">
            <Heading weight="300">We're <br /><span>Coming soon</span></Heading>
            <Paragraph>We're coming soon Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</Paragraph>
            <Form error/>
          </div>
        </div>
        <img className="hero__desktop" src={heroDesktop} alt="Model posing"/>
      </div>
    </main>
  );
}

export default App;
