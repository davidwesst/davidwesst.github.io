import { ApplicationInsights } from "@microsoft/applicationinsights-web";

// setup application insights
const appInsights = new ApplicationInsights({ config: {
  connectionString: process.env.AI_CONNECTION_STRING,
  enableCorsCorrelation: true,
  enableRequestHeaderTracking: true,
  enableResponseHeaderTracking: true,
  enableUnhandledPromiseRejectionTracking: true
}});

appInsights.loadAppInsights();
appInsights.trackPageView(); // Manually call trackPageView to establish the current user/session/pageview
