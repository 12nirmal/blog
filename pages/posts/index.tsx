import React, { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

type AllPostPageProps = {
  posts: any;
};

function AllPostPage(props: AllPostPageProps) {
  return (
    <Fragment>
      <Head>
        <title>All my Posts</title>
        <meta
          name="description"
          content="A list of All Programming-related tutorials and Posts"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostPage;
