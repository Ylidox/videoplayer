
import { useListCameras } from '../hooks/useListCameras';
import { ListCameras } from './ListCameras';

export const ListContainer = () => {
  let {lists} = useListCameras();
  
  return (
    <>
    {lists.map((item) => {
      return (
        <ListCameras {...item} key={item.id}/>
      );
    })}
    </>
  )
}
