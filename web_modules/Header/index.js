import React, { Component, PropTypes } from "react"
import { Link } from "react-router"

import styles from "./index.css"

export default class Header extends Component {
  
  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    return (
      <header className={ styles.header }>
        <nav className={ styles.nav }>
          <div className={ styles.navPart1 }>
            <Link
              className={ styles.link }
              to="/"
            >
              { "About" }
            </Link>
            <Link
              className={ styles.link }
              to="/posts"
            >
              { "Blog" }
            </Link>
            <Link
              className={ styles.link }
              to="/resume"
            >
              { "Resumé" }
            </Link>
          </div>
        </nav>
      </header>
    )
  }
}
