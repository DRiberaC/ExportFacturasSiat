var tbody = document.getElementsByTagName("tbody")[1];
var trs = tbody.getElementsByTagName("tr");
var Texto="";
for (let k = 0; k < trs.length; k++) {
    var tds = trs[k].getElementsByTagName("td");
    for (i = 0; i < tds.length; i++) {
        var spans=tds[i].getElementsByTagName("span");
        for (j = 0; j < spans.length; j++) {
            Texto+=spans[j].innerText+"|";
        }
    }
    Texto = Texto.substring(0, Texto.length - 1);
    Texto+="\n";
}

//https://stackoverflow.com/questions/33855641/copy-output-of-a-javascript-variable-to-the-clipboard
var dummy = document.createElement("textarea");
// to avoid breaking orgain page when copying more words
// cant copy when adding below this code
// dummy.style.display = 'none'
document.body.appendChild(dummy);
//Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
dummy.value = Texto;
dummy.select();
document.execCommand("copy");
document.body.removeChild(dummy);
