let completed = 0;

function complete(btn){

if(btn.innerHTML === "Mark Completed"){

btn.innerHTML = "Completed ✔";
btn.classList.add("completed");

completed++;

document.getElementById("progress").innerHTML =
completed + " out of 6 activities completed";

let percent = (completed/6)*100;

document.getElementById("bar").style.width = percent + "%";

}

}
