# ¿Llegamos al sprint?

Mini proyecto didáctico para aprender Git, GitHub, PRs, code review, CI y deploy (curso Claude Code in Action, lección "GitHub Actions and Code Review"). Datos y regla ficticios.

## Qué hace
Cargás los story points pendientes y los días que quedan. Con una velocidad fija de 5 puntos por día:

| Si los puntos pendientes son… | Resultado |
|---|---|
| hasta el 80% de la capacidad | 🟢 Llegamos |
| entre el 80% y el 100% | 🟡 Justo |
| más que la capacidad | 🔴 No llegamos |

Capacidad = días × 5. Ejemplo: 5 días → 25 puntos.

## Archivos
- `sprint.js`: la regla (una sola función).
- `index.html`: la página con los 2 campos y el botón.
- `sprint.test.js`: los tests automáticos de la regla.

## Probarlo
- Página: abrí `index.html` en el navegador.
- Tests: `node --test`
