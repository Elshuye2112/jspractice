// var user={
//     "name":"Elshaday Basie",
//     "age":30
// }
var header1=document.getElementById('head1');
var list=document.getElementById('list').getElementsByTagName('li');//used to access byID and tagname
// list[0].innerHTML="Ambelu";//change the first list value
var btn=document.getElementById('btn');
var listId=document.getElementById('list');
var counter=1;

//used to change the whole list ite, with new item name
// for(i=0;i<list.length;i++){
//     list[i].innerHTML="new Item "+i;
// }
for(i=0;i<list.length;i++){
    list[i].addEventListener('click',changeheader);
}
function changeheader(){
    // alert("please do not click me")
     header1.innerHTML=this.innerHTML;
     this.classList.add('active');
    for(i=0;i<list.length;i++){
        list[i].classList.remove("active");
    }
}

btn.addEventListener("click",addNewItem);
function addNewItem(){
 
    listId.innerHTML+="<li>New Item  "+counter +" </li>";
    counter++;
}
var btnr=document.getElementById('btnr');
btnr.addEventListener('click',register)
function register(){
   var fname=document.getElementById('fname').value;
   var lname=document.getElementById('lname').value;
   var email=document.getElementById('email').value;
   var password=document.getElementById('password').value;
   alert("The information you insert is "+fname+" "+lname+" "+email+" and "+password);
}