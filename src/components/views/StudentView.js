const StudentView = (props) => {
  const {student} = props;

  return (
    <div>
      <img src={student.image}/>
      <h1>{student.name}</h1>
      <h3>{student.email}</h3>
      <p>{student.gpa}</p>

    </div>
  );

};

export default StudentView;
