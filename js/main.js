function cambiar_parrafo() {
    document.getElementById("edit-acercade").style.display="block";
    let texto = document.getElementById("text-acercade").innerText;
    console.log(texto);
};

function  myFunction2(valor) {
    document.getElementById("text-acercade").innerText=valor;
};

//controla si se presiono un enter
let textarea=document.getElementById("edit-acercade")
textarea.addEventListener('keyup', (e) => {
    logMessage(`key "${e.key}" released [event: keyup]`);
    if (e.key=="Enter"){
        document.getElementById("edit-acercade").style.display="none"
    }
});

//carga el contenido de un archivo de texto
// y lomuestro en el parrafo
function showFile(input) {
    let file = input.files[0];
    alert(`File name: ${file.name}`);
    alert(`Last modified: ${file.lastModified}`);

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        console.log(reader.result);
        document.getElementById("text-acercade").innerText=reader.result;
    };
    reader.onerror = function() {
        console.log(reader.error);
    };


}