import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import PostHeader from './post-header';

import classes from './post-content.module.css';

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const imagePathCustom = `/images/posts/${post.slug}/`;

  const customRenderers = {
    // img(image) {
    //   return <Image
    //     src={imagePathCustom + image.src}
    //     alt={image.alt}
    //     width={600}
    //     height={300}
    //   />;
    // },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName  === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}` }
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>
    },
    code({node, inline, className, children, ...props}){
      const match = /language-(\w+)/.exec(className || '')
      return <SyntaxHighlighter style={atomDark} language={match[1]}>{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
    }
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
