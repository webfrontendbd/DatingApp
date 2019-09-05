import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { ListComponent } from './list/list.component';
import { MessageComponent } from './message/message.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MemberComponent},
            {path: 'lists', component: ListComponent},
            {path: 'messages', component: MessageComponent}
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
