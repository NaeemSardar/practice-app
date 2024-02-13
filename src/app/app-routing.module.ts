import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';

const routes: Routes = [
  // {
  //   path:'student',
  //   loadChildren:()=>import('./modules/student/student.module').then(m=>m.StudentModule),
  //   data:{preload:true,delay:false}
  // },
  // {
  //   path:'teacher',
  //   loadChildren:()=>import('./modules/teacher/teacher.module').then(m=>m.TeacherModule),
  //   //you can load module in delay time then you can set like this delay = true.s 
  //   data:{preload:true,delay:true}
  // },
  // {path:'',redirectTo:'template-form',pathMatch:'full'}, start page of the application redirect to this page
  {path:'template-form', component:TemplateFormComponent},
  {path:'reactive-form', component:ReactiveFormComponent},
  {path:'',redirectTo:'',pathMatch:'full'},
  // {path:'**', component:PageNotFoundComponent},// NS: Not found dedicated path then generate not found msg

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // preloadingStrategy:CustomPreloadingStrategyService // NS: load specify module if you set custom configuration (preload:true) 
                                                           
      // preloadingStrategy:PreloadAllModules     // NS: load all of these modules if you set it
    })],
  exports: [RouterModule],
  //Add the service which is created for customer preload strategy
  providers:[
    // CustomPreloadingStrategyService
  ]
})
export class AppRoutingModule { }
