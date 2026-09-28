import { Link } from "react-router-dom";


function Navbar() {


  return (

    <nav className="navbar">


      <Link
        to="/"
        className="logo"
      >
        DataLens AI
      </Link>



      <div className="nav-links">


        <Link to="/">
          Home
        </Link>


        <Link to="/dashboard">
          Dashboard
        </Link>


        <Link to="/visualization">
          Analytics
        </Link>


        <Link to="/chat">
          AI Chat
        </Link>


      </div>



      <Link
        to="/dashboard"
        className="start-btn"
      >

        Explore AI

      </Link>



    </nav>

  );

}


export default Navbar;