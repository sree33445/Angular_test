import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
firstname=signal('Ramesh')
lastname=signal('Krishnan')
fullname = computed(()=>this.firstname() + ' ' + this.lastname()) 
changefirstname(val:any){
  this.firstname.set(val)
}
changelastname(val:any){
  this.lastname.set(val)
}
}
