function ChatWindow({

  question,
  setQuestion,
  answer,
  handleAsk,
  loading

}) {


  return (

    <>


      <div className="card">


        <h2>
          🤖 Ask AI
        </h2>




        <div className="chat-box">


          <input


            type="text"


            placeholder="Ask something about your dataset..."


            value={question}


            onChange={(e)=>
              setQuestion(e.target.value)
            }



            onKeyDown={(e)=>{

              if(e.key==="Enter"){

                handleAsk();

              }

            }}



          />





          <button


            className="ask-btn"


            onClick={handleAsk}


            disabled={loading}


          >


            {

              loading

              ?

              "Thinking..."

              :

              "Ask AI"

            }


          </button>



        </div>



      </div>





      {

        answer &&


        <div className="card">


          <h2>
            💬 AI Response
          </h2>



          <div className="response">


            {answer}


          </div>



        </div>


      }



    </>

  );


}


export default ChatWindow;