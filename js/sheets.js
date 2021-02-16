
  //------//
  // TEAM //
  //------//

  var spData = null;
  function doData(json) {
      spData = json.feed.entry;
  }

  function drawRow(parent, rowData) {
	  if (rowData == null) return null;
	  if (rowData.length == 0) return null;
	  var tr = $("<div class=\"team-member\"/>");
	  parent.append(tr);
	  var img = $("<img class=\"img-circle\" src=\"img/profiles/"+rowData[4]+"\"/>");
	  tr.append(img);
	  var tmn = $("<div class=\"team-member-name\"/>");
	  tr.append(tmn);
      // name
      var td = $("<h4/>");
      tmn.append(td);
      td.append(rowData[0]);
      // dept
      var td = $("<p class=\"dept\"/>");
      tmn.append(td);
      td.append(rowData[1]);

      // topic
      var td = $("<p class=\"topic\"/>");
      tmn.append(td);
      td.append(rowData[5]);

	  return tr;
  }
  
  function readData(parent) {

      var data = spData;
      var rowData = [];
      
      for(var r=7; r<data.length; r++) {
          var cell = data[r]["gs$cell"];
          var val = cell["$t"];
          if (cell.col == 1) {
              drawRow(parent, rowData);
              rowData = [];
          }
          rowData.push(val);
      }
      drawRow(parent, rowData);
  }

  $(document).ready(function(){
      readData($("#data"));
  });
