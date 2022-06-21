import hangmanGame from '../images/projectsicon/hangmanGame.png';
import weatherApp from '../images/projectsicon/weatherApp.png';
import planetTrip from '../images/projectsicon/planetTrip.png';

const portfolioData = [
  {
    image: planetTrip,
    link: 'https://helloworldstraveling.netlify.app/',
    desc: 'Planet trip app',
    summary: 'An app that allows you to book trips to different planets',
    tech: 'React | Typescript | Bootstrap | Node | Express | Mongo DB | Docker'
  },
  {
    image: weatherApp,
    link: 'https://weather-one.netlify.app/',
    desc: 'Weather app',
    summary: 'An app that locates your actual location to give you some weather data',
    tech: 'React'
  },
  {
    image: hangmanGame,
    link: 'https://github.com/onurkayhann/Hangman-Game',
    desc: 'Hangman game',
    summary: 'An app that is build with vanilla JS to play the traditional hangman game',
    tech: 'HTML5 | CSS3 | JavaScript'
  }
]

export default portfolioData;