import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

export default class AboutPage extends React.Component {
  
  constructor(props: any) {
    super(props);

    if (fetch) {
      fetch("?expand=*", {
        headers: {
          "Accept": "application/json"
        }
      })
        .then(response => response.json())
        .then(json => console.log(json));
    }

  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>AboutPage</title>
        </Helmet>
        
        <NavLink to="/" >Home </NavLink>
        <NavLink to="/en/artists/">Artists</NavLink>
        <h1
          style={{
            lineHeight: "2",
            color: "#222",
            fontFamily: "Helvetica, sans-serif",
            textShadow: "0 0 5px lightgray"
          }}
        >
          About is 🔥🔥
          </h1>
      </React.Fragment>
    );
  }
}