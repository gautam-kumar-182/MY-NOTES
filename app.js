// console.log("this is working");
shownotes();
document.getElementById("addBtn").addEventListener("click",function(e){
let txt=document.getElementById("floatingTextarea2");
let note_title=document.getElementById("note_title");
console.log(txt.value);
let notes=localStorage.getItem("notes");
let title=localStorage.getItem("title");
var notesObj=[];
var titleObj=[];


if (notes == null) {
    notesObj = [];
    titleObj = [];
}

  else {
     notesObj = JSON.parse(notes);
     titleObj = JSON.parse(title);
   }
   notesObj.push(txt.value);
   titleObj.push(note_title.value);

  
localStorage.setItem("notes",JSON.stringify(notesObj));
txt.value="";
localStorage.setItem("title",JSON.stringify(titleObj));
note_title.value="";
shownotes();
})
 function shownotes(){
    let notes=localStorage.getItem("notes");
    var notesObj=[];
    let title=localStorage.getItem("title");
    var titleObj=[];
    
    let html="";
    if (notes == null) {
        notesObj = [];
        titleObj = [];
        
    }
    
      else {
         notesObj = JSON.parse(notes);
         titleObj = JSON.parse(title);
       }
       notesObj.forEach((element,index) => {
          
       
       html+=`<div class="card note-card " style="width: 18rem;">
        <h3>${titleObj[index]}</h3>
           
       <div class="card-body">
         <h5 class="card-title">Note ${index+1}</h5>
         <p class="card-text">${element}</p>
         <button id="${index}" class="btn btn-primary" onclick="deleteNote(this.id)" >Delete note</button>
       </div>
     </div>`;
   });
     if(notesObj.length!=0)
     {
        document.getElementById("notes").innerHTML=html;
     }
     else
     {
        document.getElementById("notes").innerHTML=`<h2>nothing to show! please add a note first</h2>`;
     }

}
function deleteNote(index)
{
   let notes=localStorage.getItem("notes");
   var notesObj=[];
   if (notes == null) {
       notesObj = [];
      }
   
     else {
        notesObj = JSON.parse(notes);
      }
      notesObj.splice(index,1);
      localStorage.setItem("notes",JSON.stringify(notesObj));
      shownotes();
}

let search=document.getElementById("search-value");
search.addEventListener("input",()=>
{
   let value=search.value;
let notes=document.getElementsByClassName("note-card ")
Array.from(notes).forEach((element)=>
{
   let cardtxt=element.getElementsByTagName("p")[0].innerText;
if(cardtxt.includes(value))
{
   element.style.display="block";
}
else
{
   element.style.display="none";
}
})
});
