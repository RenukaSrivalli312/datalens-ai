import Navbar from "../components/Navbar";

import ChartSection from "../components/ChartSection";


function Visualization() {


  const dataset = JSON.parse(
    localStorage.getItem("dataset")
  );



  if(!dataset){


    return (

      <div>


        <Navbar />


        <main className="container">


          <div className="card">


            <h2>
              No Dataset Found
            </h2>


            <p>
              Please upload a CSV file first.
            </p>


          </div>


        </main>


      </div>

    );


  }




  return (

    <div>


      <Navbar />



      <main className="container">


        <ChartSection

          chartData={
            dataset.chartData
          }

        />


      </main>


    </div>

  );


}



export default Visualization;