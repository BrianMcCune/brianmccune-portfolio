const Intro = () => {


  const introOne = "HI THERE, I'M"
  const introTwo = "BRIAN MCCUNE."
  let intOneArray = introOne.split('')
  let intTwoArray = introTwo.split('')

  return ( 
    <div className="intro">
      <div className="lineOne">
        {intOneArray.map((index) => {
          return (
            <span key={intOneArray[index]}>
              {index}
            </span>
          )
        })}
      </div>
      <div className="lineTwo">
        {intTwoArray.map((index) => {
          return (
            <span key={intTwoArray[index]}>
              {index}
            </span>
          )
        })}
      </div>
      <div className="subtitle">
        <p>Front End Web Developer & ReactJS Fan Creating modern UI designs.</p>
      </div>
    </div>
   );
}
 
export default Intro