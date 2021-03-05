import * as React from "react";
import { Topic } from "types";
import { Status, useAsync } from "../../hooks";
import api from "../../api";

enum actionTypes {
  loadTopics = "topics/load",
}

interface TopicsContext {
  topics: Topic[];
  fetchTopics: () => void;
  status: Status;
}

const TopicsContext = React.createContext<TopicsContext | null>(null);
TopicsContext.displayName = "TopicsContext";

interface State {
  topics: Topic[];
}

const initialState: State = {
  topics: [],
};

const topicsReducer = (state: State, action: { type: string; payload?: any }): State => {
  switch (action.type) {
    case actionTypes.loadTopics:
      return { ...state, topics: action.payload };
    default:
      return state;
  }
};

interface ProviderProps {
  children: React.ReactNode;
}

const TopicsProvider: React.FC<ProviderProps> = props => {
  const [state, dispatch] = React.useReducer(topicsReducer, initialState);
  const { run, status, message, reset } = useAsync(async () => await api.topics.getTopics());

  const fetchTopics = React.useCallback(async () => {
    const response = await run();
    const data = response.data;
    if (data) {
      dispatch({ type: actionTypes.loadTopics, payload: data });
    }
  }, [run]);

  const value = React.useMemo(() => ({ ...state, fetchTopics, status }), [state, fetchTopics, status]);

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
