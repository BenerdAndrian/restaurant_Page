import { DOMManipulationForContent } from "./home";
import { introductory } from "./about";
import { menuDisplay } from "./menu";
import "./styles.css"
const button1=document.querySelector(".home");
const button2=document.querySelector(".menu");
const button3=document.querySelector(".about");

button1.addEventListener("click",()=>{
    DOMManipulationForContent()
})
button2.addEventListener("click",()=>{
    menuDisplay()
})
button3.addEventListener("click",()=>{
    introductory()
})