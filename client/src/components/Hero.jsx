function Hero({ scrollToUpload }) {


  return (

    <section className="hero">


      <div className="hero-left">


        <h1>

          Analyze Your 
          <span> CSV </span>
          with AI

        </h1>



        <p>

          Upload any CSV dataset and instantly
          generate insights, statistics, charts,
          and AI-powered answers.

        </p>



        <div className="hero-buttons">


          <button

            className="primary-btn"

            onClick={scrollToUpload}

          >

            Upload Dataset

          </button>



          <button

            className="secondary-btn"

          >

            Explore

          </button>



        </div>


      </div>





      <div className="hero-right">


        <div className="hero-card">


          <div className="hero-icon">

            📊

          </div>



          <div className="hero-text">


            <h3>
              AI Analytics
            </h3>


            <p>
              Smart insights from your data
            </p>


          </div>



        </div>


      </div>



    </section>

  );


}


export default Hero;