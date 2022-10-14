import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  constructor() { }

  authentication(email: any,password: any){
    

    if(email.match("omar_jesus23@hotmail.com") && password=="waltertrash"){
      return true;
    }
   

    return false;
  }
}
