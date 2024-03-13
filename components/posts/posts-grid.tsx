import { Key } from "react";
import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

type PostGridProps = {
  slug: Key | null | undefined;
  posts: any;
  post: any;
};

function PostsGrid(props: PostGridProps) {
  const { posts } = props;

  return (
    <>
      <ul className={classes.grid}>
        {posts.map((post: PostGridProps) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
    </>
  );
}

export default PostsGrid;
