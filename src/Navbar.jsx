import CodeIcon from "./CodeIcon";

const Navbar = () => {
  return ( 
    <div className="navbar">
      <div className="navbar-header">
        <CodeIcon />
        <h1>D V L P R</h1>
      </div>
      <div className="navbar-sections">
        <h2>About</h2>
        <h2>Projects</h2>
        <h2>Skills</h2>
        <h2>Contact</h2>
      </div>
    </div>
   );
}
 
export default Navbar;