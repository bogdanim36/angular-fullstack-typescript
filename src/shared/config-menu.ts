export const noRoleMenu: MenuItem[] = [
	{
		label: 'Administration', expanded: true, items:
			[
				  {label: 'Users', routerLink: 'users', icon: 'fa fa-caret-right'}
				, {label: 'Projects', routerLink: 'projects', icon: 'fa fa-caret-right'}
				, {label: 'Task Types', routerLink: 'task-types', icon: 'fa fa-caret-right'}
				, {label: 'Task Status', routerLink: 'task-status', icon: 'fa fa-caret-right'}
				, {label: 'Tasks', routerLink: 'tasks', icon: 'fa fa-caret-right'}
			]
	}];

export const ConfigMenu = {
	0: {
		name: 'No role',
		menu: noRoleMenu
	}
};

export class MenuItem {
	label: string;
	expanded?: boolean;
	routerLink?: string;
	icon?: string;
	type?:any;
	items?: Array<MenuItem>;
}
