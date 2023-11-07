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
}

export const config = {
  headless: {
    botId: 'salesforce-lead-gen',
    apiKey: 'c4958314f662a3ccfaab5a5ad68bd084',
  },
  behavior: {
    title: "DJ's Bot",
    showRestartButton: true,
    ctaLabel: '',
    openOnLoad: true,
    showInitialMessagePopUp: false,
    showUnreadNotification: false,
    showFeedbackButtons: true,
  },
};
