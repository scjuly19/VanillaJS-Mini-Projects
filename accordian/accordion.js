const headers=document.querySelectorAll("#header");


headers.forEach(item=>{
    item.addEventListener("click",()=>{
        const activeHeader=document.querySelector(".accordion-header.active");
        if(activeHeader && activeHeader!==item){
            activeHeader.classList.toggle("active");
            activeHeader.nextElementSibling.style.maxHeight = 0;
        }
        item.classList.toggle("active");
        const itemBody=item.nextElementSibling;
        if(item.classList.contains("active")){
            itemBody.style.maxHeight=itemBody.scrollHeight+"px";
        }
        else{
            itemBody.style.maxHeight=0;

        }

    })
})