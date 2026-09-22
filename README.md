# Expresiones Regulares en JavaScript — Ejemplo práctico

Trabajo de investigación aplicada — Escuela de Computación, Universidad Don Bosco.

## Descripción

Sitio web sencillo que demuestra el uso de expresiones regulares (regex) en JavaScript:

- Un **validador de formulario** con 5 campos (correo, teléfono, contraseña, fecha y URL), cada uno validado en tiempo real con su propia expresión regular.
- Un **probador de regex en vivo**: escribes tu propio patrón y un texto, y las coincidencias se resaltan automáticamente.

## Estructura del proyecto

```
expresiones-regulares-js/
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── app.js
└── README.md
```

## Cómo verlo localmente

Abre `index.html` directamente en tu navegador (no necesita servidor ni instalación).

## Cómo publicarlo en GitHub Pages (para el código QR)

1. Crea un repositorio nuevo en GitHub llamado, por ejemplo, `expresiones-regulares-js`.
2. Sube estos archivos (ver sección siguiente para los comandos).
3. En el repositorio, ve a **Settings → Pages**.
4. En "Build and deployment", selecciona **Source: Deploy from a branch**.
5. En "Branch", elige **main** y la carpeta **/(root)**. Guarda.
6. Espera 1–2 minutos; GitHub mostrará la URL pública, con este formato:
   `https://<tu-usuario>.github.io/<nombre-del-repositorio>/`

Para este proyecto, con el usuario `kevinhuezo2004`, la URL queda:

```
https://kevinhuezo2004.github.io/expresiones-regulares-js/
```

Esa es la URL que está codificada en el QR de la infografía.

## Comandos para subirlo a GitHub

Desde la carpeta `expresiones-regulares-js`:

```bash
git init
git add .
git commit -m "Ejemplo de expresiones regulares en JavaScript"
git branch -M main
git remote add origin https://github.com/kevinhuezo2004/expresiones-regulares-js.git
git push -u origin main
```

Luego activa GitHub Pages siguiendo los pasos de arriba.

## Expresiones regulares utilizadas

| Campo | Expresión regular | Qué valida |
|---|---|---|
| Correo | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` | Texto-arroba-texto-punto-texto, sin espacios |
| Teléfono | `/^\d{4}-\d{4}$/` | Formato ####-#### |
| Contraseña | `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/` | 8+ caracteres, con mayúscula, minúscula, número y símbolo |
| Fecha | `/^(0[1-9]\|[12]\d\|3[01])\/(0[1-9]\|1[0-2])\/\d{4}$/` | Formato dd/mm/aaaa |
| URL | `/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\-./?%&=]*)?$/` | Dirección web básica |

## Fuentes consultadas

- MDN Web Docs — [Regular expressions (JavaScript Guide)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
- MDN Web Docs — [RegExp object reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [regex101.com](https://regex101.com) — probador y depurador de expresiones regulares
- [regexr.com](https://regexr.com) — probador de expresiones regulares con explicación en vivo
