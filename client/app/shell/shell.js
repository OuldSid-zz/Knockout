define(['plugins/router', 'knockout', 'durandal/app'], 
function (router, ko, app) {
	return {
		title: app.title,
		router: router,
		rouzou: router,
		activate: function() {

			router.map([
				{ route: '', moduleId: 'contacts/list', title: 'Contacts', nav: true },
				{ route: 'contacts/new', moduleId: 'contacts/edit', title: 'New Contact', nav: true },
				{ route: 'contacts/:id', moduleId: 'contacts/edit', title: 'Contact Details', nav: false }
			])
			.buildNavigationModel()
			.mapUnknownRoutes('shell/error', 'not-found');

			return router.activate();
		}
	};
});