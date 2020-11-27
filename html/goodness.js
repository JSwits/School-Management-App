//school object
const school={
    staff : [],
    students:[],
    name: "Artski",
    Address: "No 2b tombia street Ikoyi Lagos",
    schoolFees: 1500,
    studentsId:function studentId(){
       let id="STU"
       for (let index = 0; index < 2; index++) {
          
          let num=Math.floor(Math.random()* 2000);
          id+=num+="1"
       }
       
          return (id);
       },
 
    registerStudent: function registerStudent(name,sex,age,phone,address,fees) { 
       const student= {
          name : name,
          sex :sex,
          age: age,
          phone : phone,
          fees: fees,
          address:address,
          feesBalance: school.schoolFees-fees,
          id: school.studentsId(),
       }
       school.students.push(student);
       return student;
    },
    getAllStudents: function (){
       return(school.students);
    },
    getStudent : function (name){ 
      let stu= school.students.filter( student => student.name == name);
      return stu;
    },
    studentDelete: function deleteStudent(name){
       let student= school.getStudent(name);
       let index= findIndex(student);
       student.splice(index,1)
    },
    editStudent: function (name,key,value){
       let student= school.getStudent(name); let oldValue;
       oldValue= student[key]
       //student[key]= student[key].replace(oldvalue,value)
       //if (stu hasOwnProperty) {
         student[key]=value;
          //console.log(1);
       //}  else
       //{ console.log(); ("wrong property")}  
       return(student);   
    },
    schoolAccount: function getSchoolAccount() {
       let accountBalance=0;
       let studentsAll = school.students
       let feesPaid= studentsAll.map( stu => stu.fees).reduce((a,b) => {return(a+b)} )
       console.log(accountBalance+feesPaid);
 }}
 console.log(school.studentsId());
 console.log(school.studentsId());
 console.log(school.registerStudent( "goodness","female",12,09338399,"jhaguhfbghjbf",23));
 console.log(school.registerStudent( "Cherish","female",10,09338758399,"jhaguhfnjnbghjbf",83));
 console.log(school.getAllStudents());
 console.log(school.getStudent("goodness"));
 console.log(school.editStudent("goodness","age",15));
 console.log(school.schoolAccount());

