import { cn } from '../utils/cn';

const pages = [
  { name: 'Bots', href: '#', current: false },
  { name: 'Salesforce Lead Gen', href: '#', current: false },
  { name: 'Widget', href: '#', current: true },
];

export default function Breadcrumbs() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center">
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <a
                href={page.href}
                className={cn('text-sm text-gray-900 hover:underline', !page.current && 'text-[#1564F9]')}
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
              {page.current === false && (
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
