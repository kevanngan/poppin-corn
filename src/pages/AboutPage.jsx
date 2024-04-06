import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

import tmdbAttributionLogo from '../assets/images/tmdb-attribute-logo.svg';
import aboutImage from '../assets/images/about-image.jpg';

const AboutPage = () => {

  useEffect(() => {
    document.title = appTitle;
  }, []);

  return (
    <main className="about">
      <section className="about-wrapper">
        <div className="about-content">
          <h2>ABOUT</h2>
          <h3>Welcome to Poppin'Corn! - where movies pop to life!</h3>
          <p>Hey there, fellow movie buff! Grab your bucket of buttery popcorn and get ready to dive into the ultimate movie experience. Here at Poppin' Corn, we're all about celebrating the magic of cinema while munching on the most delightful snack - popcorn!</p>
          <h3>Introducing the magic of cinema and popcorn!</h3>
          <p>Picture this: you're snuggled up on your couch, popcorn in hand, scrolling through endless movie options. That's where Poppin' Corn comes in! We're your go-to destination for discovering the latest blockbusters, hidden gems, and everything in between.</p>
          <img src={aboutImage} alt="Person sitting eating popcorn" />
          <h3>Your destination for movie discovery!</h3>
          <p>But wait, there's more! Not only can you explore a vast collection of flicks, but you can also curate your very own movie list. Yep, that's right - bookmark your favorites, create watchlists, and let the popcorn-fueled movie marathons begin!</p>
          <h3>It's time to pop some corn and kick back!</h3>
          <p>So, whether you're craving a heartwarming rom-com, an adrenaline-pumping action flick, or a spine-tingling thriller, Poppin' Corn has got you covered. It's time to pop some corn, kick back, and let the movie magic unfold. Welcome to the tastiest movie experience on the web!</p>
        </div>

        <div className="tmdbAttribution">
          <img src={tmdbAttributionLogo} alt="TMDB Logo" />
          <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
        </div>
      </section>
    </main>
  )
}

export default AboutPage;