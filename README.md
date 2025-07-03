```markdown
# carrusel-cards

Un componente visual de **carrusel de tarjetas (cards)**, moderno y responsive, desarrollado con **HTML, CSS y JavaScript puro**. Permite mostrar múltiples tarjetas con imágenes y texto, con navegación fluida y adaptada a cualquier tamaño de pantalla.

---

## 💻 1. Requisitos Técnicos

- **Archivo único de JS**: `componente.js`  
  - Gestiona la navegación entre tarjetas.  
  - No depende de frameworks como React o Vue.  
  - Funciona con JavaScript puro.

- **Archivo único de CSS**: `componente.css`  
  - Diseño moderno, responsivo y neutral (puedes integrarlo en cualquier proyecto).

---

## 🛠️ 2. Instalación

Descarga o clona el repositorio. Luego vincula los archivos en tu proyecto HTML:

```html
<link rel="stylesheet" href="css/componente.css">
<script src="js/componente.js"></script>
```

Asegúrate de que `index.html` tenga la estructura del carrusel (ver sección siguiente).

---

## 🧩 3. Uso

### 3.1. Estructura HTML

```html
<div class="carousel-container">
  <button class="nav prev">&#10094;</button>
  <div class="carousel-track">
    <div class="card">
      <img src="img/portada1.jpg" alt="">
      <div class="info">
        <span class="tag red">Etiqueta 1</span>
        <h3>Título 1</h3>
        <p>Descripción</p>
      </div>
    </div>
    <!-- Repite .card según necesidad -->
    <div class="card">
      <img src="img/portada2.jpg" alt="">
      <div class="info">
        <span class="tag blue">Etiqueta 2</span>
        <h3>Título 2</h3>
        <p>Otra descripción</p>
      </div>
    </div>
  </div>
  <button class="nav next">&#10095;</button>
</div>
```

### 3.2. Enlazar CSS y JS

```html
<link rel="stylesheet" href="css/componente.css">
<script src="js/componente.js"></script>
```

Coloca el CSS dentro del `<head>` y el JS justo antes de cerrar el `<body>`.

---

## 📸 4. Capturas de pantalla

![image](https://github.com/user-attachments/assets/c31d7529-770a-4629-a117-dd3ec4c4406d)


---

## 🎥 5. Video demo

*(Incluir aquí un video demostrativo de máximo 1 min: navegación, responsividad y estilo moderno al usar el carrusel.)*

---

## ⚙️ 6. Extras

- **Responsive**: muestra varias cards según resolución.
- Fácil de combinar con **autoplay**, **indicadores** o efectos 3D.
- Integrable sin dependencias ni frameworks.

---

## 📝 Créditos

Desarrollado por **Zenón Regalado Vicente de Jesús y Juarez Fernandez Eric Aaron** 💻  
Diseño inspirado en carruseles modernos tipo “cards”.

---

### 🎯 Contribuciones

Forkea el repo 👉 crea tu branch 👉 envía tu PR. ¡Con gusto lo revisaré!

---

```
