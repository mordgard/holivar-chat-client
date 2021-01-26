import * as React from "react";
import { ITopic } from "types";

enum actionTypes {
  loadTopics = "topics/load",
}

interface ITopicsContext {
  topics: ITopic[];
  loadTopics: (topics: ITopic[]) => void;
}

const TopicsContext = React.createContext<ITopicsContext | null>(null);
TopicsContext.displayName = "TopicsContext";

interface IState {
  topics: ITopic[];
}

const initialState: IState = {
  topics: [],
};

const topicsReducer = (state: IState, action: { type: string; payload?: any }): IState => {
  switch (action.type) {
    case actionTypes.loadTopics:
      return { ...state, topics: action.payload };
    default:
      return state;
  }
};

interface IProviderProps {
  children: React.ReactNode;
}

const TopicsProvider: React.FC<IProviderProps> = props => {
  const [state, dispatch] = React.useReducer(topicsReducer, initialState);

  const loadTopics = (topics: ITopic[]) => dispatch({ type: actionTypes.loadTopics, payload: topics });

  const value = React.useMemo(() => ({ ...state, loadTopics }), [state]);

  return <TopicsContext.Provider value={value} {...props} />;
};

const useTopics = () => {
  const context = React.useContext(TopicsContext);

  if (!context) {
    throw new Error("`useTopics` must be within a `TopicsProvider`");
  }

  return context;
};

export { TopicsProvider, useTopics };
