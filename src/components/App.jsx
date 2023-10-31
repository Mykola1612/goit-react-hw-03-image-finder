import React from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { fetchImage } from './fetch';

export class App extends React.Component {
  state = {
    element: [],
    loader: false,
    inputValue: '',
    totalHits: null,
    per_page: 12,
    page: 1,
    bigPhoto: null,
    showModal: false,
  };

  fetchPhoto = async ({ inputValue, page }) => {
    const { per_page } = this.state;
    try {
      this.setState({
        loader: true,
      });

      const data = await fetchImage({ inputValue, per_page, page });

      console.log(data);
      this.setState(prevState => {
        return {
          totalHits: data.totalHits,
          element: [...prevState.element, ...data.hits],
        };
      });
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    } finally {
      this.setState({
        loader: false,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.inputValue !== this.state.inputValue ||
      prevState.page !== this.state.page
    ) {
      this.fetchPhoto({
        inputValue: this.state.inputValue,
        page: this.state.page,
      });
    }
  }
  onSubmit = data => {
    this.setState(prevState => {
      if (data !== this.state.inputValue) {
        return {
          page: 1,
          element: [],
          inputValue: data,
        };
      }
    });
  };

  handleOnClick = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  handleUrlOnClick = bigPhoto => {
    this.setState({
      bigPhoto: bigPhoto,
    });
  };

  toggleModal = () => {
    if (this.state.showModal === false) {
      this.setState({
        showModal: true,
      });
      return;
    }
    this.setState({
      showModal: false,
    });
  };

  toggleModalEsc = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.loader && <Loader />}
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.element.length !== 0 && (
          <ImageGallery>
            <ImageGalleryItem
              elements={this.state.element}
              toggleModal={this.toggleModal}
              handleUrlOnClick={this.handleUrlOnClick}
            />
          </ImageGallery>
        )}
        {this.state.element.length !== 0 &&
          this.state.page <
            Math.ceil(this.state.totalHits / this.state.per_page) && (
            <Button handleOnClick={this.handleOnClick} />
          )}

        {this.state.showModal && (
          <Modal
            photo={this.state.bigPhoto}
            toggleModal={this.toggleModal}
            toggleModalEsc={this.toggleModalEsc}
          />
        )}
      </div>
    );
  }
}
