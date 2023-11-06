
// On click Hitung BMI
document.getElementById("btn_hitung").addEventListener("click", function () {

    const jk = document.getElementById("jenis_kelamin");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");
    const age = document.getElementById("age");

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

    var BMI = weight / (height * height);

    switch (BMI) {
        case BMI < 18.5:
            alert("Berat Badan Kurang!");
            break;

        case (BMI >= 18.5) && (BMI <= 24.9) :
            alert("Berat Badan Kurang!");
            break;

        case (BMI >= 25.0) && (BMI <= 29.9) :
            alert("Kelebihan Berat Badan");
            break;

        case BMI >= 30.0 :
            alert("Kegemukan (Obesitas)");
            break;
    
        default:
            break;
    }
    // Show the result container and hide the form
    document.getElementById("result_container").style.display = "flex";
    document.querySelector(".main-section").style.display = "none";
}