import Head from "next/head";
import FeaturePost from "../components/home-page/feature-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
import { Fragment } from "react";

type HomePageProps = {
  posts: any;
};

function HomePage(props: HomePageProps) {
  return (
    <Fragment>
      <Head>
        <title>Nirmal BLOG</title>
        <meta
          name="desciption"
          content="I post About Programming and Web development.."
        />
      </Head>
      <Hero />
      <FeaturePost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
