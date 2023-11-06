import { ChatHeadlessProvider } from '@yext/chat-headless-react';
import { ChatPopUp } from '@yext/chat-ui-react';
export interface ChatConfig {
  headless: {
    apiKey: string;
    botId: string;
  };
  display: {
    title: string;
    showRestartButton: boolean;
    ctaLabel: string;
    openOnLoad: boolean;
    showInitialMessagePopUp: boolean;
    showUnreadNotification: boolean;
    showFeedbackButtons: boolean;
  };
}

const Chatbot = (props: ChatConfig) => {
  return (
    <ChatHeadlessProvider config={props.headless}>
      <ChatPopUp {...props.display} />
    </ChatHeadlessProvider>
  );
};

export default Chatbot;
