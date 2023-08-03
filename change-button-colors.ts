import * as fs from 'fs';
import * as readline from 'readline';

const scssFilePath = 'src/lib/styles/theme/default.scss';

function updateColors(primary: string, secondary: string, danger: string) {
  const content = `
    @import url('https://fonts.cdnfonts.com/css/roboto');

    $primary: ${primary};
    $secondary: ${secondary};
    $danger: ${danger};

    $default: #AAAAAC;
    $primary-opacity: #0710541A;
    $neutroB: #FFFFFF;
    $neutroN: #000000;
    $success: #5cb85c;
    $info: #3bb4d8;
    $focus: #9FCEF6;
    $warning: #f0ad4e;

    $boxShadow: 0px 5px 10px #2E2E2E4D;
    $fuente:'Roboto', sans-serif;
  `;

  console.log("Se aplica");

  fs.writeFileSync(scssFilePath, content, 'utf8');
}

function promptForColors() {
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Ingrese el nuevo color para primary: ', (primary) => {
    rl.question('Ingrese el nuevo color para secondary: ', (secondary) => {
      rl.question('Ingrese el nuevo color para danger: ', (danger) => {
        updateColors(primary, secondary, danger);
        rl.close();
        console.log('Los colores se han actualizado correctamente en el archivo boton.scss.');
      });
    });
  });
}

promptForColors();