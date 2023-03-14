import { Component } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-langing-page',
  templateUrl: './langing-page.component.html',
  styleUrls: ['./langing-page.component.scss']
})
export class LangingPageComponent {
  phValue:any=0;
  formStatus:boolean=false;
  portability = new FormGroup({
    ph: new FormControl('',Validators.compose([Validators.required,Validators.min(0),Validators.max(14)])),
    hardness: new FormControl('',Validators.compose([Validators.required,Validators.max(14)])),
    solids: new FormControl('',Validators.compose([Validators.required,Validators.max(14)])),
    sulphate: new FormControl('',Validators.compose([Validators.required,Validators.max(14)])),
    chloramies: new FormControl('',[Validators.required,Validators.max(14)]),
    trihalomethasis : new FormControl('',[Validators.required,Validators.max(14)]),
  });

  constructor(private router:Router){}
  handleFormSubmit()
  {
    this.formStatus=true;
    this.phValue=this.portability.value.ph ;
    if(parseInt(this.phValue)<7)
    {
      this.router.navigate(['safe-water']);
    }
    else
    {
      this.router.navigate(['polluted-water']);
    }
    
    console.log('submit')
  }

  get ph()
  {
    return this.portability.get('ph')
  }
  get solids()
  {
    return this.portability.get('solids')
  }
  get sulphate()
  {
    return this.portability.get('sulphate')
  }
  get hardness()
  {
    return this.portability.get('hardness')
  }
  get chloramies()
  {
    return this.portability.get('chloramies')
  }
  get trihalomethasis()
  {
    return this.portability.get('trihalomethasis')
  }

}
