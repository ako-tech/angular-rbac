# RBAC en Angular

Aplicación para un BackOffice ficticio de una tienda de ropa, que sirve como apoyo del [video](https://youtu.be/d-QRbhqVzgI) en el que explicamos cómo podemos aplicar técnicas del Control de Acceso Basado en Roles (RBAC) en Angular.

Se tratan dos temas principales:

- Las Guardas del Router. Para controlar el acceso a las diferentes partes de la aplicación.
- Directivas Estructurales. Para mostrar y ocultar elemento en función del rol del usuario.

## Observaciones

El único objetivo de este proyecto es mostrar la funcionalidad de los elementos citados en el video. El código incluido no debe interpretarse como apto para producción, ya que partes han sido simplificadas para una mayor claridad.

## Comandos

El proyecto está realizado sobre la v14.2 de Angular.

Para levantar un servidor de desarrollo usar el comando `ng serve`. Este estará disponible en `http://localhost:4200/`.

Para compilar la aplicación usar el comando `ng build`. Pudiendo usar la opcion `--prod` para compilar la versión de producción. Los archivos de la aplicación estarán disponibles en la carpeta `dist/`.
