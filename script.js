function run(){
  let eoinput = document.getElementById("inputuser").value
  let far = eoinput*3.28084 +" Feet"
      console.log(far)
  document.getElementById("output").innerHTML=far
}