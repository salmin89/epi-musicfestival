import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

export default class HomePage extends React.Component<any, any> {

  constructor(props: any) {
    super(props);

    this.state = {
      name: ""
    }

    if (fetch) {
      fetch("?expand=*", {
        headers: {
          "Accept": "application/json"
        }
      })
        .then(response => response.json())
        .then(json => this.setState({name: json.name}));
    }

  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>HomePage12</title>
        </Helmet>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/en/artists/">Artists</NavLink>
        <h1
          style={{
            lineHeight: "2",
            color: "#222",
            fontFamily: "Helvetica, sans-serif",
            textShadow: "0 0 5px lightgray"
          }}
        >
          This is { this.state.name } 🔥🔥
        </h1>
      </React.Fragment>
    );
  }
}