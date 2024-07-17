import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterlist: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  // onDelete =0 Index value : number
  @Output()
  // public onDelete = new EventEmitter();
  public onDelete: EventEmitter<string> = new EventEmitter();

  ondeleteCharacter( id?: string ):void {

    if ( !id ) return;
    this.onDelete.emit( id );

  }
}
