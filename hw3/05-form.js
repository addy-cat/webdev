function handleSubmit() {
  // Add your code here
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const comment = document.querySelector('#comment').value;
  const checkbox = document.querySelector('#checkbox');


  console.log('========= Form Submission =========');
  console.log(`   Name: ${name}`);
  console.log(`   Email: ${email}`);
  console.log(`   Feedback: ${comment}`);
  if(checkbox.checked == true){
    console.log('   Yes, I would like to join the newsletter.');
  } else {
    console.log('   No, I would not like to join the newsletter.')
  }
}
