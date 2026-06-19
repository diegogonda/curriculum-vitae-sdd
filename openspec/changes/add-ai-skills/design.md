## Context

El CV tiene 6 categorías de skills con datos en dos archivos: `src/app/data/cv-data.ts` (fuente real de datos tipada con `CvData`) y `translations.ts` (prototipo/duplicado en raíz con estructura similar pero usando `category` en vez de `name`). La métrica de "Dominios de conocimiento" muestra el valor "6". El componente de skills itera `categories` dinámicamente, sin asumir cantidad fija.

**Descubrimiento durante implementación:** `translations.ts` en raíz no es la fuente de datos consumida por la app. El archivo real es `src/app/data/cv-data.ts`, que exporta `const translations: Record<'es'|'en', CvData>`. Ambos archivos deben mantenerse sincronizados.

## Goals / Non-Goals

**Goals:**
- Agregar séptima categoría "IA / AI" con 4 skills: SDD, prompting, LLMs y AI-assisted development
- Actualizar métrica de dominios de 6 → 7
- Contenido bilingüe completo

**Non-Goals:**
- No se modifica el componente de skills (ya es dinámico)
- No se agregan nuevas dependencias
- No se modifica la UI/UX de la sección de skills

## Decisions

**Dónde agregar la categoría:** Al final del array `skills.categories` en `translations.ts`, después de CMS. Esto asegura que la IA aparezca como séptima categoría sin reordenar las existentes.

**Skills a incluir:** 4 skills dentro de la categoría IA:
- "SDD (Spec-Driven Development)"
- "Prompt Engineering"
- "LLMs (ChatGPT, Claude)"
- "AI-assisted development (Copilot, Cursor, OpenCode)"

Estos nombres son idénticos en ambos idiomas por ser términos técnicos internacionales.

**Métrica de dominios:** Cambiar el valor `"6"` por `"7"` y el texto del contexto en `metrics.items[2]` para incluir "IA" en ambos idiomas.

## Risks / Trade-offs

- [Métrica desactualizada en otros lugares] → El valor "6" solo aparece en `metrics.items[2].value` y `.context`. Verificado con búsqueda, no hay otras referencias.
- [Categoría IA podría no ser la última si se agregan más en el futuro] → Bajo impacto, el orden es control manual.

## Migration Plan

No requiere migración. Los cambios son solo datos en `translations.ts`. El componente de skills itera el array completo sin lógica condicional por categoría.
