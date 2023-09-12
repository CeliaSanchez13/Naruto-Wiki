import { Component } from '@angular/core';
import { Character, Characters } from 'src/app/interfaces/characters.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  initialValue: string = '';


}
