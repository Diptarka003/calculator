var buttn= document.querySelectorAll("button");
console.log(buttn);
var inpt=document.querySelector("input");
var str=" ";
for(var i=0;i<buttn.length;i++)
{
    buttn[i].addEventListener("click", function(){
         if(this.innerHTML=="C")
         {
            str=" ";
            inpt.value=str;
         }
         else if(this.innerHTML=="=")
         {
            inpt.value=eval(str);
         }
         else if(this.innerHTML=="DE")
         {
            str=str.slice(0,(str.length-1));
            inpt.value=str;
         }
         else{
            str=str+this.innerHTML;
            inpt.value=str;
         }
    });
}
document.addEventListener("keydown", function(event){

        if(event.key=="C" || event.key=="c")
        {
           str=" ";
           inpt.value=str;
        }
        else if(event.key=="="|| event.key=="Enter")
        {
           inpt.value=eval(str);
        }
        else if(event.key=="Backspace")
        {
            str=str.slice(0,(str.length-1));
            inpt.value=str;
        }
        else{
           str=str+event.key;
           inpt.value=str;
        }
     
    
});

    