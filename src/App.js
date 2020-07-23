import React from 'react';

import Routes from './Routes';
import Header from "./components/HeaderFooter/Header/";
import Footer from "./components/HeaderFooter/Footer/";

function App() {
    return (
      <div>
        <Header />
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
  );
}

export default App;
