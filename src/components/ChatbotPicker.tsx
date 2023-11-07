import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select';

const ChatbotPicker = () => {
  return (
    <Select defaultValue="lead-gen">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Chatbot" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="lead-gen">lead-gen</SelectItem>
        <SelectItem value="support-agent">support-agent</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ChatbotPicker;
