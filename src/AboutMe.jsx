const AboutMe = () => {
  return ( 
    <div className="about">
      <h2>About Me</h2>
      <div className="container">
        <img src="./headshot.jpg" alt='developer headshot' />
        <div className="text">
          <h3>A brief intro, who am I?</h3>
          <p>
            I am a creative frontend developer based in Austin, Texas. I am passionate towards creating frontend modern websites and using my work to impact and connect with small businesses.
            <br />
            When I am not developing, I love to set my time aside to play the guitar or Dance Dance Revolution at the arcade.
          </p>
        </div>
      </div>
    </div>
   );
}
 
export default AboutMe;