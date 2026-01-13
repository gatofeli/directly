<div align="center">
    <a href="#"><img  src=".github/assets/logo.png" alt="Logotipo de la extensión 'Directly', es la cara de un gato con una lupa" /></a>
    <h1>Directly</h1>
</div>

<p align="center"><b>La forma más rápida de llegar a donde ya sabes que quieres ir</b></p>

<p align="center">Una extensión para navegadores Chromium</p>

-----



## ¿Qué es Directly?

**Directly** es una extensión gratuita para navegadores basados en Chromium, que ofrece una barra de consultas (que no de búsquedas) para acceder rápidamente al buscador interno o a la página principal de tus sitios favoritos.

Directly navegará a:

- La **home** cuando no se escribe ninguna consulta.
- La **búsqueda** cuando sí se ha escrito una consulta. 

Es accesible desde cualquier pestaña del navegador con un simple atajo de teclado.

## ¿A quién va dirigido?

Directly está pensado para usuarios que suelen realizar búsquedas frecuentes dentro de las mismas webs y que quieran:

- **Mejorar la experiencia de usuario** en el acceso del contenido digital.
- **Reducir considerablemente los tiempos** de búsqueda.
- **No saturar la barra de marcadores del navegador.**

Como por ejemplo:

- **Estudiantes o investigadores** que consultan habitualmente en plataformas educativas, bibliotecas digitales, revistas académicas en línea o bases de datos.
- **Desarrolladores y técnicos** que consultan documentación, repositorios, guías o referencias técnicas.
- **Usuarios avanzados** que prefieran usar atajos de teclado y flujos directos en lugar de clics innecesarios. 

En resumen, para quienes ya saben **a dónde quieren ir**, y solo necesitan llegar **más rápido**.

## Características principales

- Barra de consultas **rápida y accesible** desde cualquier pestaña.
- Soporte para navegadores basados en Chromium.
- Atajos de teclado personalizables.
- **Privada:** Sin cuentas, sin sincronización, sin telemetría.
- **Sin publicidad, ni recopilación o venta de datos.**
- **Gratuita y Sencilla**.

## Cómo funciona

Para realizar búsquedas desde la extensión no necesitas soltar el teclado.

**Navegar a la home de una web:**
1. **Abrir la extensión**:
   - **Atajo de teclado** (recomendado).
   - **Clic en el icono** de la extensión.
2. **`Enter`** .
3. **Seleccionas la web** que quieras visitar con las **flechas o tabulador**.
4. **`Enter`** .

**Buscar dentro de una web:**
1. **Abrir la extensión**:
   - **Atajo de teclado** (recomendado).
   - **Clic en el icono** de la extensión.
2. **Escribe la consulta** y pulsa **`Enter`** .
3. **Seleccionas la web** que quieras visitar con las **flechas o tabulador**.
4. **`Enter`** .

## Instalación

### Desde la Store (Próximamente)

> **Nota:** La extensión aún no está publicada en la store. Para probarla puedes instalarla en modo desarrollador (ver la sección de [instalación manual](#manual-modo-desarrollador)).
>
> Cuando publiquemos la **beta** se actualizará este apartado con el enlace.

**Instala la extensión** desde la ~~<a href=#>Chrome Web Store</a>~~ o la **tienda oficial de tu navegador**.


### Manual (modo desarrollador)

0. Instala `node.js >= 22`

   > Node.js es necesario únicamente para generar los archivos de la extensión (carpeta `dist`) en modo desarrollador.
   >
   > Para usar la extensión, no es necesario tener Node.js ni el código del repositorio.

1. Clona o **descarga este repositorio**.

2. Instala las dependencias del proyecto con **`npm install`**

3. Usa el comando **`npm run build`** para generar la carpeta `dist`.

4. Abre el **gestor de extensiones** de tu navegador  `brave://extensions/`

5. Activa el **modo desarrollador**.

6. Haz clic en "**Cargar sin empaquetar**".

7. Selecciona la **carpeta `dist`** del proyecto.

## Configuración

Un mensaje de ayuda a la configuración se mostrará cuando se active la extensión y su *Lista de webs activadas* se encuentre vacía o sin ningún dato válido *(es decir vacía, ya que los datos inválidos se descartarán)*.

Al instalarse la extensión se activará automáticamente y por lo tanto (ya que lo más normal es no tener ninguna base de datos antes de la instalación) también se mostrará ese mensaje de ayuda para guiar al usuario.

Configuración básica:

- Personalización de la lista de webs activadas.
- Personalización de los atajos de teclado.

*Toda la información necesaria para la configuración se encuentra en la página de ayuda de la extensión.*

## Errores, Sugerencias y dudas

 Todos los reportes relacionados con extensión se gestionan **exclusivamente a través de GitHub**.

Antes de crear uno, revisa las opciones disponibles para asegurarte de usar el canal correcto.

### Reportar un error:

Si no estás completamente seguro de que sea un error, **no abras una issue**.
En ese caso, [reporta una duda](#reportar-una-duda).

Los reportes de errores se realizan desde **Issues** y existen **dos plantillas distintas:**

- **Plantilla para usuarios con experiencia en desarrollo o testing**
  - Pensada para reportes mejor estructurados y detallados.
  - Solo es accesible desde la sección **Issues** de GitHub.
- **Plantilla para usuarios sin experiencia técnica**
  - Pensada para describir el problema de forma sencilla.
  - Accesible desde:
    - La sección **Issues** de GitHub.
    - La pestaña **"Errores y Sugerencias"** dentro de la configuración de la extensión.

### Reportar una sugerencia

Si tienes una idea para mejorar la extensión, proponer un cambio, añadir una nueva web como default o sugerir una nueva funcionalidad, utiliza este canal.

Accesible desde:

- **Discussions** en GitHub.
- La pestaña **"Errores y Sugerencias"** dentro de la configuración de la extensión.

### Reportar una duda

Usa este canal para cualquier cosa que **no sea claramente un error ni una sugerencia de mejora**, por ejemplo:

- Dudas sobre el funcionamiento de la extensión.
- Situaciones que **podrían** ser un error, pero no estás seguro.
- Preguntas de uso.

## Información sobre la documentación del código

La documentación interna del código (comentarios, JSDoc/TSDoc, etc) se añadirá progresivamente a partir de la versión 1.0.0.

El proyecto está en fase beta y la estructura interna puede cambiar.

## Permisos y Privacidad

**Directly** se adhiere al principio de **mínimos permisos y máxima privacidad**:

| Permiso   | Uso                                                 |
| --------- | --------------------------------------------------- |
| `storage` | Guarda la configuración y lista de sitios en local. |

*Directly solo usa el permiso "storage"*



- **No recopila ningún tipo de dato**.
- **No comparte ningún tipo de dato**.
- **No vende ningún tipo de dato**.
- **Todos los datos permanecen en tu navegador**.

## Compatibilidad

Compatible con navegadores basados en Chromium o que puedan hacer uso de la Chrome Web Store:

- **Brave**
- **Opera**
- **Vivaldi**
- **Google Chrome**
- **Microsoft Edge**

## Tecnologías

- Vite
- Vitest
- TypeScript
- JavaScript
- React
- Git
- Chrome Extensions API (Manifest V3)

## Licencia

Este proyecto está disponible bajo la licencia [GPL v3](./LICENSE).

## Filosofía del proyecto

**Directly** nace como una solución a una necesidad personal: optimizar flujos de navegación habituales y reducir pasos innecesarios al acceder a contenidos que se consultan con frecuencia. Desde el inicio, el objetivo ha sido crear una herramienta que resulte útil tanto para mí como para otras personas con hábitos de navegación similares.

El proyecto se concibe como un espacio de aprendizaje y mejora continua, en el que voy consolidando conocimientos y habilidades a medida que avanzo en su desarrollo. Se presta atención al uso de convenciones, buenas prácticas y a mantener un código claro y comprensible, priorizando siempre la utilidad real y la experiencia de usuario.

Directly no pretende ser un proyecto perfecto ni cerrado, sino una base en evolución. Muchas decisiones se toman de forma consciente en función del nivel actual y del contexto del proyecto, con la intención de iterar, refactorizar y mejorar progresivamente a medida que se adquiere mayor experiencia.



## Autor

Desarrollado por Alejandro Aranda Muñoz.

Contáctame desde [LinkedIn](https://www.linkedin.com/in/alejandro-aranda-muñoz-8ba8a9277)
