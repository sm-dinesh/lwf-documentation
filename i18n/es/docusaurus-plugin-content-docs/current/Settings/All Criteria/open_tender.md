---
sidebar_position: 3
---

# Criterios de licitación abierta

## Criterios administrativos

El formulario consta de 6 campos.

![Criterios administrativos](/img/settings/criteria/settings_open_tender_administrative_create.png)

1. **Etiqueta** – Título del criterio
2. **Peso** – El valor es:
   - `0` para No
   - `1` para Sí
3. **Grupo** – Seleccionar **Administrativo**
4. **Criterio principal** – Siempre **Nivel superior**
5. **Tipo de validación** – Booleano (Sí/No)
6. **Descripción** – Campo de referencia opcional

---

## Criterios técnicos

El formulario consta de 9 campos.

![Criterios técnicos](/img/settings/criteria/settings_open_tender_technical_create.png)

1. **Etiqueta** – Título del criterio
2. **Peso** –
   - Si no hay hijo → independiente
   - Si tiene hijo → la suma de los pesos de los hijos debe ser igual al peso del padre
3. **Grupo** – Seleccionar **Técnico**
4. **Criterio principal** –
   - Nivel superior (sin hijo)
   - O seleccionar el padre del menú desplegable
5. **Tipo de validación** – Número
6. **Valor mínimo** – Valor mínimo permitido
7. **Valor máximo** – Valor máximo permitido
8. **Mayor que (gt)** – El valor no debe estar por debajo de esto
9. **Descripción** – Opcional

---

## Criterios financieros

El formulario consta de 6 campos.

![Criterios financieros](/img/settings/criteria/settings_open_tender_financial_create.png)

1. **Etiqueta** – Título del criterio
2. **Peso** –
   - Misma regla que los criterios técnicos
3. **Grupo** – Seleccionar **Financiero**
4. **Criterio principal** –
   - Nivel superior o seleccionar padre
5. **Tipo de validación** – Dos tipos:
   - **Número**
     - Requiere valores mínimo, máximo y mayor que
   - **Moneda admitida**
     - Muestra las monedas disponibles durante la evaluación
6. **Descripción** – Opcional

## Notas

- Asegúrese de que la distribución del peso sea correcta al utilizar criterios de padre e hijo
- Las reglas de validación deben definirse correctamente para evitar errores durante la evaluación
- La estructura de los criterios afecta directamente los resultados de la evaluación de las ofertas
