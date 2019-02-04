import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import RootComponent from './index';

//@ts-ignore
global.React = React;
//@ts-ignore
global.ReactDOM = ReactDOM;
//@ts-ignore
global.ReactDOMServer = ReactDOMServer;
//@ts-ignore
global.Helmet = Helmet;
//@ts-ignore
global.RootComponent = RootComponent;
//@ts-ignore
global.fetch = null;