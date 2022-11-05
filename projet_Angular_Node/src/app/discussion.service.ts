import { Injectable } from '@angular/core';
import{ Subject, BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DiscussionService {

subject= new Subject();


  constructor() { }
  
  envoyerMsg(recette:any){
  return this.subject.next(recette);
  
  
}

 getMsg(){
return this.subject.asObservable();
}

}
