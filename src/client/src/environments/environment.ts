// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The index of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	apiUrl: "",
	language: 'ro',
	languages: [{id: "ro", name: 'Romanian'}, {id: 'en', name: 'English'}],
	firebaseConfig: {
		apiKey: "AIzaSyB0_M9bkwvI40VfcvVL1no3-MoPVzLUe-k",
		authDomain: "project-manager-241004.firebaseapp.com",
		databaseURL: "https://project-manager-241004.firebaseio.com",
		projectId: "project-manager-241004",
		storageBucket: "project-manager-241004.appspot.com",
		messagingSenderId: "852501594916",
		appId: "1:852501594916:web:3f391f2cd152bcc1"
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
