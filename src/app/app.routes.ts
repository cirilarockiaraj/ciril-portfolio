import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ResumeComponent } from '../components/resume/resume.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactComponent } from '../components/contact/contact.component';
import { NotFoundError } from '@angular/core/primitives/di';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'skills', component:SkillsComponent},
    {path: 'resume', component:ResumeComponent},
    {path: 'project', component:ProjectsComponent},
    {path: 'contact', component:ContactComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component:NotFoundError}
];
