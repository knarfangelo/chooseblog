import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-articulo-6',
  standalone: true,
  imports: [],
  template: `


<header>
    <div class="container-encabezado">
      <img src="/articulos/apple.png" alt="" />
      <h2>ChatGPT sufre una caída global, dejando a millones sin acceso a la herramienta</h2>
      <h4>Por choose / diciembre 13, 2024</h4>
    </div>
    <main>
    Apple anuncia nueva actualización para iPhone y iPad
Apple ha lanzado la actualización iOS 18.2, incorporando nuevas funciones y mejoras para iPhone y iPad. Aunque la destacada Apple Intelligence aún no está disponible en la Unión Europea, los usuarios pueden disfrutar de múltiples novedades que mejoran la experiencia en sus dispositivos. A continuación, te resumimos las principales:
<ul>
<li>Cámara: Los iPhone 16 ahora permiten capturas en dos pasos para bloquear el enfoque y la exposición antes de tomar una foto.</li>
<li>App Fotos: Se han añadido opciones para avanzar fotograma por fotograma en vídeos, desactivar la reproducción automática en bucle, borrar historiales recientes y una mejor integración del álbum "Favoritos".</li>
<li>Navegador Safari: Nuevos fondos de pantalla, soporte para importar y exportar datos entre navegadores, prioridad para conexiones HTTPS y seguimiento de descargas desde la isla dinámica.</li>
<li>Notas: Introduce grabación de voz por capas, ideal para músicos y creadores que desean trabajar con pistas.</li>
<li>Buscar: Permite compartir la ubicación de objetos con terceros para facilitar su búsqueda.</li>
<li>Podcasts: Ahora incluye recomendaciones personalizadas basadas en categorías favoritas y mejores búsquedas.</li>
<li>Bolsa: Añade la visualización de cotizaciones antes de la apertura de mercados del NASDAQ y NYSE.</li>
<li>AirPods Pro 2: La función de prueba de audición llega a nuevos países, incluido España.</li>
<li>Correcciones en Fotos: Resuelve problemas de visualización inmediata y calidad en fotos de larga exposición.</li>
<li>Con iOS 18.2, Apple reafirma su compromiso por mejorar la experiencia del usuario con innovaciones y ajustes que optimizan las aplicaciones más utilizadas en sus dispositivos.</li>
¡Conéctate con nosotros y descubre más noticias para ti! 


</ul>
    </main>
  </header>

  `,
  styleUrl: './articulo-6.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Articulo6Component { }
