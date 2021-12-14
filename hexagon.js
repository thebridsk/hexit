


function edit() {
  document.getElementById('tc').removeAttribute("disabled");
  document.getElementById('to1').removeAttribute("disabled");
  document.getElementById('to2').removeAttribute("disabled");
  document.getElementById('to3').removeAttribute("disabled");
  document.getElementById('to4').removeAttribute("disabled");
  document.getElementById('to5').removeAttribute("disabled");
  document.getElementById('to6').removeAttribute("disabled");

  // permsValidate();
}

function validate(c, u) {
  if (c.length != 1) return "?";
  if (c < 'a' || c > 'z') {
    if (c < 'A' || c > 'Z') return "?";
  }
  if (u) return c.toUpperCase();
  return c;
}

function random(dir = 1) {
  document.getElementById('tc').disabled = true;
  document.getElementById('to1').disabled = true;
  document.getElementById('to2').disabled = true;
  document.getElementById('to3').disabled = true;
  document.getElementById('to4').disabled = true;
  document.getElementById('to5').disabled = true;
  document.getElementById('to6').disabled = true;

  var u = document.getElementById('upper').checked;

  var vc = validate(document.getElementById('tc').value.toString(), u);
  var vo1 = validate(document.getElementById('to1').value.toString(), u);
  var vo2 = validate(document.getElementById('to2').value.toString(), u);
  var vo3 = validate(document.getElementById('to3').value.toString(), u);
  var vo4 = validate(document.getElementById('to4').value.toString(), u);
  var vo5 = validate(document.getElementById('to5').value.toString(), u);
  var vo6 = validate(document.getElementById('to6').value.toString(), u);

  var v = [vo1,vo2,vo3,vo4,vo5,vo6];

  var perm = next(dir);

  console.log("Center='%s', '%s' '%s' '%s' '%s' '%s' '%s'",vc,vo1,vo2,vo3,vo4,vo5,vo6);

  setHexagon(vc, v, perm);

}

var current = 0;
function next(dir) {
  var n = current + dir;
  if (n<0) n+=perms.length;
  if (n>=perms.length) n-=perms.length;
  current = n;
  return perms[current];
}

// document.getElementById("p1").innerHTML = "New text!";
function setHexagon(c, v, perm) {
  document.getElementById('c').innerHTML = c;
  for (let i=1; i<7; i++) {
    var t = v[i-1];
    var p = perm[i-1];

    document.getElementById('o'+p).innerHTML = t;

  }
}

function find(id) {
  return document.getElementById(id);
}

function autotab(original,destination){
  if (original.getAttribute&&original.value.length==original.getAttribute("maxlength"))
    destination.focus();
}

function focusOn(id) {
  document.getElementById(id).focus();
}











