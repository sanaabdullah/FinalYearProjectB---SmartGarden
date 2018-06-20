  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDsh-h-cx_DoC2Q0vyDNZrJC0KwQff6yoU",
    authDomain: "smartgarden-fyp.firebaseapp.com",
    databaseURL: "https://smartgarden-fyp.firebaseio.com",
    projectId: "smartgarden-fyp",
    storageBucket: "smartgarden-fyp.appspot.com",
    messagingSenderId: "516399248746"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('hardware');

// Listen for form submit
document.getElementById('registrationForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('registrationForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}