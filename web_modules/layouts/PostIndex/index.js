import React, { Component, PropTypes } from "react"

import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import PagesList from "../../PagesList"

import styles from "./style.css"

const numberOfLatestPosts = 6

export default class PostIndex extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  render() {
    const latestPosts = enhanceCollection(this.context.collection, {
      filter: { layout: "Post" },
      sort: "date",
      reverse: true,
    }).slice(0, numberOfLatestPosts)
    return (
      <div className={ styles.content }>
      <Page {...this.props}>
      <PagesList pages={ latestPosts } />
      </Page>
      </div>
      )
  }
  }
