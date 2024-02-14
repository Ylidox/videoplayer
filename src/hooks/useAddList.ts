import {useContext} from 'react';
import { AddListContext } from '../contexts/AddListContext';
export const useAddList = () => {
    return useContext(AddListContext);
}