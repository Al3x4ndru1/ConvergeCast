
document.getElementById('./scripts/Backend/static/javascript/aside/list_of_buttons.txt').onchange = function(){

    var file = this.files[0];
  
    var reader = new FileReader();
    reader.onload = function(progressEvent){
      // Entire file
      console.log(this.result);
  
      // By lines
      var lines = this.result.split('\n');
      for(var line = 0; line < lines.length; line++){
        console.log(lines[line]);
      }
    };
    reader.readAsText(file);
  };