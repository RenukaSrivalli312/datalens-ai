import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import API from "../services/api";


function Landing() {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadRef = useRef(null);

  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const scrollToUpload = () => {

    uploadRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  };


  const handleUpload = async () => {

    if (!file) {

setMessage(" Please choose a CSV file first.");
      return;

    }


    const formData = new FormData();

    formData.append(
      "file",
      file
    );


    try {

      setLoading(true);


      const res = await API.post("/upload", formData);


      console.log(res.data);


      // Save dataset for other pages
const dataset = res.data.dataset;

// Remove the huge raw dataset before saving
delete dataset.data;

localStorage.setItem(
  "dataset",
  JSON.stringify(dataset)
);


      setMessage("Dataset uploaded successfully!");

setTimeout(() => {
  navigate("/dashboard");
}, 1200);


    }
    catch(err){

      console.error(err);

      setMessage(
        err.response?.data?.message ||
          "Upload failed. Please try again."
      );

    }
    finally{

      setLoading(false);

    }

  };



  return (

    <div>


      <Navbar />


      <Hero 
        scrollToUpload={scrollToUpload}
      />



      <section
        className="container"
        ref={uploadRef}
      >


        <div className="card">


          <h2>
            📁 Upload Dataset
          </h2>
          {message && (
  <div className="upload-message">
    {message}
  </div>
)}


          <div className="upload-area">


            <input

              type="file"

              accept=".csv"

              onChange={(e)=>
                setFile(
                  e.target.files[0]
                )
              }

            />



            {
              file &&

              <p>

                Selected File:

                <strong>
                  {" "}
                  {file.name}
                </strong>

              </p>

            }




            <button

              className="upload-btn"

              onClick={handleUpload}

              disabled={loading}

            >

              {
                loading
                ?
                "Uploading..."
                :
                "Upload CSV"
              }


            </button>


          </div>


        </div>


      </section>



    </div>

  );

}


export default Landing;