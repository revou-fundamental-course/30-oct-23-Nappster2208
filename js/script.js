document.getElementById("btn_hitung").addEventListener("click", function () {

    const jk = document.getElementById("jenis_kelamin");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");
    const age = document.getElementById("age");

    let alertWeight = document.getElementById("alertWeight");
    let alertAge = document.getElementById("alertAge");
    let alertHeight = document.getElementById("alertHeight");

    if(isEmpty(weight, alertWeight) == 0) {
        return;
    }else if (isEmpty(age, alertAge) == 0) {
        return;
    } else if (isEmpty(height, alertHeight) == 0) {
        return;
    }else {
        // Show the result container and hide the form
        document.getElementById("result_container").style.display = "flex";
        document.querySelector(".main-section").style.display = "none";
    }
})

function isEmpty(inputElement, alertElement) {
    if (inputElement.value == ""){
        inputElement.style.borderColor = "red";
        alertElement.innerHTML = "Tidak boleh kosong!";
        return 0;
    }
    else{
        inputElement.style.borderColor = "green";
        alertElement.innerHTML = "";
        return 1;
    }
}