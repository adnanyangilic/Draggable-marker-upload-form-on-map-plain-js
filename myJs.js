

file.onchange = function(e) {
  for (let i = 0; i < this.files.length; i++) {
    let url = URL.createObjectURL(this.files[i]);
    let img = new Image();
    img.src = url;
    img.setAttribute("style", "max-width:100px;");
    img.setAttribute("class", "imgClass");
    document.querySelector('#panel').appendChild(img);
    // you can even free these 10bits you occupy in memory if you don't need the url anymore
    img.onload = function() {
      URL.revokeObjectURL(this.src);
    }
    console.log(this.files[i].name);
  }
}


document.querySelector('#buttiny').addEventListener('click', function() {

    document.querySelector("#val3").value=document.querySelector("#val1").value;
    document.querySelector("#val4").value=document.querySelector("#val2").value;

    console.log("buttiny clicked");


  });
