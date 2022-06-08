# Aplicación Oleo

La aplicación Oleo es un ecomerce dedicado a la venta de productos típicos de San Juan: Aceites de oliva, acetos, aceitunas y frutos secos. Es posible navegar el catálogo de productos a la venta con imágen, descripción, precio y stock disponible.

La aplicación permite elegir un artículo, seleccionar la cantidad deseada y agregarlo al carro de compras viendo el precio total a pagar por el artículo de acuerdo a la cantidad. *Hay que tener en cuenta que para poder agregar una artículo al carro de compras es necesario estar logueado. Si no fuera así, la aplicación lanza una advertencia y no permite agregar el item al carro.*

Habiendo agregado un artículo al carrito uno puede terminar la operación o bien seguir navegando el catálogo pensando en agregar mas artículos a la compra.

### Herramientas usadas
Cabe aclarar que la aplicación es una SPA (Single Page Application) lo que significa que todas las pantallas o vistas se muestran en la misma página, sin recargar el navegador. Para el desarrollo se uso *Visual Studio Code* como editor de código.

Toda la aplicación está desarrollada usando *Node*, *React*, *Javascript*, *Sass* y *Bootstrap*. También se usó *React Spinners* para indicar al usuario cuando hay un proceso en marcha con alguna demora, como por ejemplo al consultar la base de datos. También se usó *Sweetalert2* para mostrar diferentes mensajes de notificación al usuario según fue necesario.

Para soporte de los datos se uso *Google Firestore* como base de datos y *Firebase Authentication* para autenticar el logueo de usuarios usando el registro por email.

### Forma de uso
Suponiendo que ya tenemos Node y React instalado, para ejecutar la aplicación es necesario estar posicionado en la carpeta *\oleo-grecco* y ejecutar el comando npm start. Este script abrirá un servidor local corriendo en http://localhost:3000/ donde se verá la aplicación corriendo.

*Aclaración: Si hubiera algún error vinculado a la ausencia de alguna de las dependencias, habría que abrir una consola ubicada en la carpeta \oleo-grecco y ejecutar el compando npm i. De esta manera se instalaran todas las dependencias necesarias según el archivo package.json*

### Comentarios adicionales
En la barra de menú aparecen dos indicadores según sea necesario. Uno aparece cuando hay al menos un artículo en el carrito junto a un número indicando la cantidad total de artículos. En el caso del carrito funciona como link para ir al carrito de compras.
El otro aparece a la derecha de la barra de navegación e indica si el usuario está logueado o no. Tambiéon funciona como un link al formulario de login/logout dependiendo de lo que sea necesario.
En el formulario de login/logout también es posible generar un usuario nuevo indicando un mail y una contraseña de al menos seis (6) caracteres. Actualmente hay generado algunos usuarios de prueba, esto es: test@test.com y prueba@prueba.com ambos con la contraseña "123456"

En el siguiente enlace se puede ver un video del funcionamiento de la aplicación: [Video de la aplicación](https://drive.google.com/file/d/1qXVyZw8e7qGu8sXILtF2FhMx6f9sQwmQ/view?usp=sharing).

Actualmente la aplicación está funcionando y se puede visitar en el siguiente link: [Oleo funcionando en la web](https://entregable-react.vercel.app/)