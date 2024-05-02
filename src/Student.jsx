import PropTypes from 'prop-types'

function Student(props){

      return(

            <div className="student">
                  <p>NAME : {props.name}</p>
                  <p>AGE : {props.age}</p>
                  <p>STUDENT : {props.isStudent ? "yes" : "no"}</p>
            </div>
      );

}

Student.PropTypes = {
      name: PropTypes.string,
      age: PropTypes.number,
      isStudent: PropTypes.bool
}

export default Student