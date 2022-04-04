
document.querySelector('.button').addEventListener('click', () => {
  const userName = document.querySelector('.elem1').value;
  document.querySelector('.out-block1').innerHTML = userName;

  const userParol = document.querySelector('.elem2').value;
  document.querySelector('.out-block2').innerHTML = userParol;

  localStorage.setItem('name', userName);
  localStorage.setItem('password', userParol);
})




