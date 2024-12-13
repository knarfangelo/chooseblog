import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-creacion-contenido-articulo-4',
  standalone: true,
  imports: [],
  template: `

    
<header>
    <div class="container-encabezado">
      <img src="/articulos/champions.png" alt="" />
      <h2>La Champions League: El tema más buscado esta semana</h2>
      <h4>Por choose / diciembre 13, 2024</h4>
    </div>
    <main>
    Entre el lunes 9 y el viernes 13 de diciembre de 2024, la UEFA Champions League ha dominado las búsquedas en Google, consolidándose como el evento deportivo más comentado del momento. Esta semana marcó el cierre de la fase de grupos, una etapa decisiva donde los clubes más icónicos, como el Real Madrid y el Bayern Múnich, lucharon por avanzar a los octavos de final, generando gran tensión y expectativa.
<br><br>
Los partidos ofrecieron emociones y momentos inolvidables, con actuaciones individuales destacadas de jugadores como Kylian Mbappé y Erling Haaland, cuyos goles espectaculares captaron la atención global. Estos encuentros no solo provocaron conversación en redes sociales, sino también un análisis profundo en medios de comunicación.
<br><br>
La finalización de la fase de grupos también despertó entusiasmo por los sorteos de octavos de final, que definirán enfrentamientos de alto nivel. Este evento, amplificado por plataformas digitales, demuestra que la Champions League no solo es un torneo de fútbol, sino un fenómeno mediático global que une a millones de aficionados.

    </main>
  </header>

  `,
  styleUrl: './creacion-contenido-articulo-4.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreacionContenidoArticulo4Component { }
