import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Articulo1Component } from "./articulo-1/articulo-1.component";

@Component({
  selector: 'app-desarrollo-web',
  standalone: true,
  imports: [
    CommonModule,
    Articulo1Component
],
  template: `
  <header>
    <div class="web"><a href="articulo/desarrollo-web/importancia-del-uso-de-una-pagina-web-en-la-era-digital">
      <div class="background"></div>
    <img src="/articulos/1-Importancia-del-Uso-de-una-Página-Web-en-la-Era-Digital.jpg" alt="">
      <p>Importancia del Uso de una Página Web en la Era Digital</p>
      </a>
    </div>
    <div class="web"><a href="articulo/desarrollo-web/importancia-de-la-inteligencia-artificial-en-el-desarrollo-de-paginas-webs-modernas">
      <div class="background"></div>
    <img src="/articulos/7-Importancia-de-la-Inteligencia-Artificial-en-el-Desarrollo-de-Páginas-Web-Modernas.jpg" alt="">
      <p>Importancia de la Inteligencia Artificial en el Desarrollo de Páginas Web Modernas</p>
      </a>
    </div>
    <div class="web"><a href="articulo/desarrollo-web/maximizando-el-potencial-beneficio-de-un-correcto-seo">
      <div class="background"></div>
    <img src="articulos/3-Maximizando-el-Potencia-El-Beneficio-de-un-Correcto-SEO.jpg" alt="">
      <p>Maximizando el Potencial: El Beneficio de un Correcto SEO</p>
      </a>
    </div>
  </header>
  `,
  styleUrl: './desarrollo-web.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesarrolloWebComponent { }
