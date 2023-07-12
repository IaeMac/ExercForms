const form = document.getElementById('form-comp');

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const numeroA = document.getElementById('numero-a').value;
    const numeroB = document.getElementById('numero-b').value;

    if (numeroB>numeroA){
        document.querySelector(".sucess-menssage").style.display = "block";

        document.getElementById('numero-a').value = "";
        document.getElementById('numero-b').value = "";

    }else{
        document.querySelector(".error-menssage").style.display = "block";
    }
});

