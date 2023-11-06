import '../index.css';
import { config } from '../config';
import { GetHeadConfig, GetPath, HeadConfig, TemplateProps, TemplateRenderProps } from '@yext/pages';
import Chatbot from '../components/chatbot';

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
  return <Chatbot {...config} />;
}
