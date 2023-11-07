import '../index.css';
import { config } from '../config';
import { GetHeadConfig, GetPath, HeadConfig, TemplateProps, TemplateRenderProps } from '@yext/pages';
import Chatbot from '../components/Chatbot';
import Wrapper from '../components/Wrapper';
import SettingsToggle from '../components/SettingsToggle';
import ChatbotPicker from '../components/ChatbotPicker';
import PopUpSettings from '../components/PopUpSettings';

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

export default function Widgetizer({ document }: TemplateProps) {
  return (
    <Wrapper>
      <div className="grid grid-cols-2 grid-rows-5 h-full">
        <div className="p-4 flex flex-col justify-between border-b row-span-1 col-span-2">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold">Widget Configuration</h2>
            <p className="w-2/3 text-sm">
              Control the behavior and appearance of your chat widget. Once configured, an embeddable code snippet will
              be generated based on your chosen settings to make integration a breeze.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-semibold">Chatbot:</span>
            <ChatbotPicker />
          </div>
        </div>
        <div className="p-4 row-span-4 col-span- flex flex-col gap-2">
          <SettingsToggle />
          <div className="border rounded-lg h-full">
            <PopUpSettings />
          </div>
        </div>
        <div className="bg-gray-100 p-12 row-span-4 col-span-1 flex flex-col relative gap-4">
          <div className="h-full">
            <Chatbot {...config} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
