let school = {
    students: [],
    Staff: []
    };

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

    //local storage starts here
    
    // Put the student array into local storage
   localStorage.setItem('school', JSON.stringify(school));

   // Retrieve the array from storage
   var retrievedSchool = localStorage.getItem('school');

   console.log('retrievedSchool: ', JSON.parse(retrievedSchool));


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


//function for finding student

findStudent = () => {
    let stdId = document.querySelector('.stdId').value;
    let moreInfo = document.querySelector('.moreInfo');

    let stdFind = school.students.find(el => el.sdid === stdId);

    console.log(stdFind);

    let displayStudent = Object.values(stdFind);
    moreInfo.innerHTML = displayStudent;


}

//function for finding student

findStudent = () => {
    let stdId = document.querySelector('.stdId').value;
    let moreInfo = document.querySelector('.moreInfo');

    let stdFind = school.students.find(el => el.sdid === stdId);

    console.log(stdFind);

    let displayStudent = Object.values(stdFind);
    moreInfo.innerHTML = displayStudent;
}

// removing student
removeStudent = () => {
let stdId = document.querySelector('.stdId').value;

    for (let i = school.students.length - 1; i >= 0; i--) {
        if (school.students[i] === stdId) {
        school.students.splice(i, 1);
        }
    }
}