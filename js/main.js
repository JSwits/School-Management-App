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
