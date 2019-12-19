import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./App.css";

const App = ({ children }) => (
  <>
    <Header />

      {children}

    <Footer />
  </>
);

export default App;
