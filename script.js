class libarary {
  constructor(){
    
  }
  static evaluator(){
    add_btn.style.opacity = "0";
    pop_up.style.opacity="100%"
    pop_up.style.zIndex = "9999";
    add_btn.style.zIndex = "-9999";
    view_btn.style.zIndex = "-9999";
    view_btn.style.opacity="0"  
    container_elements.style.zIndex = "-999";
  
}
 static object_creator(){
    let name_value = name_input.value;
    let author_value= author_input.value;
    let page_value= page_input.value;
    let checkbtn_value =   check_btn.checked ? "on" : "off"
    const newbook= new book(name_value,author_value,page_value,checkbtn_value);
    console.log(newbook)
    book_collector.push(newbook)
}

}

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
 const reset_btn = document.querySelector(".reset_btn")
 const accepter= document.querySelector(".accepter")
 
 
        let top_element
        let b_name ;
        let b_author;
        let b_page;
        let b_state;
        let on_off_btn; 
        let counter =0;

const book_collector = [];
function book( name,author, page,read){
         this.name=name;
         this.author=author;
         this.page=page;
         this.read=read;
}
function object_creator(){
    let name_value = name_input.value;
    let author_value= author_input.value;
    let page_value= page_input.value;
    let checkbtn_value =   check_btn.checked ? "on" : "off"
    const newbook= new book(name_value,author_value,page_value,checkbtn_value);
    console.log(newbook)
    book_collector.push(newbook)
}
// function evaluator(){
//     add_btn.style.opacity = "0";
//     pop_up.style.opacity="100%"
//     pop_up.style.zIndex = "9999";
//     add_btn.style.zIndex = "-9999";
//     view_btn.style.zIndex = "-9999";
//     view_btn.style.opacity="0"  
//     container_elements.style.zIndex = "-999";
  
// }

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
        
        const button_delete_element= document.createElement("button");
        button_delete_element.classList.add("button_delete");
        button_delete_element.classList.add("button_delete_unique");
        button_delete_element.setAttribute("value", counter);
        button_delete_element.textContent = "Delete";
        button_delete_element.addEventListener("click", function(){
                 
        book_collector.splice(button_delete_element.value, 1);
        let box_to_remove = document.querySelector(`.cont${button_delete_element.value}`);
        console.log(box_to_remove)
        box_to_remove.remove()
        // box_to_remove.parentNode.removeChild(box_to_remove);
            
        })
        counter++
        
        return button_delete_element;
}
function reset_page(){
    add_btn.style.opacity = "0";
    pop_up.style.opacity="100%"
    pop_up.style.zIndex = "9999";
    add_btn.style.zIndex = "-9999";
    view_btn.style.opacity="0"
    view_btn.style.zIndex = "-9999";
    // container_elements.style.opacity="0%"
    // container_elements.style.zIndex = "-9999";
    accepter.style.opacity="0"
    accepter.style.zIndex = "-9999";
    add_btn.disabled=true;
     view_btn.disabled=true;
    while(top_element.firstChild){
        top_element.removeChild(top_element.firstChild);
        console.log(`the top element is ${top_element}`)
        container_elements.removeChild(container_elements.firstChild)
    }
     
}
view_btn.addEventListener("click",function(event){
     container_elements.style.opacity="100%"
     container_elements.style.zIndex = "9999";
     add_btn.style.opacity="0"
     reset_btn.style.opacity="100%"
     reset_btn.style.zIndex="9999"
     view_btn.style.opacity="0"
     add_btn.disabled=true;
     view_btn.disabled=true;

     book_collector.forEach(function(book){
         b_name = book.name;
         b_author= book.author;
         b_page=book.page
         b_state= book.read;
        
        top_element =  document.createElement("div");
        top_element.classList.add("book_container");
        top_element.classList.add(`cont${counter}`)
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
        console.log(top_element)
     })
   
});


cancel_btn.addEventListener("click",()=>{
    pop_up.style.opacity="0"
    pop_up.style.zIndex = "-9999";
    add_btn.style.opacity = "100%";
    view_btn.style.opacity="100%" 
    add_btn.style.zIndex = "9999";
    view_btn.style.zIndex = "9999";
    add_btn.disabled=false;
    view_btn.disabled=false;
})
reset_btn.addEventListener("click",reset_page);
add_btn.addEventListener("click",libarary.evaluator)

submit_btn.addEventListener("click",function(event){
    event.preventDefault()
// 
    if (pop_up.checkValidity()) {
        libarary.object_creator();
        add_btn.style.opacity = "100%";
        pop_up.style.opacity="0"
        add_btn.style.zIndex = "9999";
        view_btn.style.opacity="100%"
        view_btn.style.zIndex = "9999";
        add_btn.disabled=false;
        view_btn.disabled=false;
        
      } else {
        pop_up.reportValidity();
      }
   
   

})
