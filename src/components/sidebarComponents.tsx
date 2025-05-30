import { YouTube } from "../icons/youtube";
import { Twitter } from "../icons/twitter";
import { SidebarItem } from "./sidebaritem";

export function Sidebar() {
  return (
    <div className="h-screen bg-white border-r border-gray-200 w-64 fixed left-0 top-0 shadow-lg z-20">
      {/* Header/Brand Section */}
      <div className="h-17 bg-gradient-to-r flex items-center justify-center border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h1 className="text-black font-bold text-lg tracking-wide">
            SECOND BRAIN
          </h1>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="pt-6 px-4">
        {/* Main Navigation */}
        <div className="mb-8">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 px-3">
            Platforms
          </h2>
          <nav className="space-y-1">
            <SidebarItem
              text="Twitter"
              icon={<Twitter />}
              className="hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
            />
            <SidebarItem
              text="YouTube"
              icon={<YouTube />}
              className="hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
            />
          </nav>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 px-3">
            Quick Actions
          </h2>
          <nav className="space-y-1">
            <SidebarItem
              text="All Content"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-4H5m14 8H5" />
                </svg>
              }
              className="hover:bg-gray-50 transition-colors duration-200"
            />
            <SidebarItem
              text="Favorites"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
              className="hover:bg-pink-50 hover:text-pink-700 transition-colors duration-200"
            />
            <SidebarItem
              text="Recent"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              className="hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
            />
          </nav>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 px-3">
            Categories
          </h2>
          <nav className="space-y-1">
            <SidebarItem
              text="Articles"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              className="hover:bg-gray-50 transition-colors duration-200"
            />
            <SidebarItem
              text="Videos"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              }
              className="hover:bg-gray-50 transition-colors duration-200"
            />
            <SidebarItem
              text="Images"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              className="hover:bg-gray-50 transition-colors duration-200"
            />
          </nav>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">U</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">User Profile</p>
            <p className="text-xs text-gray-500 truncate">Manage your content</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}