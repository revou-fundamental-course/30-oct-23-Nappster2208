
// On click Hitung BMI
document.getElementById("btn_hitung").addEventListener("click", function () {

    var jk = document.getElementsByName("jenis_kelamin");
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
        calculate(jk, weight.value, age.value, height.value);
    }
})

document.getElementById("btn_reset").addEventListener("click", function () {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";
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
function calculate(jk, weight, age, height){

    var sex = "";

    for (let index = 0; index < jk.length; index++) {
        if (jk[index].checked) {
            sex = jk[index].value;
        }        
    }
    
    height = height / 100; // Convert height to meter

    var BMI = weight / (height * height);
    BMI = BMI.toFixed(1);

    let desc1 = "";
    let desc2 = "";
    let hasilText = "";
    // Checking Weight Condition
    if (BMI < 18.5) {
        hasilText = "Hasil BMI kurang dari 18.5";
        desc1 = "Anda kekuarangan berat badan.";
        desc2 = "Disarankan untuk menambah proporsi berat badan anda.";
        printHasil(sex, BMI, age, desc1, desc2, hasilText);
    } else if ((BMI >= 18.5) && (BMI <=24.9)){
        hasilText = "Hasil BMI diantara 18.5 dan 25";
        desc1 = "Berat badan anda ideal.";
        desc2 = "Tetap terus jaga proporsi tubuh anda dan jangan lupa jaga pola makanan anda.";
        printHasil(sex, BMI, age, desc1, desc2, hasilText);
    } else if ((BMI >=25.0) && (BMI <= 29.9)){
        hasilText = "Hasil BMI diantara 25 dan 30";
        desc1 = "Berat badan anda berlebihan.";
        desc2 = "Kurangi porsi karbohidrat anda dan rajinlah berolahraga.";
        printHasil(sex, BMI, age, desc1, desc2, hasilText);
    } else {
        hasilText = "Hasil BMI lebih dari 30";
        desc1 = "Anda sudah termasuk obesitas.";
        desc2 = "Segera lakukan diet karbohidrat, berolahraga lah dengan teratur serta konsultasikan dengan dokter.";
        printHasil(sex, BMI, age, desc1, desc2, hasilText);
    }

    // Show the result container and hide the form
    document.getElementById("result_container").style.display = "flex";
    document.querySelector(".main-section").style.display = "none";
}

var printHasil = (sex, hasil, age ,text, text2, text3) => {
    var labelTextResult = document.getElementById("label_result_text");
    var labelNumberResult = document.getElementById("label_result_number");
    var labelDescResult = document.getElementById("label_result_desc");
    var hasilLable = document.getElementById("hasil_lable");
    var hasilDesc = document.getElementById("hasil_desc");

    labelTextResult.innerHTML = sex + " usia " + age;
    labelNumberResult.innerHTML = hasil;
    labelDescResult.innerHTML = text;

    hasilLable.innerHTML = text3;
    hasilDesc.innerHTML = text2;

}