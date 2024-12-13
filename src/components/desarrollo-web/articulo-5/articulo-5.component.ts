import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-articulo-5',
  standalone: true,
  imports: [],
  template: `

<header>
    <div class="container-encabezado">
      <img src="/articulos/chatgpt.png" alt="" />
      <h2>ChatGPT sufre una caída global, dejando a millones sin acceso a la herramienta</h2>
      <h4>Por choose / diciembre 13, 2024</h4>
    </div>
    <main>
    <p>Este 11 de diciembre, ChatGPT, uno de los asistentes de inteligencia artificial más populares del mundo, experimentó una caída global que dejó a millones de usuarios sin acceso a la plataforma en computadoras y dispositivos móviles. Los reportes comenzaron alrededor de las 5:00 de la tarde, según Downdetector, destacando problemas para cargar y mensajes de error que indicaban que el servicio “no está disponible”.  <br><br>
La interrupción provocó preocupación entre los usuarios, quienes recurrieron a redes sociales para expresar sus experiencias y buscar alternativas. OpenAI, la compañía detrás de ChatGPT, confirmó que había identificado la causa del problema y se encuentra trabajando para resolverlo. Sin embargo, hasta el momento, el servicio no se ha restablecido por completo.  <br><br>
Ante esta situación, algunas alternativas como Microsoft Copilot, Google Gemini, Meta AI y LuzIA han sido recomendadas para quienes dependen de la inteligencia artificial en tareas laborales o educativas.  <br><br>
Esta caída de ChatGPT se suma a los fallos ocurridos horas antes en las plataformas de Meta, como Instagram y WhatsApp, intensificando el impacto de los problemas técnicos en servicios digitales clave a nivel global. <br><br>
</p>
    </main>
  </header>
  `,
  styleUrl: './articulo-5.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Articulo5Component { }
