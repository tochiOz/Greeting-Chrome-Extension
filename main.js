let userName;

function saveName() {
    localStorage.setItem('receivedName', userName);
}

function changeName() {
   userName = document.getElementById("name-input").value;
   saveName();
   getGreeting();
}

document.getElementById("name-form").addEventListener('submit', function(e) {
   e.preventDefault()
   changeName();
});

function getGreeting() {
  userName = localStorage.getItem('receivedName');
  if (userName === null || userName === "") {
    userName = "Friend";
  }
  console.log(userName);
   document.getElementById("greeting").innerHTML  = `Hello, ${userName}. Enjoy your day!`;
}



function openSettings() {
  document.getElementById("settings").classList.toggle("settings-open");
};

document.getElementById("settings-button").addEventListener('click', openSettings)