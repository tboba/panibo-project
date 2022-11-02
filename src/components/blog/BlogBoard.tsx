import WPAPI from 'wpapi';
import {useEffect, useState} from "react";
import React from "react";
import BlogPost from "./BlogPost";
import {useBlogContext} from "../../store/blog-store";

const BlogBoard = () => {
  const [hasErrored, setHasErrored] = useState(false);
  const {posts, setPosts} = useBlogContext();

  const infoStyle = 'text-2xl font-bold text-center my-[5em]';

  useEffect(() => {
    const wp = new WPAPI({
      endpoint: 'https://panibo.pl/wp-json',
    });

    const fetchPosts = () => {
      wp.posts().then((data) => {
        setPosts(data);
      }).catch((error => {
        console.log(`Wystapil krytyczny blad! ${error}`);
        setHasErrored(true);
      }));
    }

    if (posts.length === 0) {
      fetchPosts();
    }
  });

  return (
    <div className={(posts.length === 0 || hasErrored) ? 'blog-info-window-height' : ''}>
      {posts.length !== 0 && posts.map(post => <BlogPost key={post.id} title={post.title.rendered} data={post.excerpt.rendered} link={post.link} />)}
      {posts.length === 0 && !hasErrored && <h1 className={infoStyle}>Trwa ładowanie postów...</h1>}
      {posts.length === 0 && hasErrored && <h1 className={infoStyle}>Przepraszamy! Wystąpił krytyczny błąd.</h1>}
    </div>
  );
}

export default React.memo(BlogBoard);