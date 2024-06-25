import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', component: LandingPageComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [LandingPageComponent]
})
export class LandingPageModule { }