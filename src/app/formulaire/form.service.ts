import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reponsecnx } from '../models/reponsecnx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private fUrl="http://localhost:8080/form";
  private tUrl="http://localhost:8080/testconnection";

  private variable;

  constructor(private http: HttpClient) {}
    public envoyerformulaire(diroctoryproject:string,nomprojet:string,nompackage:string,typebasededonne:string,lienserveur:string,port:string,databaseName:string,nomutilisateur:string,motdepasse:string)
    { 
      this.variable={diroctoryproject:diroctoryproject,nomprjet:nomprojet,nompackage:nompackage,typebasededonne:typebasededonne,lienserveur:lienserveur,port:port,databaseName:databaseName,nomutilisateur:nomutilisateur,motdepasse:motdepasse};
      console.log(this.variable);
      return this.http.post<any>(this.fUrl,this.variable);
    }
    public testConnection(lienserveur:string,databaseName:string,nomutilisateur:string,motdepasse:string)
    {
      this.variable={lienserveur:lienserveur,databaseName:databaseName,nomutilisateur:nomutilisateur,
        motdepasse:motdepasse};
      return this.http.post<any>(this.tUrl,this.variable);
    }
    reponseTest() 
    {
      return this.http.get("http://localhost:8080/reponsetest");
    }
}
