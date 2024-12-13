import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Articulo1Component } from "./articulo-1/articulo-1.component";

@Component({
  selector: 'app-desarrollo-web',
  standalone: true,
  imports: [
    CommonModule,
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
    <div class="web"><a href="articulo/desarrollo-web/meta-enfrenta-caida-global-en-sus-plataformas">
      <div class="background"></div>
    <img src="articulos/meta.jpg" alt="">
      <p>Meta enfrenta caída global en sus plataformas: WhatsApp, Facebook e Instagram</p>
      </a>
    </div>
    <div class="web"><a href="articulo/desarrollo-web/chatgpt-sufre-caida">
      <div class="background"></div>
    <img src="articulos/chatgpt.png" alt="">
      <p>ChatGPT sufre una caída global, dejando a millones sin acceso a la herramienta</p>
      </a>
    </div>
    <div class="web"><a href="articulo/desarrollo-web/apple-actualizacion-phone-ipad">
      <div class="background"></div>
    <img src="articulos/apple.png" alt="">
      <p>Apple anuncia nueva actualización para iPhone y iPad</p>
      </a>
    </div>
  </header>
  `,
  styleUrl: './desarrollo-web.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesarrolloWebComponent { 

  
}
