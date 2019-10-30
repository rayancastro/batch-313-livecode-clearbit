const authorization = "Bearer sk_56743281b9a674c45656095621b231d0";
// TODO
// select input
const form = document.querySelector("#clearbitForm");
// add an event listener

form.addEventListener("submit", (event) => {
  const email = document.querySelector("#clearbitEmail").value;
  const url = `https://person.clearbit.com/v2/combined/find?email=${email}`
  // prevent the default behaviour
  event.preventDefault();
  console.log(event);
    // fetch stuff
  fetch(url, {
    headers: {
      Authorization: authorization
    }
  }).then(response => response.json())
    .then((data) => {
  const location = data.person.location;
  const name = data.person.name.fullName;
  const bio = data.person.bio;
  const avatar = data.person.avatar;
  const freshavatar = document.querySelector("#avatar");
  freshavatar.innerHTML = "";
  freshavatar.insertAdjacentHTML("beforeend", `<img src="${avatar}">`);
  document.querySelector("#userName").innerText = name;
  document.querySelector("#userEmail").innerText = email;
  document.querySelector("#userBio").innerText = bio;
  document.querySelector("#userLocation").innerText = location;
  console.log(data);
  });
});



// display in the HTML




