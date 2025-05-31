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
  const [modelOpen, setModelOpen] = useState(false);
  const [showLinkBox, setShowLinkBox] = useState(false);
  const { contentData, loading, error } = useContent();
  const { sharelink, loading: shareloading, error: shareerror } = shareContent();
  const [copied, setCopied] = useState(false);
  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white h-17 border-b border-gray-200 px-6 py-4 sticky top-0 z-10 ">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-sm mt-1 font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 text-sm mt-1">
                Manage and organize your content
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant="secondary"
                text="Share"
                onClick={() => setShowLinkBox(true)}
                startIcon={<ShareIcon />}
                className="hover:bg-white-100 transition-colors"
              />

              <Button
                variant="primary"
                text="Add Content"
                startIcon={<PlusIcon />}
                onClick={() => setModelOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 transition-colors shadow-md"
              />
            </div>
          </div>
        </header>

        {/* Share Link Box */}
        {showLinkBox && (
          <div className="m-6 p-4 border border-blue-200 rounded-md bg-blue-50">
            <div className="flex justify-between items-center">
              <div className="text-blue-800 font-medium">
                {shareloading ? 'Generating link...' : sharelink}
              </div>
              <div>

                <CopyToClipboard text={sharelink} onCopy={() => setCopied(true)}>
                  <button className="text-sm text-blue-600 underline ml-4 hover:text-blue-800 hover:underline hover:font-medium transition-colors duration-200">
                    Copy
                  </button>
                </CopyToClipboard>



                <button
                  className="text-sm text-blue-600 underline ml-4"
                  onClick={() => setShowLinkBox(false)}
                >
                  Close
                </button>
              </div>
            </div>
            {shareerror && (
              <p className="text-red-600 text-sm mt-2">Error: {shareerror}</p>
            )}
          </div>
        )}

        {/* Content  */}
        <main className="p-6">
          {/* Stats */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-white-200">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Total Content
                </h3>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {contentData?.length || 0}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-white-200">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  This Month
                </h3>
                <p className="text-3xl font-bold text-black-600 mt-2">+12</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-white-200">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Status
                </h3>
                <p className="text-3xl font-bold text-black-600 mt-2">Active</p>
              </div>
            </div>
          </div>

          {/* Content*/}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Your Content</h2>
              <div className="text-sm text-gray-500">
                {contentData?.length || 0} items
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="flex items-center justify-center py-12">
                <div className="flex items-center space-x-3">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                  <p className="text-gray-600">Loading content...</p>
                </div>
              </div>
            )}

            {/* when  Error !!!!!!!!!!!*/}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div className="ml-3">
                    <p className="text-red-800 font-medium">Error loading content</p>
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* when Empty!!!!!!!! */}
            {!loading && !error && (!contentData || contentData.length === 0) && (
              <div className="text-center py-12">
                <div className="mx-auto h-24 w-24 text-gray-300 mb-4">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No content yet</h3>
                <p className="text-gray-600 mb-6">Get started by creating your first piece of content.</p>
              </div>
            )}

            {/* Content Cards  */}
            {!loading && !error && contentData && contentData.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {contentData.map((content, index) => (
                  <div key={index} className="transform hover:scale-105 transition-transform duration-200">
                    <Card
                      type={content.type}
                      link={content.link}
                      title={content.title}
                      className="h-full shadow-sm hover:shadow-md transition-shadow duration-200"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
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
