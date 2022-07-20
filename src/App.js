import React from 'react';

import {About, Footer, Header, Skills, Testimonial, Work} from './container';
import {Navbar} from './components';
import './App.scss';

const App = () => (<div className="app">
        <Navbar/>
        <Helmet>
            <script async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5117302971351802"
                    crossOrigin="anonymous">

            </script>
        </Helmet>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Testimonial/>
        <Footer/>
    </div>);

export default App;
