import { Routes } from '@angular/router';
import { BlogChooseComponent } from '../components/blog-choose/blog-choose.component';
import { ElOrigenDeLaLeyDelOlvidoComponent } from '../components/articulo-choose/el-origen-de-la-ley-del-olvido/el-origen-de-la-ley-del-olvido.component';
import { ContenidoComponent } from '../components/panel-principal/contenido/contenido.component';
import { LaLeyDelOlvidoProtegeTuReputacionConChooseComponent } from '../components/articulo-choose/la-ley-del-olvido-protege-tu-reputacion-con-choose/la-ley-del-olvido-protege-tu-reputacion-con-choose.component';
import { TendenciasDeDisenoWeb2024UnaMiradaAlFuturoComponent } from '../components/articulo-choose/tendencias-de-diseno-web-2024-una-mirada-al-futuro/tendencias-de-diseno-web-2024-una-mirada-al-futuro.component';
import { EmpresasQueTriunfaronGraciasAlSocialListeningCasosDeExitoInspiradoresComponent } from '../components/articulo-choose/empresas-que-triunfaron-gracias-al-social-listening-casos-de-exito-inspiradores/empresas-que-triunfaron';
import { LaImportanciaDelContenidoDigitalParaTuMarcaComponent } from '../components/articulo-choose/la-importancia-del-contenido-digital-para-tu-marca/la-importancia-del-contenido-digital-para-tu-marca.component';
import { PotenciaTuTransformacionDigitalComponent } from '../components/articulo-choose/potencia-tu-transformacion-digital/potencia-tu-transformacion-digital.component';
import { SocialListeningEstarPasoAdelanteCompetidoresComponent } from '../components/articulo-choose/social-listening-estar-paso-adelante-competidores/social-listening-estar-paso-adelante-competidores.component';
import { DesarrolloWebComponent } from '../components/desarrollo-web/desarrollo-web.component';
import { Articulo1Component } from '../components/desarrollo-web/articulo-1/articulo-1.component';
import { Articulo2Component } from '../components/desarrollo-web/articulo-2/articulo-2.component';
import { Articulo3Component } from '../components/desarrollo-web/articulo-3/articulo-3.component';
import { CreacionContenidoComponent } from '../components/creacion-contenido/creacion-contenido.component';
import { CreacionContenidoArticulo1Component } from '../components/creacion-contenido/creacion-contenido-articulo-1/creacion-contenido-articulo-1.component';

export const routes: Routes = [
    {  path: '', component: BlogChooseComponent },
    {  path: 'articulo/desarrollo-web', component: DesarrolloWebComponent },
    {  path: 'articulo/el-origen-de-la-ley-del-olvido', component: ElOrigenDeLaLeyDelOlvidoComponent },
    {  path: 'article/:id', component: ContenidoComponent },
    {  path: 'articulo/la-ley-del-olvido-protege-tu-reputacion-con-choose', component: LaLeyDelOlvidoProtegeTuReputacionConChooseComponent },
    {  path: 'articulo/tendencias-de-diseno-web-2024-una-mirada-al-futuro', component: TendenciasDeDisenoWeb2024UnaMiradaAlFuturoComponent},
    {  path: 'articulo/empresas-que-triunfaron-gracias-al-social-listening-casos-de-exito-inspiradores', component: EmpresasQueTriunfaronGraciasAlSocialListeningCasosDeExitoInspiradoresComponent},
    {  path: 'articulo/la-importancia-del-contenido-digital-para-tu-marca', component: LaImportanciaDelContenidoDigitalParaTuMarcaComponent},
    {  path: 'articulo/potencia-tu-transformacion-digital', component: PotenciaTuTransformacionDigitalComponent},
    {  path: 'articulo/social-listening-estar-paso-adelante-competidores', component: SocialListeningEstarPasoAdelanteCompetidoresComponent},
    {  path: 'articulo/desarrollo-web/importancia-del-uso-de-una-pagina-web-en-la-era-digital', component: Articulo1Component },
    {  path: 'articulo/desarrollo-web/importancia-de-la-inteligencia-artificial-en-el-desarrollo-de-paginas-webs-modernas', component: Articulo2Component },
    {  path: 'articulo/desarrollo-web/maximizando-el-potencial-beneficio-de-un-correcto-seo', component: Articulo3Component },
    {  path: 'articulo/creacion-contenido', component: CreacionContenidoComponent },
    {  path: 'articulo/creacion-contenido/casos-de-exito-el-impacto-de-un-buen-manejo-de-redes-sociales', component: CreacionContenidoArticulo1Component },
];
