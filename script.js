const display=document.querySelector(".display");
const buttons=document.querySelectorall("button");
const specialchars=["%","*","/","-","+","="];
let output="";

const calculate=(btnvalue) =>{
  if(btnvalue === "=" && btnvalue !==""){

  output=eval(output.replace("%","/100"));
}else if(btnvalue ==="AC"){
  output = "";
}
else if(btnvalue ==="DEL"){
  output=output.toString().slice(0,-1);

} else {
if(output === "" && specialchars.includes(btnvalue))return;
output+= btnvalue;
}
display.value = output;
};

buttons.foreach(buttons) => {
  buttons.addeventListener("click",(e) =>calculate(e.target.dataset.value));
};
