import { createContext, useState, FC, ReactNode } from "react";

export interface IAddListContext{
  showAddList: boolean,
  setShowAddList: React.Dispatch<React.SetStateAction<boolean>>,
}

export interface IAddListProvider{
  children: ReactNode,
}

export const AddListContext = createContext<IAddListContext>({
  showAddList: false,
  setShowAddList: () => {},
});

export const AddListProvider: FC<IAddListProvider> = ({children}) => {
  let [showAddList, setShowAddList] = useState(false);
  return (
    <AddListContext.Provider
      value={{
        showAddList,
        setShowAddList,
      }}
    >
      {children}
    </AddListContext.Provider>
  );
}