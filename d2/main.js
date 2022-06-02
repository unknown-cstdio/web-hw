let count = 0;

function caculate() {
    if(document.getElementById("check").checked) {
        count = count - parseInt(document.getElementById("text").value);
    } else {
        count = count + parseInt(document.getElementById("text").value);
    }
    document.getElementById("result").innerText = count;
}