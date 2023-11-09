export interface ChatConfig {
  headless: {
    apiKey: string;
    botId: string;
  };
  behavior: {
    title: string;
    showRestartButton: boolean;
    ctaLabel: string;
    openOnLoad: boolean;
    showInitialMessagePopUp: boolean;
    showUnreadNotification: boolean;
    showFeedbackButtons: boolean;
  };
  theme: {
    panelButtonColor: string;
    panelHeaderTextColor: string;
    botMessageBackgroundColor: string;
    botMessageTextColor: string;
    userMessageBackgroundColor: string;
    userMessageTextColor: string;
  };
}
