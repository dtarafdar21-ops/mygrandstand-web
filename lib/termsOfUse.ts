export type TermsBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type TermsSection = { heading: string; blocks: TermsBlock[] };

export const TERMS_TITLE = "Terms of Use";
export const TERMS_BRAND = "Footivo";
export const TERMS_OPERATOR = "Operated by MyGrandStand Pte. Ltd.";
export const TERMS_LAST_UPDATED = "25 August 2026";
export const TERMS_LEGAL_EMAIL = "legal@mygrandstand.cc";
export const TERMS_PRIVACY_EMAIL = "privacy@mygrandstand.cc";

export const TERMS_SECTIONS: TermsSection[] = [
  {
    heading: "Using Footivo",
    blocks: [
      { type: "paragraph", text: "Welcome to Footivo." },
      { type: "paragraph", text: "Footivo is a football information and interactive entertainment service operated by MyGrandStand Pte. Ltd., a company incorporated in Singapore (“MyGrandStand”, “we”, “us” or “our”)." },
      { type: "paragraph", text: "Footivo is designed to help football supporters follow, understand and enjoy the game through timely information, thoughtful insights and interactive features." },
      { type: "paragraph", text: "These Terms of Use (“Terms”) govern your access to and use of the Footivo mobile application, website and related services." },
      { type: "paragraph", text: "By accessing or using the Services, you agree to be bound by these Terms. If you do not agree to these Terms, you should not access or use the Services." },
      { type: "paragraph", text: "These Terms apply to all visitors and users of the Services." },
    ],
  },
  {
    heading: "Definitions",
    blocks: [
      { type: "paragraph", text: "For the purposes of these Terms:" },
      { type: "paragraph", text: "“Footivo” means the Footivo mobile application, website and other official digital services operated by MyGrandStand Pte. Ltd." },
      { type: "paragraph", text: "“Services” means the products, features, functionality and content made available through Footivo from time to time, including, without limitation:" },
      { type: "list", items: ["Match Centre and match information;", "competition and team pages;", "Match Details;", "Match Pulse;", "match previews and reviews;", "head-to-head information;", "lineups;", "team and player information;", "fixtures, scores, standings and match statistics;", "football news and summaries;", "videos and other media;", "predictions and interactive match features;", "Game Rooms;", "quizzes and other games;", "leaderboards;", "optional push notifications;", "AI-generated or AI-assisted features; and", "any future products, features, enhancements or services introduced through Footivo."] },
      { type: "paragraph", text: "“Content” means text, graphics, software, designs, user-interface elements, statistics, fixtures, scores, images, videos, editorial material, AI-generated or AI-assisted material and other information made available through the Services." },
      { type: "paragraph", text: "“Third-Party Providers” means independent organisations that provide football data, statistics, fixtures, standings, news, videos, images, artificial intelligence services, hosting, notifications, payment processing or other content or services used in connection with Footivo." },
      { type: "paragraph", text: "“Match Pulse” means Footivo's representation of changing match dynamics derived from available football data and analytical processing. Match Pulse is provided solely as an informational and entertainment feature and must not be interpreted as a prediction, guarantee or recommendation." },
    ],
  },
  {
    heading: "Acceptable Use",
    blocks: [
      { type: "paragraph", text: "The Services must be used lawfully and respectfully." },
      { type: "paragraph", text: "You must not:" },
      { type: "list", items: ["misuse, interfere with or disrupt the Services;", "attempt unauthorised access to any part of the Services or supporting infrastructure;", "circumvent or attempt to circumvent security, access controls or technical restrictions;", "scrape, harvest, systematically extract or copy data or Content in a manner that places unreasonable load on the Services or is inconsistent with these Terms;", "use automated systems to access the Services in a manner that adversely affects their operation;", "reverse engineer, decompile or otherwise attempt to extract source code except where permitted by applicable law;", "upload, transmit or distribute unlawful, abusive, defamatory, threatening, discriminatory, misleading, obscene or harmful content;", "impersonate another person or organisation;", "interfere with another user's enjoyment of the Services;", "infringe the intellectual property, privacy or other rights of another person; or", "use the Services in any manner that violates applicable laws or regulations."] },
      { type: "paragraph", text: "We may take reasonable steps to protect Footivo and its users where we believe these Terms have been violated." },
    ],
  },
  {
    heading: "Game Rooms and Community Standards",
    blocks: [
      { type: "paragraph", text: "Game Rooms and any community or interactive features provided through Footivo are intended to provide an enjoyable and respectful experience for football fans." },
      { type: "paragraph", text: "Where users are permitted to submit or display content, screen names or other material, they must not submit material that is:" },
      { type: "list", items: ["unlawful;", "abusive;", "defamatory;", "threatening;", "discriminatory;", "misleading;", "obscene;", "intended to harass or intimidate others;", "designed to impersonate another person; or", "infringing the intellectual property, privacy or other rights of any person."] },
      { type: "paragraph", text: "MyGrandStand reserves the right, where reasonably necessary, to remove content, restrict participation, suspend features or limit access where we believe these standards or these Terms have been violated." },
    ],
  },
  {
    heading: "Football Information",
    blocks: [
      { type: "paragraph", text: "The Services are provided for football information and entertainment." },
      { type: "paragraph", text: "Fixtures, kick-off times, scores, statistics, standings, lineups, player information, news, videos, Match Pulse, AI-generated content, predictions and other information may originate from or depend upon Third-Party Providers." },
      { type: "paragraph", text: "Although we aim to provide useful and timely information, football data and related Content may occasionally be delayed, unavailable, incomplete, outdated or inaccurate." },
      { type: "paragraph", text: "Football matches are dynamic events. Information may change without notice and may occasionally differ from official competition records." },
      { type: "paragraph", text: "Where information is important or time-sensitive, you should verify it through the relevant competition organiser, club, governing body or official broadcaster." },
    ],
  },
  {
    heading: "AI-Generated and AI-Assisted Content",
    blocks: [
      { type: "paragraph", text: "Certain Footivo features use artificial intelligence to help generate, summarise, classify, translate or process football-related information." },
      { type: "paragraph", text: "This may include Match Pulse updates, match previews, news summaries, quiz content, insights and other football-related material." },
      { type: "paragraph", text: "AI-generated or AI-assisted content is intended to complement available football information and may contain inaccuracies, omissions, outdated information or other errors." },
      { type: "paragraph", text: "Such content should be regarded as supplementary information and should not be relied upon as an authoritative source or as professional, legal, financial, betting or investment advice." },
    ],
  },
  {
    heading: "Predictions, Odds and No Betting or Gambling Advice",
    blocks: [
      { type: "paragraph", text: "Footivo is an information and entertainment service." },
      { type: "paragraph", text: "Any odds, probabilities, predictions, Match Pulse content, game predictions, AI-generated insights, statistics or other similar information made available through the Services is provided solely for informational and entertainment purposes." },
      { type: "paragraph", text: "Nothing within Footivo constitutes betting, gambling, financial or investment advice, and no Content should be interpreted as encouraging, recommending or discouraging any wager or financial decision." },
      { type: "paragraph", text: "Footivo does not operate a betting or gambling service through these features." },
      { type: "paragraph", text: "If you choose to participate independently in betting or gambling activities, you do so entirely at your own responsibility and must comply with the laws applicable in your jurisdiction." },
    ],
  },
  {
    heading: "Interactive Games, Predictions and Leaderboards",
    blocks: [
      { type: "paragraph", text: "Footivo may offer games, quizzes, match predictions, leaderboards and other interactive features." },
      { type: "paragraph", text: "Rules, scoring methods, participation periods and eligibility requirements may vary between features and may be displayed within the relevant feature." },
      { type: "paragraph", text: "Unless expressly stated otherwise, these features are provided for entertainment only and have no monetary value." },
      { type: "paragraph", text: "Points, rankings, scores or other virtual achievements do not constitute money, property or any entitlement to payment or compensation." },
      { type: "paragraph", text: "We may correct scoring errors, invalidate results affected by technical problems or misuse, and modify or discontinue interactive features where reasonably necessary." },
    ],
  },
  {
    heading: "News, Videos and External Content",
    blocks: [
      { type: "paragraph", text: "Footivo may display headlines, summaries, links, videos and other Content originating from or relating to independent publishers, football organisations, clubs, media organisations and other third parties." },
      { type: "paragraph", text: "Ownership of third-party Content remains with the relevant rights holder." },
      { type: "paragraph", text: "When Footivo provides a link to an external article, website, video or service, the external destination is operated independently from Footivo." },
      { type: "paragraph", text: "MyGrandStand does not control and is not responsible for the content, availability, security, accuracy, privacy practices or terms of independent third-party websites and services." },
      { type: "paragraph", text: "The inclusion of a link, headline, summary, video or reference does not by itself constitute endorsement of the third party or its views." },
    ],
  },
  {
    heading: "Service Availability",
    blocks: [
      { type: "paragraph", text: "MyGrandStand aims to provide a reliable and enjoyable Footivo service. However, uninterrupted availability cannot be guaranteed." },
      { type: "paragraph", text: "The Services, live data, notifications and third-party Content may occasionally be delayed, interrupted, unavailable or temporarily withdrawn because of:" },
      { type: "list", items: ["scheduled or emergency maintenance;", "software upgrades;", "technical failures;", "failures or restrictions affecting Third-Party Providers;", "hosting, database or cloud-service disruptions;", "internet or telecommunications issues;", "content-delivery network disruptions;", "notification-service failures;", "changes to third-party services or data availability; or", "circumstances beyond our reasonable control."] },
      { type: "paragraph", text: "We may also temporarily suspend or modify features where reasonably necessary for security, maintenance, legal or operational reasons." },
    ],
  },
  {
    heading: "Third-Party Services",
    blocks: [
      { type: "paragraph", text: "Certain Footivo features depend upon independent Third-Party Providers." },
      { type: "paragraph", text: "These may include providers of football data, news and content discovery, videos and media, artificial intelligence, cloud hosting, databases, content delivery, notifications, application distribution and payment processing." },
      { type: "paragraph", text: "We do not control the operation of independent third-party services and cannot guarantee their continued availability, accuracy or performance." },
      { type: "paragraph", text: "To the extent permitted by applicable law, MyGrandStand is not responsible for interruptions, delays, errors or inaccuracies caused by independent third-party services." },
    ],
  },
  {
    heading: "Optional Push Notifications",
    blocks: [
      { type: "paragraph", text: "Push notifications are optional." },
      { type: "paragraph", text: "Delivery depends upon factors that may include mobile operating systems, browsers, device manufacturers, network connectivity and third-party notification services." },
      { type: "paragraph", text: "MyGrandStand cannot guarantee that notifications will always be delivered, or that they will be delivered at a particular time." },
      { type: "paragraph", text: "You are responsible for enabling and managing notification permissions on your own device." },
      { type: "paragraph", text: "You may disable notifications at any time through your device, browser or applicable Footivo settings." },
    ],
  },
  {
    heading: "Subscriptions and Purchases",
    blocks: [
      { type: "paragraph", text: "Footivo may offer paid subscriptions, purchases or other paid features." },
      { type: "paragraph", text: "Where a subscription or purchase is made through an application marketplace such as the Apple App Store or Google Play, payment, billing, renewal, cancellation and refund arrangements are also subject to the applicable marketplace's terms and policies." },
      { type: "paragraph", text: "Prices and applicable subscription periods will be displayed before purchase." },
      { type: "paragraph", text: "Where a subscription automatically renews, renewal will occur in accordance with the terms presented by the relevant application marketplace or payment provider unless the subscription is cancelled in accordance with its procedures." },
      { type: "paragraph", text: "MyGrandStand does not control the billing systems of independent application marketplaces." },
      { type: "paragraph", text: "Except where required by applicable law or the applicable marketplace's rules, payments processed by a third-party marketplace are subject to that marketplace's refund and cancellation policies." },
      { type: "paragraph", text: "Deleting Footivo from your device does not necessarily cancel an active subscription. Subscriptions should be managed through the marketplace or account through which they were purchased." },
    ],
  },
  {
    heading: "Intellectual Property",
    blocks: [
      { type: "paragraph", text: "Unless otherwise stated, the Footivo software, design, user interface, branding, original graphics, original written material and other original materials created for Footivo are owned by or licensed to MyGrandStand Pte. Ltd. and are protected by applicable intellectual property laws." },
      { type: "paragraph", text: "No part of the Services may be copied, reproduced, distributed, modified, republished, systematically extracted or commercially exploited without prior written permission except where permitted by applicable law." },
      { type: "paragraph", text: "These Terms do not transfer ownership of any Footivo or MyGrandStand intellectual property to users." },
    ],
  },
  {
    heading: "Team and Competition Names, Crests, Logos and Other Third-Party Rights",
    blocks: [
      { type: "paragraph", text: "Team names, player names, competition names, crests, logos, trademarks, photographs, videos and other third-party intellectual property displayed or referenced through Footivo remain the property of their respective owners." },
      { type: "paragraph", text: "Such material is used or displayed for identification, informational, editorial or descriptive purposes in connection with football-related Content, where applicable." },
      { type: "paragraph", text: "Unless expressly stated, nothing within Footivo should be interpreted as implying sponsorship, endorsement, partnership or affiliation between Footivo, MyGrandStand Pte. Ltd. and any club, player, league, competition, governing body, broadcaster or other rights holder." },
    ],
  },
  {
    heading: "Disclaimer of Warranties",
    blocks: [
      { type: "paragraph", text: "To the fullest extent permitted by applicable law, the Services are provided on an “as is” and “as available” basis." },
      { type: "paragraph", text: "MyGrandStand makes no representation or warranty that:" },
      { type: "list", items: ["the Services will always be available;", "Content or information will always be complete, accurate or current;", "errors will not occur;", "the Services will operate without interruption;", "notifications will always be delivered;", "third-party services will remain available; or", "the Services will be free from technical problems."] },
      { type: "paragraph", text: "You use the Services at your own risk, subject always to any rights that cannot lawfully be excluded." },
    ],
  },
  {
    heading: "Limitation of Liability",
    blocks: [
      { type: "paragraph", text: "To the fullest extent permitted by applicable law, MyGrandStand Pte. Ltd. shall not be liable for indirect, incidental, consequential, exemplary or special damages arising from or relating to:" },
      { type: "list", items: ["use of or inability to use the Services;", "reliance upon information provided through the Services;", "inaccuracies, omissions or delays in football information or third-party data;", "interruptions to the Services;", "failures or delays of notifications;", "third-party websites, content or services;", "loss of data;", "loss of profits;", "betting or gambling decisions;", "financial decisions; or", "other consequential loss arising from use of the Services."] },
      { type: "paragraph", text: "Nothing in these Terms excludes or limits any liability or consumer right that cannot lawfully be excluded or limited under applicable law." },
    ],
  },
  {
    heading: "Indemnity",
    blocks: [
      { type: "paragraph", text: "To the extent permitted by applicable law, you agree to indemnify and hold harmless MyGrandStand Pte. Ltd., its officers, employees, contractors and service providers from claims, liabilities, damages, losses, costs or reasonable legal expenses arising from:" },
      { type: "list", items: ["your unlawful or improper use of the Services;", "your material breach of these Terms;", "your violation of applicable law;", "content you submit through the Services; or", "your infringement of another person's rights."] },
      { type: "paragraph", text: "This provision does not apply to the extent that a claim results from MyGrandStand's own breach of these Terms, negligence or other responsibility that cannot lawfully be excluded." },
    ],
  },
  {
    heading: "Changes to the Services",
    blocks: [
      { type: "paragraph", text: "Footivo will continue to evolve." },
      { type: "paragraph", text: "Features, functionality, user interfaces, data sources and Services may be added, modified, replaced, suspended or discontinued from time to time." },
      { type: "paragraph", text: "Where appropriate, significant changes may be communicated through the Services." },
    ],
  },
  {
    heading: "Changes to These Terms",
    blocks: [
      { type: "paragraph", text: "We may update these Terms from time to time to reflect changes to Footivo, our business, applicable laws, service providers or operating practices." },
      { type: "paragraph", text: "The latest version will be published through the Footivo website and/or application with the effective date shown at the top." },
      { type: "paragraph", text: "Where appropriate, material changes may also be communicated through the Services." },
      { type: "paragraph", text: "Continued use of the Services after revised Terms become effective constitutes acceptance of those revised Terms to the extent permitted by applicable law." },
    ],
  },
  {
    heading: "Privacy",
    blocks: [
      { type: "paragraph", text: "Use of Footivo is also governed by the Footivo Privacy Policy, which explains how information is collected, used and protected in connection with the Services." },
      { type: "paragraph", text: "The Privacy Policy forms part of the terms governing your use of Footivo." },
    ],
  },
  {
    heading: "Governing Law",
    blocks: [
      { type: "paragraph", text: "These Terms shall be governed by and construed in accordance with the laws of the Republic of Singapore, without regard to its conflict-of-law principles." },
      { type: "paragraph", text: "Nothing in this section affects any mandatory rights you may have under applicable consumer-protection law." },
    ],
  },
  {
    heading: "Severability",
    blocks: [
      { type: "paragraph", text: "If any provision of these Terms is found to be invalid, illegal or unenforceable by a court or other authority of competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it enforceable or, where modification is not possible, severed from these Terms." },
      { type: "paragraph", text: "The remaining provisions will remain in full force and effect." },
    ],
  },
  {
    heading: "Entire Agreement",
    blocks: [
      { type: "paragraph", text: "These Terms, together with the Footivo Privacy Policy and any additional terms expressly applicable to a particular Footivo feature or purchase, constitute the agreement governing access to and use of the Services." },
      { type: "paragraph", text: "They supersede prior statements, representations or understandings concerning the Services to the extent permitted by applicable law." },
    ],
  },
  {
    heading: "Contact Us",
    blocks: [
      { type: "paragraph", text: "Footivo is operated by:\nMyGrandStand Pte. Ltd.\nSingapore" },
      { type: "paragraph", text: "For questions concerning these Terms, intellectual property, legal notices or other legal matters, please contact:\nEmail: legal@mygrandstand.cc" },
      { type: "paragraph", text: "For privacy-related enquiries or requests:\nEmail: privacy@mygrandstand.cc" },
    ],
  },
  {
    heading: "Thank You",
    blocks: [
      { type: "paragraph", text: "Thank you for using Footivo." },
      { type: "paragraph", text: "Footivo exists to help football fans enjoy the game through timely information, thoughtful insights and engaging features." },
      { type: "paragraph", text: "Every match, every improvement and every new feature is driven by our goal of making football more enjoyable and accessible for supporters around the world." },
      { type: "paragraph", text: "Thank you for being part of Footivo." },
    ],
  },
];

