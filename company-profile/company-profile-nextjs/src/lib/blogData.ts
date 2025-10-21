export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  tags: string[];
  slug: string;
}

// Simulated blog data (acting as headless CMS)
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt:
      'Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.',
    content:
      'Web development is constantly evolving, and 2024 brings exciting new trends...',
    author: 'Sarah Chen',
    publishDate: '2024-01-15',
    tags: ['Web Development', 'Technology', 'Trends'],
    slug: 'future-web-development-2024',
  },
  {
    id: '2',
    title: 'Building Scalable React Applications: Best Practices',
    excerpt:
      'Learn how to structure and optimize your React applications for better performance and maintainability.',
    content:
      'React has become the go-to library for building user interfaces...',
    author: 'Mike Rodriguez',
    publishDate: '2024-01-10',
    tags: ['React', 'JavaScript', 'Best Practices'],
    slug: 'scalable-react-applications',
  },
  {
    id: '3',
    title: 'The Rise of Headless CMS: Why It Matters',
    excerpt:
      'Discover why headless CMS solutions are gaining popularity and how they benefit modern web development.',
    content:
      'Traditional CMS systems have served us well, but the digital landscape is changing...',
    author: 'John Anderson',
    publishDate: '2024-01-05',
    tags: ['CMS', 'Content Management', 'Technology'],
    slug: 'rise-headless-cms',
  },
  {
    id: '4',
    title: 'Mobile-First Design: Creating Better User Experiences',
    excerpt:
      'Understanding the importance of mobile-first design and how to implement it effectively.',
    content:
      'With mobile devices accounting for the majority of web traffic...',
    author: 'Emma Wilson',
    publishDate: '2023-12-28',
    tags: ['Mobile', 'UX Design', 'Responsive Design'],
    slug: 'mobile-first-design',
  },
  {
    id: '5',
    title: 'Securing Your Web Applications: Essential Practices',
    excerpt:
      'Learn the fundamental security practices every web developer should implement.',
    content:
      "Web application security is crucial in today's digital landscape...",
    author: 'David Kim',
    publishDate: '2023-12-20',
    tags: ['Security', 'Web Development', 'Best Practices'],
    slug: 'securing-web-applications',
  },
  {
    id: '6',
    title: 'The Power of Progressive Web Apps (PWAs)',
    excerpt:
      'Explore how PWAs combine the best of web and mobile applications.',
    content:
      'Progressive Web Apps represent a significant evolution in web technology...',
    author: 'Lisa Thompson',
    publishDate: '2023-12-15',
    tags: ['PWA', 'Web Apps', 'Mobile'],
    slug: 'power-progressive-web-apps',
  },
];

export const addBlogPost = (post: Omit<BlogPost, 'id' | 'slug'>) => {
  const id = (blogPosts.length + 1).toString();
  const slug = post.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  const newPost: BlogPost = { ...post, id, slug };
  blogPosts.unshift(newPost); // Add to beginning of array
  return newPost;
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
};
