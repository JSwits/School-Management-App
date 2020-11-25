let school = {
    students: [],
    Staff: []
    };
    students : [
     {
        sdid: this.sdid,
        name: this.name,
        gender: this.gender,
        dob: this.dob,        
        phone: this.phone,
        address: this.address,
        fees: this.fees,
        feesp: this.feesp
    }
]
    staff : [
    {
        name: this.name,
        sfid: this.stid,
        gender: this.gender,
        phone: this.phone,
        address: this.address,
        salary: this.salary,
        salaryp: this.salaryp
    }
]
const student=school.students
let schoolIncome = 0;
let schoolExpenditure = 0;
let schoolBalnce = 0;
fees=document.getElementById('tuitionfee').value
//register new student
function registerNew(){
    feesp=0;
    let sdname= document.getElementById('sdname');
    let sdgender = document.getElementById('sdgender')
    let sdage = document.getElementById('sdage')
    let sdphone = document.getElementById('sdphone')
    let sdaddress= document.getElementById('sdaddress')
    let sdfees = document.getElementById('tuitionfee')  
    school.students.push({
        sdid: studentID(),
        name: sdname.value,
        gender: sdgender.value,
        dob: sdage.value,
        phone:sdphone.value,
        address: sdaddress.value,
        fees:sdfees.value,
        feesp: feesp+=parseInt(sdfees.value)
    })       
    console.log(school)
    console.log(student)
    console.log(feesp)
}

function studentID(){
    var letters = "0123456789ABCDEF";
    var id = "SD"
    for (var i=0; i<9; i++){
        id+=letters[Math.floor(Math.random()*16)];
    } return id;
}
function staffId(){
    var letters = "0123456789GHIJKL";
    var id = "SF"
    for (var i=0; i<9; i++){
        id+=letters[Math.floor(Math.random()*16)];
    } return id;
}
//get student information
function getSdInfo(){
    let id=document.getElementById('sdid').value
     let stu= school.students.find( student => student.sdid == id);
        if (school.students.find(student => student.sdid == id)){
            console.log(stu)
           }else{console.log("NOT A VALID STUDENT-ID")}    
}
function modifySdInfo(){
    let keys = document.getElementById('key').value
    let repl = document.getElementById('replace').value
    let id=document.getElementById('mdid').value
    let stu= school.students.find( student => student.sdid == id);
        if (school.students.find(student => student.sdid == id)){
           
    stu[keys]=repl; 
    console.log(stu)
    //return(stu) 
    
      }
   }
function deleteSdAct(){
    let id=document.getElementById('ddid').value
    let woo = school.students;
    let stu= school.students.find( student => student.sdid == id);
        if (school.students.find(student => student.sdid == id)){              
       let index= woo.indexOf(stu);
       woo.splice(index,1)
       console.log(school)
    }    
}

function schoolBalance(){      
    for (i=0; i< student.length; i++){
        schoolIncome += parseInt(student[i].fees)
    }    
console.log(schoolIncome)
}

