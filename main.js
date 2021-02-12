 images=["Daddy.jpg","Mummy.jpg","Lohith.jpg","Thaniksha.jpg"];


 names=["Ramesh Kumar","Mohana Priya","Lohith Yaadav","Thaniksha"];

  var i=0;  
function nextslide(){
document.getElementById("album").src=images[i];
document.getElementById("name").innerHTML=names[i];
i++;
if(i>3)
  {
    i=0;
  } 
}

