import { Input } from './Input';
import { usePageContext } from './utils/usePageContext';
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from './Form';
import { ChatConfig } from '../types/config';
import { styleUpdater } from '../utils/styleUpdater';

const ThemeSettings = ({ form }) => {
  const { chatConfig, setChatConfig } = usePageContext();

  return (
    <div className="flex flex-col divide-y">
      <FormField
        control={form.control}
        name="panelButtonColor"
        render={({ field }) => (
          <FormItem className="flex justify-between items-center p-6">
            <div className="w-2/3">
              <FormLabel className="text-lg">Panel & Button Color</FormLabel>
              <FormDescription className="text-sm text-gray-500">
                Adjust the background color of the chat panel header and chat button.
              </FormDescription>
            </div>
            <FormControl>
              <Input
                type="color"
                id="panelButtonColor"
                className="text-md w-[100px] h-[50px]"
                defaultValue={chatConfig.theme.panelButtonColor}
                onChange={(e) => {
                  setChatConfig((prev: ChatConfig) => ({
                    ...prev,
                    theme: { ...prev.theme, panelButtonColor: e.target.value },
                  }));
                  styleUpdater('--panelButtonColor', e.target.value);
                  field.onChange(e.target.value);
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="panelHeaderTextColor"
        render={({ field }) => (
          <FormItem className="flex justify-between items-center p-6">
            <div className="w-2/3">
              <FormLabel className="text-lg">Panel Header Text Color</FormLabel>
              <FormDescription className="text-sm text-gray-500">
                Adjust the text color of the chat panel header.
              </FormDescription>
            </div>
            <FormControl>
              <Input
                type="color"
                id="panelHeaderTextColor"
                className="text-md w-[100px] h-[50px]"
                defaultValue={chatConfig.theme.panelHeaderTextColor}
                onChange={(e) => {
                  setChatConfig((prev: ChatConfig) => ({
                    ...prev,
                    theme: { ...prev.theme, panelHeaderTextColor: e.target.value },
                  }));
                  styleUpdater('--panelHeaderTextColor', e.target.value);
                  field.onChange(e.target.value);
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="botMessageBackgroundColor"
        render={({ field }) => (
          <FormItem className="flex justify-between items-center p-6">
            <div className="w-2/3">
              <FormLabel className="text-lg">Bot Message Background Color</FormLabel>
              <FormDescription className="text-sm text-gray-500">
                Adjust the background color of the bot message bubble.
              </FormDescription>
            </div>
            <FormControl>
              <Input
                type="color"
                id="botMessageBackgroundColor"
                className="text-md w-[100px] h-[50px]"
                defaultValue={chatConfig.theme.botMessageBackgroundColor}
                onChange={(e) => {
                  setChatConfig((prev: ChatConfig) => ({
                    ...prev,
                    theme: { ...prev.theme, botMessageBackgroundColor: e.target.value },
                  }));
                  styleUpdater('--botMessageBackgroundColor', e.target.value);
                  field.onChange(e.target.value);
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="botMessageTextColor"
        render={({ field }) => (
          <FormItem className="flex justify-between items-center p-6">
            <div className="w-2/3">
              <FormLabel className="text-lg">Bot Message Text Color</FormLabel>
              <FormDescription className="text-sm text-gray-500">
                Adjust the text color of the bot message bubble.
              </FormDescription>
            </div>
            <FormControl>
              <Input
                type="color"
                id="botMessageTextColor"
                className="text-md w-[100px] h-[50px]"
                defaultValue={chatConfig.theme.botMessageTextColor}
                onChange={(e) => {
                  setChatConfig((prev: ChatConfig) => ({
                    ...prev,
                    theme: { ...prev.theme, botMessageTextColor: e.target.value },
                  }));
                  styleUpdater('--botMessageTextColor', e.target.value);
                  field.onChange(e.target.value);
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="userMessageBackgroundColor"
        render={({ field }) => (
          <FormItem className="flex justify-between items-center p-6">
            <div className="w-2/3">
              <FormLabel className="text-lg">User Message Background Color</FormLabel>
              <FormDescription className="text-sm text-gray-500">
                Adjust the background color of the user message bubble.
              </FormDescription>
            </div>
            <FormControl>
              <Input
                type="color"
                id="userMessageBackgroundColor"
                className="text-md w-[100px] h-[50px]"
                defaultValue={chatConfig.theme.userMessageBackgroundColor}
                onChange={(e) => {
                  setChatConfig((prev: ChatConfig) => ({
                    ...prev,
                    theme: { ...prev.theme, userMessageBackgroundColor: e.target.value },
                  }));
                  styleUpdater('--userMessageBackgroundColor', e.target.value);
                  field.onChange(e.target.value);
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="userMessageTextColor"
        render={({ field }) => (
          <FormItem className="flex justify-between items-center p-6">
            <div className="w-2/3">
              <FormLabel className="text-lg">User Message Text Color</FormLabel>
              <FormDescription className="text-sm text-gray-500">
                Adjust the text color of the user message bubble.
              </FormDescription>
            </div>
            <FormControl>
              <Input
                type="color"
                id="userMessageTextColor"
                className="text-md w-[100px] h-[50px]"
                defaultValue={chatConfig.theme.userMessageTextColor}
                onChange={(e) => {
                  setChatConfig((prev: ChatConfig) => ({
                    ...prev,
                    theme: { ...prev.theme, userMessageTextColor: e.target.value },
                  }));
                  styleUpdater('--userMessageTextColor', e.target.value);
                  field.onChange(e.target.value);
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="notificationIconColor"
        render={({ field }) => (
          <FormItem className="flex justify-between items-center p-6">
            <div className="w-2/3">
              <FormLabel className="text-lg">Notification Icon Color</FormLabel>
              <FormDescription className="text-sm text-gray-500">
                Adjust the background color of the unread notification icon.
              </FormDescription>
            </div>
            <FormControl>
              <Input
                type="color"
                id="notificationIconColor"
                className="text-md w-[100px] h-[50px]"
                defaultValue={chatConfig.theme.notificationIconColor}
                onChange={(e) => {
                  setChatConfig((prev: ChatConfig) => ({
                    ...prev,
                    theme: { ...prev.theme, notificationIconColor: e.target.value },
                  }));
                  styleUpdater('--notificationIconColor', e.target.value);
                  field.onChange(e.target.value);
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="ctaLabelColor"
        render={({ field }) => (
          <FormItem className="flex justify-between items-center p-6">
            <div className="w-2/3">
              <FormLabel className="text-lg">CTA Label Color</FormLabel>
              <FormDescription className="text-sm text-gray-500">
                Adjust the text color of the button CTA label.
              </FormDescription>
            </div>
            <FormControl>
              <Input
                type="color"
                id="ctaLabelColor"
                className="text-md w-[100px] h-[50px]"
                defaultValue={chatConfig.theme.ctaLabelColor}
                onChange={(e) => {
                  setChatConfig((prev: ChatConfig) => ({
                    ...prev,
                    theme: { ...prev.theme, ctaLabelColor: e.target.value },
                  }));
                  styleUpdater('--ctaLabelColor', e.target.value);
                  field.onChange(e.target.value);
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default ThemeSettings;
