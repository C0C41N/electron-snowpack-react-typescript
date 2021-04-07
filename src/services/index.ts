import { createContext, useContext } from 'react';

import { svcLog } from './log';
import { svcNative } from './native';

export const services = { svcNative, svcLog };

const context = createContext(services);
export const { Provider } = context;

export const useLog = () => {
  const contextService = useContext(context);
  return contextService.svcLog;
};

export const useNative = () => {
  const contextService = useContext(context);
  return contextService.svcNative;
};
