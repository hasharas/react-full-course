import Kios from "./assets/dow.jpeg";

function card(){

      return(
            <div className="card">
                  <img className="class-card" src={Kios} alt="kios" />
                  <h2 className="card-title">kios 1.</h2>
                  <p className="card-para">buy some thin and pay using me..have a nice day,thank you...!!!!</p>
            </div>
      );

}

export default card