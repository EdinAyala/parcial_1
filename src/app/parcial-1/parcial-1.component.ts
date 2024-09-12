import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parcial-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parcial-1.component.html',
  styleUrl: './parcial-1.component.css'
})
export class Parcial1Component {

  color = 'red'; 
}
