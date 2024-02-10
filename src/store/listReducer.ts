import lists from '../json/lists.json';

enum ActionType{
  "GET_LISTS",
}

interface IAction{
  type: keyof typeof ActionType,
  payload: {[key: string]: any},
}

export const listReducer = (state = lists, action: IAction) => {
  switch(action.type){
    case "GET_LISTS":
      return state;
    default:
      return state;
  }
}