import '../index.css';
import { Button } from '../components/Button';
import { ShareIcon } from '../icons/Shareicon';
import { PlusIcon } from '../icons/PlusIcon';
import { Card } from '../components/Card';
import { CreateContentModel } from '../components/CreateContentModel';
import { useState } from 'react';
import { Sidebar } from '../components/sidebarComponents';
import { useContent } from '../hooks/useContent';
import { shareContent } from '../hooks/shareContent';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export function Dashboard() {
  const username = localStorage.getItem("username");

  const [modelOpen, setModelOpen] = useState(false);
  const [showLinkBox, setShowLinkBox] = useState(false);
  const { contentData, loading, error } = useContent();
  const { sharelink, loading: shareloading, error: shareerror } = shareContent();
  const [copied, setCopied] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 ml-64">
        {/* Enhanced Header with Glassmorphism */}
        <header className="bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm sticky top-0 z-20">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                    Dashboard
                  </h1>
                </div>
                <p className="text-slate-600 text-sm font-medium">
                  Manage and organize your digital workspace
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button
                  variant="secondary"
                  text="Share Workspace"
                  onClick={() => setShowLinkBox(true)}
                  startIcon={<ShareIcon />}
                  className="bg-white/60 hover:bg-white/80 border border-white/40 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 text-slate-700 font-medium"
                />
                <Button
                  variant="primary"
                  text="Add Content"
                  startIcon={<PlusIcon />}
                  onClick={() => setModelOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Enhanced Share Link Box */}
        {showLinkBox && (
          <div className="mx-8 mt-6 relative">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-2xl"></div>
              <div className="relative flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <ShareIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-1">Share Link</p>
                    <div className="text-blue-800 font-mono text-sm bg-white/60 px-3 py-2 rounded-lg border">
                      {shareloading ? (
                        <div className="flex items-center space-x-2">
                          <div className="h-3 w-3 bg-blue-500 rounded-full animate-bounce"></div>
                          <span>Generating link...</span>
                        </div>
                      ) : (
                        sharelink
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <CopyToClipboard text={sharelink} onCopy={() => setCopied(true)}>
                    <button className="px-4 py-2 bg-white/80 hover:bg-white text-blue-600 font-medium rounded-lg border border-blue-200/50 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md">
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </CopyToClipboard>
                  <button
                    className="px-4 py-2 bg-slate-100/80 hover:bg-slate-200/80 text-slate-600 font-medium rounded-lg transition-all duration-200"
                    onClick={() => setShowLinkBox(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
              {shareerror && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm font-medium">Error: {shareerror}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Welcome Section */}
        <div className="px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
              Welcome back, {username}
            </h2>
            <p className="text-lg text-slate-600">Your personal knowledge hub awaits</p>
          </div>

          {/* Enhanced Stats Section */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Total Content Card */}
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Total Content
                  </h3>
                  <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {contentData?.length || 0}
                  </p>
                  <p className="text-sm text-slate-500 mt-2">Active items</p>
                </div>
              </div>

              {/* Recent Activity Card */}
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="h-2 w-2 bg-amber-400 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Recent Activity
                  </h3>
                  <p className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {Math.max(contentData?.length || 0, 0)}
                  </p>
                  <p className="text-sm text-slate-500 mt-2">This week</p>
                </div>
              </div>

              {/* Storage Used Card */}
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Storage Used
                  </h3>
                  <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {((contentData?.length || 0) * 2.5).toFixed(1)}
                  </p>
                  <p className="text-sm text-slate-500 mt-2">MB of 1GB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Your Content Library</h2>
                <p className="text-slate-600">Organize and access your knowledge base</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-slate-500 bg-white/60 px-4 py-2 rounded-full border border-slate-200/50">
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  <span className="font-medium">{contentData?.length || 0} items</span>
                </div>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="flex items-center justify-center py-24">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="h-16 w-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
                    <div className="absolute inset-0 h-16 w-16 border-4 border-transparent border-t-indigo-400 rounded-full animate-spin mx-auto" style={{animationDelay: '0.3s'}}></div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-700 font-medium">Loading your content...</p>
                    <p className="text-slate-500 text-sm">This might take a moment</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm border border-red-200/50 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to load content</h3>
                      <p className="text-red-700 text-sm leading-relaxed">{error}</p>
                      <button className="mt-4 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 font-medium rounded-lg transition-colors duration-200">
                        Try Again
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Empty State */}
            {!loading && !error && (!contentData || contentData.length === 0) && (
              <div className="text-center py-20">
                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-32 w-32 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full"></div>
                  </div>
                  <div className="relative h-32 w-32 mx-auto text-slate-300 flex items-center justify-center">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-16 w-16">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-4 max-w-md mx-auto">
                  <h3 className="text-2xl font-semibold text-slate-900">Start building your knowledge base</h3>
                  <p className="text-slate-600 leading-relaxed">Create your first piece of content and begin organizing your digital workspace. Every great collection starts with a single item.</p>
                  <button 
                    onClick={() => setModelOpen(true)}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <PlusIcon className="h-5 w-5" />
                    <span>Create First Content</span>
                  </button>
                </div>
              </div>
            )}

            {/* Content Grid */}
            {!loading && !error && contentData && contentData.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {contentData.map((content, index) => (
                  <div 
                    key={index} 
                    className="group transform hover:scale-105 transition-all duration-300 hover:z-10 relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                    <div className="relative">
                      <Card
                        type={content.type}
                        link={content.link}
                        title={content.title}
                        className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden group-hover:bg-white/90"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modelOpen && (
        <CreateContentModel
          open={modelOpen}
          onClose={() => setModelOpen(false)}
        />
      )}
    </div>
  );
}