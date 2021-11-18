var proportions = [0, 0, 0]

var data = [0, 0]

var e_total = null;
var e_proportions = null;

var resultados = [0, 0, 0, 0, 0]

function total_i (id1, id2) {
  var inputVal = parseInt(document.getElementById(id1).value);
  var inputVall =  document.getElementById(id2).value;

  if (isNaN(inputVal)) {
    e_total = true;
    if (e_total == true || e_proportions == true) {document.getElementById("butt").disabled = true;}
    document.getElementById("send_q").hidden = false;
  }
  else {
    e_total = false;
    if (e_total == false && e_proportions == false) {document.getElementById("butt").disabled = false;}
    document.getElementById("send_q").hidden = true;
  }

  data[0] = inputVal;
  data[1] = inputVall;
  alert(data);
}

function proportions_i(id1, id2, id3) {

  var inputVal1 = parseInt(document.getElementById(id1).value);
  var inputVal2 = parseInt(document.getElementById(id2).value);
  var inputVal3 = parseInt(document.getElementById(id3).value);

  proportions[0] = isNaN(inputVal1) ? 0 : inputVal1;    
  proportions[1] = isNaN(inputVal2) ? 0 : inputVal2;    
  proportions[2] = isNaN(inputVal3) ? 0 : inputVal3;

  tot = proportions[0] + proportions[1] + proportions[2];
  difference = 100 - tot;

  if (tot > 100 || tot.length == 0) {
    e_proportions = true;
    if (e_total == true || e_proportions == true) {document.getElementById("butt").disabled = true;}
    document.getElementById("send_p").hidden = false;
  }
  else {
    e_proportions = false;
    if (e_total == false && e_proportions == false) {document.getElementById("butt").disabled = false;}
    document.getElementById("send_p").hidden = true;
  }

  if (proportions[0] == 0) {
    document.getElementById(id1).setAttribute("max", difference);
  }
  if (proportions[1] == 0) {
    document.getElementById(id2).setAttribute("max", difference);
  }
  if (proportions[2] == 0) {
    document.getElementById(id3).setAttribute("max", difference);
  }
  
  //inputVal2 = (typeof inputVal2 !== 'undefined') ? inputVal2 : null;

  /*  if  (inputVal2 == 0){
    alert("nulo");
  }

  if  (inputVal2 != 0){
    alert("valor");
  }
  */ 

  // Displaying the value
  //alert(inputVal);
  /*container.innerHTML += `
      <h1> su recipiente tiene ${inputVal}</h1>
  `*/
  /* if (inputVal.length != 0){ 
    if (limit == 0) limit = 100 - inputVal;
    else limit = limit - inputVal;

    alert(limit);  	
    
    document.getElementById(id2).setAttribute("max", limit);
  }  	 */
}

/*function datasend() {
  /* resultados[0] = getElementById("valtotal").value;
  resultados[1] = getElementById("unit_sel").value;
  resultados[2] = getElementById("valliq1").value;
  resultados[3] = getElementById("valliq2").value;
  resultados[4] = getElementById("valliq3").value; */

 /* alert("lol");




}*/