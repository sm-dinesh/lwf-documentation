---
title: Invitation Review
sidebar_label: Invitation Review
sidebar_position: 7
---

# Invitación a la Nota de demanda

La función **Invitación** notifica a los usuarios seleccionados (Revisor, Verificador, Aprobador) por correo electrónico para que tomen medidas sobre una Nota de demanda.

## Descripción general

![Invitación a la Nota de demanda](/img/demand_note/demand_note_invitation.png)

El correo electrónico contiene un enlace de invitación que permite a los usuarios acceder a la nota de demanda y proceder con su decisión.

## Proceso de invitación

- Cuando se envía una Nota de demanda para revisión, los usuarios seleccionados reciben una notificación por correo electrónico
- El correo electrónico incluye un enlace seguro para acceder a la nota de demanda
- Al hacer clic en el enlace, se redirige al usuario a la página de revisión

## Acciones disponibles

Una vez redirigido, el usuario puede:

- **Aceptar** la Nota de demanda  
  - Aprueba la nota de demanda para la siguiente etapa del flujo de trabajo

- **Rechazar** la Nota de demanda  
  - Devuelve la nota de demanda con comentarios o estado de rechazo

## Notas

- El enlace de invitación es específico del rol (Revisor, Verificador, Aprobador)
- Los usuarios deben tener el acceso adecuado para realizar acciones
- El flujo de trabajo progresa en función de la acción tomada por cada rol


# Página de invitación a la Nota de demanda

Se accede a la **Página de invitación** a través del enlace de invitación por correo electrónico. Muestra los detalles de la Nota de demanda y permite a los usuarios autorizados tomar medidas en el flujo de trabajo de aprobación.

## Acceder a la página

- Haga clic en el enlace de invitación recibido por correo electrónico
- El enlace redirige a la aplicación y abre la página de detalles de la Nota de demanda

## Descripción general

![Página de invitación](/img/demand_note/demand_note_invitation_page.png)

Esta página proporciona una vista completa de la Nota de demanda junto con opciones para aprobarla o rechazarla.

## Acciones disponibles

Ubicadas en la esquina inferior derecha:

### Aprobar
- Aprueba la Nota de demanda para la siguiente etapa del flujo de trabajo
- Al hacer clic, aparece un modal de confirmación con un campo de motivo

![Modal de aprobación](/img/demand_note/demand_note_invitation_accept.png)

### Rechazar
- Devuelve la Nota de demanda con comentarios o estado de rechazo
- Al hacer clic, aparece un modal que requiere un motivo para el rechazo

![Modal de rechazo](/img/demand_note/demand_note_invitation_reject.png)

### Descargar
- Permite a los usuarios descargar la Nota de demanda en formato PDF para referencia fuera de línea

## Flujo de trabajo de aprobación

- El proceso de aprobación sigue un flujo secuencial:
  - **Revisor → Verificador → Aprobador**
- Cada rol debe aprobar antes de pasar a la siguiente etapa
- Si se rechaza en cualquier etapa, el proceso se devuelve con comentarios

## Aprobación final

- Una vez que el **Aprobador** aprueba la Nota de demanda:
  - El ciclo de aprobación se completa
  - El estado se recibe como **Aprobado** en la página de listado

![Estado aprobado](/img/demand_note/demand_note_approved.png)

## Notas

- Se requiere proporcionar un motivo tanto para la aprobación como para el rechazo
- Asegúrese de revisar todos los detalles cuidadosamente antes de tomar una medida
- El acceso a esta página está restringido solo a usuarios invitados
