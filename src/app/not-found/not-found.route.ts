import { Route } from "@angular/router";
import { NotFoundComponent } from "./not-found.component";

export const NotFoundRoute: Route = {
    path: "**",
    component: NotFoundComponent
}