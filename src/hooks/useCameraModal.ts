import {useContext} from 'react';
import { CameraModalContext } from '../contexts/CameraModalContext';
export const useCameraModal = () => {
    return useContext(CameraModalContext);
}