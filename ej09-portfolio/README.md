# Portfolio de Alejandro Mancheño González

Portfolio profesional desarrollado con **HTML5 y Bootstrap 5.3** para el módulo Diseño de Interfaces Web (2.º DAW). Diseñado con un enfoque moderno, responsivo y cumpliendo con las pautas de accesibilidad WCAG 2.1 (Nivel AA).

🔗 **Web publicada:** https://alexwillians27.github.io/portfolio/

## Tecnologías
- HTML5 Semántico
- CSS3 (Variables y ajustes mínimos)
- Bootstrap 5.3 (Sistema de rejilla, utilidades y modo oscuro nativo)
- Bootstrap Icons
- Vanilla JavaScript (Validación de formularios y animaciones)

## Estructura de archivos
```text
index.html              ← Estructura semántica principal
css/estilos.css         ← Ajustes de marca personal y animaciones
js/main.js              ← Lógica del efecto de escritura y validación
img/                    ← Recursos gráficos, fotos y capturas de proyectos
docs/                   ← cv.pdf y carpeta de evidencias
└── evidencias/         ← Capturas de las pruebas de calidad
```

## Diseño y Accesibilidad (WCAG 2.1 AA)

El proyecto utiliza el tema oscuro nativo de Bootstrap (`data-bs-theme="dark"`) personalizado con un color de acento turquesa para botones y enlaces. 

### Paleta de colores y Contrastes
Se ha comprobado mediante WebAIM Contrast Checker que todas las combinaciones superan el ratio mínimo exigido de 4.5:1 para texto normal.

| Elemento | Color Hexadecimal | Fondo | Ratio de Contraste | Cumple WCAG AA |
| :--- | :--- | :--- | :--- | :--- |
| **Fondo principal** | `#212529` (Dark) | - | - | - |
| **Texto principal** | `#f8f9fa` (Light) | `#212529` | **15.2:1** | Sí (AAA) |
| **Acento (Turquesa)** | `#20c997` (Primary) | `#212529` | **6.1:1** | Sí (AA) |
| **Texto oscuro en botones** | `#212529` (Dark) | `#20c997` | **7.4:1** | Sí (AAA) |

## Informe de Calidad

A continuación, se presentan las evidencias de que el código está optimizado, es accesible y no contiene errores.

*(Las imágenes se encuentran en el directorio `/docs/evidencias/`)*

*   **Lighthouse (Accesibilidad, Rendimiento, SEO y Buenas Prácticas):**
    ![Auditoría Lighthouse](docs/evidencias/lighthouse.jpg)

*   **WAVE (Accesibilidad Web):**
    ![Evaluación WAVE](docs/evidencias/wave.jpg)

*   **Validador HTML (W3C):**
    ![Validación HTML](docs/evidencias/w3c-html.jpg)

*   **Validador CSS (W3C):**
    ![Validación CSS](docs/evidencias/w3c-css.jpg)

## Declaración de uso de Inteligencia Artificial

Durante el desarrollo de este proyecto, se han utilizado herramientas de Inteligencia Artificial (modelos de lenguaje) estrictamente como asistencia técnica puntual. Específicamente, se ha empleado para consultar documentación sobre clases utilitarias de Bootstrap 5 y para estructurar la lógica del script en JavaScript responsable del efecto visual de "máquina de escribir". 

Toda la maquetación semántica, diseño, implementación de accesibilidad y depuración final han sido realizadas, revisadas y validadas manualmente para asegurar el cumplimiento integral de los estándares exigidos en la rúbrica del módulo.