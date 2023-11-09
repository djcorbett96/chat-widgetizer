import { ChatPopUp } from '@yext/chat-ui-react';
import { ChatConfig } from '../types/config';

const Chatbot = (props: ChatConfig) => {
  return (
    <ChatPopUp
      {...props.behavior}
      customCssClasses={{
        container: 'h-full flex justify-center',
        panel: 'static h-full',
        panel__hidden: 'hidden',
        closedPopupContainer: 'static justify-center h-full',
        closedPopupContainer__hidden: 'hidden',
        notification: 'absolute',
        button: 'relative',
      }}
    />
  );
};

export default Chatbot;
