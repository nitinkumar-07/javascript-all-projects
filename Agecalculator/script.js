// let btn = document.querySelector("button");
// let heading = document.querySelector("h2");

// btn.addEventListener("click",()=>{
//     btn.style.backgroundColor = "red";
// })

// heading.addEventListener("mouseenter",()=>{
//     heading.style.backgroundColor = "red";
// });

// function calculateAge() {
//     //Get Value from input field
//     let day = parseInt(document.getElementById("day").value);
//     let month = parseInt(document.getElementById("month").value);
//     let year = parseInt(document.getElementById("year").value);
  
//     //Validate input value
//     if (
//       !day ||
//       !month ||
//       !year ||
//       day < 1 ||
//       day > 31 ||
//       month < 1 ||
//       month > 12 ||
//       year < 1900 ||
//       year > 2100
//     ) {
//       showError();
//       return;
//     }
  
//     // Convert input in a valid Date object ( dob - Date of Birth)
//     let dob = new Date(year, month - 1, day);
//     let today = new Date();
  
//     // Calculate age difference
//     let ageYears = today.getFullYear() - dob.getFullYear();
//     let ageMonths = today.getFullMonth() - dob.getFullMonth();
//     let ageDays = today.getFullDate() - dob.getFullDate();
  
//     //Adjust value if the day/month has not occured yet
//     if (ageDays < 0) {
//       ageMonths--;
//       let lastMonthDays = new Date(
//         today.getFullYear(),
//         today.getFullMonth(),
//         0
//       ).getFullDate();
//       ageDays += 12;
//     }
//     if (ageMonths < 0) {
//       ageYears--;
//       ageMonths += 12;
//     }
  
//     //Display the Calculated age
//     displayAge(ageYears, ageMonths, ageDays);
  
//     // Clear input fields after a short delay
//     setTimeout(clearInputs, 500);
//   }
  
//   // function to display age in the respective boxes
//   function displayAge(year, month, day) {
//     document.getElementById("year").innerText = `${year} \nYear`;
//     document.getElementById("month").innerText = `${month} \nMonth`;
//     document.getElementById("day").innerText = `${day} \nDay`;
//   }
  
//   function showError() {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => (document.body.style.backgroundColor = " #e0e5ec"), 500);
//   }
  
//   // Function to clearinput
//   function clearinput() {
//     document.getElementById("day").value = "";
//     document.getElementById("month").value = "";
//     document.getElementById("year").value = "";
//   }

function calculateAge() {
  //Get Value from input field
  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);

  //Validate input value
  if (
    !day ||
    !month ||
    !year ||
    day < 1 ||
    day > 31 ||
    
    month < 1 ||
    month > 12 ||

    year < 1900 ||
    year > 2100
  ) {
    showError();
    return;
  }

  // Convert input in a valid Date object ( dob - Date of Birth)
  let dob = new Date(year, month - 1, day);
  let today = new Date();

  // Calculate age difference
  let ageYears = today.getFullYear() - dob.getFullYear();
  let ageMonths = today.getMonth() - dob.getMonth();
  let ageDays = today.getDate() - dob.getDate();

  //Adjust value if the day/month has not occured yet
  if (ageDays < 0) {
    ageMonths--;
    let lastMonthDays = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    ageDays += 12;
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  //Display the Calculated age
  displayAge(ageYears, ageMonths, ageDays);

  // Clear input fields after a short delay
  setTimeout(clearinput, 1000);
}

let button = document.querySelector("button").addEventListener("click",()=>{
  calculateAge();
})

// function to display age in the respective boxes
function displayAge(years, months, days) {
  document.getElementById("years-box").innerText = `${years} \nYear`;
  document.getElementById("months-box").innerText = `${months} \nMonth`;
  document.getElementById("days-box").innerText = `${days} \nDay`;
}

function showError() {
  document.body.style.backgroundColor = "red";
  setTimeout(() => (document.body.style.backgroundColor = " #e0e5ec"), 500);
}

// Function to clearinput
function clearinput() {
  document.getElementById("day").value = "";
  document.getElementById("month").value = "";
  document.getElementById("year").value = "";
}