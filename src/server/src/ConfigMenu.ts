export class ConfigMenu {
    items = [
        {
            'RoleId': 0,
            'RoleName': 'No role',
            'Menu': [
                {
                    'title': 'Admin',
                    'url': '',
                    'cssClass': 'fa fa-angle-right',
                    'items': [
                        {
                            'title': 'Users',
                            'url': '#/users',
                            'cssClass': 'fa fa-caret-right'
                        },
                        {
                            'title': 'Projects',
                            'url': '#/projects',
                            'cssClass': 'fa fa-caret-right'
                        },
                        {
                            'title': 'Tasks',
                            'url': '#/tasks',
                            'cssClass': 'fa fa-caret-right'
                        }
                    ]
                }
            ]
        }
    ];
}