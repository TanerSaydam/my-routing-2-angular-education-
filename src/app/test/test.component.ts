import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _router: Router
  ){
    //rxJs
    //console.log(this._activatedRoute.snapshot.url[1].path)
    this._activatedRoute.params.subscribe(res=>{
      console.log(res)
    })
  }
  
  changeRoute(){
    this._router.navigateByUrl("/test/deneme1234");
  }
}
