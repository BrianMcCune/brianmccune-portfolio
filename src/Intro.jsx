const Intro = () => {


  const introOne = "HI THERE, I'M"
  const introTwo = "BRIAN MCCUNE."
  let intOneArray = introOne.split('')
  let intTwoArray = introTwo.split('')

  return ( 
    <div className="intro">
      <div>
        {intOneArray.map((index) => {
          return (
            <span key={intOneArray[index]}>
              {index}
            </span>
          )
        })}
      </div>
      <div>
        {intTwoArray.map((index) => {
          return (
            <span key={intTwoArray[index]}>
              {index}
            </span>
          )
        })}
      </div>
    </div>
   );
}
 
export default Intro