
import pic from "./assets/dow.jpeg"

function Picture () {
           // const handleClick = () => console.log("ouch....!")
              const handleClick2 = (e) => e.target.style.display ="none"
      return(
            <img onClick={(e) => handleClick2(e)} src={pic}></img>
      );
}
export default Picture