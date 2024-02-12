import { ViewingPanelContext } from './../contexts/ViewingPanelContext';
import {useContext} from 'react';

export const useViewingPanel = () => {
    return useContext(ViewingPanelContext);
}