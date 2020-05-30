function insert(num) {
    document.form.textview.value=document.form.textview.value+num;
}

function equal() {
    var exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);
    }
}

function ac() {
    document.form.textview.value = "";
}
function back() {
    var str = document.form.textview.value
    document.form.textview.value = str.substring(0,str.length-1);
}