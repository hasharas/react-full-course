import React,{useState} from "react"

function Mycomponent(){

const [name,setName] = useState("");
const [Qnumber,setQnumber] = useState (1);
const [comment,setComment] = useState("");
const [card,setCard] = useState("");
const [shiping,setShiping] = useState("");

   function enterText(event){
         setName(event.target.value);
   }
   
   function addNumber(event){
         setQnumber(event.target.value);
   }
   
   function addComment(event){
         setComment(event.target.value);
   }

   function addCard(event){
        setCard(event.target.value);
   }

   function addShiping(event){
      setShiping(event.target.value);
   }

      return(
            <div>
                  <input value={name} onChange={enterText} type="text" />
                  <p>NAME : {name} </p>

                  <input type="number" value={Qnumber} onChange={addNumber} />
                  <p>NUMBER : {Qnumber}</p>

                  <textarea type="text" value={comment} onChange={addComment} placeholder="ADD YOUR COMMENT HERE..!"/>
                  <p>COMMENT : {comment}</p>

                  <select value={card} onChange={addCard} name="" id="">
                        <option value="select">Select option</option>
                        <option value="visa">visa card</option>
                        <option value="master">master card</option>
                        <option value="debit">debit card</option>
                        
                  </select>
                  <p>CARD NAME :{card}</p>

                  <label htmlFor="" >
                        <input type="radio" value="delivery"
                        onChange={addShiping}
                        checked={shiping === "delivery"}
                        />
                        delivery
                  </label>
                  <br />
                  <label htmlFor=""  >
                        <input type="radio" value="pick up" 
                        onChange={addShiping}
                        checked={shiping === "pick up"}

                        />
                        pick up
                  </label>
                  <p>SHIPIN MODE : {shiping}</p>

            </div>

      );
}

export default Mycomponent