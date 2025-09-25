import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import React, { useState } from "react";
import { PostData, Post } from "@/interfaces"
import PostModal from "@/components/common/PostModal";
export default function HomePage() {
const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (post: PostData) => {
    const newPost: Post = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      ...post,
    };
    // add newest posts to the top
    setPosts((prev) => [newPost, ...prev]);
  };


  return (
    <>
        <Header />
        <h1 className="text-center h-min text-red-500">
          Welcome to Home page 
        </h1>
        <Card
        title="BMW"
        content="This is BMW" />

        <Card
        title="AirbnB"
        content="This is airbnb" />

<div className="p-8 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Home</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          New Post
        </button>
      </div>

      <PostModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet — create one!</p>
        ) : (
          posts.map((p) => (
            <article key={p.id} className="border rounded p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-semibold text-lg">{p.title}</h2>
                  <p className="text-sm text-gray-500">
                    {new Date(p.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
              <p className="mt-2">{p.content}</p>
            </article>
          ))
        )}
      </div>
    </div>

    </>
  );
}