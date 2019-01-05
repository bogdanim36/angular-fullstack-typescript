import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

import {UsersUiConfig} from '@app/module-pm/pages/users/users-ui-config';
import {User} from '@shared/user';

import {UsersClientService} from '@app/module-pm/pages/users/users-client-service';
import {PageComponent} from '@app/core/page.component';
import {DialogService} from 'primeng/api';
import {UserFormComponent} from '@app/module-pm/pages/users/form/user-form.component';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-index.component.html',
    styleUrls: ['./users-index.component.scss']
})
export class UsersIndexComponent extends PageComponent implements OnInit {
    isNewItem = false;
    editingItem: Partial<User>;

    constructor(public service: UsersClientService, breakpointObserver: BreakpointObserver, public uiConfig: UsersUiConfig, public dialogService: DialogService) {
        super(breakpointObserver);
    }

    ngOnInit() {
        this.service.getAll().then((data) => console.log('get data', data), console.error);
    }

    showDialogToAdd() {
        this.showDialog(true, {});
        
    }

    showDialogToEdit(event, item) {
        this.showDialog(false, item);
    }

    showDialog(isNewItem: boolean, source) {
        this.isNewItem = isNewItem;
        const  editingItem =  this.service.instanceCreate(source);
        this.dialogService.open(UserFormComponent, {
            data: {
                uiConfig:this.uiConfig,
                item: editingItem,
                source: source,
                launcher: this,
                isNewItem: isNewItem,
                save: this.save.bind(this),
                delete: this.delete.bind(this)
            },
            height: this.isHandset? "100%": "auto",
            width: this.isHandset?"100%": "300px"
        });
    }

    save(isNewItem, source,edited) {
        if (isNewItem)
            this.service.create(edited);
        else
            this.service.update(source, edited);

        this.editingItem = null;
        this.dialogService.dialogComponentRef.instance.close();
    }

    delete(item) {
        this.service.delete(item);
        this.editingItem = null;
        this.dialogService.dialogComponentRef.instance.close();
    }
}
