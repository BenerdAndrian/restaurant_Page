export function menuDisplay(){
    const theContent=document.getElementById("content")
    theContent.innerHTML=""
    const h2=document.createElement("h2")
    h2.textContent="Restaurant's Menu"
    h2.setAttribute("class","centerText")
    theContent.appendChild(h2)
   
    const array=["Foods","Beverages","Desserts"]
    for(const part of array){
        const h3=document.createElement("h3")
        h3.textContent=part;
        theContent.appendChild(h3)
        const ul=document.createElement("ul")
        ul.setAttribute("class","menuBoard")
        if(part==="Foods"){
            ul.innerHTML=`
                       <span class="food">   
                          <li>Lasagna</li>
                          <li>Pizza</li>
                          <li>Spagetti</li>
                          <li>Greece Salad</li>
                        </span>
                        <span class="price">
                           <li>2.5$</li>
                           <li>4.1$</li>
                           <li>3 $</li>
                           <li>1.5$</li>
                        </span>
            `
        }
        else if(part === "Beverages"){
            ul.innerHTML=`
                        <span class="food">   
                          <li>Lasagna</li>
                          <li>Pizza</li>
                          <li>Spagetti</li>
                          <li>Greece Salad</li>
                        </span>
                        <span class="price">
                           <li>2.5$</li>
                           <li>4.1$</li>
                           <li>3$</li>
                           <li>1.5$</li>
                        </span>
            `
        }
        else if(part==="Desserts"){
            ul.innerHTML=`
                           <span class="food">   
                          <li>Lasagna</li>
                          <li>Pizza</li>
                          <li>Spagetti</li>
                          <li>Greece Salad</li>
                        </span>
                        <span class="price">
                           <li>2.5$</li>
                           <li>4.1$</li>
                           <li>3$</li>
                           <li>1.5$</li>
                        </span>
            `
        }
        theContent.appendChild(ul)
    }
}