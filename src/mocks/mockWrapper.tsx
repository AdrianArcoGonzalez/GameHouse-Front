import * as reactRedux from "react-redux";
import mockStore from "./mockStore";

export interface MockWrapperProps {
  children: JSX.Element | JSX.Element[];
}

export const mockWrapper = ({ children }: MockWrapperProps): JSX.Element => {
  return (
    <reactRedux.Provider store={mockStore}>{children}</reactRedux.Provider>
  );
};
