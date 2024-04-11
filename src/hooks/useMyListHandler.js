import { useDispatch } from 'react-redux';
import { addToList, removeFromList } from '../features/myList/myListSlice';

const useMyListHandler = () => {
  const dispatch = useDispatch();
  
  const handleMyListClick = (addToMyList, movieObj) => {
    addToMyList ? dispatch(addToList(movieObj)) : dispatch(removeFromList(movieObj));
  };

  return { handleMyListClick };
};

export default useMyListHandler;