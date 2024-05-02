// import Card from "./Card.jsx"; <Card />
import Student from "./Student.jsx";

function app (){
  return(
<>
   <Student name="thor" age={10} isStudent={true} />
   <Student name="ant" age={120} isStudent={false} />
   <Student name="wonda" age={510} isStudent={true} />
   <Student name="odin" age={1000} isStudent={true} />
   
</>
);
}

export default app


