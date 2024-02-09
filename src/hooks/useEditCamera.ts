import {useContext} from 'react';
import { EditCameraContext } from '../contexts/EditCameraContext';

export const useEditCamera = () => {
    return useContext(EditCameraContext);
}