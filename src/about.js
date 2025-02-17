export function introductory(){
    const theContent=document.getElementById("content")
    theContent.innerHTML=""
    const h2=document.createElement("h2")
    const h3=document.createElement("h3")
    
    h2.textContent="Contact"
    h2.setAttribute("class","centerText")
    theContent.appendChild(h2)
    const array=["Contacter","Manager"]
    for(const part of array){
        h3.textContent=part;
        const p1=document.createElement("p")
        const p2=document.createElement("p")
        const div=document.createElement("div")
        div.setAttribute("class","homeBoard")
        if(part==="Contacter"){
           
               p1.innerHTML=` 
                               <span class="strong">Email: </span>
                               QuocAnh3@gmail.com
               `
               p2.innerHTML=`
                               <span class="strong">Phone Number: </span>
                               0976445875
               `
               div.appendChild(p1);
               div.appendChild(p2);
        }else if(part==="Manager"){
            p1.innerHTML=` 
            <span class="strong">Email: </span>
            GiangHuy333r@gmail.com
`
            p2.innerHTML=`
                        <span class="strong">Phone Number: </span>
                        0976442235
            `
            div.appendChild(p1)
            div.appendChild(p2)
        }
        theContent.appendChild(div);
    }
   
}