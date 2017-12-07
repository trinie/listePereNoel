import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { ListePereNoelSharedModule, UserRouteAccessService } from './shared';
import { ListePereNoelAppRoutingModule} from './app-routing.module';
import { ListePereNoelHomeModule } from './home/home.module';
import { ListePereNoelAdminModule } from './admin/admin.module';
import { ListePereNoelAccountModule } from './account/account.module';
import { ListePereNoelEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        ListePereNoelAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        ListePereNoelSharedModule,
        ListePereNoelHomeModule,
        ListePereNoelAdminModule,
        ListePereNoelAccountModule,
        ListePereNoelEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class ListePereNoelAppModule {}
