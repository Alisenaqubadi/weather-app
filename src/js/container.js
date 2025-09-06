const img = document.querySelector('.icon')
const temp = document.querySelector(".temp")

function main(res) {
  import(`../icons/${res.icon}.svg`)
  .then((res) => {
    img.src = res.default
  })
  .catch((error) => {
    console.log("error",error)
  })
  temp.innerText = res.temp;
}

export { main }
