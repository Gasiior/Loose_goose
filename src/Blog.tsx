//import React from 'react';
import { Link } from 'react-router-dom';
import "./Blog.css";

import image1 from "./assets/Background_dark.jpg";
import image2 from "./assets/unreal.png";
import image3 from "./assets/klaudia_zosia.png";

const Blog = () => {
  const posts = [
    {
      title: 'One year mark!',
      date: 'August 17, 2025',
      summary: 'A behind-the-scenes look into how we’re building our dream game from scratch.',
      image: image1,
      slug: 'one_year_mark',
      content: 'This is the full content of the first post...'
    },
    {
      title: 'Why We Chose Unreal Engine',
      date: 'August 10, 2025',
      summary: 'An honest breakdown of why Unreal fits our needs better than Unity or other engines.',
      image: image2,
      slug: 'why-we-chose-unreal-engine',
      content: 'Here goes full content of this post...'
    },
    {
      title: 'Meet the Founders',
      date: 'August 1, 2025',
      summary: 'Get to know the people behind Loose Goose Studios.',
      image: image3,
      slug: 'meet-the-founders',
      content: 'Founders full story...'
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Flight Log</h1>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <div key={index} className="blog-post">
            <div className="post-left">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-date">{post.date}</p>
              <p className="post-summary">{post.summary}</p>
              <Link to={`/blog/${post.slug}`} className="read-more">Read More</Link>
            </div>
            <div className="post-right">
              <img src={post.image} alt={post.title} className="post-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;