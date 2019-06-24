import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {ClientServiceBaseClass} from '@app/core/client-service-base-class';
import {User} from '@shared/user';
import {AuthService} from "@app/admin/auth.service";
import {ServerResponse} from "@app/core/server.response";
import {AuthUser} from "@app/admin/auth.user";
import {SpkHelper} from "@app/core/spk-helper";
import ObjectAssign = SpkHelper.ObjectAssign;

@Injectable({providedIn: 'root'})
export class UsersClientService extends ClientServiceBaseClass<User> {

	constructor(protected http: HttpClient, private authService: AuthService) {
		super(http, User, 'api/users');
		authService.login$.subscribe(authUser => {
			this.checkUserExistence(authUser);
		});
	}

	getAll(params?, reload: boolean = false): Promise<User[]> {
		return super.getAll(params, reload).then((response) => {
			this.data.items = response;
			return response;
		});
	}

	async checkUserExistence(user: AuthUser): Promise<any> {
		const url = `${this.baseRoute}/checkUserExistence`;
		if (!user) return {status:false };
		const response = await this.http.post<ServerResponse>(url, user).toPromise<ServerResponse>();
		let {firstName, lastName} = this.splitFullName(user.displayName);
		if (response.status) {
			if (!response.data) {
				//create user
				let createResponse = await this.create({email: user.email, firstName, lastName});
				// if (createResponse.status) {
				// 	console.log("user created", createResponse.data);
				// } else {
				// 	console.error("user cannot be created", createResponse);
				// }
				return createResponse;
			} else {
				let userFound = this.createInstance(response.data);
				if (userFound.fullName !== user.displayName) {
					let editedUser = ObjectAssign(userFound, {firstName, lastName});
					let updateResponse = await this.update(userFound, editedUser);
					//update fullname;
					return updateResponse;
				} else
					return {status:true, data: userFound};

			}
		} else return null;

	}

	splitFullName(fullName) {
		let parts = fullName.split(" ");
		let firstNameParts = parts.slice(0);
		firstNameParts.splice(parts.length - 1, 1);
		let firstName = firstNameParts.join(" ");
		let lastName = parts[parts.length - 1];
		return {firstName, lastName};
	}
}
