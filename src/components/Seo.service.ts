import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta:Meta) { }

  generateTags(config:any){
    config = {
      title: 'Choose Agencia',
      description: 'Choose Agencia es una agencia de marketing digital que se especializa en la creación de contenido digital, desarrollo web, social listening, regulación de contenido y envíos masivos.',
      image: "",
      slug:"",
      ...config
    }
    this.meta.updateTag({name:'keywords', content: 'Choose Agencia, marketing digital, contenido digital, desarrollo web, social listening, regulación de contenido, envíos masivos'});
    this.meta.updateTag({name:'canonical', content: `https://blog.chooseagencia.com/${config.slug}`});
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({name: 'twitter:card', content: 'summary'});
    this.meta.updateTag({name: 'twitter:site', content: '@chooseagencia'});
    this.meta.updateTag({name: 'twitter:title', content: config.title});
    this.meta.updateTag({name: 'twitter:description', content: config.description});
    this.meta.updateTag({name: 'twitter:image', content: config.image});
    this.meta.updateTag({name: 'twitter:creator', content: '@chooseagencia'});

    this.meta.updateTag({property: 'og:type', content: 'article'});
    this.meta.updateTag({property: 'og:site_name', content: 'Choose Agencia'});
    this.meta.updateTag({property: 'og:title', content: config.title});
    this.meta.updateTag({property: 'og:description', content: config.description});
    this.meta.updateTag({property: 'og:image', content: config.image});
    this.meta.updateTag({property: 'og:url', content: `https://chooseagencia.com/${config.slug}`});

  }

}
