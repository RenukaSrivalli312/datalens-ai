import { useState } from "react";

import Navbar from "../components/Navbar";
import ChatWindow from "../components/ChatWindow";

import API from "../services/api";


function Chat() {


  const dataset = JSON.parse(
    localStorage.getItem("dataset")
  );


  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(false);



  const handleAsk = async () => {


    if(!dataset){

      alert(
        "Please upload dataset first."
      );

      return;

    }



    if(!question.trim()){

      alert(
        "Please enter a question."
      );

      return;

    }



    try{


      setLoading(true);



      const res = await API.post(
        "/chat",
        {
          dataset,
          question
        }
      );



      setAnswer(
        res.data.answer
      );


      setQuestion("");



    }
    catch(err){


      console.error(err);



      if(err.response){

        alert(
          JSON.stringify(
            err.response.data
          )
        );

      }
      else{

        alert(
          err.message
        );

      }


    }
    finally{

      setLoading(false);

    }


  };




  return (

    <div>


      <Navbar />



      <main className="container">


        <ChatWindow

          question={question}

          setQuestion={setQuestion}

          answer={answer}

          handleAsk={handleAsk}

          loading={loading}

        />


      </main>


    </div>

  );


}



export default Chat;