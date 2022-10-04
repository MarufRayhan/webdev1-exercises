const userId = "MikkoLuhtasaari";
const usersUrl = "https://api.github.com/users/";
const url = usersUrl + userId;

const userDataElement = document.getElementById("userData");
const reposElement = document.getElementById("repositoryData");

const fetchAsync = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

document.getElementById("fetchBtn").addEventListener("click", async () => {
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

  try {
    const user = await fetchAsync(url);
    document.getElementById("userData").innerText = JSON.stringify(user);
    const userRepos = await fetchAsync(user.repos_url);
    document.getElementById("repositoryData").innerText = "Repository count: " + userRepos.length;
  } catch (e) {
    console.error(e);
  }
})
