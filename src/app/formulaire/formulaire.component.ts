import { Reponsecnx } from './../models/reponsecnx';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormService } from './form.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  
  
  title = 'fromulaire du générateur';
  generateurForm: FormGroup; 
  nprojet;
  reponseC :any;
  cars: Array<any>;
  reponses : any;
  variable :any ="NN";
  submitted=false;

  constructor(private formbuilder:FormBuilder,public service:FormService){

    
  }

  ngOnInit(){

  this.generateurForm = this.formbuilder.group({
    
    diroctoryproject: ['', Validators.required],
    nomprojet: ['', Validators.required],
    nompackage: ['', Validators.required],
    typebasededonne: ['', Validators.required],
    lienserveur: ['', Validators.required],
    port: ['', Validators.required],
    databaseName: ['', Validators.required],
    nomutilisateur: ['', Validators.required],
    motdepasseutilisateur:['', [Validators.required, Validators.minLength(0)]],
    acceptation: [false, Validators.requiredTrue]

  })
  }

  // getter pour un accès facile aux champs de formulaire
  get f() { return this.generateurForm.controls; }

/*
  getReponseTest()
  {
    return this.service.reponseTest().subscribe(reponseC => this.reponseC = reponseC);

  }
*/
  onSubmit() {
    
    this.submitted = true;
    this.service.envoyerformulaire(this.f.diroctoryproject.value,this.f.nomprojet.value,this.f.nompackage.value,this.f.typebasededonne.value,this.f.lienserveur.value,this.f.port.value,this.f.databaseName.value,this.f.nomutilisateur.value,this.f.motdepasseutilisateur.value).subscribe(value => console.log(value));
    // stop here if form is invalid
    
    if (this.generateurForm.invalid && this.variable == "NN") {
        return;
    }

    //console.log(this.f.nomprojet.value,this.f.nompackage.value,this.f.typebasededonne.value,this.f.lienserveur.value,this.f.portbd.value,this.f.nomutilisateur.value,this.f.motdepasseutilisateur.value);
    
 
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.generateurForm.value, null, 4));
}

onTest()
{
  this.service.testConnection(this.f.lienserveur.value,this.f.databaseName.value,
    this.f.nomutilisateur.value,this.f.motdepasseutilisateur.value).
    subscribe((responsee: any) => {
      this.variable = responsee.repo1;
    }
    );
  

  //.subscribe(value => {this.variable = value,console.log(this.variable)});
 //this.service.reponseTest().subscribe(res =>this.reponses = res['reponse']);
 //alert(this.reponses.reponse);
//console.log(this.reponses.reponse);
  //this.reponses = response});
 //.subscribe(data => {
  //  this.reponseC = data;  
//  });
  //console.log(this.reponseC+'123');
}

onReset() {

    this.submitted = false;
    this.generateurForm.reset();

}
folder: string;
}
