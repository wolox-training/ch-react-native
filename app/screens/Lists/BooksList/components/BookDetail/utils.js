import { bookData } from '../../constants';

export const findBookByIndex = id => bookData.find(item => item.id === id);
