let inputImg = document.querySelector("#img");
let inputName = document.querySelector("#name");
let inputDob = document.querySelector("#dateOfBirth");
let inputRole = document.querySelector("#role");
let inputContact = document.querySelector("#contact");
let submitBtn = document.querySelector("#submitBtn");
let cardContainer = document.querySelector(".card-container");
function CreateIdCard(img, name, dob, role, contact) {
  this.img = img;
  this.name = name;
  this.dob = dob;
  this.role = role;
  this.contact = contact;
}
submitBtn.addEventListener("click", function (form) {
  form.preventDefault();
  if (
    inputImg.value === "" ||
    inputName.value === "" ||
    inputDob.value === "" ||
    inputRole.value === "" ||
    inputContact.value === ""
  ) {
    return;
  } else {
    const userPic = inputImg.value;
    const userName = inputName.value;
    const userDob = inputDob.value;
    const userRole = inputRole.value;
    const userContact = inputContact.value;
    let generatedCard = new CreateIdCard(
      userPic,
      userName,
      userDob,
      userRole,
      userContact,
    );
    let newCard = document.createElement("div");
    newCard.classList.add("generated-id");
    newCard.innerHTML = ` 
    <div class="imgBox">
    <img class="img" src="${generatedCard.img}">
    </div>
    <div class="nameBox">
    <span class="nameHolder">NAME:</span>
    <span class="name">${generatedCard.name}</span>
    </div>
    <div class="dobBox">
    <span class="dobHolder">DOB:</span>
    <span class="dob">${generatedCard.dob}</span>
    </div>
    <div class="roleBox">
    <span class="roleHolder">ROLE:</span>
    <span class="role">${generatedCard.role}</span>
    </div>
    <div class="contactBox">
    <span class="contactHolder">CONTACT:</span>
    <span class="contact">${generatedCard.contact}</span>
    </div>`;
    cardContainer.appendChild(newCard);
    inputName.value = "";
    inputDob.value = "";
    inputContact.value = "";
    inputRole.value = "";
  }
});
