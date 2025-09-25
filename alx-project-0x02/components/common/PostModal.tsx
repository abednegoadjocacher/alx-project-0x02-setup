"use client";

import React, { useEffect, useRef, useState } from "react";
import { PostModalProps} from "@/interfaces";


const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const initialFocusRef = useRef<HTMLInputElement | null>(null);

  // Reset inputs and focus the title when modal opens
  useEffect(() => {
    if (isOpen) {
      setTitle("");
      setContent("");
      setError("");
      // small timeout to ensure element is mounted before focus
      setTimeout(() => initialFocusRef.current?.focus(), 0);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError("Please provide both a title and content.");
      return;
    }
    onSubmit({ title: title.trim(), content: content.trim() });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 z-10">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold text-black">Create a Post</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-gray-600 hover:text-gray-900"
            type="button"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4">
          {error && <div className="text-red-600 mb-2">{error}</div>}

          <label className="block mb-3">
            <span className="text-sm font-medium text-black">Title</span>
            <input
              ref={initialFocusRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border rounded text-black px-3 py-2"
              placeholder="Enter a title"
              type="text"
              name="title"
            />
          </label>

          <label className="block mb-4">
            <span className="text-sm font-medium text-black">Content</span>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 block w-full text-black border rounded px-3 py-2 min-h-[120px]"
              placeholder="Write your post..."
              name="content"
            />
          </label>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
