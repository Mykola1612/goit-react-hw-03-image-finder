import axios from 'axios';
import React from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';

export class App extends React.Component {
  state = {
    element: null,
    loader: false,
    inputValue: '',
  };

  fetchPhoto = async query => {
    try {
      this.setState({
        loader: true,
      });
      if (!query) {
        const { data } = await axios.get(
          'https://pixabay.com/api/?q=&page=1&key=39488259-261aead24914c58cf003fef3e&image_type=photo&orientation=horizontal&per_page=12&page=1'
        );
        this.setState({
          element: data.hits,
        });
        return;
      }
      const { data } = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=1&key=39488259-261aead24914c58cf003fef3e&image_type=photo&orientation=horizontal&per_page=12&page=1`
      );
      this.setState({
        element: data.hits,
      });
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    } finally {
      this.setState({
        loader: false,
      });
    }
  };

  componentDidMount() {
    this.fetchPhoto();
  }

  onSubmit = data => {
    this.setState(
      {
        inputValue: data,
      },
      () => {
        this.fetchPhoto(data);
      }
    );
  };

  render() {
    return (
      <div>
        {this.state.loader && <Loader />}
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.element !== null && (
          <ImageGallery>
            <ImageGalleryItem elements={this.state.element} />
          </ImageGallery>
        )}
        {this.state.element !== null && this.state.element.length !== 0 && (
          <Button />
        )}
      </div>
    );
  }
}
