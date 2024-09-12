import { Component } from '@angular/core';
import { Parcial1Component } from '../parcial-1/parcial-1.component';

@Component({
  selector: 'app-propiedad',
  standalone: true,
  imports: [Parcial1Component],
  templateUrl: './propiedad.component.html',
  styleUrl: './propiedad.component.css'
})
export class PropiedadComponent {

  color = 'blue';

  cambiarColor() {
    this.color = 'red';


    
  
    }

  }


