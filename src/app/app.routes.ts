import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';




export const routes: Routes = [
    {
        path: '', component: HomeComponent,
    },
    {
        path: 'nosotros', component: AboutComponent
    },
    {
        path: 'contacto', component: ContactComponent
    },
    {
        path: 'productos', component: ProductsComponent
    },
    {
        path: '**', redirectTo: ''
    }
];
