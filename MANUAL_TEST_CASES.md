# 🧪 Casos de Prueba Manuales

Este documento contiene los casos de prueba manuales diseñados para validar los flujos solicitados en la prueba técnica de QA Automation.

---

## 📌 1. Nested Frames

**URL:** https://the-internet.herokuapp.com/nested_frames

### Objetivo
Validar que los textos mostrados dentro de los iframes anidados sean correctos y visibles.

| ID | Caso de Prueba | Pasos | Resultado Esperado |
|----|---------------|-------|--------------------|
| NF-01 | Acceder a la página Nested Frames | 1. Abrir el navegador<br>2. Acceder a la URL | La página se carga correctamente |
| NF-02 | Visualizar frame superior         | 1. Acceder al frame superior                 | El frame superior es visible     |
| NF-03 | Obtener texto del frame izquierdo | 1. Acceder al frame izquierdo                | El texto **LEFT** es visible     |
| NF-04 | Obtener texto del frame central   | 1. Acceder al frame central                  | El texto **MIDDLE** es visible   |
| NF-05 | Obtener texto del frame derecho   | 1. Acceder al frame derecho                  | El texto **RIGHT** es visible    |
| NF-06 | Obtener texto del frame inferior  | 1. Acceder al frame inferior                 | El texto **BOTTOM** es visible   |

---

## 📌 2. Multiple Windows

**URL:** https://the-internet.herokuapp.com/windows

### Objetivo
Validar el comportamiento del sistema al abrir una nueva ventana y cambiar el contexto del navegador.

| ID | Caso de Prueba | Pasos | Resultado Esperado |
|----|---------------|-------|--------------------|
| MW-01 | Acceder a la página Multiple Windows | 1. Abrir el navegador<br>2. Acceder a la URL | La página se carga correctamente      |
| MW-02 | Abrir nueva ventana                  | 1. Hacer clic en **Click Here**              | Se abre una nueva pestaña             |
| MW-03 | Cambiar foco a nueva ventana         | 1. Cambiar el contexto del navegador         | El foco pasa a la nueva ventana       |
| MW-04 | Validar texto en nueva ventana       | 1. Validar encabezado de la página           | El texto **New Window** es visible    |
| MW-05 | Cerrar ventana secundaria            | 1. Cerrar la nueva pestaña                   | La ventana principal permanece activa |

---

## 📌 3. TinyMCE Editor (Escenario bloqueado)

**URL:** https://the-internet.herokuapp.com/tinymce

### Objetivo
Validar la edición de texto en el editor TinyMCE.

> ⚠️ **Nota:** El editor se encuentra en modo solo lectura por una limitación externa del proveedor (TinyMCE), lo que impide la ejecución de estos casos.

| ID | Caso de Prueba | Pasos | Estado | Observación |
|----|---------------|-------|--------|-------------|
| TM-01 | Borrar texto existente | 1. Acceder al editor<br>2. Intentar borrar el texto | Bloqueado | Editor en modo solo lectura |
| TM-02 | Escribir texto nuevo | 1. Intentar escribir texto | Bloqueado | No permite interacción |
| TM-03 | Aplicar formato en negrita | 1. Seleccionar texto<br>2. Aplicar negrita | Bloqueado | Funcionalidad no disponible |
| TM-04 | Centrar texto | 1. Seleccionar texto<br>2. Aplicar alineación | Bloqueado | Funcionalidad no disponible |
| TM-05 | Cambiar color del texto | 1. Seleccionar texto<br>2. Cambiar color a rojo | Bloqueado | Funcionalidad no disponible |
| TM-06 | Guardar y obtener texto | 1. Guardar contenido<br>2. Obtener texto | Bloqueado | Editor no editable |

---

## 📝 Observaciones Finales

- Los casos de prueba de **Nested Frames** y **Multiple Windows** fueron automatizados utilizando Playwright.
- Los casos de **TinyMCE** fueron documentados pero no automatizados debido a una limitación técnica externa.
- La documentación permite trazabilidad entre pruebas manuales y pruebas automatizadas.

---
