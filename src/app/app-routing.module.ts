import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AComponent } from "./a/a.component";
import { BComponent } from "./b/b.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { TestComponent } from "./test/test.component";


export const routes: Routes = [
    {
        path: "",
        component: AComponent
    },
    {
        path: "a",
        component: AComponent
    },
    {
        path: "b",
        component: BComponent
    },
    {
        path: "test",
        component: TestComponent
    },
    {
        path: "test/:value",
        component: TestComponent
    },
    {
        path: "test/:value/:value2",
        component: TestComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    }
]

@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
        NotFoundComponent
    ]
})
export class AppRoutingModule{

}