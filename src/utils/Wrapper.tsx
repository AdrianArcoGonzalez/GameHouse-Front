import * as reactRedux from "react-redux";
import { store } from "../store/store";

export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

export const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <reactRedux.Provider store={store}>{children}</reactRedux.Provider>;
};
