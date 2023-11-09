import { useState } from 'react';
import { cn } from '../utils/cn';
import Logo from './Logo';
import { Toaster } from './Toaster';
import { ArrowLeft, MessageCircle, Search } from 'lucide-react';

export interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const [selectedNavItem, setSelectedNavItem] = useState('Marketing');

  return (
    <div className="h-screen">
      <div className="fixed inset-y-0 z-50 flex w-72 flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6">
          <div className="flex h-16 shrink-0 items-center gap-4">
            <div className="w-10 h-10">
              <Logo />
            </div>
            <h1 className="text-white text-lg font-semibold">Chat Visual Editor</h1>
          </div>
          <nav className="flex flex-1 flex-col gap-8">
            <div className="text-gray-400 text-sm flex items-center gap-5 border border-gray-400 p-2 rounded-full">
              <Search className="w-4" /> Quick Find
            </div>
            <div className="text-gray-400 flex items-center gap-5">
              <ArrowLeft className="w-5" /> Back
            </div>
            <div className="text-gray-400 flex flex-col gap-6">
              <div className="text-white font-bold flex items-center gap-5">
                <MessageCircle /> Salesforce Lead Gen
              </div>
              <div className="text-sm flex flex-col gap-3 pl-12">
                <span className="text-white">Configuration</span>
                <span className="pl-2">Goals</span>
                <span className="pl-2">General Settings</span>
                <span className="pl-2">Edit as JSON</span>
              </div>
              <div className="text-sm flex flex-col gap-3 pl-12">
                <span className="text-white">Anaytics and Logging</span>
                <span className="pl-2">Response Logs</span>
              </div>
              <div className="text-sm flex flex-col gap-3 pl-12">
                <span className="text-white">Deployment</span>
                <span className="pl-2 bg-gray-800 text-white font-semibold rounded-md p-2">Widgets</span>
              </div>
            </div>
            {/* <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li className="flex flex-col gap-2">
                <a
                  href="#"
                  className={cn(
                    selectedNavItem === 'All'
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800',
                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                  )}
                  onClick={() => setSelectedNavItem('All')}
                >
                  All Widgets
                </a>
                <ul className="pl-4 space-y-2">
                  <li>
                    <a
                      href="#"
                      className={cn(
                        selectedNavItem === 'Marketing'
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                      onClick={() => setSelectedNavItem('Marketing')}
                    >
                      Marketing Bot
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={cn(
                        selectedNavItem === 'Support'
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                      onClick={() => setSelectedNavItem('Support')}
                    >
                      Support Bot
                    </a>
                  </li>
                </ul>
              </li>
            </ul> */}
          </nav>
        </div>
      </div>

      <main className="pl-72 h-screen">{children}</main>
      <Toaster />
    </div>
  );
};

export default Wrapper;
