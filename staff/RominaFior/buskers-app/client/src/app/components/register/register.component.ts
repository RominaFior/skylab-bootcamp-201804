import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  forma:FormGroup;

  constructor() { 
    this.forma = new FormGroup({
      'nombre': new FormControl('',            [ Validators.required,
                                                Validators.minLength(3)]),
      'email': new FormControl('',             [Validators.required, 
                                                Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'username': new FormControl('', Validators.required, this.existeUsuario ),                                          
      'contraseña': new FormControl('',         Validators.required),
      'confirmaContraseña': new FormControl(),
      'categoria': new FormControl('',          Validators.required),
      'descripcion': new FormControl('', Validators.required)                                 

    })

    this.forma.controls["confirmaContraseña"].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)    
    ])


  }

  noIgual(control:FormControl): { [s:string]:boolean} {
    let forma:any = this;
    if(control.value !== forma.controls["contraseña"].value) {
      return {
        noiguales:true
      }
    }
    return null;
  }

  existeUsuario( control: FormControl): Promise<any>|Observable<any>{
    let promesa= new Promise(
      (resolve, reject)=>{
        setTimeout(()=> {
          if(control.value === "strider"){
            resolve( {existe:true})
          }else{
            resolve(null)
          }
        }, 3000)
      }
    )
    return promesa;
  }


  guardarCambios(){
    console.log(this.forma.value);
    console.log(this.forma);
  }

}
