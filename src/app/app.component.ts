import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegacionComponent } from "../components/navegacion/navegacion.component";
import { NavegacionResponsiveComponent } from "../components/navegacion-responsive/navegacion-responsive.component";
import { FooterComponent } from "../components/panel-principal/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavegacionComponent, NavegacionResponsiveComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BlogChooseOficial';
}
