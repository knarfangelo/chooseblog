import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-creacion-contenido-articulo-2',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
     <header>
    <div class="container-encabezado">
      <img src="/articulos/2-Casos-de-Éxito-El-Impacto-de-un-Buen-Manejo-de-Redes-Sociales.jpg" alt="" />
      <h2>Casos de Éxito: El Impacto de un Buen Manejo de Redes Sociales</h2>
      <h4>Por choose / julio 30, 2024</h4>
    </div>  
    <main>
      
    </main>
  </header>
  `,
  styleUrl: './creacion-contenido-articulo-2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreacionContenidoArticulo2Component { }
