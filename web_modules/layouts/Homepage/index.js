import React, { Component, PropTypes } from "react"
import styles from "./index.css"

import Page from "../Page"
import Social from "../Social"

import enhanceCollection from "phenomic/lib/enhance-collection"

export default class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  render() {
    const social = enhanceCollection(this.context.collection, {
      filter: { layout: "Social" },
    })
    return (<div className="front">
      <div className={ styles.picture } />
      <div className={ styles.sideText }>
      <Page {...this.props}>
      <div className={ styles.socialBlock }>
      {
        social && social.map((socialIcon) => {
          return <Social key={ socialIcon.title } {...socialIcon} />
        })
      }
      </div>
      </Page>
      </div>
      </div>
      )
  }
}
