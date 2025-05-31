import React, { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModel({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    
    if (!title || !link) return;
    
    setIsSubmitting(true);
    try {
      console.log({ title, link, type });
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        {
          link,
          title,
          type,
        },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      window.location.reload();
    } catch (error) {
      console.error('Error adding content:', error);
      setIsSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Enhanced Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/40 to-indigo-900/60 backdrop-blur-sm"></div>
      
      {/* Modal Container with Glassmorphism */}
      <div className="relative z-10 w-full max-w-md">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl transform rotate-1"></div>
        
        {/* Main Modal */}
        <div className="relative bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          {/* Header with Gradient */}
          <div className="relative bg-gradient-to-r from-blue-50/80 to-indigo-50/80 px-8 py-6 border-b border-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-indigo-100/20"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Add New Content
                  </h2>
                  <p className="text-sm text-slate-600 font-medium">
                    Expand your knowledge base
                  </p>
                </div>
              </div>
              
              <button 
                onClick={onClose} 
                className="h-10 w-10 bg-white/60 hover:bg-white/80 rounded-xl flex items-center justify-center transition-all duration-200 group border border-white/40 shadow-sm hover:shadow-md"
              >
                <CrossIcon className="h-5 w-5 text-slate-600 group-hover:text-slate-800 transition-colors duration-200" />
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="px-8 py-8 space-y-8">
            {/* Form Fields */}
            <div className="space-y-6">
              {/* Title Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Content Title
                </label>
                <div className="relative">
                  <Input 
                    reference={titleRef} 
                    placeholder="Enter a descriptive title" 
                    className="w-full bg-white/60 border border-white/40 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm transition-all duration-200 shadow-sm hover:shadow-md text-slate-900 placeholder-slate-500"
                  />
                </div>
              </div>

              {/* Link Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Content Link
                </label>
                <div className="relative">
                  <Input 
                    reference={linkRef} 
                    placeholder="https://example.com" 
                    className="w-full bg-white/60 border border-white/40 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm transition-all duration-200 shadow-sm hover:shadow-md text-slate-900 placeholder-slate-500"
                  />
                </div>
              </div>

              {/* Type Selection */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-slate-700">
                  Content Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {/* YouTube Option */}
                  <div 
                    className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${
                      type === ContentType.Youtube 
                        ? 'ring-2 ring-blue-500/50 shadow-lg' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setType(ContentType.Youtube)}
                  >
                    <div className={`absolute inset-0 ${
                      type === ContentType.Youtube 
                        ? 'bg-gradient-to-r from-red-500/10 to-red-600/10' 
                        : 'bg-gradient-to-r from-slate-100/50 to-slate-200/50'
                    }`}></div>
                    <div className="relative bg-white/60 backdrop-blur-sm border border-white/40 p-6 text-center">
                      <div className={`h-12 w-12 mx-auto mb-3 rounded-xl flex items-center justify-center ${
                        type === ContentType.Youtube
                          ? 'bg-gradient-to-r from-red-500 to-red-600'
                          : 'bg-gradient-to-r from-slate-400 to-slate-500'
                      }`}>
                        <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <h3 className={`font-semibold ${
                        type === ContentType.Youtube ? 'text-red-700' : 'text-slate-700'
                      }`}>
                        YouTube
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">Video content</p>
                    </div>
                  </div>

                  {/* Twitter Option */}
                  <div 
                    className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${
                      type === ContentType.Twitter 
                        ? 'ring-2 ring-blue-500/50 shadow-lg' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setType(ContentType.Twitter)}
                  >
                    <div className={`absolute inset-0 ${
                      type === ContentType.Twitter 
                        ? 'bg-gradient-to-r from-blue-500/10 to-blue-600/10' 
                        : 'bg-gradient-to-r from-slate-100/50 to-slate-200/50'
                    }`}></div>
                    <div className="relative bg-white/60 backdrop-blur-sm border border-white/40 p-6 text-center">
                      <div className={`h-12 w-12 mx-auto mb-3 rounded-xl flex items-center justify-center ${
                        type === ContentType.Twitter
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                          : 'bg-gradient-to-r from-slate-400 to-slate-500'
                      }`}>
                        <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </div>
                      <h3 className={`font-semibold ${
                        type === ContentType.Twitter ? 'text-blue-700' : 'text-slate-700'
                      }`}>
                        Twitter
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">Social content</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-white/60 hover:bg-white/80 border border-white/40 backdrop-blur-sm text-slate-700 font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Cancel
              </button>
              <button
                onClick={addContent}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-blue-400 disabled:to-indigo-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Adding...</span>
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>Add Content</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}