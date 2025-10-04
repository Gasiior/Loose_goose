import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';

import post1_1 from './assets/klaudia_zosia.png';

const postData: Record<
  string,
  { title: string; date: string; content: React.ReactNode  }
> = {
  'our-game-dev-journey': {
    title: 'Our Game Dev Journey',
    date: 'August 17, 2025',
    content: (
      <>
        <p>
          Welcome to our very first devlog post! We're Loose Goose Studios – two indie developers with a big dream: creating emotionally charged, atmospheric games from scratch.
        </p>
        <p>
          We've spent the last 6 months building our first project, from concept sketches to early prototypes. Here's a peek:
        </p>
        <img src= {post1_1} alt="Early prototype" className="blogpost-image" />
        <p>
          The goal has always been to blend beautiful visuals with unsettling horror mechanics, meaningful characters, and stories that leave an impression. We've been experimenting with Unreal Engine’s landscape tools, lighting, and AI pathfinding.
        </p>
        <img src="/assets/dev_screenshot2.jpg" alt="Level design test" className="blogpost-image" />
        <p>
          Stay tuned – the goose is loose, and it’s building nightmares.
        </p>
      </>
    ),
  },
  'why-we-chose-unreal-engine': {
    title: 'Why We Chose Unreal Engine',
    date: 'August 10, 2025',
    content: (
      <>
        <p>
          After testing Unity, Godot, and Unreal, we went with Unreal Engine 5 for its unmatched lighting and cinematic capabilities.
        </p>
        <p>
          Features we love:
        </p>
        <ul>
          <li>Nanite and Lumen for insane detail and lighting</li>
          <li>Blueprints for fast prototyping</li>
          <li>Strong asset marketplace</li>
        </ul>
        <p>
          We’ll share more technical devlogs soon!
        </p>
      </>
    ),
  },
  'meet-the-founders': {
    title: 'Meet the Founders',
    date: 'August 18, 2025',
    content: (
      <> 
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Hey there! We're Klaudia and Zosia, the duo behind Loose Goose Studios. <br></br>
          <br></br>&nbsp;&nbsp;&nbsp;&nbsp;We met during our computer science studies in Warsaw, 
          where we both specialized in game development. From the start, 
          we clicked over our shared love for games, storytelling, and 
          building weird little projects just for fun (and sometimes for uni credits). <br></br>
          <br></br> &nbsp;&nbsp;&nbsp;&nbsp;For the past three years, we've been creating games together — learning, experimenting, 
          and pushing each other to go further with each new idea. Our workflow is a mix of chaotic creativity,
           late-night sprints, too much caffeine and nicotine. We’ve worn all the hats: designers, developers, 
           testers, even voice actors at one point.<br></br> 
        </p>
        <img src={post1_1} alt="Founders of Loose Goose Studios" className="blogpost-image" />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;In October 2024, we came up with the idea for our first serious title -
          a project we actually want to release into the world. Since then, we’ve been pouring our time, 
          skills, and souls into making it happen. It’s not always easy, but it’s the most exciting thing we’ve ever done.<br></br>
          <br></br>&nbsp;&nbsp;&nbsp;&nbsp;Our project is more than a project (if it's making any sense) - it’s our dream taking shape.<br></br>
           And we're just getting started.<br></br>
          <br></br><br></br> <b>Klaudia & Zosia </b>
        </p>
      </>
    ),
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? postData[slug] : undefined;

  if (!post) {
    return (
      <div className="blogpost-container">
        <h2>Post not found</h2>
        <Link to="/blog" className="back-button">← Back to Flight Log</Link>
      </div>
    );
  }

  return (
    <div className="blogpost-container">
      <h1 className="blogpost-title">{post.title}</h1>
      <p className="blogpost-date">{post.date}</p>
      <div className="blogpost-content">{post.content}</div>
      <Link to="/blog" className="back-button">← Back to Flight Log</Link>
    </div>
  );
};

export default BlogPost;