const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const response = await axios.post("/login", {
    username: username.value,
    password: password.value,
  });
  if (response.data.status === "success") {
    localStorage.setItem(response.data.token);
  } else {
    alert("sorry try again");
  }
});
