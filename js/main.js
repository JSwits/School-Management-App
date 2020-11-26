let school = {
    students: [],
    staff: []
};
const student=school.students;
const staf=school.staff
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
    console.log(student)    
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
    console.log(keys);

    let repl = document.getElementById('replace').value
    console.log(repl);

    let id=document.getElementById('mdid').value
    console.log(id);

    let stu= school.students.find( student => student.sdid == id);
    console.log(stu);

    if (school.students.find(student => student.sdid == id)){     
        // stu[keys]=repl; 
        // console.log(stu)
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

//STAFF DASHBOARD
function registerSNew(){
    salaryp=0;
    let sfname= document.getElementById('sfname');
    let sfgender = document.getElementById('sfgender')
    let sfage = document.getElementById('sfage')
    let sfphone = document.getElementById('sfphone')
    let sfaddress= document.getElementById('sfaddress')
    let sfsal = document.getElementById('sal') 
     
    staf.push({
        stfid: staffId(),
        sname: sfname.value,
        sgender: sfgender.value,
        sdob: sfage.value,
        sphone:sfphone.value,
        saddress: sfaddress.value,
        salary:sfsal.value,
        salaryp: salaryp+=parseInt(sfsal.value)
    })       
    console.log(staf)
    //console.log(staf)
    
}

//get staffinformation
function getSfInfo(){
    let sid=document.getElementById('sfid').value
    let stf= school.staff.find( staf => staf.sfid == sid);
    if (stf= school.staff.find( staf => staf.sfid == sid)){
        console.log(stf)
    }else{console.log("NOT A VALID STAFF-ID")}    
}

function modifySfInfo(){
    let skeys = document.getElementById('skey').value
    let srepl = document.getElementById('sreplace').value
    let sid=document.getElementById('mfid').value
    let stf= school.staff.find( staf => staf.sfid == sid);
    if (school.staff.find( staf => staf.mfid == sid)){   
        stf[skeys]=srepl; 
        console.log(stf)
        //return(stu) 
    }
}


function deleteSfAct(){
    let sid=document.getElementById('dfid').value
    let woos = school.staff;
    let stf= school.staff.find( staf => staf.dfid == sid);
    if (stf= school.staff.find( staf => staf.dfid == sid)){           
        let sindex= woos.indexOf(stf);
        woos.splice(sindex,1)
        console.log(school)
    }    
}


//SCHOOL DASH BOARD
function schoolInfo(){
    console.log(school)
}

function schoolBalance(){      
    for (i=0; i< student.length; i++){
        schoolIncome += parseInt(student[i].fees)
    }    
    console.log(schoolIncome)
}