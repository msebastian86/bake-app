import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ExampleDirective } from "./ExampleDirective";

@NgModule({
    declarations: [
        // ExampleDirective
    ],
    exports: [
        CommonModule
        // ExampleDirective
    ]
})
export class SharedModule {
    // Just example, add this module to app module and desired componens...

    // DON'T PROVIDE SERVICES ON SHARED MODULES
}