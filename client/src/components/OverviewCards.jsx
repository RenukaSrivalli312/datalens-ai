function OverviewCards({ dataset }) {


  return (

    <div className="card">


      <h2>
        📊 Dataset Overview
      </h2>



      <div className="stats">



        <div className="stat-card">

          <h3>
            {dataset.rows}
          </h3>

          <p>
            Rows
          </p>

        </div>





        <div className="stat-card">

          <h3>
            {dataset.columns}
          </h3>

          <p>
            Columns
          </p>

        </div>





        <div className="stat-card">

          <h3>
            {dataset.missingValues}
          </h3>

          <p>
            Missing Values
          </p>

        </div>



      </div>


    </div>

  );

}


export default OverviewCards;