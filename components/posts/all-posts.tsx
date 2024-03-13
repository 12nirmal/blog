import React from "react";
import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

type AllPostsProps = {
  posts: any;
};

function AllPosts(props: AllPostsProps) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} slug={""} post={""} />
    </section>
  );
}

export default AllPosts;
