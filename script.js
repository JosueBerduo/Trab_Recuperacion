function MakeCenter(id) {
  if (id == 'Center2') {
    document.getElementById("Center2").id = "Center";
    console.log("executed");
  }
  else if (id != 'Center') {
      if (id == 'Left') {
      var other = 'Right';
    } else {
      var other = 'Left';
    }
    document.getElementById('Center').id = "CenterM";
    document.getElementById(id).id = "idM";
    document.getElementById(other).id = "otherM"
    document.getElementById("idM").id = "Center2";
    document.getElementById('CenterM').id = other;
    document.getElementById('otherM').id = id;
    setTimeout(function() {MakeCenter('Center2')}, 500);
    console.log("Called");
  }
}