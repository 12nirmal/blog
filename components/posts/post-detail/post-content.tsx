// // import ReactMarkdown, { Components } from "react-markdown";
// // import React, { ReactNode } from "react";
// // import PostHeader from "./post-header";
// // import classes from "./post-content.module.css";
// // import Image from "next/image";

// // type PostContentProps = {
// //   post: any;
// // };

// // function PostContent(props: PostContentProps) {
// //   const { post } = props;

// //   const imagePath = `/images/posts/${post.slug}/${post.image}`;

// //   type customRenderersProps = {
// //     children: ReactNode;
// //     // src: any;
// //     url: any;
// //     alt: string;
// //     paragraph: any;
// //     node: any;
// //   };

// //   const customRenderers: Partial<Components> = {

// //     p(paragraph) {
// //       const { node } = paragraph;

// //       if (node?.children[0].type === "image") {
// //         const image = node.children[0];

// //         return (
// //           <div className={classes.image}>
// //             <Image
// //               src={`/images/posts/${post.slug}/${image.url}`}
// //               alt={`image.alt`}
// //               width={600}
// //               height={300}
// //             />
// //           </div>
// //         );
// //       }
// //       return <p>{paragraph.children}</p>;
// //     },
// //     img({ node }) {
// //       console.log(node);
// //       return <img src={`/images/posts/${node?.properties.src}`} />;
// //     },
// //   };

// //   return (
// //     <article className={classes.content}>
// //       <PostHeader title={post.title} image={imagePath} />
// //       <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
// //     </article>
// //   );
// // }
// // export default PostContent;

// import ReactMarkdown, { Components } from "react-markdown";
// import Image from "next/image";
// import React from "react";
// import PostHeader from "./post-header";
// import classes from "./post-content.module.css";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

// type customRenderersProps = {
//   children?: any;
//   node?: any;
//   url: any;
//   alt: string;
//   post: any;
//   code: any;
//   language: any;
//   value: any;
// };

// function PostContent(props: customRenderersProps) {
//   const { post } = props;
//   const imagePath = `/images/posts/${post.slug}/${post.image}`;

//   const customRenderers: Components | null | undefined = {
//     paragraph(paragraph: customRenderersProps) {
//       const { node } = paragraph;
//       if (node.children[0].type === "image") {
//         const image = node.children[0];
//         return (
//           <div className={classes.image}>
//             <Image
//               src={`/images/posts/${post.slug}/${image.url}`}
//               alt={image.alt}
//               width={600}
//               height={300}
//             />
//           </div>
//         );
//       }
//       return <p>{paragraph.children}</p>;
//     },

//     code(code: customRenderersProps) {
//       const { language, value } = code;
//       return (
//         <SyntaxHighlighter
//           style={atomDark}
//           language={language}
//           children={value}
//         />
//       );
//     },
//   };

//   return (
//     <article className={classes.content}>
//       <PostHeader title={post.title} image={imagePath} />
//       <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
//     </article>
//   );
// }
// export default PostContent;

// ![Create routes via your file + folder structure](/images/posts/getting-started-with-nextjs/nextjs-file-based-routing.png)

import ReactMarkdown from "react-markdown";
import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
type PostContentProps = {
  post: any;
};
function PostContent(props: PostContentProps) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
export default PostContent;
