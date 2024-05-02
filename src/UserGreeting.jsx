import PropType from "prop-types"

function UserGreeting(props){

     // const welcomeMsg = <h1 className="welcome-m">hello {userName} </h1>
     // const LoginMsg = <h2 className="login-m">Plase log in to continue..!</h2>


      return(props.isLogin ?  <h1 className="welcome-m">hello {userName} </h1> :
                              <h2 className="login-m">Plase log in to continue..!</h2>
                        );
      //return(  props.isLogin ? welcomeMsg : LoginMsg );                  
}
UserGreeting.PropType = {
      isLogin : PropType.bool,
      userName : PropType.string
}
UserGreeting.defaultPropps = {
      isLogin : false,
      userName :"guest",
}

export default UserGreeting