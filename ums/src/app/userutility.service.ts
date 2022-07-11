import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserutilityService {

  constructor(private http:HttpClient) { }

  fetchUsers()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  addUser(userData:any)
  {
    return this.http.post('https://jsonplaceholder.typicode.com/users',userData);
  }

  deleteUser(id:number)
  {
    return this.http.delete('https://jsonplaceholder.typicode.com/users/'+id);
  }
  updateUser(payload:any,id:number)
  {
    return this.http.put('https://jsonplaceholder.typicode.com/users/'+id,payload);
  }
}
