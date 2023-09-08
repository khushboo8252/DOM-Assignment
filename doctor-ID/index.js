
// fill in javascript code here

document.addEventListener("DOMContentLoaded", function () {
    let myForm = document.querySelector("form");
    let inpName = document.getElementById("name");
    let inpDoc = document.getElementById("docID");
    let inpDept = document.getElementById("dept");
    let inpExp = document.getElementById("exp");
    let inpEmail = document.getElementById("email");
    let inpMbl = document.getElementById("mbl");
    let tbody = document.getElementById("docTableBody");
  
    myForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let experience = parseFloat(inpExp.value);
  
      let role = "";
      if (experience > 5) {
        role = "Senior";
      } else if (experience >= 2 && experience <= 5) {
        role = "Junior";
      } else {
        role = "Trainee";
      }
  
      let Data = {
        name: inpName.value,
        docID: inpDoc.value,
        dept: inpDept.value,
        exp: experience, // Store the numeric value of experience
        email: inpEmail.value,
        mbl: inpMbl.value,
        role: role,
      };
  
      // Reset the form fields
      myForm.reset();
  
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");
      let td6 = document.createElement("td");
      let td7 = document.createElement("td");
      let td8 = document.createElement("td");
  
      td1.innerText = Data.name;
      td2.innerText = Data.docID;
      td3.innerText = Data.dept;
      td4.innerText = Data.exp;
      td5.innerText = Data.email;
      td6.innerText = Data.mbl;
      td7.innerText = Data.role;
      td8.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
  
      tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
      tbody.appendChild(tr);
    });
  
    // Function to delete a row
    function deleteRow(button) {
      let row = button.closest("tr");
      row.remove();
    }
  });
  


