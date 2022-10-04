const userId = "MikkoLuhtasaari";
const usersUrl = "https://api.github.com/users/";
const url = usersUrl + userId;

const userDataElement = document.getElementById("userData");
const reposElement = document.getElementById("repositoryData");

document.getElementById("fetchBtn").addEventListener("click", () => {
  // See Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((user) => {
      userDataElement.innerText = JSON.stringify(user);
      return user;
    })
    .then((user) => {
      fetch(user.repos_url)
        .then((data) => {
          return data.json();
        })
        .then((repos) => {
          reposElement.innerText = repos.length;
        })
        .catch((error) => {
          console.error(error);
        })
    })
    .catch((error) => {
      console.error(error);
    })
})
