import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import OverviewCards from "../components/OverviewCards";
import FeatureTable from "../components/FeatureTable";
import PreviewTable from "../components/PreviewTable";
import StatsTable from "../components/StatsTable";
import FloatingButtons from "../components/FloatingButtons";


function Dashboard() {


  const [dataset, setDataset] = useState(null);



  useEffect(()=>{


    const storedDataset =
      localStorage.getItem("dataset");


    if(storedDataset){

      setDataset(
        JSON.parse(storedDataset)
      );

    }


  },[]);



  if(!dataset){

    return (

      <div>

        <Navbar />

        <div className="container">

          <div className="card">

            <h2>
              No Dataset Found
            </h2>


            <p>
              Please upload a CSV file first.
            </p>


          </div>


        </div>


      </div>

    );

  }



  return (

    <div>


      <Navbar />



      <main className="container">



        <OverviewCards
          dataset={dataset}
        />



        <FeatureTable
          dataset={dataset}
        />



        <PreviewTable
          dataset={dataset}
        />



        <StatsTable
          dataset={dataset}
        />



      </main>



      <FloatingButtons />


    </div>

  );

}


export default Dashboard;