import React from 'react';
import styles from './Modal.module.css';

class Modal extends React.Component {
  handleOnClickOverlay = e => {
    if (e.target.nodeName !== 'IMG') {
      this.props.toggleModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModalEsc();
    }
  };
  render() {
    const { photo } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.handleOnClickOverlay}>
        <div className={styles.Modal}>
          <img src={photo} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
