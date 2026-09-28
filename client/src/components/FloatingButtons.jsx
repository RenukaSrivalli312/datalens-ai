import { Link } from "react-router-dom";


function FloatingButtons(){


  return (

    <div className="floating-buttons">


      <Link

        to="/chat"

        className="floating-btn"

      >

        💬 Chat

      </Link>




      <Link

        to="/visualization"

        className="floating-btn"

      >

        📊 Visualization

      </Link>



    </div>

  );


}


export default FloatingButtons;