import { Input } from './Input';
import { Switch } from './Switch';
import { usePageContext } from './utils/usePageContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from './Form';
import { ChatConfig } from '../types/config';

const ButtonSettings = ({ form }) => {
  const { chatConfig, setChatConfig } = usePageContext();

  return (
    <div className="flex flex-col divide-y">
      <FormField
        control={form.control}
        name="ctaLabel"
        render={({ field }) => (
          <FormItem className="flex justify-between items-center p-6">
            <div>
              <FormLabel className="text-lg">CTA Label</FormLabel>
              <FormDescription className="text-sm text-gray-500">Text to show next to chat button.</FormDescription>
            </div>
            <FormControl>
              <Input
                type="text"
                id="ctaLabel"
                placeholder="Add label here"
                className="text-md w-1/2"
                defaultValue={chatConfig.behavior.ctaLabel}
                value={form.value}
                onChange={(e) => {
                  setChatConfig((prev: ChatConfig) => ({
                    ...prev,
                    behavior: { ...prev.behavior, ctaLabel: e.target.value },
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
        name="showInitialMessagePopUp"
        render={({ field }) => (
          <FormItem className="flex justify-between items-center p-6">
            <div className="max-w-1/2">
              <FormLabel className="text-lg">Show Initial Message Pop Up</FormLabel>
              <FormDescription className="text-sm text-gray-500">
                Shows a small pop up with the bot's initial message.
              </FormDescription>
            </div>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={(e) => {
                  setChatConfig((prev: ChatConfig) => ({
                    ...prev,
                    behavior: { ...prev.behavior, showInitialMessagePopUp: e },
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
        name="showUnreadNotification"
        render={({ field }) => (
          <FormItem className="flex justify-between items-center p-6">
            <div className="max-w-1/2">
              <FormLabel className="text-lg">Show Unread Notification</FormLabel>
              <FormDescription className="text-sm text-gray-500">
                Adds notification icon for unread messages.
              </FormDescription>
            </div>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={(e) => {
                  setChatConfig((prev: ChatConfig) => ({
                    ...prev,
                    behavior: { ...prev.behavior, showUnreadNotification: e },
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

export default ButtonSettings;
