function getRandomColor() {
  const hexChars = '01234567890ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++){
    let randomIndex = Math.floor(Math.random() * 16);
    color += hexChars[randomIndex];
  }
  return color;
}

document.addEventListener('DOMContentLoaded', () => {
  const changeColorBtn = document.getElementById('change-color-btn');
  changeColorBtn.addEventListener('click', () => {
  document.getElementById('color-box').style.backgroundColor = getRandomColor();
  }); 
});



