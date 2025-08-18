import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css'; // jeśli masz styl

const postData: Record<string, { title: string; date: string; content: string }> = {
  'our-game-dev-journey': {
    title: 'Our Game Dev Journey',
    date: 'August 17, 2025',
    content: 'Here’s the full detailed content of the post...',
  },
  'why-we-chose-unreal-engine': {
    title: 'Why We Chose Unreal Engine',
    date: 'August 10, 2025',
    content: 'Lots of reasons why Unreal works best for us...',
  },
  'meet-the-founders': {
    title: 'Meet the Founders',
    date: 'August 1, 2025',
    content: 'Learn more about the people behind Loose Goose Studios...',
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? postData[slug] : undefined;

  if (!post) {
    return <div className="blogpost-container"><h2>Post not found</h2></div>;
  }

  return (
    <div className="blogpost-container">
      <h1 className="blogpost-title">{post.title}</h1>
      <p className="blogpost-date">{post.date}</p>
      <p className="blogpost-content">{post.content}</p>
    </div>
  );
};

export default BlogPost;