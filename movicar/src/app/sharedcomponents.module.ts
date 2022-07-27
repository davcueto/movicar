import { NgModule, Directive, OnInit, EventEmitter, Output, OnDestroy, Input, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})

export class SharedModuleC { }