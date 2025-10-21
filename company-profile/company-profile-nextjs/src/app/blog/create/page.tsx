'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { addBlogPost } from '@/lib/blogData';
import { getCurrentUser, isAuthenticated } from '@/lib/auth';

export default function CreateBlog() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    tags: '',
  });

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }

    const user = getCurrentUser();
    if (user) {
      setFormData((prev) => ({ ...prev, author: user.name }));
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const tags = formData.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag);
      const newPost = addBlogPost({
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        author: formData.author,
        publishDate: new Date().toISOString().split('T')[0],
        tags,
      });

      router.push(`/blog/${newPost.slug}`);
    } catch (error) {
      console.error('Error creating blog post:', error);
      alert('Failed to create blog post. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!isAuthenticated()) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <p className='text-gray-600 mb-4'>
            Please log in to create a blog post.
          </p>
          <button
            onClick={() => router.push('/login')}
            className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Create Blog Post
          </h1>
          <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
            Share your insights and knowledge with our community.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className='py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <form
            onSubmit={handleSubmit}
            className='bg-white rounded-lg shadow-lg p-8'
          >
            <div className='mb-6'>
              <label
                htmlFor='title'
                className='block text-gray-700 font-semibold mb-2'
              >
                Title *
              </label>
              <input
                type='text'
                id='title'
                name='title'
                value={formData.title}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Enter your blog post title'
              />
            </div>

            <div className='mb-6'>
              <label
                htmlFor='excerpt'
                className='block text-gray-700 font-semibold mb-2'
              >
                Excerpt *
              </label>
              <textarea
                id='excerpt'
                name='excerpt'
                value={formData.excerpt}
                onChange={handleChange}
                required
                rows={3}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Brief summary of your blog post'
              />
            </div>

            <div className='mb-6'>
              <label
                htmlFor='content'
                className='block text-gray-700 font-semibold mb-2'
              >
                Content *
              </label>
              <textarea
                id='content'
                name='content'
                value={formData.content}
                onChange={handleChange}
                required
                rows={10}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Write your blog post content here...'
              />
            </div>

            <div className='mb-6'>
              <label
                htmlFor='author'
                className='block text-gray-700 font-semibold mb-2'
              >
                Author
              </label>
              <input
                type='text'
                id='author'
                name='author'
                value={formData.author}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Your name'
              />
            </div>

            <div className='mb-8'>
              <label
                htmlFor='tags'
                className='block text-gray-700 font-semibold mb-2'
              >
                Tags
              </label>
              <input
                type='text'
                id='tags'
                name='tags'
                value={formData.tags}
                onChange={handleChange}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Enter tags separated by commas (e.g., React, JavaScript, Web Development)'
              />
              <p className='text-gray-500 text-sm mt-1'>
                Separate multiple tags with commas
              </p>
            </div>

            <div className='flex gap-4'>
              <button
                type='submit'
                disabled={isLoading}
                className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isLoading ? 'Creating...' : 'Create Blog Post'}
              </button>
              <button
                type='button'
                onClick={() => router.push('/blog')}
                className='border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
