import React from "react";
import classes from "./featured-posts.module.css";
import PostsGrid from "../posts/posts-grid";

type FeaturedPostProps = {
  posts: any;
};

function FeaturedPost(props: FeaturedPostProps) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} slug={""} post={""} />
    </section>
  );
}

export default FeaturedPost;
