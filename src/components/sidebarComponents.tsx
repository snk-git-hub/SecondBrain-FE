import { YouTube } from "../icons/youtube";
import { Twitter } from "../icons/twitter";
import { SidebarItem } from "./sidebaritem";

// Custom icons that match the theme
const Icons = {
  AllContent: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14-4H5m14 8H5" />
    </svg>
  ),
  Favorites: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Recent: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Articles: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Videos: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  Images: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Settings: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
};

export function Sidebar() {
  const username = localStorage.getItem("username");
  
  return (
    <div className="h-screen w-64 fixed left-0 top-0 z-20 font-sans">
      {/* Backdrop with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/90 to-indigo-50/85 backdrop-blur-xl"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40"></div>
      
      {/* Border */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col">
        {/* Enhanced Header/Brand Section */}
        <div className="px-6 py-8 border-b border-white/30">
          <div className="flex items-center space-x-3">
            {/* Enhanced Logo */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-sm"></div>
              <div className="relative w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </div>
            
            {/* Enhanced Brand Text */}
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent tracking-tight">
                SECOND BRAIN
              </h1>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Knowledge Hub</p>
            </div>
          </div>
        </div>

        {/* Scrollable Navigation Content */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300/50 scrollbar-track-transparent px-4 py-6">
          {/* Platforms Section */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 px-3 mb-4">
              <div className="h-1 w-1 bg-blue-500 rounded-full"></div>
              <h2 className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                Platforms
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200/60 to-transparent"></div>
            </div>
            <nav className="space-y-2">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-sky-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <SidebarItem
                  text="Twitter"
                  icon={<Twitter className="w-5 h-5 text-blue-400 group-hover:text-blue-600 transition-colors" />}
                  className="relative bg-white/40 hover:bg-white/60 backdrop-blur-sm border border-white/30 hover:border-blue-300/50 rounded-xl transition-all duration-300 hover:shadow-md hover:scale-105 hover:text-blue-700 group"
                />
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <SidebarItem
                  text="YouTube"
                  icon={<YouTube className="w-5 h-5 text-red-400 group-hover:text-red-600 transition-colors" />}
                  className="relative bg-white/40 hover:bg-white/60 backdrop-blur-sm border border-white/30 hover:border-red-300/50 rounded-xl transition-all duration-300 hover:shadow-md hover:scale-105 hover:text-red-700 group"
                />
              </div>
            </nav>
          </div>

          {/* Quick Actions Section */}
        

          {/* Categories Section */}
          
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-white/30 p-4">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-2xl backdrop-blur-sm"></div>
            
            {/* User info */}
            <div className="relative bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center space-x-3">
                {/* Enhanced Avatar */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-sm"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg font-bold">
                      {username?.charAt(0)?.toUpperCase() || 'U'}
                    </span>
                  </div>
                  {/* Online indicator */}
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-emerald-500 border-2 border-white rounded-full shadow-sm">
                    <div className="h-full w-full bg-emerald-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* User details */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate group-hover:text-blue-700 transition-colors duration-200">
                    {username}
                  </p>
                  <p className="text-xs text-slate-600 truncate">
                    Manage your content
                  </p>
                </div>
                
                {/* Enhanced Settings Button */}
                <button className="relative h-10 w-10 bg-white/60 hover:bg-white/80 border border-white/40 hover:border-slate-300/50 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md group/btn">
                  <Icons.Settings />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}