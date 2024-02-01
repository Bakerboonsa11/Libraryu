

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

function book_name_creater(){
    const book_name_element =  document.createElement("div");
        book_name_element.classList.add("book_name");
        book_name_element.textContent = b_name;
        return book_name_element;
       
}
function author_creator(){
     const book_author_element =  document.createElement("div");
        book_author_element.classList.add("book_author");
        book_author_element.textContent =` by : ${b_author} ` ;
        return book_author_element;
}
function page_creator(){
    const book_page_element =  document.createElement("div");
        book_page_element.classList.add("book_page");
        book_page_element.textContent =`Page : ${b_page}` ;
        return book_page_element;
}

function button_state_creator(){

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
        button_state.addEventListener("click",function(){
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
        return button_state;
}
function delete_btn_creator(){
        let book_index = book_collector.indexOf(book);
        const button_delete_element= document.createElement("button");
        button_delete_element.classList.add("button_delete");
        button_delete_element.setAttribute("value", book_index);
        button_delete_element.textContent = "Delete";
        return button_delete_element;
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
        
        const top_element =  document.createElement("div");
        top_element.classList.add("book_container");
        container_elements.appendChild(top_element);
    
        let book_name_element=  book_name_creater()
        top_element.appendChild(book_name_element);

        let book_author_element = author_creator();
        top_element.appendChild(book_author_element);

        let book_page_element= page_creator()
        top_element.appendChild(book_page_element);

        let button_state= button_state_creator();
        top_element.appendChild(button_state);
        
        let delete_btn_element = delete_btn_creator();
        top_element.appendChild(delete_btn_element);
        
     })
   
});


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
