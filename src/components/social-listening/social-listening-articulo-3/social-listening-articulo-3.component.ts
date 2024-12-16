import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-social-listening-articulo-3',
  standalone: true,
  imports: [],
  template: `

<header>
      <div class="container-encabezado">
        <img src="articulos/product-placement.webp" alt="" />
        <h2>¿Cuántas Veces Has Caído en las Redes del Product Placement?  </h2>
        <h4>16 DIC 2024</h4>
      </div>
        <main>
          <p>El Product Placement es una técnica publicitaria que consiste en la inserción de un producto, marca o mensaje dentro de la narrativa del programa. Puede ser mostrado en un citado o usado por los mismos actores en escenas, o por presentadores en sus programas. 
          </p>
          <p>
          Esta popular técnica de mercadeo y publicidad indirecta, que tuvo su época dorada durante los años 80 y 90, aún puede brindarles grandes resultados a las marcas, así que nos vimos motivados a explicar de qué se trata, a mostrar sus ejemplos más mediáticos e icónicos y otras cosas.
          </p>
          <strong>¿Cómo funciona el product placement?</strong>
          <br>
          <p>El consumidor moderno tiende a ignorar la publicidad tradicional, ya sea en comerciales o medios impresos, lo que complica a las empresas el proceso de hacerse conocidas. Para vender, las marcas deben atravesar el llamado "embudo comercial", comenzando con la generación de notoriedad, donde el cliente identifica y considera las marcas que conoce. En esta etapa inicial, el consumidor evalúa los atributos de las opciones disponibles antes de tomar una decisión de compra. 
          </p>
          <strong>¿Qué tipos de product placement hay?</strong>
          <p>
            <strong>Product placement pasivo:</strong>
            los protagonistas no interactúan con el producto. Tampoco hablan de él. Este termina siendo un elemento más que compone el cuadro, sin tomar protagonismo. De este modo, hay dos factores clave qué considerar. El primero, es que este tipo de publicidad es más económica para la marca, pero igual de efectiva. <br> <br>
Un ejemplo de ello, es en las series nacionales como Al Fondo Hay Sitio, en donde en la bodega de Don Gilberto, hay cantidad de auspiciadores que hace que el espectador no le tome tanta importancia por la cantidad de productos que se promocionan, y casi nunca se interactúa con la tienda. 
          </p>
          <img src="articulos/place-1.jpg" alt="">
          <p> <strong>Integrar la marca a la narrativa de la historia o product placement activo</strong>, es una forma de conectar el producto con el público. Aquí, los protagonistas interactúan con el producto e, incluso, hablan sobre él o sus características.
          </p>
          <p>En el programa <span style="font-style: italic;">EL Gran Chef Famosos</span>, hubo capítulos en donde los participantes utilizan ciertos insumos para hacer sus platos. Se presentan como “retos” en donde el producto es la estrella necesaria para que el plato salga bien. </p>
          <img src="articulos/place-2.png" alt="">
          <strong>¿Qué ventajas ofrece el Product Placement</strong>
          <p>- <strong>Gran exposición: </strong> al insertar esta técnica en películas, series y programas los productos son visualizados por miles de personas.</p>          
          <p>- <strong>Construcción de percepción: </strong> al insertar esta técnica en películas, series y programas los productos son visualizados por miles de personas.</p>
          <p>Las empresas que apuestan por este tipo de publicidad aumentaron su recuerdo de marca y su tirón comercial en este último año.
          </p>
          <p>¡Ahora ya sabes que es el product placement! Sigue en contacto con nosotros en nuestras redes sociales para más novedades.
          </p>
        </main>
  </header>

  `,
  styleUrl: './social-listening-articulo-3.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialListeningArticulo3Component { }
