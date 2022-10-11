let age = parseInt(prompt('당신의 나이는?'));

if ('age >= 19') {
  alert('You can drink');
} else if (isNaN(age)) {
  alert('Please enter Number');
} else {
  alert('You cant drink');
}
