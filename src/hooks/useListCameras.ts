import { ListCamerasContext } from './../contexts/ListCamerasContext';
import {useContext} from 'react';

export const useListCameras = () => {
    return useContext(ListCamerasContext);
}