import React, { Component } from 'react'

export default class Who extends Component {
  state = {
    active: false,
  }

  render() {
    return (
      <div>
        <div>
          <button
            className="button"
            onClick={() => this.setState({ active: !this.state.active })}
          >
            Read More
          </button>
          <div className={this.state.active ? 'modal is-active is-clipped' : 'modal'}>
            <div
              className="modal-background"
              onClick={() => this.setState({ active: !this.state.active })}
            ></div>
            <div className="modal-content">
              <div className="modal-card">
                <header className="modal-card-head columns">
                  <figure className="image is-128x128 column is-narrow">
                    <img className="is-rounded" src={this.props.image} alt="Image" />
                  </figure>
                  <div className="column">
                    <h1 className="jobTitle">{this.props.title}</h1>
                    <p className="jobTitle">{this.props.jobTitle}</p>
                  </div>
                </header>
                <section className="modal-card-body">{this.props.body}</section>
              </div>
              <button
                onClick={() => this.setState({ active: !this.state.active })}
                class="modal-close is-large"
                aria-label="close"
              ></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
