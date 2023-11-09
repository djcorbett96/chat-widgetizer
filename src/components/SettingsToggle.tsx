import { cn } from '../utils/cn';
import { usePageContext } from './utils/usePageContext';

export default function SettingsToggle() {
  const { settingsType, setSettingsType, setPreviewType } = usePageContext();

  return (
    <div>
      <div className="hidden sm:block">
        <nav className="isolate flex divide-x divide-gray-200 rounded-md" aria-label="Tabs">
          <button
            className={cn(
              settingsType === 'theme'
                ? 'text-gray-900 cursor-auto'
                : 'text-gray-600 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer',
              'rounded-tl-m',
              'group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-center focus:z-10  text-md font-medium'
            )}
            onClick={() => {
              setSettingsType('theme');
            }}
            type="button"
          >
            <span>Theme</span>
          </button>
          <button
            className={cn(
              settingsType === 'popup'
                ? 'text-gray-900 cursor-auto'
                : 'text-gray-600 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer',
              'group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-center focus:z-10  text-md font-medium'
            )}
            onClick={() => {
              setSettingsType('popup');
              setPreviewType('popup');
            }}
            type="button"
          >
            <span>Pop Up Settings</span>
          </button>
          <button
            className={cn(
              settingsType === 'button'
                ? 'text-gray-900 cursor-auto'
                : 'text-gray-600 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer',
              'rounded-tr-md',
              'group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-center focus:z-10 text-md font-medium'
            )}
            onClick={() => {
              setSettingsType('button');
              setPreviewType('button');
            }}
            type="button"
          >
            <span>Button Settings</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
