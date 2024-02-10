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



 class book_genretor{
    constructor(name ,author,page,read){
        this.name= name
        this.author = author
        this.page = page
        this.read = read
    }
    static book_collector = [];
    static reset_page(){
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
    static cancel(){
        pop_up.style.opacity="0"
        pop_up.style.zIndex = "-9999";
        add_btn.style.opacity = "100%";
        view_btn.style.opacity="100%" 
        add_btn.style.zIndex = "9999";
        view_btn.style.zIndex = "9999";
        add_btn.disabled=false;
        view_btn.disabled=false;
    }
}
// const obj1 = new book_genretor("kaka","bonsa","page","read")
// console.log(obj1)

class libarary extends book_genretor{
  constructor(){
     super()
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
 static view_method(){
    container_elements.style.opacity="100%"
    container_elements.style.zIndex = "9999";
    add_btn.style.opacity="0"
    reset_btn.style.opacity="100%"
    reset_btn.style.zIndex="9999"
    view_btn.style.opacity="0"
    add_btn.disabled=true;
    view_btn.disabled=true;

   libarary. book_collector.forEach(function(book){
        b_name = book.name;
        b_author= book.author;
        b_page=book.page
        b_state= book.read;
       
       top_element =  document.createElement("div");
       top_element.classList.add("book_container");
       top_element.classList.add(`cont${counter}`)
       container_elements.appendChild(top_element);
   
       let book_name_element=  libarary. book_name_creater(b_name)
       top_element.appendChild(book_name_element);

       let book_author_element = libarary.author_creator(b_author);
       top_element.appendChild(book_author_element);

       let book_page_element= libarary.page_creator(b_page)
       top_element.appendChild(book_page_element);

       let button_state= libarary.button_state_creator(b_state);
       top_element.appendChild(button_state);
       
       let delete_btn_element = libarary.delete_btn_creator();
       top_element.appendChild(delete_btn_element);
       console.log(top_element)
    })              
}static  book_name_creater(b_name){
    const book_name_element =  document.createElement("div");
        book_name_element.classList.add("book_name");
        book_name_element.textContent = b_name;
        return book_name_element;
       
}static  author_creator(b_author){
     const book_author_element =  document.createElement("div");
        book_author_element.classList.add("book_author");
        book_author_element.textContent =` by : ${b_author} ` ;
        return book_author_element;
}
static page_creator(b_page){
    const book_page_element =  document.createElement("div");
        book_page_element.classList.add("book_page");
        book_page_element.textContent =`Page : ${b_page}` ;
        return book_page_element;
}
static  button_state_creator(b_state){

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
static delete_btn_creator(){
        
        const button_delete_element= document.createElement("button");
        button_delete_element.classList.add("button_delete");
        button_delete_element.classList.add("button_delete_unique");
        button_delete_element.setAttribute("value", counter);
        button_delete_element.textContent = "Delete";
        button_delete_element.addEventListener("click", function(){
                 
        libarary.book_collector.splice(button_delete_element.value, 1);
        let box_to_remove = document.querySelector(`.cont${button_delete_element.value}`);
        console.log(box_to_remove)
        box_to_remove.remove()
        // box_to_remove.parentNode.removeChild(box_to_remove);
            
        })
        counter++
        
        return button_delete_element;
}





}




// const book_collector = [];
// let name_value = name_input.value;
// let author_value= author_input.value;
// let page_value= page_input.value;
// let checkbtn_value =   check_btn.checked ? "on" : "off";
// // const obj = new libarary()
// console.log(libarary.object_creator(name_value,author_value,page_value,checkbtn_value))
// function book( name,author, page,read){
//          this.name=name;
//          this.author=author;
//          this.page=page;
//          this.read=read;
// }
function object_creator(){
    let name_value = name_input.value;
    let author_value= author_input.value;
    let page_value= page_input.value;
    let checkbtn_value =   check_btn.checked ? "on" : "off";
    
    const newbook = new book_genretor(name_value,author_value,page_value,checkbtn_value)
  
    console.log(newbook)
     libarary.book_collector.push(newbook)
     console.log(libarary.book_collector)
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

// function book_name_creater(){
//     const book_name_element =  document.createElement("div");
//         book_name_element.classList.add("book_name");
//         book_name_element.textContent = b_name;
//         return book_name_element;
       
// }
// function author_creator(){
//      const book_author_element =  document.createElement("div");
//         book_author_element.classList.add("book_author");
//         book_author_element.textContent =` by : ${b_author} ` ;
//         return book_author_element;
// }
// function page_creator(){
//     const book_page_element =  document.createElement("div");
//         book_page_element.classList.add("book_page");
//         book_page_element.textContent =`Page : ${b_page}` ;
//         return book_page_element;
// }

// function button_state_creator(){

//         const button_state= document.createElement("button");
//         button_state.classList.add("button_delete");
//         button_state.classList.add("button_statescript");

//         if(b_state==="on"){
//             button_state.classList.add("state_oppen");
//              button_state.textContent = "Read";
//         }
//         else{
//             button_state.classList.add("state_closed");
//             button_state.textContent = "Not Read";
//         }
//         button_state.addEventListener("click",function(){
//                 if( button_state.textContent === "Not Read"){
//                                 button_state.classList.add("state_oppen");
//                                 button_state.classList.remove("state_closed");
//                                 button_state.textContent ="Read"
//                             }
//                             else{
//                                 button_state.classList.add("state_closed");
//                                 button_state.classList.remove("state_oppen");
//                                 button_state.textContent = "Not Read";
//                 }
//       });
//         return button_state;
// }
// function delete_btn_creator(){
        
//         const button_delete_element= document.createElement("button");
//         button_delete_element.classList.add("button_delete");
//         button_delete_element.classList.add("button_delete_unique");
//         button_delete_element.setAttribute("value", counter);
//         button_delete_element.textContent = "Delete";
//         button_delete_element.addEventListener("click", function(){
                 
//         book_collector.splice(button_delete_element.value, 1);
//         let box_to_remove = document.querySelector(`.cont${button_delete_element.value}`);
//         console.log(box_to_remove)
//         box_to_remove.remove()
//         // box_to_remove.parentNode.removeChild(box_to_remove);
            
//         })
//         counter++
        
//         return button_delete_element;
// }
// function reset_page(){
//     add_btn.style.opacity = "0";
//     pop_up.style.opacity="100%"
//     pop_up.style.zIndex = "9999";
//     add_btn.style.zIndex = "-9999";
//     view_btn.style.opacity="0"
//     view_btn.style.zIndex = "-9999";
//     // container_elements.style.opacity="0%"
//     // container_elements.style.zIndex = "-9999";
//     accepter.style.opacity="0"
//     accepter.style.zIndex = "-9999";
//     add_btn.disabled=true;
//      view_btn.disabled=true;
//     while(top_element.firstChild){
//         top_element.removeChild(top_element.firstChild);
//         console.log(`the top element is ${top_element}`)
//         container_elements.removeChild(container_elements.firstChild)
//     }
     
// }
view_btn.addEventListener("click",libarary.view_method);



cancel_btn.addEventListener("click",book_genretor.cancel)

reset_btn.addEventListener("click",book_genretor.reset_page);
add_btn.addEventListener("click",libarary.evaluator)

submit_btn.addEventListener("click",function(event){
    event.preventDefault()
// 
    if (pop_up.checkValidity()) {
        object_creator();
        add_btn.style.opacity = "100%";
        pop_up.style.opacity="0"
        add_btn.style.zIndex = "9999";
        view_btn.style.opacity="100%"
        view_btn.style.zIndex = "9999";
        add_btn.disabled=false;
        view_btn.disabled=false;
        // 
      } else {
        pop_up.reportValidity();
      }
   
   

})
