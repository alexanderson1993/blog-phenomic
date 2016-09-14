import React, { PropTypes } from "react"
import FontAwesome from "react-fontawesome"
import styles from "./style.css"

const Social = ({ title, icon, link }) => {
  const props = {
    href: link,
    target: "_blank",
    className: styles.socialCircle,
    title: title,
  }
  return (
    <a {...props}>
    <FontAwesome name={ icon } />
    </a>
    )
}

Social.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default Social