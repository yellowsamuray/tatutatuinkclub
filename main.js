
let filePathFrame = 
    ["img/frame/1.png",
    "img/frame/2.png",
    "img/frame/3.png",
    "img/frame/4.png",
    "img/frame/5.png",
    "img/frame/6.png",
    "img/frame/7.png",
    "img/frame/8.png",
    "img/frame/9.png"
]
let filePathInner = [
    "img/inner/1.png",
    "img/inner/2.png",
    "img/inner/3.png",
    "img/inner/4.png",
    "img/inner/5.png",
    "img/inner/6.png",
    "img/inner/7.png",
    "img/inner/8.png",
    "img/inner/9.png",
    "img/inner/10.png",
    "img/inner/11.png",
    "img/inner/12.png",
    "img/inner/13.png",
    "img/inner/14.png",
    "img/inner/15.png",
    "img/inner/16.png",
    "img/inner/17.png",
    "img/inner/18.png",
    "img/inner/19.png",
    "img/inner/20.png",
    "img/inner/21.png",
    "img/inner/23.png",
]
let imgResultEl = document.getElementById("img-frame-el")
let imgInnerEl = document.getElementById("img-in-el")
let prevFrameBtnEl = document.getElementById("prev-frame-btn-el")
let nextFrameBtnEl = document.getElementById("next-frame-btn-el")
let prevInnerBtnEl = document.getElementById("prev-inner-btn-el")
let nextInnerBtnEl = document.getElementById("next-inner-btn-el")
let frameIndex = 0
let innerIndex = 0

//Frame button functionallity
let newSourceFrame = ()=>{
    if(filePathFrame[frameIndex] == undefined){
        frameIndex = 0
    }
    let newPath = filePathFrame[frameIndex]
    imgResultEl.src=newPath
}

let prevImgFrame = () =>{
    frameIndex--
    newSourceFrame()
}

let nextImgFrame = () =>{
    frameIndex++
    newSourceFrame()
}

// inner frame button functionallity
let newSourceInner = ()=>{
    if(filePathInner[innerIndex] == undefined){
        innerIndex = 0
    }
    let newPath = filePathInner[innerIndex]
    imgInnerEl.src=newPath
}

let prevImgInner = () =>{
    innerIndex--
    newSourceInner()
}

let nextImgInner = () =>{
    innerIndex++
    newSourceInner()
}


prevFrameBtnEl.addEventListener("click",prevImgFrame)
nextFrameBtnEl.addEventListener("click",nextImgFrame)

prevInnerBtnEl.addEventListener("click",prevImgInner)
nextInnerBtnEl.addEventListener("click",nextImgInner)