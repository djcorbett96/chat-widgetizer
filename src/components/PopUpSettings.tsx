import { Input } from './Input';
import { Switch } from './Switch';
import { usePageContext } from './utils/usePageContext';
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from './Form';
import { ChatConfig } from '../types/config';

const PopUpSettings = ({ form }) => {
  const { chatConfig, setChatConfig } = usePageContext();

  return (
    <div className="flex flex-col divide-y">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem className="flex justify-between items-center p-6">
            <div>
              <FormLabel className="text-lg">Panel Title</FormLabel>
              <FormDescription className="text-sm text-gray-500">Title appearing in panel header.</FormDescription>
            </div>
            <FormControl>
              <Input
                type="text"
                id="title"
                placeholder="Add title here"
                className="text-md w-1/2"
                defaultValue={chatConfig.behavior.title}
                value={form.value}
                onChange={(e) => {
                  setChatConfig((prev: ChatConfig) => ({
                    ...prev,
                    behavior: { ...prev.behavior, title: e.target.value },
                  }));
                  field.onChange(e.target.value);
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="showRestartButton"
        render={({ field }) => (
          <FormItem className="flex justify-between items-center p-6">
            <div className="max-w-1/2">
              <FormLabel className="text-lg">Show Restart Button</FormLabel>
              <FormDescription className="text-sm text-gray-500">
                Adds button in panel header to restart the conversation.
              </FormDescription>
            </div>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={(e) => {
                  setChatConfig((prev: ChatConfig) => ({
                    ...prev,
                    behavior: { ...prev.behavior, showRestartButton: e },
                  }));
                  field.onChange(e);
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="openOnLoad"
        render={({ field }) => (
          <FormItem className="flex justify-between items-center p-6">
            <div className="max-w-1/2">
              <FormLabel className="text-lg">Open On Load</FormLabel>
              <FormDescription className="text-sm text-gray-500">
                Chat panel opens automatically when the page loads.
              </FormDescription>
            </div>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={(e) => {
                  setChatConfig((prev: ChatConfig) => ({
                    ...prev,
                    behavior: { ...prev.behavior, openOnLoad: e },
                  }));
                  field.onChange(e);
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="showFeedbackButtons"
        render={({ field }) => (
          <FormItem className="flex justify-between items-center p-6">
            <div className="max-w-1/2">
              <FormLabel className="text-lg">Show Feedback Buttons</FormLabel>
              <FormDescription className="text-sm text-gray-500">
                Thumbs up/down buttons appear while hovering over a message to provide feedback.
              </FormDescription>
            </div>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={(e) => {
                  setChatConfig((prev: ChatConfig) => ({
                    ...prev,
                    behavior: { ...prev.behavior, showFeedbackButtons: e },
                  }));
                  field.onChange(e);
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default PopUpSettings;
