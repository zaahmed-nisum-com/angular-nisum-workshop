import { NgModule } from '@angular/core';
import { DateFormate } from './dateFormate';

@NgModule({
    declarations: [
        DateFormate,
        // OnlyTimeHMS
    ],
    imports: [

    ],
    exports: [
        DateFormate,
        // OnlyTimeHMS
    ]
    ,
})
export class PipesModule { }