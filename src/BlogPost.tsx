import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';

import post1_1 from './assets/klaudia_zosia.png';


const postData: Record<
  string,
  { title: string; date: string; content: React.ReactNode  }
> = {
  'one_year_mark': {
    title: 'One year mark!',
    date: 'November 4, 2025',
    content: (
      <>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;So… we did it. One year of Loose Goose Studios.<br></br>
          <br></br>&nbsp;&nbsp;&nbsp;&nbsp;A year of learning, crashing, debugging, laughing (a little), crying (a lot)
          and realizing that making games is equal parts chaos and magic. <br></br>
          <br></br> &nbsp;&nbsp;&nbsp;&nbsp;When we started, we didn’t really know what we were getting into. 
          We just wanted to create something of our own — a game that feels alive, weird, and a little unsettling. 
          Fast forward twelve months, and Trail of Innocence is slowly turning from an idea on paper into something real.<br></br> 
        </p>
        <img src={post1_1} alt="Founders of Loose Goose Studios" className="blogpost-image" />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;In the past year, we’ve:<br></br>
– broken the project at least fifty times (and fixed it forty-nine),<br></br>
– spent more hours in Unreal Engine than we’d like to admit,<br></br>
– learned that “just a small change” is the deadliest phrase in game dev.<br></br>
          <br></br>&nbsp;&nbsp;&nbsp;&nbsp;But most importantly — we grew. Not just as developers, but as a team, as storytellers, 
          and as two people crazy enough to keep going even when everything goes sideways. 
          To everyone who followed us, supported us, or just dropped a message saying “hey, this looks cool” — thank you. 
          You’re the reason we keep pushing.<br></br><br></br>
           Here’s to another year of chaos, code, and creepy hallways.
          Loose Goose Studios — still small, still indie, still very much alive.<br></br>
          <br></br><br></br> <b>Klaudia & Zosia </b>
        </p>
      </>
    ),
  },
  'why-we-chose-unreal-engine': {
    title: 'Why We Chose Unreal Engine',
    date: 'October 18, 2025',
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