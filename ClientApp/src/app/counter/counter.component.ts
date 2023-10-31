import { Component, Inject} from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})

@Injectable({
  providedIn: 'root'
})

export class CounterComponent {
  public currentCount = 0;
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  getAllTasks(){
    
  }
}
