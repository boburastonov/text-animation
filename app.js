const span = document.querySelectorAll(".anim-item");

for (let i = 0; i < span.length; i++) {
  const changeColor1 = () => {
    span[i].style.color = 'purple'
  };
  const fColor = setTimeout(changeColor1, 2500);

  const changeColor2 = () => {
    span[i].style.color = "blue";
  };
  const sColor = setTimeout(changeColor2, 5000);

    const changeColor3 = () => {
      span[i].style.color = "green";
    };
    const tColor = setTimeout(changeColor3, 7500);

  const changeColor4 = () => {
    span[i].style.color = "#d77069";
  };
  const ftColor = setTimeout(changeColor4, 10000);
}
