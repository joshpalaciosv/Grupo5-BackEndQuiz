const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Example endpoint for fetching
app.get('/api/quiz', (req, res) => {
    res.json([
        { question: 'Seleccione el tema principal', options: ['HTML', 'JavaScript', 'CSS', 'Bootstrap'], answer: 'HTML' }
    ]);
});

// Preguntas para HTML
app.get('/api/html/quiz', (req, res) => {
    res.json([
        { question: '¿Qué etiqueta se usa para crear un enlace en HTML?', options: ['<link>', '<a>', '<href>', '<anchor>'], answer: '<a>' },
        { question: '¿Cuál es la etiqueta para definir una lista con viñetas?', options: ['<ul>', '<li>', '<ol>', '<list>'], answer: '<ul>' },
        { question: '¿Cómo se define una tabla en HTML?', options: ['<table>', '<grid>', '<tab>', '<div>'], answer: '<table>' },
        { question: '¿Qué etiqueta se usa para encabezados secundarios?', options: ['<h2>', '<h1>', '<h3>', '<header>'], answer: '<h2>' },
        { question: '¿Cuál es la estructura básica de un documento HTML?', options: ['<html><head><body>', '<doctype><html><title>', '<html><title><meta>', '<header><body><footer>'], answer: '<html><head><body>' },
        { question: '¿Qué etiqueta se usa para un salto de línea?', options: ['<br>', '<hr>', '<break>', '<line>'], answer: '<br>' },
        { question: '¿Cómo defines una imagen con un texto alternativo?', options: ['<img alt="texto">', '<image alt="texto">', '<pic alt="texto">', '<src alt="texto">'], answer: '<img alt="texto">' },
        { question: '¿Qué etiqueta define un área de entrada de texto?', options: ['<input>', '<textarea>', '<form>', '<textbox>'], answer: '<textarea>' },
        { question: '¿Qué atributo se usa para definir el idioma en HTML?', options: ['lang', 'language', 'dir', 'locale'], answer: 'lang' },
        { question: '¿Qué etiqueta define un enlace para una hoja de estilo externa?', options: ['<link>', '<style>', '<css>', '<stylesheet>'], answer: '<link>' }
    ]);
});


// Preguntas para JavaScript
app.get('/api/javascript/quiz', (req, res) => {
    res.json([
        { question: '¿Cuál es el método para convertir una cadena a mayúsculas?', options: ['toUpperCase()', 'toLowerCase()', 'toUpper()', 'convertToUpper()'], answer: 'toUpperCase()' },
        { question: '¿Cómo se agrega un evento click a un botón?', options: ['addEventListener()', 'onClick()', 'clickEvent()', 'attachEvent()'], answer: 'addEventListener()' },
        { question: '¿Qué operador se usa para concatenar cadenas?', options: ['+', '-', '&', 'concat'], answer: '+' },
        { question: '¿Cómo verificas el tipo de una variable?', options: ['typeof', 'instanceof', 'getType()', 'checkType()'], answer: 'typeof' },
        { question: '¿Cuál es el valor de `null` en JavaScript?', options: ['object', 'null', 'undefined', 'string'], answer: 'object' },
        { question: '¿Cómo defines un array vacío?', options: ['[]', '{}', '()', '<>'], answer: '[]' },
        { question: '¿Cuál es la forma correcta de escribir un comentario en JavaScript?', options: ['// Comentario', '/* Comentario */', '# Comentario', '<!-- Comentario -->'], answer: '// Comentario' },
        { question: '¿Qué método devuelve la longitud de una cadena?', options: ['length', 'size', 'count', 'chars'], answer: 'length' },
        { question: '¿Cómo accedes al último elemento de un array?', options: ['array[array.length - 1]', 'array.last()', 'array.end()', 'array[array.size - 1]'], answer: 'array[array.length - 1]' },
        { question: '¿Qué palabra clave detiene la ejecución de un bucle?', options: ['break', 'continue', 'stop', 'exit'], answer: 'break' }
    ]);
});


// Preguntas para CSS
app.get('/api/css/quiz', (req, res) => {
    res.json([
        { question: '¿Cómo defines una clase en CSS?', options: ['.className', '#className', 'class.className', '<className>'], answer: '.className' },
        { question: '¿Qué propiedad se usa para cambiar el color del texto?', options: ['color', 'text-color', 'font-color', 'background-color'], answer: 'color' },
        { question: '¿Cuál es el valor por defecto de `position`?', options: ['static', 'relative', 'absolute', 'fixed'], answer: 'static' },
        { question: '¿Qué propiedad se usa para ocultar un elemento sin eliminarlo del flujo?', options: ['visibility', 'display: none', 'opacity: 0', 'hidden'], answer: 'visibility' },
        { question: '¿Cómo se define un espacio interno (padding) de 20px?', options: ['padding: 20px;', 'margin: 20px;', 'space: 20px;', 'border-spacing: 20px;'], answer: 'padding: 20px;' },
        { question: '¿Qué propiedad controla la alineación vertical de un texto?', options: ['vertical-align', 'text-align', 'align-items', 'valign'], answer: 'vertical-align' },
        { question: '¿Cómo se centra horizontalmente un bloque con `margin`?', options: ['margin: 0 auto;', 'center-block', 'align: center;', 'block-align: center;'], answer: 'margin: 0 auto;' },
        { question: '¿Qué valor de `display` se usa para un diseño en flexbox?', options: ['flex', 'grid', 'block', 'inline-block'], answer: 'flex' },
        { question: '¿Qué propiedad se usa para cambiar la fuente?', options: ['font-family', 'font-style', 'font-weight', 'font-type'], answer: 'font-family' },
        { question: '¿Cómo defines una sombra en un elemento?', options: ['box-shadow', 'shadow', 'element-shadow', 'drop-shadow'], answer: 'box-shadow' }
    ]);
});


// Preguntas para Bootstrap
app.get('/api/bootstrap/quiz', (req, res) => {
    res.json([
        { question: '¿Cómo defines un contenedor que ocupa todo el ancho en Bootstrap?', options: ['container-fluid', 'container-full', 'container-lg', 'container-max'], answer: 'container-fluid' },
        { question: '¿Qué clase de Bootstrap se usa para hacer columnas responsivas?', options: ['col', 'col-responsive', 'column', 'grid-col'], answer: 'col' },
        { question: '¿Qué clase se usa para añadir espaciado entre elementos?', options: ['m-3', 'padding-3', 'space-3', 'spacing-3'], answer: 'm-3' },
        { question: '¿Cómo defines un botón de tipo éxito (verde)?', options: ['btn-success', 'btn-primary', 'btn-green', 'btn-okay'], answer: 'btn-success' },
        { question: '¿Qué clase se usa para centrar el contenido en un div usando flexbox?', options: ['d-flex justify-content-center', 'center-flex', 'align-center-flex', 'flex-center'], answer: 'd-flex justify-content-center' },
        { question: '¿Cuál es la clase para un grupo de listas en Bootstrap?', options: ['list-group', 'group-list', 'nav-group', 'item-group'], answer: 'list-group' },
        { question: '¿Qué clase define un texto en negrita?', options: ['fw-bold', 'font-bold', 'bold-text', 'strong-text'], answer: 'fw-bold' },
        { question: '¿Cómo se define una alerta de error?', options: ['alert-danger', 'alert-error', 'alert-red', 'error-alert'], answer: 'alert-danger' },
        { question: '¿Qué clase de Bootstrap ajusta el contenido en móviles?', options: ['d-sm-block', 'd-mobile-block', 'd-xs-block', 'd-xs-inline'], answer: 'd-sm-block' },
        { question: '¿Qué clase se usa para un contenedor con un borde redondeado?', options: ['rounded', 'border-radius', 'round-box', 'rounded-border'], answer: 'rounded' }
    ]);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
