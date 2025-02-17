export function DOMManipulationForContent(){
    const theContent=document.getElementById("content")
    theContent.innerHTML=""
    const h1=document.createElement("h1");
    h1.textContent="Welcome To My New Restaurant";
    h1.setAttribute("class","centerText")
    theContent.appendChild(h1);
    const array=["Introductory","Hours","Location"]
    for(const part of array){
    const h2=document.createElement("h2");
    h2.textContent=`${part}`
    theContent.appendChild(h2);
    const div=document.createElement("div");
    div.setAttribute("class","homeBoard")
    if(part==="Introductory"){
    div.innerHTML=`
    <p>At [Restaurant Name], we invite you to embark on a culinary journey like no other. Nestled in the heart of [Location], our restaurant offers a warm and welcoming atmosphere where the rich aromas of freshly prepared dishes fill the air.</p>
    <br>
    <p>Our chefs take pride in creating dishes using the finest local ingredients, carefully curated to bring you a delightful blend of flavors from around the world. Whether you're craving a hearty meal, refreshing beverages, or a sweet indulgence, our menu has something to satisfy every palate.</p>  
    <br>
    <p>Whether you're here for a special occasion or simply to enjoy a cozy dinner with loved ones, we promise to provide an unforgettable dining experience. We believe in exceptional service, and every guest is treated like family. Come, relax, and savor the taste of perfection!</p>
   `
    }
    else if(part==="Hours"){
        div.innerHTML=`
        <p>
        Sunday:17:00 - 23:00
        Monday:17:00 - 22:00
        Tuesday:17:00 - 22:00
        Thursday:17:00 - 22:00
        Wednesday:17:00 - 22:00
        Friday:17:00 - 22:00
        Saturday:17:00 - 23:00
        </p>
        `
    }
    else if(part==="Location"){
        div.innerHTML=`
        23/2 Nam Ky Khoi Nghia,District Tan Binh,TPHCM
        
        `
    }
    theContent.appendChild(div)
    }
   
   
    
  
   
 }