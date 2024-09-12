import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PropiedadComponent } from '../propiedad/propiedad.component';



@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [PropiedadComponent,FormsModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  nombre:string = "Edin";
  apellido = "Ayala";
  edad = 16;
  empresa = 'UCAD';
  habilitar_input_property = true;
  usuario_registrado_property = false;
  texto_registro = "No hay usuario registrado";
  departamento = "2";
  texto_depto = "Seleccione un departamento";
  estilo_definido = "background-color: red; color: white;";

  
  
  

  imagenUrl: string = "https://cdn.ligadegamers.com/imagenes/laliga-real-madrid-escudo-dls-1.jpg";
  newImagenUrl: string = "";

  cambiarImagen(event: Event) {
    this.imagenUrl = this.newImagenUrl;
  }


  videoUrl: string = "https://example.com/video1.mp4";
  newVideoUrl: string = "";

  cambiarVideo(event: Event) {
    this.videoUrl = this.newVideoUrl;
  }


  audioUrl = 'path/to/default/audio.mp3';
  newAudioUrl = '';

  cambiarAudio(event:  Event) {

    this.audioUrl = this.newAudioUrl;
  }
  

  cambiar_color(){
    if(this.estilo_definido=="background-color: red; color: white;"){
      this.estilo_definido= "background-color: blue; color: black;";
    }else{
      this.estilo_definido = "background-color: red; color: white;";
    }
  }

  definir_depto(){
    switch (parseInt(this.departamento)) {
      case 1:
        this.texto_depto = "San Salvador";
        break;
      case 2:
        this.texto_depto = "Santa Ana";
        break;
      case 3:
        this.texto_depto = "San Miguel";
        break;
      case 4:
        this.texto_depto = "Sonsonate";
        break;
    
      default:
        this.texto_depto = "Seleccione un departamento";
        break;
    }

    return this.texto_depto;
  }

  
n1: number = 0;
n2: number = 0;
operador: string ="+";
 resultado: number = 0;
 estado_juego: string ="";

 imagen: string ="https://cdn.ligadegamers.com/imagenes/laliga-real-madrid-escudo-dls-1.jpg";

 cambiar_estado(event: Event){
this.estado_juego = "El juego se ha " + (<HTMLInputElement>event.target).value;
 }

 operar(){
  if(this.operador!= "+"){
    this.resultado =0;
  }else{
    this.resultado = eval(this.n1 + this.operador + this.n2);
  }
 }


  getEdad(){
    return this.edad;
  }

  llamar_empresa(empresa:string){}

  cambiar_registro(){
    this.usuario_registrado_property=!this.usuario_registrado_property;
  }

  set_usuario_registrado(event: Event){
    //alert((<HTMLInputElement>event.target).value);
    this.usuario_registrado_property=!this.usuario_registrado_property;
    //alert('El usuario se ha registrado');
    if((<HTMLInputElement>event.target).value=="si"){
      this.texto_registro = "El usuario se acaba de registrar";
    }else{
      this.texto_registro = "No hay usuario registrado";
    }
  
    

    /*
    onButtonClick(event: Event): void {
      console.log('btn presionado', event);
    }
      userInput: string = '';
      
      onInputChange(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.userInput = inputElement.value;
    */   
     /*cambiar_empresa(event: Event){
    this.empresa=(<HTMLInputElement>event.target).value;
    }*/
   // ...



      }
      
  }
