import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select';

const ChatbotPicker = () => {
  return (
    <Select defaultValue="salesforce-lead-gen">
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Select Chatbot" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="salesforce-lead-gen">salesforce-lead-gen</SelectItem>
        <SelectItem value="support-agent">support-agent</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ChatbotPicker;
