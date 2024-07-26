import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContenidoDigitalComponent } from "./contenido-digital/contenido-digital.component";
import { PresentacionComponent } from "./presentacion/presentacion.component";
import { AutorComponent } from "./autor/autor.component";
import { FooterComponent } from "./footer/footer.component";
import { ContenidoComponent } from "./contenido/contenido.component";
import { WhatsappComponent } from "../whatsapp/whatsapp.component";

@Component({
  selector: 'app-panel-principal',
  standalone: true,
  imports: [
    CommonModule,
    ContenidoDigitalComponent,
    PresentacionComponent,
    AutorComponent,
    FooterComponent,
    ContenidoComponent,
    WhatsappComponent
],
  template: `
  <header>
    <main>
      <app-contenido-digital></app-contenido-digital>
      <app-contenido id="contenido"></app-contenido>
      <app-presentacion></app-presentacion>
      <app-autor id="autor"></app-autor> 
    </main>
 
</header>

  `,
  styleUrl: './panel-principal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelPrincipalComponent { }
