import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page.component";
import { NgModule } from "@angular/core";
import { HeaderComponent } from './components/header/header.component';
import { MainButtonComponent } from './components/main-button/main-button.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [LandingPageComponent, HeaderComponent, MainButtonComponent]
})
export class LandingPageModule { }