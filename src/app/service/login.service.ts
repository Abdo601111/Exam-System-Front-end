import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubect= new Subject<boolean>();

  constructor(private http:HttpClient) { }


  public getCurrentUser(){
    return this.http.get(`${baseUrl}/get-current-user`);
  }


  public generateToken(loginData:any){
  return this.http.post(`${baseUrl}/generate-token`,loginData)
  }

  public loginUser(token){
    localStorage.setItem('token',token);
    
    return true;
  }
  public islogin(){
    let strToken= localStorage.getItem("token");
    if(strToken==undefined|| strToken=='' || strToken==null){
      return false;

    }else{
      return true;
    }
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user){
    localStorage.setItem('user',JSON.stringify(user));
  }
  public getUser(){
    let strUser= localStorage.getItem('user');
    if(strUser!= null){
      return JSON.parse(strUser);
    }else{
      this.logout();
      return null;
    }
  }

  public getUserRoles(){
    let user=this.getUser();
    return user.authorities[0].authority;
  }


}
