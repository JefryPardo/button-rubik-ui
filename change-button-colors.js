"use strict";
exports.__esModule = true;
var fs = require("fs");
var readline = require("readline");
var scssFilePath = 'src/lib/styles/theme/default.scss';
function updateColors(primary, secondary, danger) {
    var content = "\n    @import url('https://fonts.cdnfonts.com/css/roboto');\n\n    $primary: ".concat(primary, ";\n    $secondary: ").concat(secondary, ";\n    $danger: ").concat(danger, ";\n\n    $default: #AAAAAC;\n    $primary-opacity: #0710541A;\n    $neutroB: #FFFFFF;\n    $neutroN: #000000;\n    $success: #5cb85c;\n    $info: #3bb4d8;\n    $focus: #9FCEF6;\n    $warning: #f0ad4e;\n\n    $boxShadow: 0px 5px 10px #2E2E2E4D;\n    $fuente:'Roboto', sans-serif;\n  ");
    console.log("Se aplica");
    fs.writeFileSync(scssFilePath, content, 'utf8');
}
function promptForColors() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Ingrese el nuevo color para primary: ', function (primary) {
        rl.question('Ingrese el nuevo color para secondary: ', function (secondary) {
            rl.question('Ingrese el nuevo color para danger: ', function (danger) {
                updateColors(primary, secondary, danger);
                rl.close();
                console.log('Los colores se han actualizado correctamente en el archivo boton.scss.');
            });
        });
    });
}
promptForColors();
