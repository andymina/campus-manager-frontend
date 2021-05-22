const StudentView = (props) => {
  const {student} = props;

  let name = student.firstname + " " + student.lastname;

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

};

export default StudentView;
