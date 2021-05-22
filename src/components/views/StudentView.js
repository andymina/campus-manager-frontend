const StudentView = (props) => {
  const {student} = props;

  let name = student.firstname + " " + student.lastname;

  //NO CAMPUS
  if(!student.campus){
    return(
      <div>
        <img src={student.image}/>
        <h1>{name}</h1>
        <h3>{student.email}</h3>
        <p>{student.gpa}</p>

        <div className="campus">
          <h3> This student is not registered to a campus. </h3>
        </div>
      </div>
    )
  }

  //STUDENT WITH CAMPUS 
  else{
    return (
      <div>
        <img src={student.image}/>
        <h1>{name}</h1>
        <h3>{student.email}</h3>
        <p>{student.gpa}</p>

        <div className="campus">
          {student.campus.image}
          {student.campus.name}
          {student.campus.description}
        </div>
      </div>
    );
  }

};

export default StudentView;
