function PreviewTable({ dataset }) {


  return (

    <div className="card">


      <h2>
        👀 Dataset Preview
      </h2>




      <div
        style={{
          overflowX:"auto"
        }}
      >



        <table className="preview-table">


          <thead>


            <tr>


              {
                dataset.columnNames?.map((col)=>(


                  <th key={col}>

                    {col}

                  </th>


                ))
              }


            </tr>


          </thead>





          <tbody>



            {
              dataset.preview?.map((row,index)=>(


                <tr key={index}>


                  {
                    dataset.columnNames?.map((col)=>(


                      <td key={col}>

                        {row[col]}

                      </td>


                    ))
                  }



                </tr>


              ))
            }



          </tbody>



        </table>



      </div>



    </div>

  );


}


export default PreviewTable;