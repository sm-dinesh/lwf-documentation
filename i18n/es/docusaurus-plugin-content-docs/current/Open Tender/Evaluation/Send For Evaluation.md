---
id: open-tender-send-for-evaluation
title: Open Tender – Start Evaluaiton
sidebar_label: Start Evaluaiton
sidebar_position: 2
---

## Apertura de ofertas

Antes de comenzar la evaluación, todas las ofertas deben ser abiertas por el **Responsable de Adquisiciones**.

![Botón de apertura de ofertas](/img/open_tender/evaluation/evaluation-team/open_bid_button.png)

- Haga clic en **Abrir oferta** para comenzar la apertura de las ofertas presentadas.

---

## Introducir clave de la oferta

![Entrada de la clave de la oferta](/img/open_tender/evaluation/evaluation-team/bid_key_input.png)

- Introduzca la **clave de la oferta proporcionada por el licitador**.
- Cada oferta debe abrirse individualmente utilizando su clave respectiva.

**Nota:**  
Todas las ofertas deben abrirse correctamente antes de proceder a la evaluación.

---

## Iniciar evaluación

![Iniciar evaluación](/img/open_tender/evaluation/evaluation-team/send_for_evaluation.png)

- Después de abrir todas las ofertas:
  - Haga clic en el **desplegable de Evaluación**
  - Seleccione **Iniciar evaluación**

---

## Modal de confirmación de evaluación

![Modal de evaluación](/img/open_tender/evaluation/evaluation-team/send_for_evaluation_model.png)

- Muestra los **miembros del equipo de evaluación asignados**.
- Confirma que la evaluación está lista para comenzar.

### Acción

- Haga clic en **Iniciar evaluación** para proceder.

**Comportamiento:**
- Envía una notificación al **Evaluador Administrativo**.

---

## Notificación por correo electrónico

![Correo electrónico de evaluación administrativa](/img/open_tender/evaluation/evaluation-team/administrative_evaluation_request_email.png)

- El Evaluador Administrativo recibe una notificación por correo electrónico.
- El correo electrónico contiene un botón **Iniciar evaluación de oferta**.

---

## Cosas a considerar para la evaluación

Para gestionar el flujo de evaluación de forma eficaz dentro de un sistema de adquisiciones o licitaciones, la lógica debe imponer transiciones de estado estrictas. A continuación, se detalla cómo estructurar esta lógica para las etapas administrativa, técnica y financiera.

Flujo lógico de evaluación
1. **Secuenciación de etapas**
El proceso debe ser lineal. Una oferta no puede entrar en la etapa técnica hasta que la evaluación administrativa esté totalmente completa, y no puede entrar en la financiera hasta que la etapa técnica esté cerrada.

- **Etapa administrativa:** Revisión inicial de documentos.

- **Etapa técnica:** Puntuación basada en especificaciones y experiencia.

- **Etapa financiera:** Comparación de precios de oferta y términos comerciales.

2. **Reglas de gestión de miembros**
La capacidad de añadir o modificar miembros del comité está directamente ligada al progreso de la etapa actual:

- **La ventana "Abierta":** Solo se pueden añadir miembros a un grupo (por ejemplo, el Comité Técnico) si al menos un miembro aún no ha enviado su evaluación para esa etapa específica.

- **El mecanismo de "Bloqueo":** Tan pronto como el último miembro pulsa "Enviar" para una etapa, el sistema activa una actualización de estado.

- **Inmutabilidad:** Una vez que el estado de la etapa se marca como completado, la lista de miembros para esa etapa queda bloqueada. No se pueden añadir, eliminar ni cambiar miembros de una etapa anterior una vez que el proceso ha avanzado.

3. **Validación dinámica de la puntuación**
La integridad de la puntuación total depende del estado activo del evaluador.

- **Consecuencias de la eliminación:** Si un miembro ya ha enviado su evaluación pero es eliminado de la lista de evaluación antes de que se bloquee la etapa, su puntuación queda excluida inmediatamente del cálculo final.

- **Verificación de elegibilidad:** El sistema solo debe agregar las puntuaciones de los usuarios que permanezcan en la lista de evaluación activa.

- **Lógica de progresión automática:** La eliminación de un miembro reduce el recuento de "Total de evaluaciones requeridas". Si al eliminar a un miembro todos los miembros restantes ya han enviado su evaluación, la etapa se bloquea automáticamente y se pasa al siguiente nivel.

---

## Iniciar evaluación de oferta

- Haga clic en **Iniciar evaluación de oferta** desde el correo electrónico.
- Redirige al evaluador al sistema para comenzar el proceso de evaluación.

---

## Resumen

Este proceso garantiza:

- Todas las ofertas se abren de forma segura utilizando las claves proporcionadas por los licitadores  
- La evaluación solo comienza después del acceso completo a la oferta  
- Se envía la notificación adecuada a los miembros del equipo de evaluación  
- Un flujo de trabajo de evaluación controlado y auditable  
