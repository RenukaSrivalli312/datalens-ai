function StatsTable({ dataset }) {


  if(!dataset.statistics){

    return null;

  }



  return (

    <div className="card">


      <h2>
        📈 Statistics
      </h2>



      {
        Object.entries(dataset.statistics)
        .map(([column, stat])=>(


          <div

            key={column}

            className="stat-box"

          >


            <h3>
              {column}
            </h3>



            <p>
              Mean : {stat.mean}
            </p>



            <p>
              Median : {stat.median}
            </p>



            <p>
              Minimum : {stat.min}
            </p>



            <p>
              Maximum : {stat.max}
            </p>



          </div>


        ))
      }



    </div>

  );


}


export default StatsTable;