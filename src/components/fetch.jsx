import axios from 'axios';

export const fetchImage = async (inputValue, per_page, page) => {
  try {
    const { data } = await axios.get(
      `https://pixabay.com/api/?q=${inputValue}&page=1&key=39488259-261aead24914c58cf003fef3e&image_type=photo&orientation=horizontal&per_page=${per_page}&page=${page}`
    );

    return data;
  } catch (error) {
    throw new Error('Ошибка при загрузке данных:', error);
  }
};
