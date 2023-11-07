import { ChatHeadlessProvider } from '@yext/chat-headless-react';
import { ChatPopUp } from '@yext/chat-ui-react';
import { ChatConfig } from '../config';

const Chatbot = (props: ChatConfig) => {
  return (
    <ChatHeadlessProvider config={props.headless}>
      <ChatPopUp
        {...props.behavior}
        customCssClasses={{
          container: 'h-full flex justify-center',
          panel: 'static h-full',
          panel__hidden: 'hidden',
          closedPopupContainer: 'static justify-center h-full',
          closedPopupContainer__hidden: 'hidden',
        }}
      />
    </ChatHeadlessProvider>
  );
};

export default Chatbot;
