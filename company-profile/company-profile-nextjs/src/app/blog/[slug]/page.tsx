import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug } from '../../lib/blogData';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>{post.title}</h1>
          <p className='text-xl text-blue-100 mb-4'>{post.excerpt}</p>
          <div className='flex items-center justify-center space-x-4 text-blue-100'>
            <span>By {post.author}</span>
            <span>•</span>
            <span>{formatDate(post.publishDate)}</span>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className='py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Tags */}
          <div className='flex flex-wrap gap-2 mb-8'>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className='prose prose-lg max-w-none'>
            <div className='whitespace-pre-line text-gray-700 leading-relaxed'>
              {post.content}
            </div>
          </div>

          {/* Navigation */}
          <div className='mt-12 pt-8 border-t border-gray-200'>
            <div className='flex justify-between items-center'>
              <Link
                href='/blog'
                className='text-blue-600 hover:text-blue-800 font-medium transition-colors'
              >
                ← Back to Blog
              </Link>
              <Link
                href='/blog/create'
                className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'
              >
                Create New Post
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
