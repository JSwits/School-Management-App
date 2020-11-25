let staff = [];

let sfbutton = document.querySelector('.sfbutton');

sfbutton.onclick = function EmployStaff () {

    EmployStaff.preventDefault;

let sffname = document.querySelector('.sffname').value;
let sflname = document.querySelector('.sflname').value;
let sfoname = document.querySelector('.sfoname').value;
let sfgender = document.getElementById('sfgender').value;
let sfaddress = document.querySelector('.sfaddress').value;
let sfpnumber = document.querySelector('.sfpnumber').value;
let sffee = document.querySelector('.sffee').value;
let sfpaid = document.getElementById('sfpaid').value;

    staff.push({
        "first name" : sffname,
        "last name": sflname,
        "other name": sfoname,
        gender: sfgender,
        address: sfaddress,
        paid: sfpaid,
        pnumber: sfpnumber,
        paid: sfpaid,
        sfid: staffId()

    })

    console.log(staff);

    //local storage starts here

    // Put the staff array into storage
    localStorage.setItem('staff', JSON.stringify(staff));

    // Retrieve the array from storage
    var retrievedArray = localStorage.getItem('staff');

    console.log('retrievedArray: ', JSON.parse(retrievedArray));


}


function staffId () {
    var letters = "0123456789GHIJKL";
    var id = "SF"
    for (var i=0; i<9; i++){
        id+=letters[Math.floor(Math.random()*16)];
    } return id;
}


