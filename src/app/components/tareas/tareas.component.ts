import { Component } from '@angular/core';
import { tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  listaTarea:tarea[]=[]
  agregar:string="";

  agregarLista():void{
    console.log(this.agregar)
  const tarea:tarea={
    nombre:this.agregar,
    estado: false
  }
    
this.listaTarea.push(tarea)
this.agregar="";

  }

  borrar(index:number){
    this.listaTarea.splice(index,1)

  }

  estado(index:number,tarea:tarea){
    this.listaTarea[index].estado=!tarea.estado;

  }


}
