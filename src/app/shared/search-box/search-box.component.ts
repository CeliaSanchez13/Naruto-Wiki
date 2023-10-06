import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {



  @Input()
  placeholder: string = '';

  @Input()
  initialValue: string = '';

  //Metodos
  /*
  onKeyPress( searchTerm: string){
    this.debouncer.next(searchTerm);
  }*/

}
