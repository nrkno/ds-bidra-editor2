export interface userCollectionData {
	total: number;
	_embedded: userCollection;
}

interface userCollection {
	collection: userData[];
}

export interface userData {
	permissions: string[]; // list of permissions
	groupLabels: string[];
	id: string;
	email: string;
	accountStatus: string; // list of values
	groups: string[];
	modifiedOn: string; // dato
	createdOn: string; // dato
	extGroupHint: string[];
	givenName?: string;
	familyName?: string;
	isExternal?: boolean;
}
