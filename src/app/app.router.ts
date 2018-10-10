import { RouterModule, Routes } from '@angular/router'
import { FirstExampleComponent } from './components/first-example/first-example.component'

const APP_ROUTES : Routes = [
    {
        path : 'example1',
        component : FirstExampleComponent
    }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)