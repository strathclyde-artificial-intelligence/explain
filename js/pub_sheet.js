  //------//
  // PUBS //
  //------//

  var pubsData = null;
  function doPubData(json) {
      pubsData = json.feed.entry;
  }

  function writePublication(parent, rowData) {

	  if (rowData == null) return null;
	  if (rowData.length == 0) return null;

	  var tr = $("<div class=\"publication\"/>");
	  parent.append(tr);

	  var pt = $("<p class=\"pub-title\"/>");
	  tr.append(pt);
      pt.append(rowData[0]);

	  var pa = $("<p class=\"pub-author\"/>");
	  tr.append(pa);
      pa.append(rowData[1]);

	  var pj = $("<p class=\"pub-journal\"/>");
	  tr.append(pj);
      pj.append(rowData[2]);

	  var py = $("<p class=\"pub-year\"/>");
	  tr.append(py);
      py.append(rowData[3]);

	  return tr;
  }

  function readPubData(parent) {

      var data = pubsData;
      var rowData = [];
      
      for(var r=4; r<data.length; r++) {
          var cell = data[r]["gs$cell"];
          var val = cell["$t"];
          if (cell.col == 1) {
              writePublication(parent, rowData);
              rowData = [];
          }
          rowData.push(val);
      }
      writePublication(parent, rowData);
  }

  $(document).ready(function(){
      readPubData($("#pubsdata"));
  });
