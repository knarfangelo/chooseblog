import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-social-listening',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `

  <header>
    <div class="web"><a href="articulo/social-listening/dominando-el-futuro-digital-estrategias-clave-para-el-exito-en-el-mundo-online">
      <div class="background"></div>
    <img src="/articulos/4-Dominando-el-Futuro-Digital-Estrategias-Clave-para-el-Éxito-en-el-Mundo-Online.jpg" alt="">
      <p>Dominando el Futuro Digital: Estrategias Clave para el Éxito en el Mundo Online</p>
      </a>
    </div>
    <div class="web"><a href="articulo/social-listening/neuromarketing-descifrando-el-poder-del-cerebro-en-las-estrategias-de-marketing">
      <div class="background"></div>
    <img src="/articulos/10-Neuromarketing-Descifrando-el-Poder-del-Cerebro-en-las-Estrategias-de-Marketing.jpg" alt="">
      <p>Neuromarketing: Descifrando el Poder del Cerebro en las Estrategias de Marketing</p>
      </a>
    </div>
  </header>

  `,
  styleUrl: './social-listening.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialListeningComponent { }
