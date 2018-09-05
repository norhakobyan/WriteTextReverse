var fs = require("fs");

function reverseText (fs) {
  var fileReaded = fs.readFileSync("a.txt", "utf8");
  var len = fileReaded.length;
  var arr = [];
  for(let i = 0, j = 0, k = 0; i < len; ++i) {
    if(fileReaded[i] == '\n') {
      arr[j] = fileReaded.slice(k, i - 1);
      ++j;
      ++i;
      k = i;

    }
  }

  var arrRev = arr.reverse();
  var arr1 = arrRev.join("\n");
  var toStr = arr1.toString();
  fs.writeFileSync("b.txt", toStr)
  console.log(toStr);
}

reverseText(fs);
