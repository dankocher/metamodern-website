---
title: "Privacy Policy — World Clock"
lastModified: "2026-09-16"
---

This Privacy Policy explains how Metamodern Dev, LLC ("Metamodern Dev," "we," "us," or "our") processes information when you use the mobile application distributed under names including **World Clock**, **World Clock Widget**, and **WCW**, as well as other localized or platform-specific names depending on the platform, region, and App version (collectively, the "App"). It also explains the choices and privacy rights that may be available to you.

This Privacy Policy applies to supported Android and iOS versions of the App. Features and service providers may vary by platform and App version. A section applies only where the described feature is available in the version you use.

## 1. Who we are

The controller responsible for the processing described in this Privacy Policy is:

**Metamodern Dev, LLC**\
Privacy contact: [metamodern.dev@gmail.com](mailto:metamodern.dev@gmail.com)

## 2. Summary of information processing

| Information or activity                                                                                                                                                                               | Where it is processed                                                                                                         | Main purpose                                             |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| Saved cities, time zones, custom city labels, cached weather, date/time choices, reminders, settings, widget configuration and theme files, and locally recorded purchase or subscription entitlement | Primarily on your device; it may also be included in a platform-controlled backup                                             | Provide and remember App features                        |
| City-search text and App locale                                                                                                                                                                       | Metamodern Dev city-search service or relay in versions using online city search                                              | Return matching cities                                   |
| Coordinates of a city you select                                                                                                                                                                      | OpenWeather and, when needed, a Metamodern Dev relay                                                                          | Return weather for the selected city                     |
| Requested widget-theme image identifier                                                                                                                                                               | Metamodern Dev image service or relay in versions supporting downloadable widget themes                                       | Download a selected widget background                    |
| App-instance and device identifiers, approximate location derived from technical signals, App activity, device/App information, and purchase events                                                   | Google Analytics for Firebase                                                                                                 | Usage measurement and product improvement                |
| Crash reports, identifiers, device/App information, and diagnostic context                                                                                                                            | Firebase Crashlytics                                                                                                          | Reliability and troubleshooting                          |
| Advertising identifiers, IP address, approximate location, ad interactions, device/App information, and consent signals                                                                               | Google AdMob and, where applicable, other advertising providers and their authorized partners in builds where ads are enabled | Advertising, measurement, security, and fraud prevention |
| Product, transaction, subscription, and entitlement information                                                                                                                                       | Google Play or Apple App Store; limited status is returned to the App                                                         | Process, activate, manage, and restore paid access       |
| Calendar-event details, reminder text, or shared content                                                                                                                                              | Your device and the calendar, sharing, or recipient service you choose                                                        | Perform an action you request                            |
| Email address, message, attachments, and related metadata                                                                                                                                             | Metamodern Dev and its email provider                                                                                         | Respond to support or privacy requests                   |

The App does not require a Metamodern Dev account. The App does not request your device's GPS location. Coordinates used for weather describe a city that you selected and do not necessarily describe where you are.

## 3. Information stored on your device

The App may store the following information locally:

- cities and time zones you add, including city names, country, time-zone identifier, and coordinates;
- a custom city label that you choose to enter;
- cached hourly or daily weather information and update times;
- a selected date, time offset, first day of the week, time format, measurement units, language, theme, and weather-display choices;
- locally scheduled reminder details, including the date, time, time zone, advance-notice interval, and optional message you enter;
- widget configuration, downloaded or saved widget-theme files, and the city coordinates or time-zone information needed to display a widget;
- tutorial, rating-prompt, launch, and feature counters;
- locally recorded purchase or subscription entitlement information;
- other interface state needed to restore the App experience.

The iOS version may share the selected widget configuration and entitlement status with its widget extensions through an Apple app-group container. Android widgets use platform-managed widget storage for the same functional purpose.

We do not intentionally send custom city labels, reminder messages, the contents of a calendar event, or the contents of a shared screenshot to Firebase Analytics.

### Device and operating-system backups

Depending on your platform, device, operating-system version, manufacturer, and backup settings, locally stored App information may be included in a system backup or device-to-device transfer provided by Google, Apple, or another platform provider. Metamodern Dev does not directly receive or control these backups.

You can delete the App's local copy by using available in-App deletion controls, clearing the App's storage where the platform permits, or uninstalling the App. A platform backup, if one exists, is controlled separately through the relevant device or account settings.

## 4. City search, weather, and widget-theme requests

### City search

In versions using online city search, a city search may send the search text, App locale, result limit, and related request data to `api.metamodern.dev`. If the primary request cannot be completed, the App may use a relay hosted at `metamodern.dev`. A country code may be sent instead of the search text when the query is recognized as a country.

In versions using a bundled city database, city searching is performed locally and the search text is not sent to the city-search service.

### Weather

When weather information is requested, the App sends the latitude and longitude of the city you selected to the OpenWeather API. If the direct request fails or is unavailable, the App may send the same selected-city coordinates through a relay hosted at `metamodern.dev` so that the relay can request the forecast.

The App does not use these requests to determine your device's physical location. A city you choose may be unrelated to your current location.

### Widget-theme images

In versions supporting downloadable widget themes, selecting certain themes may request a preset image identifier from the Metamodern Dev image service. If the primary request fails, the App may use the Metamodern Dev relay. The downloaded image is cached or saved locally for the widget you configured. The theme request is not configured to include a saved-city name, custom city label, search text, or selected-city coordinates.

### Network metadata and logs

An ordinary internet request may expose the IP address, date and time, requested endpoint or path, protocol and user-agent information, response status, and security or error information to the receiving service and its infrastructure providers.

For Metamodern Dev city-search, widget-theme image, and relay services, operational access and error logs are used only to deliver the request, maintain availability, diagnose failures, prevent abuse, and protect infrastructure. We do not use these logs to build advertising or behavioral profiles. Logs under our control are retained for no longer than **30 days**, unless a longer period is necessary to investigate a specific security incident, resolve abuse, or comply with law.

OpenWeather processes requests under its [Privacy Policy](https://openweather.co.uk/privacy-policy), [Terms and Conditions of Sale](https://openweather.co.uk/api/files/file/OpenWeather_T%26C_of_sale.pdf), and applicable [Open Database License](https://opendatacommons.org/licenses/odbl/1-0/) terms. A version of the App may use another weather-data provider, which processes the request data under its own terms and privacy policy.

### Diagnostic request paths

If a city-search, weather, or widget-theme request fails, the App may attach a diagnostic request path to Firebase Crashlytics. Depending on the request and platform, that path may contain:

- the city-search text and App locale;
- the latitude and longitude of the selected city;
- the preset widget-theme image path.

This diagnostic context is used to understand the failed request. It is not configured to include a custom city label, reminder message, calendar-event description, or shared screenshot.

For a search recognized as a country, the diagnostic path contains a country code instead of the original search text. The App sets one request-path value at a time. It does not place your saved-city list or a history of searches in this custom key. A successful direct request or a successful relay fallback does not itself trigger this Crashlytics error recording.

## 5. Firebase Analytics

Google Analytics for Firebase is enabled in production versions of the App and processes information about App use. Depending on the platform and available settings, this may include:

- an App Instance ID, Firebase Installation ID, advertising identifier, vendor identifier, App Set ID, or similar identifier;
- device model, operating-system and App versions, language, country or approximate location derived from technical signals, and mobile-network information;
- App launches, sessions, engagement, screen views, feature interactions, and other automatically collected events;
- ad requests, impressions, clicks, exposure, and related events when Analytics and the Google Mobile Ads SDK are integrated;
- automatically collected in-app purchase or subscription events.

Analytics may record general categories of App activity, including screen views, feature interactions, advertising activity, and purchase-related events. Weather-related events may include a general result or error code.

We do not intentionally configure custom Analytics parameters to send city-search text, the selected city's name or coordinates, a custom city label, reminder text, calendar-event content, or shared-image content. The separate Crashlytics diagnostic-path practice described in Section 4 may include search text or selected-city coordinates when a network error occurs.

Analytics is separate from AdMob's advertising-consent process. Changing advertising choices does not necessarily disable Firebase Analytics. We rely on legitimate interests in understanding App performance and improving features where this basis is permitted. Where applicable law requires consent for Analytics identifiers or device storage, Analytics processing must be based on valid consent or otherwise restricted before it begins.

User-level and event-level Analytics data is configured for a **14-month retention period**, with user-level retention reset when there is new activity. This setting does not necessarily control aggregated reports or information retained by Google for security, fraud prevention, legal compliance, or other purposes described in Google's policies.

The Firebase/Analytics property may be linked to eligible Google services, such as Google Play or AdMob. Where a link is enabled, eligible analytics, attribution, advertising, audience, and purchase data may be exchanged according to the configured Google account settings and Google's terms.

For more information, see [Privacy and Security in Firebase](https://firebase.google.com/support/privacy), [Google Analytics data collection](https://support.google.com/firebase/answer/6318039), and [Google's Privacy Policy](https://policies.google.com/privacy).

## 6. Firebase Crashlytics

Firebase Crashlytics is enabled in release builds and is used to identify, diagnose, and correct crashes and stability problems. Crashlytics may process:

- crash reports, stack traces, and diagnostic logs;
- App state and execution context associated with an error;
- App version, device model, operating-system version, CPU architecture, memory or disk information, and other technical configuration;
- Firebase Installation ID, Crashlytics Installation UUID, session identifiers, and timestamps;
- the diagnostic request paths described in Section 4.

## 7. Firebase Remote Config

Firebase Remote Config delivers configuration controlling feature availability and presentation. It may process a Firebase Installation ID and technical App or device information needed to deliver configuration values and prevent abuse. It is not used to upload saved-city lists, custom city labels, reminder messages, or calendar-event contents.

## 8. Advertising and privacy choices

In builds where advertising is enabled, the App may use **Google AdMob** and, where applicable, other third-party advertising providers, depending on the platform, region, and App version.

The App may display advertising in various formats, including banner, native, interstitial, app-open, and optional rewarded advertisements, depending on the platform, region, and App version.

In a build where AdMob is enabled, Google and its authorized advertising partners may automatically collect or receive:

- IP address and approximate location;
- advertising identifiers, App Set ID, and other device or account identifiers;
- App and device information;
- App launches, taps, ad requests, impressions, views, clicks, rewarded-ad completion, and other interactions;
- performance, diagnostic, security, and fraud-prevention information;
- consent and advertising-preference signals.

Other advertising providers may process similar categories of information under their own privacy policies, applicable consent choices, and configured settings.

The App uses Google's User Messaging Platform (UMP) to request the current consent status, display a Google-managed privacy message where required and configured, and determine whether ads may be requested. Where Google indicates that a privacy-options entry point is required, the App exposes the corresponding control so that choices can be reviewed.

Advertising behavior may vary by region:

- **EEA, United Kingdom, and Switzerland:** personalized advertising is requested only where the required consent has been obtained through the applicable Google message. If consent is not provided, non-personalized or limited ads may be requested where available.
- **Applicable U.S. states:** the Google message may provide choices concerning personalized or targeted advertising and processing that may be treated as a sale or sharing under state law.
- **Brazil:** a dedicated LGPD message may not be available in the App. Personalized advertising may be requested by default where permitted by law and the configured Google settings.
- **Other regions:** personalized advertising may be requested by default where permitted by law. Additional controls may be available through device or Google account settings.

On iOS, access to Apple's advertising identifier (IDFA) for tracking is subject to Apple's App Tracking Transparency requirements in a build where tracking is enabled. Consent obtained through UMP does not replace an App Tracking Transparency permission where that permission is required.

Even non-personalized or limited ads may use IP address, device/App information, contextual data, and limited identifiers for ad delivery, frequency capping, aggregate reporting, security, and fraud prevention.

We do not sell personal information for money. The use or disclosure of identifiers and activity data for personalized advertising may, however, be treated as a **sale**, **sharing**, or **targeted advertising** under some U.S. state privacy laws, even when no money changes hands. Where those laws apply, you may use the privacy choices made available for your region or contact us to exercise an applicable opt-out right.

For more information, see [How Google uses information from sites or apps that use its services](https://policies.google.com/technologies/partner-sites), [Google AdMob privacy information](https://support.google.com/admob/topic/9756841), and [Google's Privacy Policy](https://policies.google.com/privacy).

## 9. Purchases and subscriptions

Depending on the platform and App version, the App may offer one-time purchases, subscriptions, and other paid products through the applicable app store. Purchases are processed by the store through which you obtained the App, such as Google Play or the Apple App Store.

The App may receive limited purchase-related information, such as a product identifier, price and currency, purchase or subscription status, entitlement or expiration information, and a transaction or purchase identifier. This information is used to initiate, activate, manage, and restore paid access. Metamodern Dev does not receive your full payment-card or bank-account details through the App.

Firebase Analytics may process purchase-related information, such as the product identifier, price and currency, and purchase or subscription status. Purchase-related Analytics is not configured to include your saved cities, custom labels, reminders, or calendar content.

Google Play and Apple separately process order, payment, tax, account, refund, security, and fraud-prevention information under their own terms and privacy policies.

## 10. Calendar, reminders, and sharing

### Calendar

When you ask the App to create a calendar event, it prepares an event locally with a generic title, selected date and time, time-zone information, an end time, and a description containing the city, time-zone, or other time information shown in the sharing interface. The event is then handed to the operating system or calendar service you choose.

The Android build may request calendar permission for this user-initiated function. The iOS build provides an in-context calendar permission description. The App is not designed to upload your existing calendar contents to Metamodern Dev or Firebase Analytics, and the analyzed code does not intentionally read existing calendar events for product analytics.

If you choose Google Calendar or Microsoft Teams, the App opens the corresponding external application or link with the selected start and end times. The external provider processes the request and anything you add under its own privacy policy.

### Reminders

Reminder scheduling is performed through the device's local-notification system. The optional reminder message and timing information are stored locally as described in Section 3. The operating system may require notification or alarm permission and may restore related settings through platform backup or device transfer.

### Sharing

If you initiate sharing, the App may create text describing the selected city or time zone, or a screenshot of the World Clock screen, and pass it to the operating-system share interface. You choose the receiving application or person, which then processes the content under its own privacy terms.

A shared screenshot is written to a temporary file. Depending on the platform and App version, the App may delete the file after a successful share, or the file may remain in the App's temporary cache until it is overwritten, removed by the operating system, or removed when App storage is cleared. Metamodern Dev does not receive the screenshot through the sharing feature.

## 11. Support communications

If you contact us, we receive the information you choose to provide, such as your email address, message, attachments, and related technical metadata. We use it to respond, provide support, investigate problems, protect our rights, and comply with legal obligations.

Support correspondence is retained only for as long as reasonably necessary to resolve the request, maintain an appropriate support record, handle disputes, or meet legal requirements.

## 12. Legal bases

Where the GDPR, UK GDPR, or similar laws apply, relevant legal bases may include:

- **performance of a contract or steps requested by you**, for core App functions, weather requests, calendar creation, sharing, support, and purchase processing;
- **consent**, for personalized advertising and for Analytics or other processing where consent is legally required;
- **legitimate interests**, including App improvement, aggregate measurement, diagnostics, service security, abuse prevention, and technical operation, where those interests are not overridden by your rights and the basis is permitted;
- **compliance with legal obligations**, including valid legal requests and applicable financial, consumer-protection, or security requirements.

Where processing is based on consent, you may withdraw that consent for future processing. Withdrawal does not affect processing that was lawful before withdrawal.

## 13. How information is disclosed

Information may be disclosed to or processed by:

- **Google LLC and its affiliates**, including Firebase Analytics, Firebase Crashlytics, Firebase Remote Config, AdMob, UMP, Google Play, and related platform services;
- **other advertising providers and their authorized partners**, in builds where such providers are enabled;
- **Apple Inc. and its affiliates**, including the Apple App Store, StoreKit, iOS backup, widgets, notifications, calendar, and platform services;
- **OpenWeather Ltd**, to return weather for a selected city;
- **hosting and infrastructure providers**, to operate and protect Metamodern Dev city-search, widget-theme image, and relay endpoints;
- **calendar, sharing, communication, or recipient services you select**, when you initiate an action;
- **professional advisers, authorities, courts, or other parties**, where reasonably necessary to comply with law, protect rights and safety, investigate abuse, or establish and defend legal claims;
- **a successor or transaction participant**, in connection with a merger, acquisition, financing, reorganization, or sale of all or part of our business, subject to appropriate safeguards.

## 14. Retention

We apply the following periods or criteria:

- locally stored App information remains until you change or delete it, clear App storage, or uninstall the App, subject to platform-controlled backup or transfer;
- Metamodern Dev city-search, widget-theme image, and relay access/error logs are retained for no longer than 30 days, except for a specific security incident, abuse investigation, or legal obligation;
- Firebase Analytics user-level and event-level data is configured for 14 months, with user-level retention reset on new activity;
- Firebase Crashlytics data is generally retained for 90 days before deletion begins;
- advertising, consent, Remote Config, store, payment, security, and fraud-prevention data is retained according to the relevant provider's settings and policies;
- calendar events and externally shared content remain under the control of the destination service or recipient;
- a temporary sharing screenshot may be deleted after successful sharing or may remain temporarily as described in Section 10;
- support communications are retained according to the criteria in Section 11.

We may retain irreversibly aggregated or de-identified information where it can no longer reasonably be linked to an individual.

## 15. International processing

Metamodern Dev and its service providers may process information in countries other than the country where you live. Privacy laws and government-access rules may differ. Where required, the relevant parties use recognized contractual, organizational, or legal safeguards for international transfers.

## 16. Security

We use reasonable technical and organizational measures appropriate to the information, including data minimization, encrypted network transport where supported, limited log retention, and access controls for developer services. Locally stored information is also protected by your device and operating system.

No storage or transmission method can be guaranteed completely secure. You are responsible for protecting your device, platform account, calendar account, and any application through which you share content.

## 17. Your privacy rights and choices

Depending on where you live and whether the relevant law applies, you may have rights to:

- obtain confirmation of processing and access personal information;
- correct inaccurate or incomplete information;
- request deletion, anonymization, blocking, or restriction;
- receive portable information where applicable;
- object to certain processing or withdraw consent;
- opt out of sale, sharing, targeted advertising, or certain profiling;
- limit certain uses of sensitive personal information;
- receive information about the parties with whom information is disclosed;
- appeal a refusal of a privacy request where applicable;
- receive equal service and not be discriminated against for exercising a privacy right;
- lodge a complaint with a competent supervisory or regulatory authority in your jurisdiction.

Residents of Brazil may also exercise applicable LGPD rights, including confirmation, access, correction, anonymization, blocking or deletion of unnecessary or unlawfully processed information, portability where regulated, information about sharing and consent, withdrawal of consent, and review of certain solely automated decisions.

Most saved-city, reminder, calendar, widget, and preference information is stored only on your device, so we normally cannot remotely identify, access, correct, export, or delete it. You can manage it in the App, clear App storage, or uninstall the App. Information held by Google, Apple, OpenWeather, a calendar provider, or a sharing recipient may also be subject to that party's controls and policies.

To submit a request concerning information controlled by Metamodern Dev, email [metamodern.dev@gmail.com](mailto:metamodern.dev@gmail.com). We may request information reasonably necessary to verify and process the request. If we deny a request, you may reply to appeal where applicable.

## 18. Children

The App is intended for users aged **18 and older** and is not directed to children. We do not knowingly seek to collect personal information from children through the App. If you believe a child has provided personal information to us, contact us so that we can review and, where appropriate, delete it.

## 19. Third-party services and links

The App may open app-store pages, calendar or meeting applications, websites, or other third-party services. A third party operates under its own terms and privacy policy. This Privacy Policy does not govern information that the third party receives directly from you or through its service.

## 20. Changes to this Privacy Policy

We may update this Privacy Policy to reflect changes in the App, service providers, legal requirements, or our practices. We will publish the revised policy and update the date at the top. Where required by law, we will provide additional notice or obtain consent before materially different processing begins.

## 21. Contact

For privacy questions or requests worldwide, contact:

**Metamodern Dev, LLC**\
[metamodern.dev@gmail.com](mailto:metamodern.dev@gmail.com)
