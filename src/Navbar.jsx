import CodeIcon from "./CodeIcon";

const Navbar = () => {
  return ( 
    <div className="navbar">
      <div className="brand">
        <CodeIcon />
        <h1>McCune</h1>
      </div>
        <h2>About</h2>
        <h2>Projects</h2>
        <h2>Skills</h2>
        <button>Let's Talk</button>
    </div>
   );
}
 
export default Navbar;