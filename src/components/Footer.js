import React from 'react'
import whiteLogo from '../img/whiteLogo.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={whiteLogo}
            alt="CorpCare"
            style={{ width: '24em' }}
          />
        </div>
      </footer>
    )
  }
}

export default Footer
