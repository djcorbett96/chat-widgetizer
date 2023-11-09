import { ChatPopUp } from '@yext/chat-ui-react';
import { ChatConfig } from '../types/config';

const ChatbotButtonWithMessage = (props: ChatConfig) => {
  return (
    <ChatPopUp
      {...props.behavior}
      openOnLoad={false}
      showInitialMessagePopUp={true}
      customCssClasses={{
        container: 'h-full flex justify-center',
        panel: 'static h-full',
        panel__hidden: 'hidden',
        closedPopupContainer: 'static justify-center h-full hover:translate-y-0',
        closedPopupContainer__hidden: 'hidden',
        notification: 'absolute',
        button: 'relative',
      }}
    />
  );
};

export default ChatbotButtonWithMessage;
