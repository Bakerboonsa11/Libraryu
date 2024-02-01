"use strict"
const add_btn = document.querySelector(".btn_add");
 const pop_up = document.querySelector(".pop_up");
 const name_input = document.querySelector("#name");
 const author_input = document.querySelector("#author");
 const page_input = document.querySelector("#page");
 const cancel_btn = document.querySelector(".cancel_btn");
 const check_btn = document.querySelector("#check");
 const submit_btn = document.querySelector(".submit");
 const view_btn= document.querySelector(".View_btn")
 const container_elements = document.querySelector(".accepter")

const book_collector = [];
function book( name,author, page,read){
         this.name=name;
         this.author=author;
         this.page=page;
         this.read=read;
}

function evaluator(){
    add_btn.style.opacity = "0";
    pop_up.style.opacity="100%"
    pop_up.style.zIndex = "9999";
    view_btn.style.opacity="0"  
    container_elements.style.zIndex = "-999";
}
view_btn.addEventListener("click",function(event){
     container_elements.style.opacity="100%"
     container_elements.style.zIndex = "9999";
     add_btn.style.opacity="0"
     view_btn.style.opacity="0"
     
})
add_btn.addEventListener("click",evaluator)

submit_btn.addEventListener("click",function(event){
    event.preventDefault()
    let name_value = name_input.value;
    let author_value= author_input.value;
    let page_value= page_input.value;
    let checkbtn_value = check_btn.value;
    const newbook= new book(name_value,author_value,page_value,checkbtn_value);
    book_collector.push(newbook)
    add_btn.style.opacity = "100%";
    pop_up.style.opacity="0"
    add_btn.style.zIndex = "9999";
    view_btn.style.opacity="100%"
    view_btn.style.zIndex = "9999";


    
   
})