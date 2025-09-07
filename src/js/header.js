import { getDate } from ".."

const input = document.querySelector("input")

function main() {
    input.addEventListener("keydown",(e) => {
        if(e.key === "Enter"){
            getDate(input.value)
        }
    })
}


export {
    main,
}