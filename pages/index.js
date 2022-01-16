import { Fragment } from 'react';

import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

const DUMYY_POSTS = [
  {
    slug: 'getting-started',
    title: 'Getting started',
    image: 'getting-started-nextjs.png',
    excerpt: 'lorem lorem lorem ipsum',
    date:'2022-02-10',
  },
  {
    slug: 'getting-started2',
    title: 'Getting started2',
    image: 'getting-started-nextjs.png',
    excerpt: 'lorem lorem lorem ipsum',
    date:'2022-02-10',
  },
  {
    slug: 'getting-started3',
    title: 'Getting started3',
    image: 'getting-started-nextjs.png',
    excerpt: 'lorem lorem lorem ipsum',
    date:'2022-02-10',
  },
  {
    slug: 'getting-started4',
    title: 'Getting started4',
    image: 'getting-started-nextjs.png',
    excerpt: 'lorem lorem lorem ipsum',
    date:'2022-02-10',
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMYY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
