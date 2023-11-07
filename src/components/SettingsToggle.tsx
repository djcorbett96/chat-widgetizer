import { useState } from 'react';
import { cn } from '../utils/cn';

const tabs = [
  { name: 'Chat Pop Up Settings', current: true },
  { name: 'Chat Button Settings', current: false },
];

export default function SettingsToggle() {
  const [settingsType, setSettingsType] = useState('popup');

  return (
    <div>
      <div className="hidden sm:block">
        <nav className="isolate flex divide-x divide-gray-200 rounded-lg border" aria-label="Tabs">
          <button
            className={cn(
              settingsType === 'popup'
                ? 'text-gray-900 bg-gray-100'
                : 'text-gray-600 hover:text-gray-700 hover:bg-gray-50',
              'rounded-l-lg',
              'group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-center font-medium focus:z-10 hover:cursor-pointer text-md'
            )}
            onClick={() => setSettingsType('popup')}
          >
            <span>Pop Up Settings</span>
          </button>
          <button
            className={cn(
              settingsType === 'button'
                ? 'text-gray-900 bg-gray-100'
                : 'text-gray-600 hover:text-gray-700 hover:bg-gray-50',
              'rounded-r-lg',
              'group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-center font-medium focus:z-10 hover:cursor-pointer text-md'
            )}
            onClick={() => setSettingsType('button')}
          >
            <span>Button Settings</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
