import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from '@preact/prerender-data-provider';

import SiteHeader from 'components/SiteHeader/SiteHeader';
import SiteFooter from 'components/SiteFooter/SiteFooter';

// Code-splitting is automated for routes
import About from 'routes/about';
import Article from 'routes/article';
import Contact from 'routes/contact';
import ContactSuccess from 'routes/contact-success';
import Home from 'routes/home';
import NotFoundPage from 'routes/notfound';
import Page from 'routes/page';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = (e) => {
	  this.currentUrl = e.url;
	};

	render (props) {

	  console.log(props);

	  return (
	    <Provider value={props}>
	      <div id="app" class="w-100 min-vh-100 sans-serif flex flex-column">
	        <SiteHeader />
	        <div class="flex-auto ph3 ph5-ns pv3">
	          <Router onChange={this.handleRoute}>
	            <About path="/about/" />
	            <Article path="/article/:slug/" />
	            <Contact path="/contact/" />
	            <ContactSuccess path="/contact/success/" />
	            <Home path="/" />
	            <NotFoundPage type="404" default />
	            <Page path="/page/:page/" />
	          </Router>
	        </div>
	        <SiteFooter />
	      </div>
	    </Provider>
	  );
	}
}
