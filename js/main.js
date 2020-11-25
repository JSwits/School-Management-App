//main student and school array
let school = {
    students: [],
    Staff: []
    };
//student array
let students = [
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
//staff array
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

//html DOM Value
fees=document.getElementById('tuitionfee').value
//register new student
function registerStudent(){
    feesp=0;
    let sdname= document.getElementById('sdname');
    let sdgender = document.getElementById('sdgender')
    let sdob = document.getElementById('sdob')
    //console.log(sdob);
    let sdphone = document.getElementById('sdphone')
    let sdaddress= document.getElementById('sdaddress')
    let sdfees = document.getElementById('tuitionfee')  
    school.students.push({
        sdid: studentID(),
        name: sdname.value,
        gender: sdgender.value,
        dob: sdob.value,
        phone:sdphone.value,
        address: sdaddress.value,
        fees:sdfees.value,
        feesp: payfees(sdfees)
    })       
    console.log(school)
    console.log(students)
    console.log(feesp)
}
console.log(school)

function payfees(n){
    let sli= document.getElementById('tuitionfee')
    let feespaid = 0
    feespaid +=Number(sli.values)
}

function studentID(){
    var letters = "0123456789ABCDEF";
    var id = "SF"
    for (var i=0; i<15; i++){
        id+=letters[Math.floor(Math.random()*16)];
    } return id;
}
function staffId(){
    var letters = "0123456789GHIJKL";
    var id = "SF"
    for (var i=0; i<15; i++){
        id+=letters[Math.floor(Math.random()*16)];
    } return id;
}
//deleting a student from database
function deleteStudent() {
    
}

//search function for both students and staff
function searchById() {
    
}

function searchByName() {
    
}
