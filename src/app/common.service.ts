import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  URL ="http://localhost:3000/resto"
  regURL ="http://localhost:3000/users"
  //-------------------------------------
  
//---------------------------------------------
  constructor(private _http:HttpClient) { }

  getRestoList(){
   return this._http.get(this.URL);

  }

  addResto(data:any){
    return this._http.post(this.URL, data);
  }


  getCurrentData(id:any){
    const url = `${this.URL}/${id}`;
    return this._http.get(url,id);
   // return this._http.get(this.URL, data);
  }


  deleteResto(id:number){
    const url = `${this.URL}/${id}`;
    return this._http.delete(url);
  //  return this._http.delete('${this.URL}/${id}')
  }

  updateResto(id:any,data:any){
    const url = `${this.URL}/${id}`;
    return this._http.put(url,data);
  }


  createUser(data:any){
return this._http.post(this.regURL,data);
  }

  getUsers(id:any){
    const regurl = `${this.regURL}/${id}`;
    return this._http.get(regurl,id);

  //  return this._http.get(this.regURL);
  }

}
