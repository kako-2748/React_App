export = VtecxApp
export as namespace VtecxApp

declare namespace VtecxApp {
	interface Request {
		feed: Feed
	}
	interface Feed {
		entry: Entry[]
	}
	interface Entry {
		id?: string,
		title?: string,
		subtitle?: string,
		rights?: string,
		summary?: string,
		content?: Content[],
		link?: Link[],
		contributor?: Contributor[],
		user?:User
	}
	interface Content {
		______text: string
	}
	interface Link {
		___href: string,
		___rel: string
	}
	interface Contributor {
		uri?: string,
		email?: string
	}
	interface User {
		name?:string,
		email?:string,
		gender?:string,
		memo?:string,
		birthday?:string,
		check?:string,
		select?:string,
		job?:string,
		address?:string,
		height?:string,
		weight?:string,
		select_box?:string,
		check_box?:string
	}
}