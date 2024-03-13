import React from "react";
import Image from "next/legacy/image";
import classes from "./post-header.module.css";

type PostHeaderProps = {
  title: any;
  image: any;
};

function PostHeader(props: PostHeaderProps) {
  const { title, image } = props;

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image
        src={image}
        alt={title}
        width={200}
        height={150}
        // layout="responsive"
        // priority
      />
    </header>
  );
}

export default PostHeader;
