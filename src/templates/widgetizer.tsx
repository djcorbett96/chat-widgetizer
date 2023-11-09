import '../index.css';
import { ChatConfig } from '../types/config';
import { GetHeadConfig, GetPath, HeadConfig, TemplateProps, TemplateRenderProps } from '@yext/pages';
import Chatbot from '../components/Chatbot';
import Wrapper from '../components/Wrapper';
import SettingsToggle from '../components/SettingsToggle';
import ChatbotPicker from '../components/ChatbotPicker';
import PopUpSettings from '../components/PopUpSettings';
import ButtonSettings from '../components/ButtonSettings';
import { useState } from 'react';
import { PageContextProvider } from '../components/utils/usePageContext';
import Breadcrumbs from '../components/Breadcrumbs';
import ChatbotButton from '../components/ChatbotButton';
import { ChatHeadlessProvider } from '@yext/chat-headless-react';
import ChatbotButtonWithMessage from '../components/ChatbotButtonWithMessage';
import ThemeSettings from '../components/ThemeSettings';
import { StarIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Form } from '../components/Form';
import { toast } from '../components/UseToast';

export const getPath: GetPath<TemplateProps> = () => {
  return 'widgetizer';
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (): HeadConfig => {
  return {
    title: 'Chat Widgetizer',
    charset: 'UTF-8',
    viewport: 'width=device-width, initial-scale=1',
  };
};

const defaultConfig: ChatConfig = {
  headless: {
    botId: 'salesforce-lead-gen',
    apiKey: 'c4958314f662a3ccfaab5a5ad68bd084',
  },
  behavior: {
    title: 'Bot Title',
    showRestartButton: true,
    ctaLabel: '',
    openOnLoad: true,
    showInitialMessagePopUp: false,
    showUnreadNotification: false,
    showFeedbackButtons: true,
  },
  theme: {
    panelButtonColor: '#4F46E5',
    panelHeaderTextColor: '#FFFFFF',
    botMessageBackgroundColor: '#f1f5f9',
    botMessageTextColor: '#0F172A',
    userMessageBackgroundColor: '#4F46E5',
    userMessageTextColor: '#FFFFFF',
    notificationIconColor: '#d32f2f',
    ctaLabelColor: '#4F46E5',
  },
};

export default function Widgetizer({ document }: TemplateProps) {
  const [previewType, setPreviewType] = useState('popup');
  const [settingsType, setSettingsType] = useState('theme');
  const [chatConfig, setChatConfig] = useState<ChatConfig>(defaultConfig);

  const FormSchema = z.object({
    title: z.string(),
    showRestartButton: z.boolean(),
    openOnLoad: z.boolean(),
    showFeedbackButtons: z.boolean(),
    panelButtonColor: z.string(),
    panelHeaderTextColor: z.string(),
    botMessageBackgroundColor: z.string(),
    botMessageTextColor: z.string(),
    userMessageBackgroundColor: z.string(),
    userMessageTextColor: z.string(),
    notificationIconColor: z.string(),
    ctaLabelColor: z.string(),
    ctaLabel: z.string(),
    showInitialMessagePopUp: z.boolean(),
    showUnreadNotification: z.boolean(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      ctaLabel: chatConfig.behavior.ctaLabel,
      showInitialMessagePopUp: chatConfig.behavior.showInitialMessagePopUp,
      showUnreadNotification: chatConfig.behavior.showUnreadNotification,
      title: chatConfig.behavior.title,
      showRestartButton: chatConfig.behavior.showRestartButton,
      openOnLoad: chatConfig.behavior.openOnLoad,
      showFeedbackButtons: chatConfig.behavior.showFeedbackButtons,
      panelButtonColor: chatConfig.theme.panelButtonColor,
      panelHeaderTextColor: chatConfig.theme.panelHeaderTextColor,
      botMessageBackgroundColor: chatConfig.theme.botMessageBackgroundColor,
      botMessageTextColor: chatConfig.theme.botMessageTextColor,
      userMessageBackgroundColor: chatConfig.theme.userMessageBackgroundColor,
      userMessageTextColor: chatConfig.theme.userMessageTextColor,
      notificationIconColor: chatConfig.theme.notificationIconColor,
      ctaLabelColor: chatConfig.theme.ctaLabelColor,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const {
      title,
      showRestartButton,
      ctaLabel,
      openOnLoad,
      showInitialMessagePopUp,
      showUnreadNotification,
      showFeedbackButtons,
      panelButtonColor,
      panelHeaderTextColor,
      botMessageBackgroundColor,
      botMessageTextColor,
      userMessageBackgroundColor,
      userMessageTextColor,
      notificationIconColor,
      ctaLabelColor,
    } = data;
    const widgetConfig = {
      id: 'marketingBot',
      name: 'Marketing Bot',
      $schema: 'https://schema.yext.com/config/platform/chat/widget/v1',
      headless: { ...defaultConfig.headless },
      behavior: {
        title,
        showRestartButton,
        ctaLabel,
        openOnLoad,
        showInitialMessagePopUp,
        showUnreadNotification,
        showFeedbackButtons,
      },
      theme: {
        panelButtonColor,
        panelHeaderTextColor,
        botMessageBackgroundColor,
        botMessageTextColor,
        userMessageBackgroundColor,
        userMessageTextColor,
        notificationIconColor,
        ctaLabelColor,
      },
    };
    toast({
      title: 'Your widget configuration:',
      description: (
        <pre className="rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(widgetConfig, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <PageContextProvider
      value={{ settingsType, setSettingsType, previewType, setPreviewType, chatConfig, setChatConfig }}
    >
      <Wrapper>
        <ChatHeadlessProvider config={chatConfig.headless}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 grid-rows-5 h-screen">
                <div className="p-4 flex flex-col justify-around border-b row-span-1 col-span-2 px-10">
                  <Breadcrumbs />
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-3">
                      <h2 className="text-3xl font-semibold flex items-center gap-2">
                        Widget Configuration <StarIcon className="text-gray-400" />
                      </h2>
                      <p className="w-2/3 text-sm">
                        Control the behavior and appearance of your chat widget. Once configured, an embeddable code
                        snippet will be generated based on your chosen settings to make integration a breeze.
                      </p>
                    </div>
                    <Button variant="default" type="submit">
                      Save Configuration
                    </Button>
                  </div>
                  {/* <div className="flex gap-2 items-center">
                    <span className="font-semibold">Chatbot:</span>
                    <ChatbotPicker />
                  </div> */}
                </div>
                <div className="py-4 px-10 row-span-4 col-span- flex flex-col gap-2 overflow-scroll">
                  <div className="flex flex-col border rounded-md">
                    <SettingsToggle />
                    {settingsType === 'theme' && <ThemeSettings form />}
                    {settingsType === 'popup' && <PopUpSettings form />}
                    {settingsType === 'button' && <ButtonSettings form />}
                  </div>
                </div>
                <div className="bg-gray-100 p-12 row-span-4 col-span-1 flex flex-col relative gap-4">
                  <div className="h-full">
                    {previewType === 'popup' && <Chatbot {...chatConfig} />}
                    {previewType === 'button' && chatConfig.behavior.showInitialMessagePopUp === false && (
                      <ChatbotButton {...chatConfig} />
                    )}
                    {previewType === 'button' && chatConfig.behavior.showInitialMessagePopUp === true && (
                      <ChatbotButtonWithMessage {...chatConfig} />
                    )}
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </ChatHeadlessProvider>
      </Wrapper>
    </PageContextProvider>
  );
}
