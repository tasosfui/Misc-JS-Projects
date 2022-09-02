//Select DOM elements
const form = document.getElementById("form");
const itemsList = document.querySelector(".list");
//Inputs
const firstNameInput = form["firstName"];
const lastNameInput = form["lastName"];
const ageInput = form["age"];
const phoneInput = form["phone"];
const emailInput = form["email"];
const cityInput = form["city"];

const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(firstName, lastName, age, phone, email, city) {
  items.push({
    firstName: firstName,
    lastName: lastName,
    age: age,
    phone: phone,
    email: email,
    city: city,
  });

  //Save to Local Storage
  localStorage.setItem("items", JSON.stringify(items));

  return { firstName, lastName, age, phone, email, city };
}

//Create Items and Insert the items in the DOM
function createItem({ firstName, lastName, age, phone, email, city }) {
  //Create the container of each item
  const listDiv = document.createElement("div");
  //Create the elements that will show each input
  const itemFirstName = document.createElement("h2");
  const itemLastName = document.createElement("h2");
  const itemAge = document.createElement("p");
  const itemPhone = document.createElement("p");
  const itemEmail = document.createElement("p");
  const itemCity = document.createElement("p");
  //Fill the Content
  itemFirstName.innerText = `First Name : ${firstName}`;
  itemLastName.innerText = `Last Name: ${lastName}`;
  itemAge.innerText = `Age: ${age}`;
  itemPhone.innerText = `Phone: ${phone}`;
  itemEmail.innerText = `E-mail: ${email}`;
  itemCity.innerText = `City: ${city}`;
  //Add to the DOM
  listDiv.append(
    itemFirstName,
    itemLastName,
    itemAge,
    itemPhone,
    itemEmail,
    itemCity
  );

  itemsList.appendChild(listDiv);
}

items.forEach(createItem);

form.onsubmit = (e) => {
  e.preventDefault();

  const newItem = addItem(
    firstNameInput.value,
    lastNameInput.value,
    ageInput.value,
    phoneInput.value,
    emailInput.value,
    cityInput.value
  );
  createItem(newItem);
  //Clear the form inputs on submit
  firstNameInput.value = "";
  lastNameInput.value = "";
  ageInput.value = "";
  phoneInput.value = "";
  emailInput.value = "";
  cityInput.value = "";
};
