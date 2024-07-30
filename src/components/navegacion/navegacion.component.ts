import { CommonModule, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { INovedades } from './BDNavegacion/INovedades';
import { novedadesJSON } from './BDNavegacion/novedadesJSON';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navegacion',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink
  ],
  template: `
  <div class="container-navegacion">
    <h1><a class="container-logo" href=""><img class="logo" src="/navegacion/novedades/logo.png" alt="" priority="" ></a> </h1>
    <nav>
    <li><a href="/desarrollo-web">DESARROLLO WEB</a></li>
        <li><a href="">CREACIÓN DE CONTENIDO</a></li>
        <li><a href="#contenido">SOCIAL LISTENING</a></li>
        <li><a href="">REGULACION DE CONTENIDO</a></li>
        <li><a href="#autor">ENVIOS MASIVOS</a></li>
    </nav>
    <div class="container-novedades">
      <p class="titulo-novedades">Novedades</p>
      <swiper-container init=false class="swiper-navegacion">
        @for (item of items; track $index) {
          <swiper-slide>
            <a [routerLink]="item.id">
            <div class="swiper-style">
            <img [ngSrc]="item.img" [width]=250 [height]=250 [alt]="item.titulo">
            <p>{{item.titulo}}</p>
            </div></a>
          </swiper-slide>
        }
      </swiper-container>
    </div></div>
  `,
  styleUrl: './navegacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavegacionComponent { 

  swiperElements = signal<SwiperContainer | null>(null);
  items:INovedades[] = novedadesJSON;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}


    ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
      register();
      const swiperElemConstructor = document.querySelector('.swiper-navegacion');
      const swiperOptions: SwiperOptions = {
        navigation:{
          enabled:true,
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev',
        },
        loop:true,
        autoplay:true,
        slidesPerView: 'auto',
        speed: 2000,
        breakpoints: {
          0:{
            slidesPerView:1,
          },
          640: {
            slidesPerView:2,
          },
          1100: {
            slidesPerView:3,
          },
        },
        spaceBetween: 25,
      };
      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElements.set(swiperElemConstructor as SwiperContainer);
      this.swiperElements()?.initialize();
      }
    }
  

 }
