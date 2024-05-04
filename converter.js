// Variables globales para almacenar los valores del dólar
let officialRate;
let bluRate;
let tarRate;
let euroRate;
let cadRate;
let brlRate;


// Realizamos una petición a la API para el dólar oficial
const urlDolarOficial = 'https://api.exchangerate-api.com/v4/latest/USD';
fetch(urlDolarOficial)
    .then(response => response.json())
    .then(data => {
        officialRate = data.rates.ARS; // Almacenar el valor del dólar oficial desde la API
        document.getElementById('compraDolarOficial').textContent = officialRate.toFixed(2);
        document.getElementById('ventaDolarOficial').textContent = officialRate.toFixed(2);
    })
    .catch(error => {
        console.error('Error al obtener el valor del dólar oficial:', error);
    });


// Realizamos otra petición a la API para el dólar blue
const urlDolarBlue = 'https://api.exchangerate-api.com/v4/latest/USD';
fetch(urlDolarBlue)
    .then(response => response.json())
    .then(data => {
        bluRate = data.rates.ARS * 1.15;
        document.getElementById('compraBlu').textContent = bluRate.toFixed(2);
        document.getElementById('ventaBlu').textContent = bluRate.toFixed(2);
    })
    .catch(error => {
        console.error('Error al obtener el valor del dólar blue:', error);
    });

// Realizamos otra petición a la API para el dólar targeta
const urlDolarTAR = 'https://api.exchangerate-api.com/v4/latest/USD';
fetch(urlDolarTAR)
    .then(response => response.json())
    .then(data => {
        tarRate = data.rates.ARS * 1.65;
        document.getElementById('compraTar').textContent = tarRate.toFixed(2);
        document.getElementById('ventaTar').textContent = tarRate.toFixed(2);
    })
    .catch(error => {
        console.error('Error al obtener el valor del dólar targeta:', error);
    });


// Realizamos una petición a la API para el Euro
const urlEuro ='https://api.exchangerate-api.com/v4/latest/EUR';
fetch(urlEuro)
    .then(response => response.json())
    .then(data => {
        euroRate = data.rates.ARS; // Almacenar el valor del Euro desde la API
        document.getElementById('compraEuro').textContent = euroRate.toFixed(2);
        document.getElementById('ventaEuro').textContent = euroRate.toFixed(2);
    })
    .catch(error => {
        console.error('Error al obtener el valor del Euro:', error);
    });

// Realizamos una petición a la API para el CAD
const urlCAD ='https://api.exchangerate-api.com/v4/latest/CAD';
fetch(urlCAD)
    .then(response => response.json())
    .then(data => {
        cadRate = data.rates.ARS; // Almacenar el valor del CAD desde la API
        document.getElementById('compraCAD').textContent = cadRate.toFixed(2);
        document.getElementById('ventaCAD').textContent = cadRate.toFixed(2);
    })
    .catch(error => {
        console.error('Error al obtener el valor del Euro:', error);
    });


// Realizamos una petición a la API para el Real 
const urlBRL = 'https://api.exchangerate-api.com/v4/latest/BRL';
fetch(urlBRL)
    .then(response => response.json())
    .then(data => {
        brlRate = data.rates.ARS;
        document.getElementById('compraBRL').textContent = brlRate.toFixed(2);
        document.getElementById('ventaBRL').textContent = brlRate.toFixed(2);
    })
    .catch(error => {
        console.error('Error al obtener el valor del Real Brasileño:', error);
    });

    



// Variables para la Calculadora
const convertButton = document.getElementById('convert');
const dollarsInput = document.getElementById('dollars');
const pesosInputUSD = document.getElementById('pesosUSD');
const eurosInput = document.getElementById('euros');
const pesosInputEUR = document.getElementById('pesosEUR');
const cadInput = document.getElementById('cad');
const pesosInputCAD = document.getElementById('pesosCAD');
const brlInput = document.getElementById('brl');
const pesosInputBRL = document.getElementById('pesosBRL');
const bluInput = document.getElementById('blu');
const pesosInputBLU = document.getElementById('pesosBLU');
const tarInput = document.getElementById('tar');
const pesosInputTAR = document.getElementById('pesosTAR');


// Calculador de Conversión UDS - ARS
convertButtonUSD.addEventListener('click', () => {
    const dollars = parseFloat(dollarsInput.value);
    const pesosUSD = parseFloat(pesosInputUSD.value);

    if (!isNaN(dollars)) {
        const convertedPesosUSD = dollars * officialRate; // Utilizar el valor del dólar oficial
        pesosInputUSD.value = convertedPesosUSD.toFixed(2);
    } else if (!isNaN(pesosUSD)) {
        const convertedDollars = pesosUSD / officialRate; // Utilizar el valor del dólar oficial
        dollarsInput.value = convertedDollars.toFixed(2);
    }
});


// Agregar eventos de escucha para detectar cambios en las entradas
dollarsInput.addEventListener('input', () => {
    if (dollarsInput.value) {
        pesosInputUSD.value = ''; // Reiniciar la entrada de pesos si hay un valor en dólares
    }
});

pesosInputUSD.addEventListener('input', () => {
    if (pesosInputUSD.value) {
        dollarsInput.value = ''; // Reiniciar la entrada de dólares si hay un valor en pesos
    }
});




// Calculador de Conversión BLU - ARS
convertButtonBLU.addEventListener('click', () => {
    const blu = parseFloat(bluInput.value);
    const pesosBLU = parseFloat(pesosInputBLU.value);

    if (!isNaN(blu)) {
        const convertedPesosBLU = blu * bluRate; 
        pesosInputBLU.value = convertedPesosBLU.toFixed(2);
    } else if (!isNaN(pesosBLU)) {
        const convertedBLU = pesosBLU / bluRate; 
        bluInput.value = convertedBLU.toFixed(2);
    }
});

// Agregar eventos de escucha para detectar cambios en las entradas
bluInput.addEventListener('input', () => {
    if (bluInput.value) {
        pesosInputBLU.value = ''; 
    }
});

pesosInputBLU.addEventListener('input', () => {
    if (pesosInputBLU.value) {
        bluInput.value = ''; 
    }
});




// Calculador de Conversión TAR - ARS
convertButtonTAR.addEventListener('click', () => {
    const tar = parseFloat(tarInput.value);
    const pesosTAR = parseFloat(pesosInputTAR.value);

    if (!isNaN(tar)) {
        const convertedPesosTAR = tar * tarRate; 
        pesosInputTAR.value = convertedPesosTAR.toFixed(2);
    } else if (!isNaN(pesosTAR)) {
        const convertedTAR = pesosTAR / tarRate; 
        tarInput.value = convertedTAR.toFixed(2);
    }
});

// Agregar eventos de escucha para detectar cambios en las entradas
tarInput.addEventListener('input', () => {
    if (tarInput.value) {
        pesosInputTAR.value = ''; 
    }
});

pesosInputTAR.addEventListener('input', () => {
    if (pesosInputTAR.value) {
        tarInput.value = ''; 
    }
});





// Calculador de Conversión EUR - ARS
convertButtonEUR.addEventListener('click', () => {
    const euros = parseFloat(eurosInput.value);
    const pesosEUR = parseFloat(pesosInputEUR.value);

    if (!isNaN(euros)) {
        const convertedPesosEUR = euros * euroRate; 
        pesosInputEUR.value = convertedPesosEUR.toFixed(2);
    } else if (!isNaN(pesosEUR)) {
        const convertedEUR = pesosEUR / euroRate; 
        eurosInput.value = convertedEUR.toFixed(2);
    }
});

// Agregar eventos de escucha para detectar cambios en las entradas
eurosInput.addEventListener('input', () => {
    if (eurosInput.value) {
        pesosInputEUR.value = ''; 
    }
});

pesosInputEUR.addEventListener('input', () => {
    if (pesosInputEUR.value) {
        eurosInput.value = ''; 
    }
});




// Calculador de Conversión CAD - ARS
convertButtonCAD.addEventListener('click', () => {
    const cad = parseFloat(cadInput.value);
    const pesosCAD = parseFloat(pesosInputCAD.value);

    if (!isNaN(cad)) {
        const convertedPesosCAD = cad * cadRate; 
        pesosInputCAD.value = convertedPesosCAD.toFixed(2);
    } else if (!isNaN(pesosCAD)) {
        const convertedCAD = pesosCAD / cadRate;  
        cadInput.value = convertedCAD.toFixed(2);
    }
});


// Agregar eventos de escucha para detectar cambios en las entradas
cadInput.addEventListener('input', () => {
    if (cadInput.value) {
        pesosInputCAD.value = ''; 
    }
});

pesosInputCAD.addEventListener('input', () => {
    if (pesosInputCAD.value) {
        cadInput.value = ''; 
    }
});




// Calculador de Conversión CAD - ARS
convertButtonBRL.addEventListener('click', () => {
    const brl = parseFloat(brlInput.value);
    const pesosBRL = parseFloat(pesosInputBRL.value);

    if (!isNaN(brl)) {
        const convertedPesosBRL = brl * brlRate; 
        pesosInputBRL.value = convertedPesosBRL.toFixed(2);
    } else if (!isNaN(pesosBRL)) {
        const convertedBRL = pesosBRL / brlRate; 
        brlInput.value = convertedBRL.toFixed(2);
    }
});


// Agregar eventos de escucha para detectar cambios en las entradas
brlInput.addEventListener('input', () => {
    if (brlInput.value) {
        pesosInputBRL.value = ''; 
    }
});

pesosInputBRL.addEventListener('input', () => {
    if (pesosInputBRL.value) {
        brlInput.value = ''; 
    }
});

