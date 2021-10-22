const bg = document.querySelector(".main-bg");

function printImage(imgName) {
  bg.setAttribute("style", `background-image: url(img/bg/${imgName}.png)`);
}

function getImgName() {
  let imgId = 0;
  const listImg = ["tanahLot", "barong"];
  //   console.log(listImg.length);
  setInterval(() => {
    if (imgId < listImg.length) {
      let imgName = listImg[imgId];
      imgId += 1;
      printImage(imgName);
    } else {
      imgId = 0;
    }
  }, 3000);
}

getImgName();
