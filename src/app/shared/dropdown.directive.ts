import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen: boolean = false;

  constructor() { }

  @HostListener('click') toggleShow() {
    this.isOpen = !this.isOpen;
  }
}
