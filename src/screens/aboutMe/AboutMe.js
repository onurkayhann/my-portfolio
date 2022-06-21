import React from "react";
import "./aboutMe.css";
import me from "../../images/me.png";

function AboutMe() {
  return (
    <div className="about__container" id="about-me">
      <div>
        <img src={me} alt="me onur icon" />
      </div>
      <div className="about__text">
        <h1>ABOUT ME</h1>
        <p>
          A Fullstack Developer student based in Stockholm, Sweden. I have a
          huge passion for web development and coding, I love new challenges,
          and I always strive to improve myself in other areas as well. I am in
          general a very curious guy that wants to experience and learn new
          things. My other passions include: Learning new languages, travels &
          explore new cultures, reading books & learning. I am an active guy
          that workouts regularly, and as well learning the Brazilian martial
          art called Brazilian Jiu-Jiutsu, and of course try new dishes from all
          around the world.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
