import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-envios-masivos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `

<header>
    <div class="web"><a href="articulo/envios-masivos/beneficios-de-realizar-una-campaña-con-el-metodo-de-envios-masivos-digitales">
      <div class="background"></div>
    <img src="/articulos/6-Beneficios-de-Realizar-una-Campaña-con-el-Método-de-Envíos-Masivos-Digitales.jpg" alt="">
      <p>Beneficios de Realizar una Campaña con el Método de Envíos Masivos Digitales</p>
      </a>
    </div>
  </header>

  `,
  styleUrl: './envios-masivos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnviosMasivosComponent { 
  
  

}
