'use client';

import Link from 'next/link';
import { useState } from 'react';
import { blogPosts, getAllTags } from '../../lib/blogData';
import { Header } from '@/components/header';
import { Subtitle, Title } from '../../components/ui/Typography';
import { Button } from '@/components/ui/button';

export default function BlogList() {
  const [selectedTag, setSelectedTag] = useState<string>('');

  const allTags = getAllTags();
  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className='pt-20 md:pt-24 lg:pt-32'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='text-center'>
            <Title>Blog List</Title>
            <Subtitle>
              Insights, trends, and expert advice on technology, design, and
              business innovation.
            </Subtitle>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className='pt-10 md:pt-20 lg:pt-20'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Filter Tags */}
          <div className='mb-12'>
            <div className='flex flex-wrap gap-4 justify-center'>
              <Button
                onClick={() => setSelectedTag('')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === ''
                    ? 'bg-primary inset-shadow-sm inset-shadow-white/100 dark:inset-shadow-black/80 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All Posts
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-primary inset-shadow-sm inset-shadow-white/100 dark:inset-shadow-black/80 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className='bg-base-50 dark:bg-base-950 border border-base-border dark:border-base-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'
              >
                <div className='p-6'>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className='text-xl font-bold mb-3 hover:text-blue-600 transition-colors'>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {post.excerpt}
                  </p>

                  <div className='flex items-center justify-between text-sm text-gray-500'>
                    <span>By {post.author}</span>
                    <span>{formatDate(post.publishDate)}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className='inline-block mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors'
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className='text-center py-12'>
              <p className='text-gray-600 text-lg'>
                No posts found for the selected tag.
              </p>
              <button
                onClick={() => setSelectedTag('')}
                className='mt-4 text-blue-600 hover:text-blue-800 font-medium'
              >
                View all posts
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20'>
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Want to Contribute?
          </h2>
          <p className='text-xl text-gray-600 mb-8'>
            Share your knowledge and insights with our community.
          </p>
          {/* <Button
            asChild
            size='lg'
            className='inset-shadow-sm inset-shadow-white/100 dark:inset-shadow-black/80 dark:text-white'
          >
            <Link href='/blog/create'>
              <span className='font-bold'>Create Blog Post</span>
            </Link>
          </Button> */}
          <Link
            href='/blog/create'
            className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
          >
            Create Blog Post
          </Link>
        </div>
      </section>
    </>
  );
}
