import React, { ReactElement } from 'react';
import ElofyContext from './ElofyContext';

interface Props {
  // any props that come into the component
  children: ReactElement,
}

export const ElofyProvider: React.FC<Props> = ({children}) => {
  return (
    <ElofyContext.Provider value={{}}>
      {children}
    </ElofyContext.Provider>
  );
}
