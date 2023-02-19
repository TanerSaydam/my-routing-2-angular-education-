import { Routes } from "@angular/router";
import { ARoute } from "../a/aroute"
import { BComponent } from "../b/b.component";
import { NotFoundRoute } from "../not-found/not-found.route";

export const routes: Routes = [
    ARoute,
    {
        path: "b",
        component: BComponent
    },
    NotFoundRoute
]