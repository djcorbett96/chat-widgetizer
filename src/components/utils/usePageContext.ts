import { Dispatch, SetStateAction } from 'react';
import { ChatConfig } from '../../types/config';
import { createCtx } from '../../utils/createContext';

type PageContextType = {
  chatConfig: ChatConfig;
  setChatConfig: Dispatch<SetStateAction<ChatConfig>>;
  settingsType: string;
  setSettingsType: Dispatch<SetStateAction<string>>;
  previewType: string;
  setPreviewType: Dispatch<SetStateAction<string>>;
};

// Setup LocatorProvider to pass the [selected, hovered, focused]Ids between Marker interactions and LocatorCard interactions
export const [usePageContext, PageContextProvider] = createCtx<PageContextType>(
  'Attempted to call usePageContext outside of PageContextProvider'
);
