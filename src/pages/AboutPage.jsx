import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';


const AboutPage = () => {

  useEffect(() => {
    document.title = appTitle;
  }, []);

  return (
    <main>
      <section className="about-wrapper">
        <div className="about-content">
          <h2>ABOUT</h2>
          <h3>Welcome to Poppin'Corn! - where movies pop to life!</h3>
          <p>Hey there, fellow movie buff! Grab your bucket of buttery popcorn and get ready to dive into the ultimate movie experience. Here at Poppin' Corn, we're all about celebrating the magic of cinema while munching on the most delightful snack - popcorn!</p>
          <p>Picture this: you're snuggled up on your couch, popcorn in hand, scrolling through endless movie options. That's where Poppin' Corn comes in! We're your go-to destination for discovering the latest blockbusters, hidden gems, and everything in between.</p>
          <p>But wait, there's more! Not only can you explore a vast collection of flicks, but you can also curate your very own movie list. Yep, that's right - bookmark your favorites, create watchlists, and let the popcorn-fueled movie marathons begin!</p>
          <p>So, whether you're craving a heartwarming rom-com, an adrenaline-pumping action flick, or a spine-tingling thriller, Poppin' Corn has got you covered. It's time to pop some corn, kick back, and let the movie magic unfold. Welcome to the tastiest movie experience on the web!</p>
        </div>

        <div className="tmdbAttribution">
          <img src="src" alt="" />
          <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
        </div>
      </section>
    </main>
  )
}

export default AboutPage;