function FeatureTable({ dataset }) {


  return (

    <div className="card">


      <h2>
        📂 Dataset Details
      </h2>



      <h3>
        Numeric Columns
      </h3>



      <div className="columns">


        {
          dataset.numericColumns?.map((col)=>(

            <div

              key={col}

              className="column-chip"

            >

              {col}

            </div>

          ))
        }


      </div>




      <h3 style={{marginTop:"25px"}}>

        Categorical Columns

      </h3>




      <div className="columns">


        {
          dataset.categoricalColumns?.map((col)=>(

            <div

              key={col}

              className="column-chip"

            >

              {col}

            </div>

          ))
        }


      </div>



    </div>

  );


}


export default FeatureTable;