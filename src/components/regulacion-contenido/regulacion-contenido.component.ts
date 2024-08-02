import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-regulacion-contenido',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
        <header>
    <div class="web"><a href="articulo/regulacion-contenido/gestion-de-crisis-de-marca-estrategias-cruciales-para-proteger-y-restaurar-la-reputacion">
      <div class="background"></div>
    <img src="/articulos/9-Gestión-de-Crisis-de-Marca-Estrategias-Cruciales-para-Proteger-y-Restaurar-la-Reputación.jpg" alt="">
      <p>
      Gestión de Crisis de Marca: Estrategias Cruciales para Proteger y Restaurar la Reputación
      </p>
      </a>
    </div>
  </header>
  `,
  styleUrl: './regulacion-contenido.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegulacionContenidoComponent { }
