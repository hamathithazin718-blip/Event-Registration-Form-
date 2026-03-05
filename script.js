document.getElementById("registrationForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let event=document.getElementById("event");
let college=document.getElementById("college");
let confirm=document.getElementById("confirm");

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

let valid=true;

/* Name Validation */

if(name.value.trim()==""){
name.classList.add("invalid");
valid=false;
}else{
name.classList.remove("invalid");
name.classList.add("valid");
}

/* Email Validation */

if(!email.value.match(emailPattern)){
email.classList.add("invalid");
valid=false;
}else{
email.classList.remove("invalid");
email.classList.add("valid");
}

/* Phone Validation */

if(phone.value.length!=10 || isNaN(phone.value)){
phone.classList.add("invalid");
valid=false;
}else{
phone.classList.remove("invalid");
phone.classList.add("valid");
}

/* Event Validation */

if(event.value==""){
event.classList.add("invalid");
valid=false;
}else{
event.classList.remove("invalid");
event.classList.add("valid");
}

/* College Validation */

if(college.value.trim()==""){
college.classList.add("invalid");
valid=false;
}else{
college.classList.remove("invalid");
college.classList.add("valid");
}

/* Checkbox Validation */

if(!confirm.checked){
alert("Please confirm the details");
valid=false;
}

/* If Valid */

if(valid){

let gender=document.querySelector('input[name="gender"]:checked');
let mode=document.querySelector('input[name="mode"]:checked');

if(!gender || !mode){
alert("Please select gender and participation mode");
return;
}

let table=document.getElementById("participantsTable");

/* Duplicate Email Check */

let rows=table.rows;

for(let i=1;i<rows.length;i++){
if(rows[i].cells[1].innerHTML==email.value){
alert("Email already registered!");
return;
}
}

/* Add Row */

let row=table.insertRow();

row.insertCell(0).innerHTML=name.value;
row.insertCell(1).innerHTML=email.value;
row.insertCell(2).innerHTML=phone.value;
row.insertCell(3).innerHTML=event.value;
row.insertCell(4).innerHTML=mode.value;

/* Delete Button */

let deleteBtn=document.createElement("button");
deleteBtn.innerHTML="Delete";

deleteBtn.onclick=function(){
row.remove();
updateCount();
};

row.insertCell(5).appendChild(deleteBtn);

/* Success Message */

let msg=document.getElementById("message");
msg.innerHTML="Registration Successful!";

setTimeout(function(){
msg.innerHTML="";
},3000);

/* Update Count */

updateCount();

/* Reset Form */

document.getElementById("registrationForm").reset();

name.classList.remove("valid");
email.classList.remove("valid");
phone.classList.remove("valid");
event.classList.remove("valid");
college.classList.remove("valid");

}

});

function updateCount(){
let table=document.getElementById("participantsTable");
let count=document.getElementById("count");
count.innerHTML=table.rows.length-1;
}
