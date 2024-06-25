import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ToDoListComponent } from "./to-do-list.component";

const routes: Routes = [
    { path: '', component: ToDoListComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [ToDoListComponent]
})
export class ToDoListModule { }