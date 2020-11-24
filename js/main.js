let school = {
    students: [],
    Staff: []
    };
let students = [
     {
        sdid: this.sdid,
        name: this.name,
        gender: this.gender,
        age: this.age,        
        phone: this.phone,
        address: this.address,
        fees: this.fees,
        feesp: this.feesp
    }
]
let staff = [
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
        age: sdage.value,
        phone:sdphone.value,
        address: sdaddress.value,
        fees:sdfees.value,
        feesp: feesp+=sdfees.value
    })       
    console.log(school)
    console.log(student)
    console.log(feesp)
}


function payfees(){
    let sli= document.getElementById('tuitionfee').value
    let feespaid = 0
    feespaid +=(sli)
}

function studentID(){
    var letters = "0123456789ABCDEF";
    var id = "SF"
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
     let stu= school.students.filter( student => student.sdid == id);
        if (school.students.filter(student => student.sdid == id)){
            console.log(stu)
           }else{console.log("NOT A VALID STUDENT-ID")}    
}
function modifySdInfo(){
    let keys = JSON.stringify(document.getElementById('key').value)
    let repl = document.getElementById('replace').value
    let id=document.getElementById('sdid').value
    let stu= school.students.filter( student => student.sdid == id);
    if (school.students.filter(student => student.sdid == id)){
      let index =findIndex(student)  ;
      console.log(index)
      student[index].keys=repl;         
            }
        
        console.log(stu)
        }
function deleteSdAct(){
    let id=document.getElementById('ddid').value
    let stu= school.students.filter( student => student.sdid == id);
    if (school.students.filter(student => student.sdid == id)){
       //let student= school.getSdInfo(id);
       let index= school.findIndex(stu);
       stu.splice(index,1)
    }
    console.log(student)
}
