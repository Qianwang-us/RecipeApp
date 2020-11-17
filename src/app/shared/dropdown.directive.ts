import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;

    // @HostListener('mouseenter') onMouseEnter(){
    //     this.el.nativeElement.classList.add("open");
    // }

    // @HostListener('mouseleave') onMouseLeave() {
    //     this.el.nativeElement.classList.remove('open');
    // }

    // @HostListener('click') toggleOpen(){
    //     this.isOpen = !this.isOpen;
    // }

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
      constructor(private elRef: ElementRef) {}
    
}

