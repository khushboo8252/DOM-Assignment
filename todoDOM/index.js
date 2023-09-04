const myForm = document.querySelector("form");
const inpTak = document.getElementById("task")
const prioritySelect = document.getElementById("priority");
let tbody = document.querySelector("tbody")


let AllTask = [];
myForm.addEventListener("submit",function(e)
{
 e.preventDefault();
 
  Data = 
 {
  input : inpTak.value,
  priority : prioritySelect.value
 }
AllTask.push(Data);

tbody.innerHTML = "";
AllTask.map((ele)=>
{
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  console.log(ele.input)
  td1.innerText = ele.input;
  td2.innerText = ele.priority;
  tr.append(td1,td2);
  tbody.append(tr)

})
})


