import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-creacion-contenido',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <header>
    <div class="web"><a href="articulo/creacion-contenido/casos-de-exito-el-impacto-de-un-buen-manejo-de-redes-sociales">
      <div class="background"></div>
    <img src="/articulos/2-Casos-de-Éxito-El-Impacto-de-un-Buen-Manejo-de-Redes-Sociales.jpg" alt="">
      <p>Casos de Éxito: El Impacto de un Buen Manejo de Redes Sociales</p>
      </a>
    </div>
    <div class="web"><a href="articulo/desarrollo-web/importancia-de-la-inteligencia-artificial-en-el-desarrollo-de-paginas-webs-modernas">
      <div class="background"></div>
    <img src="/articulos/5--La-Importancia-de-las-Keywords-en-los-Artículos-Optimización-para-el-Éxito.jpg" alt="">
      <p>La Importancia de las Keywords en los Artículos: Optimización para el Éxito</p>
      </a>
    </div>
    <div class="web"><a href="articulo/desarrollo-web/maximizando-el-potencial-beneficio-de-un-correcto-seo">
      <div class="background"></div>
    <img src="articulos/8-La-Importancia-Estratégica-de-una-Agencia-Digital-en-la-Era-Digital.jpg" alt="">
      <p>La Importancia Estratégica de una Agencia Digital en la Era Digital</p>
      </a>
    </div>
  </header>
  `,
  styleUrl: './creacion-contenido.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreacionContenidoComponent { 


}
