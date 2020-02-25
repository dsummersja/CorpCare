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
            className="button is-text"
            onClick={() => this.setState({ active: !this.state.active })}
          >
            Read More
          </button>
          <div className={this.state.active ? 'modal is-active' : 'modal'}>
            <div
              className="modal-background"
              onClick={() => this.setState({ active: !this.state.active })}
            ></div>
            <div className="modal-content">
              <div className="modal-card">
                <header className="modal-card-head">
                  <figure class="image is-128x128">
                    <img src={this.props.image} alt="Image" />
                  </figure>
                  <h1 className="modal-card-title">{this.props.title}</h1>
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
