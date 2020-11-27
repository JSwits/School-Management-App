let school = {
    students: [],
    staff: []
};
const student=school.students;
const staf=school.staff;
let schoolIncome = 0;
let schoolExpenditure = 0;
let schoolBalnce = 0;
let totalStudent= 1;
let totalStaff=1;
fees=document.getElementById('tuitionfee').value
//register new student

function studentID(){
    let id="SD20";
    let num = String(totalStudent);
    while (num.length < 4) {
      num = "0" + num;
    }
    let idnum= id + num
    totalStudent++
    return (idnum)
}

function staffId(){
    let id="SF20";
    let num = String(totalStaff);
    while (num.length < 4) {
        num = "0" + num;
    }
    let idnum= id + num
    totalStaff++
    return (idnum)
         
}

function getAge(db){
    let today = new Date();
    let birthDate = new Date(db);
    let presentAge = today.getFullYear()-birthDate.getFullYear();
    let mth = today.getMonth()-birthDate.getMonth();
    if(mth < 0 || (mth===0 && today.getDate()<birthDate.getDate())){
        presentAge--;
    }return (presentAge + ' years');
   
}

function clearField(){
    document.getElementById('sdname').value= "";
    document.getElementById('sdgender').value= "";
    document.getElementById('sdage').value= "";
    document.getElementById('sdphone').value= "";
    document.getElementById('sdaddress').value= "";
    document.getElementById('tuitionfee').value= "";
    document.getElementById('key').value="";
    document.getElementById('replace').value="";
    document.getElementById('mdid').value="";
    document.getElementById('sdid').value="";
    document.getElementById('ddid').value="";
}

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
        age: getAge(sdage.value),
        phone:sdphone.value,
        address: sdaddress.value,
        fees:sdfees.value,
        feesp: feesp+=parseInt(sdfees.value)
    })          
    console.log(student)    
        
    setTimeout(clearField,2000)
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
    //console.log(keys);

    let repl = document.getElementById('replace').value
    //console.log(repl);

    let id=document.getElementById('mdid').value
    //console.log(id);

    let stu= school.students.find( student => student.sdid == id);
    //console.log(stu);

    if (school.students.find(student => student.sdid == id)){     
        stu[keys]=repl; 
        console.log(stu)
        return(stu)  
    }else{console.log("NOT A VALID STUDENT-ID")} 
   setTimeout(clearField,1000)
}

function deleteSdAct(){
    let id=document.getElementById('ddid').value
    let woo = school.students;
    let stu= school.students.find( student => student.sdid == id);
        if (school.students.find(student => student.sdid == id)){              
    let index= woo.indexOf(stu);
    woo.splice(index,1)
    console.log(school)
    }else{console.log("NOT A VALID STUDENT-ID")} 
    document.getElementById('ddid').value="";
}

//STAFF DASHBOARD
function clearFields(){
    document.getElementById('sfname').value= "";
    document.getElementById('sfgender').value= "";
    document.getElementById('sfage').value= "";
    document.getElementById('sfphone').value= "";
    document.getElementById('sfaddress').value= "";
    document.getElementById('sal').value= "";
    document.getElementById('sfid').value="";
    document.getElementById('skey').value="";
    document.getElementById('sreplace').value="";
    document.getElementById('mfid').value="";
    document.getElementById('dfid').value="";
}

function registerSNew(){
    salaryp=0;
    let sfname= document.getElementById('sfname');
    let sfgender = document.getElementById('sfgender');
    let sfage = document.getElementById('sfage');
    let sfphone = document.getElementById('sfphone');
    let sfaddress= document.getElementById('sfaddress');
    let sfsal = document.getElementById('sal');
     
    staf.push({
        stfid: staffId(),
        name: sfname.value,
        gender: sfgender.value,
        dob: sfage.value,
        age: getAge(sfage.value),
        phone:sfphone.value= "",
        address: sfaddress.value,
        salary:sfsal.value,
        salaryp: salaryp+=parseInt(sfsal.value)
    })       
    console.log(staf)
    setTimeout(clearFields,1000)
    //console.log(staf)
    
}

//get staffinformation
function getSfInfo(){
    let sid=document.getElementById('sfid').value
    let stf= school.staff.find( staf => staf.stfid == sid);
    if (school.staff.find( staf => staf.stfid == sid)){
        console.log(stf)
    }else{console.log("NOT A VALID STAFF-ID")} 
    setTimeout(clearFields,1000)
}

function modifySfInfo(){
    let skeys = document.getElementById('skey').value
    let srepl = document.getElementById('sreplace').value
    let sid=document.getElementById('mfid').value
    let stf= school.staff.find( staf => staf.stfid == sid);
    if (school.staff.find( staf => staf.stfid == sid)){
        stf[skeys]=srepl; 
        console.log(stf)
        //return(stu) 
    }else {console.log('NOT A VALID STAFF-ID')}
    setTimeout(clearFields,1000)
}


function deleteSfAct(){
    let sid=document.getElementById('dfid').value
    let woos = school.staff;
    let stf= school.staff.find( staf => staf.stfid == sid);
    if (school.staff.find( staf => staf.stfid == sid)){          
        let sindex= woos.indexOf(stf);
        woos.splice(sindex,1)
        console.log(school)
    }  else {console.log('NOT A VALID STAFF-ID')}
    document.getElementById('dfid').value=""
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