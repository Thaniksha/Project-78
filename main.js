 images=["Daddy.jpg","Mummy.jpg","Lohith.jpg","Thaniksha.jpg"];


 names=["Ramesh Kumar","Mohana Priya","Lohith Yaadav","Thaniksha"];

  var i=0;  
function nextslide(){
document.getElementById("album").src=images[i];
i++;
}
if(i==8)
  {
    i=0;
  }
