function submitForm(that) {
    var code = that.Qcode.value;
    window.open('https://paper.puexam.in//'+code+'.pdf');
    return false;
}