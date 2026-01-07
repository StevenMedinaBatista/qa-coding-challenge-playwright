## 📋 Plan de Pruebas

### 🎯 Objetivo
Validar el correcto funcionamiento de los flujos solicitados en el sitio https://the-internet.herokuapp.com, asegurando que los elementos clave se comporten según lo esperado.

---

### 📌 Alcance
- Validación de textos dentro de iframes anidados.
- Manejo de múltiples ventanas del navegador.
- Verificación de contenido visualizado al usuario.

---

### 🚫 Fuera de alcance
- Pruebas de rendimiento.
- Pruebas de seguridad.
- Pruebas en dispositivos móviles.
- Automatización del editor TinyMCE debido a limitaciones técnicas documentadas.

---

### 🧪 Enfoque de pruebas
- Diseño de casos de prueba manuales.
- Ejecución de pruebas automatizadas con Playwright.
- Uso de Page Object Model para mantener el código desacoplado.

---

### 🧩 Tipos de pruebas
- Smoke Testing
- Regression Testing
- Pruebas funcionales

---

### ⚠️ Riesgos y limitaciones
- Dependencia de entornos externos.
- Funcionalidades bloqueadas por terceros (TinyMCE).
- Disponibilidad de red durante la ejecución.
