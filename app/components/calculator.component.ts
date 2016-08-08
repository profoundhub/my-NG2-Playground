import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'calculator-component',
    templateUrl: 'name.component.html'
})
export class CalculatorComponent implements OnInit {
    
    total: number = 0;

    // constructor() { }

    ngOnInit() {
        this.total = this.add( 55 , 70 );
    }
    
    add(x: number, y: number) {
        return x + y;
    }
}