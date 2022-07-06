import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appMultiColor]'
})
export class MultiColorDirective {
  
  colorsArray: string[] = ['#FCFC62', '#06D6A0', '#364156', '#D2D6EF', '#D138BF','#FC9F5B', '#F84AA7',
                           '#137547','#FF9F1C', '#48BEFF'];
  colorInterval: any;
  @HostListener('mouseover')
  onMouseOver(){
    let colorIndex = 0;
    this.colorInterval = setInterval(() => {
      this.el.nativeElement.style.backgroundColor = this.colorsArray[colorIndex];
      colorIndex++;
      if (colorIndex >= this.colorsArray.length) {
        colorIndex = 0;
      }
    }, 250);
  }

  @HostListener('mouseout')
  onMouseOut(){
    clearInterval(this.colorInterval);
    this.el.nativeElement.style.backgroundColor = 'tomato'
  }

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = 'tomato'
    el.nativeElement.style.borderStyle = 'none';
    el.nativeElement.style.padding = '8px';
    el.nativeElement.style.borderRadius = '16px';
    el.nativeElement.style.color = 'white';
    el.nativeElement.style.fontWeight = 'bold';
    this.el.nativeElement.style.cursor = 'pointer'
    
  }
 
}
