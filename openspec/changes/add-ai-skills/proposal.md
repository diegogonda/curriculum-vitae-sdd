## Why

El CV refleja 6 dominios de conocimiento pero no incluye IA, un área cada vez más relevante en arquitectura de software e ingeniería. Agregar una categoría de IA con foco en prompting y LLMs comunica competencias actuales y diferenciales para roles Staff+.

## What Changes

- Nueva categoría "IA / AI" en la sección de skills con: SDD (Spec-Driven Development), Prompt Engineering, LLMs (ChatGPT, Claude), AI-assisted development (Copilot, Cursor, OpenCode)
- Actualizar métrica de "Dominios de conocimiento" de 6 a 7
- Contenido bilingüe (es/en) para la nueva categoría

## Capabilities

### New Capabilities

- `ai-skills-category`: Muestra una séptima categoría de habilidades dedicada a IA, con skills de SDD, prompting, LLMs y AI-assisted development, renderizada con el mismo patrón visual que las categorías existentes.

### Modified Capabilities

- `skills-catalog`: La spec actual menciona explícitamente "six categories". Se actualiza para soportar N categorías sin hardcodear el número.

## Impact

- `translations.ts`: nueva categoría en `skills.categories` (es + en), métrica de dominios de 6 → 7
- Componente de skills: sin cambios (ya itera categories dinámicamente)
- Spec `skills-catalog`: delta spec para remover hardcode de "six categories"
