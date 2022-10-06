// Manipulate Data
document.addEventListener("userDataReady", function (e) {
  const response = JSON.parse(e.detail.jsonText);

  response.forEach((element) => {
    // Get template
    const elementFragment = document
      .getElementById("user-card-template")
      .content.cloneNode(true);

    // Image Avatar
    elementFragment?.querySelector("img")?.setAttribute("src", element.avatar);

    // Image Alt
    elementFragment
      .querySelector("img")
      .setAttribute("alt", element.firstName + " " + element.lastName);

    // /firstName lastName
    elementFragment.querySelector(".card").querySelector("h1").innerHTML =
      element.firstName + " " + element.lastName;

    //Email
    elementFragment.querySelector(".card").querySelector("p").textContent =
      element.email;

    //Telephone
    elementFragment.querySelector(".card").querySelector("span").textContent =
      element.phoneNumber;

    // Address streetAddress/zipCode city/country
    const address = elementFragment
      .querySelector(".card .address")
      .getElementsByTagName("p");

    for (i = 0; i < address.length; i++) {
      if (i == 0) {
        address[i].textContent = element.address.streetAddress;
      } else if (i == 1) {
        address[i].textContent =
          element.address.zipCode + " " + element.address.city;
      } else {
        address[i].textContent = element.address.country;
      }
    }

    //Homepage Link
    elementFragment
      .querySelector(".homepage")
      .querySelector("a")
      .setAttribute("href", element.homepage);

    // Hompage text
    elementFragment.querySelector(".homepage").querySelector("a").textContent =
      element.homepage;

    const contact = document.getElementById("contacts");
    contact.appendChild(elementFragment);
  });
});

//Fetch Data
fetchUserData();
