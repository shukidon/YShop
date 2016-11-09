// CSV出力
function exportData() {
    // input取得整形
    var data = '';
    for (var i=0;i<=55;i++) {
      sep = ',';
      data +=  sep + $("#item" + i).val();
    }

    // 行頭一文字削除
    var csvexport = data.substr( 1 ) ;

    // 末尾改行挿入
    csvexport += '\r\n';


    // ファイル名取得
    var fname = $("#item2").val();

    // CSV文字列
    $("#resultData").html("<p>" + csvexport.replace("\r\n", "<br/>") + "</p>");

    // Base64エンコード文字列
     var csv = 'data:text/csv;base64,' + window.btoa(unescape(encodeURIComponent(csvexport)));
     $("#resultCsv").html(csv);

    // ダウンロード用リンク
    var exportLink = document.createElement('a');
    exportLink.setAttribute('href', csv);
    exportLink.appendChild(document.createTextNode('ファイルに保存'));
    exportLink.download = (fname) + ".csv";
    $("#resultButton").html(exportLink);
}

// プルダウン検索
$(function(){
  $('.select').select2();
});

// 文字カウント
function count(str){
  var bc=0;
  for(var i=0;i<str.length;i++){
    if(str.charCodeAt(i)<0x100){
      // case: ascii character.
      bc+=1;
    }else{
      // case: double byte character.
      bc+=2;
    }
  }

  var display=document.getElementById("countoutput");
  display.innerHTML="全角："+Math.ceil(bc/2)+" | 半角："+bc+" | 文字数："+str.length+"";
//  display.innerHTML="総文字数："+str.length+"<hr>バイト数："+bc+"<hr>全角換算："+Math.ceil(bc/2)+"";
//  display.innerHTML="総文字数："+str.length+"<hr>行数："+str.split("\n").length+"<hr>バイト数："+bc+"<hr>全角換算："+Math.ceil(bc/2)+"";
}
