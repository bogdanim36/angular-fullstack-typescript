import {Translation} from "../client/src/app/core/translation";

export const noRoleMenu: MenuItem[] = [
	{
		label: new Translation( 'Administration', 'Administrare'), expanded: true, items:
			[
				{label: new Translation('Users', "Utilizatori"), routerLink: 'users', icon: 'fa fa-caret-right'}
				, {label: new Translation('Projects', "Proiecte"), routerLink: 'projects', icon: 'fa fa-caret-right'}
				, {label: new Translation('Task Types', 'Tipuri Task-uri'), routerLink: 'task-types', icon: 'fa fa-caret-right'}
				, {label: new Translation('Task Status', 'Stari Task-uri'), routerLink: 'task-status', icon: 'fa fa-caret-right'}
				, {label: new Translation('Tasks', 'Task-uri'), routerLink: 'tasks', icon: 'fa fa-caret-right'}
			]
	}];

export const ConfigMenu = {
	0: {
		name: 'No role',
		menu: noRoleMenu
	}
};

export class MenuItem {
	label: Translation;
	expanded?: boolean;
	routerLink?: string;
	icon?: string;
	type?: any;
	items?: Array<MenuItem>;
}
