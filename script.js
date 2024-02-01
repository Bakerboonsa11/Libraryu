

// Step 1: Create the new element
// const newElement = document.createElement("div");

// // Step 2: Set attributes or properties (if needed)
// newElement.textContent = "This is a new element";

// // Step 3: Add a class to the element
// newElement.classList.add("your-class-name");

// // Step 4: Append the element to a parent element
// const parentElement = document.querySelector(".parent-element");
// parentElement.appendChild(newElement);

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
 
        let b_name ;
        let b_author;
        let b_page;
        let b_state;
        let on_off_btn; 

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
     book_collector.forEach(function(book){
         b_name = book.name;
         b_author= book.author;
         b_page=book.page
         b_state= book.read;
        
        let book_index = book_collector.indexOf(book);
        
        const top_element =  document.createElement("div");
        top_element.classList.add("book_container");
        container_elements.appendChild(top_element);
      
        const book_name_element =  document.createElement("div");
        book_name_element.classList.add("book_name");
        book_name_element.textContent = b_name;
        top_element.appendChild(book_name_element);

        const book_author_element =  document.createElement("div");
        book_author_element.classList.add("book_author");
        book_author_element.textContent =` by : ${b_author} ` ;
        top_element.appendChild(book_author_element);

        const book_page_element =  document.createElement("div");
        book_page_element.classList.add("book_page");
        book_page_element.textContent =`Page : ${b_page}` ;
        top_element.appendChild(book_page_element);

        const button_state= document.createElement("button");
        button_state.classList.add("button_delete");
        button_state.classList.add("button_statescript");

        if(b_state==="on"){
            button_state.classList.add("state_oppen");
             button_state.textContent = "Read";
        }
        else{
            button_state.classList.add("state_closed");
            button_state.textContent = "Not Read";
        }
        
        top_element.appendChild(button_state);
        on_off_btn = document.querySelectorAll(".button_statescript");
        console.log(on_off_btn)
        for(let i = 0 ;i<on_off_btn.length;i++) {
            on_off_btn[i].addEventListener("click",function(){
            if( button_state.textContent === "Not Read"){
                button_state.classList.add("state_oppen");
                button_state.classList.remove("state_closed");
                button_state.textContent ="Read"
            }
            else{
                button_state.classList.add("state_closed");
                button_state.classList.remove("state_oppen");
                button_state.textContent = "Not Read";
            }
        });
        }

        const button_delete_element= document.createElement("button");
        button_delete_element.classList.add("button_delete");
        button_delete_element.setAttribute("value", book_index);
        button_delete_element.textContent = "Delete";
        top_element.appendChild(button_delete_element);

    
        


        
     })
   
})


add_btn.addEventListener("click",evaluator)

submit_btn.addEventListener("click",function(event){
    event.preventDefault()
    let name_value = name_input.value;
    let author_value= author_input.value;
    let page_value= page_input.value;
    let checkbtn_value =   check_btn.checked ? "on" : "off"
    const newbook= new book(name_value,author_value,page_value,checkbtn_value);
    console.log(newbook)
    book_collector.push(newbook)
    add_btn.style.opacity = "100%";
    pop_up.style.opacity="0"
    add_btn.style.zIndex = "9999";
    view_btn.style.opacity="100%"
    view_btn.style.zIndex = "9999";


    
   
})
