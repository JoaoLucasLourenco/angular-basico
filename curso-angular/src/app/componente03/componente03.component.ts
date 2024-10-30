import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {
  imagem:string = ""
  alterarImagem(){
    if(this.imagem === "assets/anao.jfif"){
      this.imagem = "assets/elfo.jfif"
    }
    else{
      this.imagem = "assets/anao.jfif"
    }
  }
}
