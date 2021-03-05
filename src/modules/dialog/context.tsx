import * as React from "react";

enum actionTypes {
  openDialog = "dialogs/open-dialog",
  closeDialog = "dialogs/close-dialog",
}

interface DialogCtx {
  dialogName?: string;
  openDialog: (dialogName: string) => void;
  closeDialog: () => void;
}

const DialogContext = React.createContext<DialogCtx | null>(null);
DialogContext.displayName = "DialogContext";

interface IState {
  dialogName?: string;
}

const initialState: IState = {
  dialogName: "",
};

const dialogReducer = (state: IState, action: { type: string; payload?: string }): IState => {
  switch (action.type) {
    case actionTypes.openDialog:
      return { ...state, dialogName: action.payload };
    case actionTypes.closeDialog:
      return initialState;
    default:
      return state;
  }
};

interface ProviderProps {
  children: React.ReactNode;
}

const DialogProvider: React.FC<ProviderProps> = props => {
  const [{ dialogName }, dispatch] = React.useReducer(dialogReducer, initialState);

  const openDialog = (dialogName: string) => dispatch({ type: actionTypes.openDialog, payload: dialogName });
  const closeDialog = () => dispatch({ type: actionTypes.closeDialog });

  const value = React.useMemo(() => ({ dialogName, openDialog, closeDialog }), [dialogName]);

  return <DialogContext.Provider value={value} {...props} />;
};

const useDialog = () => {
  const context = React.useContext(DialogContext);

  if (!context) {
    throw new Error("`useDialog` must be within a `DialogProvider`");
  }

  return context;
};

export { DialogProvider, useDialog };
