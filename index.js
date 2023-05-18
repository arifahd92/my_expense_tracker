
let addbtn = document.getElementById("addbtn");
let ol = document.getElementById("ol");
let count = true;
let currArr = [];
let totalarr = [];
let saved = JSON.parse(localStorage.getItem("key"));
if (saved) {
  saved.forEach((element) => {
    li = document.createElement("li");
    div = document.createElement("span");
    div.className = "w-100 d-inline-block bg-primary text-white p-2";
    div.innerText = `${element[0]}-${element[1]} ${element[2]}`;
    ol.appendChild(li);
    li.appendChild(div);
    btn1 = document.createElement("button");
    btn2 = document.createElement("button");

    btn1.innerText = "edit";
    btn1.className = "edit btn btn-primary bg-success m-3 ";
    btn2.innerText = "delete";
    btn2.className = "dlt btn btn-primary m-3 bg-danger ";

    div.appendChild(btn1);

    div.appendChild(btn2);
  });
}
addbtn.addEventListener("click", addfunction);
function addfunction() {
  //count = false;
  console.log("object");
  let amount = amnt.value;
  let description = dcpn.value;
  let category = option.value;
  if (!amount || !description || category == "Choose an option") {
    alert("pllease fill all the data");
    return;
  }
  currArr = [amount, description, category];
  console.log(currArr);
  let saved = JSON.parse(localStorage.getItem("key"));
  console.log("im value of saved " + saved);
  if (saved != null) {
    totalarr = [...saved, [...currArr]];
  } else {
    totalarr = [...totalarr, [...currArr]];
  }
  if (addbtn.innerText == "add expense") {
    localStorage.setItem("key", JSON.stringify(totalarr));
    currArr.length = 0;
    amnt.value = "";
    dcpn.value = "";
    location.reload();
  } else {
    return;
  }
}

list = document.querySelectorAll(".dlt");
list.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    console.log(item.innerText, "my nane ij khan", index);
    let saved = JSON.parse(localStorage.getItem("key"));
    let filtered = saved.filter((item, ind) => ind != index);
    localStorage.setItem("key", JSON.stringify(filtered));
    location.reload();
  });
});
list = document.querySelectorAll(".edit");

list.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    console.log(item.innerText, "my nane ij khan", index);
    let saved = JSON.parse(localStorage.getItem("key"));

    console.log(saved);
    newarr = saved.filter((item, ind) => ind == index);
    console.log(newarr[0][0]);
    amnt.value = newarr[0][0];
    dcpn.value = newarr[0][1];
    option.value = newarr[0][2];
    addbtn.innerText = "save";
    addbtn.addEventListener("click", () => {
      addbtn.innerText = "add expense";
      console.log(index);

      let amount = amnt.value;
      let description = dcpn.value;
      let category = option.value;
      let modefied = [amount, description, category];
      saved[index] = modefied;
      localStorage.setItem("key", JSON.stringify(saved));
      amnt.value = "";
      dcpn.value = "";
      location.reload();
    });
  });
});
