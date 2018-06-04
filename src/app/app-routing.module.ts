import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Poc1Component } from "./poc1/poc1.component";
import { Poc2Component } from "./poc2/poc2.component";
const appRoutes: Routes=[
    {path:'', redirectTo:'poc1', pathMatch:'full'},
    { path:'poc1', component: Poc1Component },
    { path: 'poc2', component: Poc2Component}
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {
}