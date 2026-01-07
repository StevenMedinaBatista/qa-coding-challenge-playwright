# QA Automation Test – Playwright + TypeScript

Este repositorio contiene la solución a una prueba técnica de **APAP QA Coding Challenge**, utilizando **Playwright con TypeScript** y aplicando el patrón **Page Object Model (POM)**.

---

## 🧪 Alcance de la prueba

Se automatizaron los siguientes flujos de trabajo del sitio:

- https://the-internet.herokuapp.com/nested_frames  
  - Obtener e imprimir los textos contenidos en los diferentes iframes anidados.

- https://the-internet.herokuapp.com/windows  
  - Abrir una nueva ventana, cambiar el contexto y validar el texto mostrado.

---

## ⚠️ Limitación Técnica – TinyMCE Editor

El escenario correspondiente a la URL:

https://the-internet.herokuapp.com/tinymce

no pudo ser automatizado debido a una limitación externa del editor TinyMCE.

Actualmente, el editor se encuentra en **modo solo lectura**, mostrando el siguiente mensaje:

> *"TinyMCE is in read-only mode because you have no more editor loads available this month."*

Debido a esta restricción:
- No es posible borrar ni escribir texto.
- No se pueden aplicar estilos (negrita, color, alineación).
- El comportamiento no depende del código de automatización.

### Decisión tomada
El escenario fue **analizado y documentado**, pero no automatizado, ya que la funcionalidad requerida no está disponible para interacción en el entorno actual.

### Propuesta
En un entorno productivo o con un editor habilitado, el escenario puede ser automatizado correctamente utilizando Playwright mediante el acceso al iframe del editor.

---

## 📄 Documentación adicional

- 📋 [Plan de Pruebas](./TEST_PLAN.md)
- 🧪 [Casos de Prueba Manuales](./MANUAL_TEST_CASES.md)

---

## 🧱 Arquitectura y patrones utilizados

- ✅ Playwright Test
- ✅ TypeScript
- ✅ Page Object Model (POM)
- ✅ Smoke Test
- ✅ Regression Test
- ✅ Reporte HTML nativo de Playwright

Los selectores se encuentran encapsulados en los Page Objects, manteniendo los tests limpios y fáciles de mantener.

---

## 📁 Estructura del proyecto

tests/
│
├── smoke/ # Pruebas Smoke
├── regression/ # Pruebas de Regresión
└── pages/ # Page Object Model


---

## 📥 Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git

cd tu-repositorio

```

---

## 🔧 Instalación

### Requisitos
- Node.js 18 o superior


### Instalar dependencias

```bash
npm install
```

### Instalar Playwright

```bash 
npx playwright install 
```

---

## Ejecutar todas las pruebas:

```bash
npx playwright test
```

### Ejecutar pruebas smoke:
```bash
npx playwright test tests/smoke
```

### Ejecutar pruebas de regresión:
```bash
npx playwright test tests/regression
```

### Ejecutar una prueba especifica:
```bash
npx playwright test windows.spec.ts
```

### Ejecutar en modo visible:
```bash
npx playwright test --headed
```

### Generar reporte de playwright 
```bash
npx playwright show-report
```

---

## ⚠️ Nota sobre estabilidad del sitio de pruebas

El sitio https://the-internet.herokuapp.com es un entorno público de demostración y puede presentar
latencia o tiempos de carga elevados en ciertos momentos.

Para mitigar posibles fallos intermitentes:
- Se configuraron timeouts explícitos en la navegación.
- Se implementaron esperas basadas en la presencia de elementos clave.

Aun así, en ejecuciones manuales o automatizadas podrían presentarse fallos ocasionales
debido a la disponibilidad del entorno externo.