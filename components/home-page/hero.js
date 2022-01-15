import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/me.jpg'
          alt='An Image showing Kronos'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm KronosGr</h1>
      <p>I blog about web developement - especially about everything :)</p>
    </section>
  );
}

export default Hero;
