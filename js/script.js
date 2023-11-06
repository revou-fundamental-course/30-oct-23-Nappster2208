
// On click Hitung BMI
document.getElementById("btn_hitung").addEventListener("click", function () {

    var jk = document.getElementById("jenis_kelamin");
    var weight = document.getElementById("weight");
    var height = document.getElementById("height");
    var age = document.getElementById("age");

    let alertWeight = document.getElementById("alertWeight");
    let alertAge = document.getElementById("alertAge");
    let alertHeight = document.getElementById("alertHeight");

    // Check if input is empty
    if(isEmpty(weight, alertWeight) == 0) {
        return;
    }else if (isEmpty(age, alertAge) == 0) {
        return;
    } else if (isEmpty(height, alertHeight) == 0) {
        return;
    }else {
        calculate(weight.value, age.value, height.value);
    }
})

// If Empty Function
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

// Validate input function
function validate(id, alertId) {
    if (id.value != ""){
        id.style.borderColor = "#B6FFFA";
        alertId.innerHTML = "";
    }
}

// Calculate BMI function
function calculate(weight, age, height){
    
    height = height / 100; // Convert height to meter
    
    var BMI = weight / (height * height);

    // Checking Weight Condition
    if (BMI < 18.5) {
        alert("Kekurangan berat badan");
    } else if ((BMI >= 18.5) && (BMI <=24.9)){
        alert("Berat badan normal");
    } else if ((BMI >=25.0) && (BMI <= 29.9)){
        alert("Kelebihan berat badan");
    } else {
        alert("Obesitas mas bro !!!");
    }

    // Show the result container and hide the form
    document.getElementById("result_container").style.display = "flex";
    document.querySelector(".main-section").style.display = "none";
}