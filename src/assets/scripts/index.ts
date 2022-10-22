import { ApplicationInsights } from "@microsoft/applicationinsights-web";

// setup application insights
const appInsights = new ApplicationInsights({ config: {
  connectionString: process.env.AI_CONNECTION_STRING,
  enableCorsCorrelation: true,
  enableRequestHeaderTracking: true,
  enableResponseHeaderTracking: true,
  enableUnhandledPromiseRejectionTracking: true,
  disableCookiesUsage: true
}});

appInsights.loadAppInsights();
appInsights.trackPageView(); // Manually call trackPageView to establish the current user/session/pageview

const acceptCookies = (accepted: boolean) => {
	const gdprEventBody = {
		name: (accepted) ? "gdpr_accept" : "gdpr_reject"
	};

	if(accepted) {
		// enable cookies
		appInsights.getCookieMgr().setEnabled(true);
	}

	// save result to local storage
	window.localStorage.setItem("gdprResult", accepted.toString());

	// track response
	appInsights.trackEvent(gdprEventBody);
}

const btnGdprAccept = document.getElementById("btnGdprAccept");
btnGdprAccept.addEventListener("click", ()=> {
	acceptCookies(true);
});
const btnGdprReject = document.getElementById("btnGdprReject");
btnGdprReject.addEventListener("click", ()=> {
	acceptCookies(false);
});
