const AnimatedLetters = ({letters, containerClass}) => {
    return ( 
        <>
            {letters.map((char, i) => (
                <div className={containerClass}>
                    <span key={i}>
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                </div>
            ))}
        </>
     );
}
 
export default AnimatedLetters;