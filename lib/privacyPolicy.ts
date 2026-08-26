export type PrivacyPolicyBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type PrivacyPolicySection = {
  heading: string;
  blocks: PrivacyPolicyBlock[];
};

export const PRIVACY_POLICY_TITLE = "Privacy Policy";
export const PRIVACY_POLICY_BRAND = "Footivo";
export const PRIVACY_POLICY_OPERATOR = "Operated by MyGrandStand Pte. Ltd.";
export const PRIVACY_POLICY_LAST_UPDATED = "25 August 2026";
export const PRIVACY_POLICY_CONTACT_EMAIL = "privacy@mygrandstand.cc";

export const PRIVACY_POLICY_SECTIONS: PrivacyPolicySection[] = [
  {
    heading: "Our Approach",
    blocks: [
      {
        type: "paragraph",
        text: "Footivo is a football information and interactive entertainment service operated by MyGrandStand Pte. Ltd., a company incorporated in Singapore (“MyGrandStand”, “we”, “us” or “our”).",
      },
      {
        type: "paragraph",
        text: "This Privacy Policy explains how information is collected, used and protected when you use the Footivo mobile application, website and related services (collectively, the “Services”).",
      },
      {
        type: "paragraph",
        text: "We aim to collect and process only the information reasonably necessary to operate, improve, secure and support the Services.",
      },
      { type: "paragraph", text: "We do not sell your personal information." },
    ],
  },
  {
    heading: "Information We Process",
    blocks: [
      {
        type: "paragraph",
        text: "Footivo does not currently require you to create a user account or provide your name, email address or phone number to use the core Services.",
      },
      {
        type: "paragraph",
        text: "When you use the Services, certain technical information may be processed automatically as part of normal operation. This may include:",
      },
      {
        type: "list",
        items: [
          "IP address;",
          "browser or app version;",
          "device type and operating system;",
          "requested pages, features or resources;",
          "date and time of requests;",
          "approximate location derived from technical information where necessary for service operation;",
          "diagnostic, performance, crash and error information; and",
          "similar technical information generated when you interact with the Services.",
        ],
      },
      {
        type: "paragraph",
        text: "We use this information primarily to provide the Services, maintain security, diagnose technical problems, monitor performance and improve reliability.",
      },
    ],
  },
  {
    heading: "Local Preferences",
    blocks: [
      {
        type: "paragraph",
        text: "Footivo may store preferences locally on your device or browser to personalise your experience.",
      },
      {
        type: "paragraph",
        text: "These may include selected competitions or teams, interface preferences, notification preferences and other application settings.",
      },
      {
        type: "paragraph",
        text: "Depending on the platform and feature, some limited preference information may also be processed by our systems where necessary to provide the requested functionality.",
      },
    ],
  },
  {
    heading: "Game Rooms and Interactive Features",
    blocks: [
      {
        type: "paragraph",
        text: "Footivo may provide Game Rooms, quizzes, predictions and other interactive football features.",
      },
      {
        type: "paragraph",
        text: "If you participate in a Game Room, you may choose a screen name that can be visible to other participants in that room.",
      },
      {
        type: "paragraph",
        text: "Screen names are intended to support gameplay and interaction and are not intended to require or reveal your real identity.",
      },
      {
        type: "paragraph",
        text: "Information generated through interactive features, such as game participation, predictions, scores or leaderboard results, may be processed for the purpose of operating those features.",
      },
      { type: "paragraph", text: "Please avoid using personal or sensitive information in a screen name." },
    ],
  },
  {
    heading: "Match Notifications and Push Notifications",
    blocks: [
      {
        type: "paragraph",
        text: "If you choose to follow a match or enable another notification feature, Footivo may store a browser or device push subscription or token together with the information necessary to deliver the notification you requested.",
      },
      {
        type: "paragraph",
        text: "Push notification information is used to provide requested notifications and related service functionality. It is not used to send third-party advertising.",
      },
      {
        type: "paragraph",
        text: "You can disable notifications at any time through Footivo, where the relevant setting is available, or through your browser or device settings.",
      },
    ],
  },
  {
    heading: "AI-Generated Content",
    blocks: [
      {
        type: "paragraph",
        text: "Certain Footivo features may use artificial intelligence to help generate or process football-related content, including summaries, Match Pulse updates, match previews, news summaries, quiz content, insights and similar material.",
      },
      {
        type: "paragraph",
        text: "These systems are used to provide and improve football-related features. They are not intended to create personal profiles about individual Footivo users.",
      },
      {
        type: "paragraph",
        text: "AI-generated content may contain errors or inaccuracies and should be treated as informational content rather than authoritative advice.",
      },
    ],
  },
  {
    heading: "News, Videos and External Content",
    blocks: [
      {
        type: "paragraph",
        text: "Footivo may display football information, news headlines, summaries, videos, links and other material obtained from or relating to independent third-party sources.",
      },
      {
        type: "paragraph",
        text: "When you choose to open an external article, video, website or other third-party service, you may leave Footivo or interact directly with that third party.",
      },
      {
        type: "paragraph",
        text: "The third party may then process information in accordance with its own privacy policy, terms and technologies. MyGrandStand does not control the privacy practices of independent third-party websites or services.",
      },
    ],
  },
  {
    heading: "Third-Party Service Providers",
    blocks: [
      {
        type: "paragraph",
        text: "MyGrandStand uses independent service providers to help operate Footivo. These may include providers of:",
      },
      {
        type: "list",
        items: [
          "sports data and football information;",
          "news and content discovery;",
          "video and media services;",
          "artificial intelligence and content-processing services;",
          "hosting, cloud infrastructure and content delivery;",
          "database and storage services;",
          "push notifications;",
          "application distribution;",
          "analytics, diagnostics and security; and",
          "payment or subscription processing, where applicable.",
        ],
      },
      {
        type: "paragraph",
        text: "These providers may process limited information necessary to perform their services and operate under their own privacy policies and contractual obligations.",
      },
      {
        type: "paragraph",
        text: "We do not authorise service providers to use information provided by us for unrelated purposes except where independently permitted or required by law.",
      },
    ],
  },
  {
    heading: "Subscription Payments",
    blocks: [
      {
        type: "paragraph",
        text: "If Footivo offers paid subscriptions or other purchases through an application marketplace such as the Apple App Store or Google Play, payment transactions are processed by the relevant marketplace or its payment partners.",
      },
      { type: "paragraph", text: "MyGrandStand does not receive or store your complete payment card details." },
      {
        type: "paragraph",
        text: "The marketplace may process payment, account and transaction information according to its own privacy policy and terms.",
      },
      {
        type: "paragraph",
        text: "We may receive limited transaction information necessary to confirm a purchase, subscription status, entitlement, renewal, cancellation or refund and to provide the purchased service.",
      },
    ],
  },
  {
    heading: "How We Use Information",
    blocks: [
      {
        type: "paragraph",
        text: "Where applicable, information processed through Footivo may be used to:",
      },
      {
        type: "list",
        items: [
          "provide and operate the Services;",
          "remember your preferences;",
          "deliver requested notifications;",
          "operate Game Rooms, quizzes, predictions and other interactive features;",
          "provide football information and personalised feature selections;",
          "maintain application security and prevent misuse;",
          "diagnose errors and technical problems;",
          "monitor and improve performance and reliability;",
          "understand how features are functioning;",
          "manage subscriptions or entitlements where applicable;",
          "respond to support or privacy enquiries; and",
          "comply with applicable legal obligations.",
        ],
      },
      {
        type: "paragraph",
        text: "We do not sell personal information or use personal information collected through Footivo to create advertising profiles for sale to third parties.",
      },
    ],
  },
  {
    heading: "Data Retention",
    blocks: [
      {
        type: "paragraph",
        text: "We retain information only for as long as reasonably necessary for the purposes for which it was collected, including operation of the Services, security, troubleshooting, legal compliance and dispute resolution.",
      },
      { type: "paragraph", text: "Different categories of information may be retained for different periods." },
      {
        type: "paragraph",
        text: "Information stored only on your device may normally be removed by changing the relevant settings, clearing application or browser data, or uninstalling the application.",
      },
      {
        type: "paragraph",
        text: "Technical logs, diagnostics and similar operational records may be retained for a limited period before being deleted or aggregated, subject to legitimate operational, security and legal requirements.",
      },
    ],
  },
  {
    heading: "International Processing",
    blocks: [
      {
        type: "paragraph",
        text: "Footivo is operated by MyGrandStand Pte. Ltd. in Singapore and uses technology and service providers that may operate in other countries.",
      },
      {
        type: "paragraph",
        text: "As a result, information may be processed or stored in Singapore or other jurisdictions in which our service providers operate.",
      },
      {
        type: "paragraph",
        text: "Where required, we take reasonable measures to ensure that information transferred internationally receives appropriate protection consistent with applicable data-protection requirements.",
      },
    ],
  },
  {
    heading: "Children",
    blocks: [
      {
        type: "paragraph",
        text: "Footivo is a general football information and entertainment service and is not designed to require children to provide personal information.",
      },
      {
        type: "paragraph",
        text: "We do not knowingly seek to collect personal information from children beyond information that may be processed automatically as part of normal technical operation of the Services.",
      },
      {
        type: "paragraph",
        text: "If you believe that a child has provided personal information to us inappropriately, please contact us so that we can review the matter and take appropriate action.",
      },
    ],
  },
  {
    heading: "Your Choices and Privacy Rights",
    blocks: [
      {
        type: "paragraph",
        text: "Depending on your location and applicable law, you may have rights concerning personal information relating to you, including rights to request access, correction or deletion of certain information.",
      },
      {
        type: "paragraph",
        text: "Because Footivo currently operates without requiring a personal user account for its core Services, we may hold little or no information that can reasonably be linked to you as an identifiable individual.",
      },
      { type: "paragraph", text: "You may also:" },
      {
        type: "list",
        items: [
          "disable push notifications through your browser or device settings;",
          "change available Footivo preferences;",
          "clear locally stored application or browser information; and",
          "discontinue using the Services at any time.",
        ],
      },
      {
        type: "paragraph",
        text: "If you wish to make a privacy-related request, you may contact us using the details below. We may need sufficient information to understand and verify the request before acting on it.",
      },
    ],
  },
  {
    heading: "Security",
    blocks: [
      {
        type: "paragraph",
        text: "MyGrandStand takes reasonable technical and organisational measures designed to protect information processed through the Services against unauthorised access, loss, misuse or alteration.",
      },
      {
        type: "paragraph",
        text: "However, no method of electronic transmission, processing or storage can be guaranteed to be completely secure.",
      },
    ],
  },
  {
    heading: "Changes to This Privacy Policy",
    blocks: [
      {
        type: "paragraph",
        text: "We may update this Privacy Policy from time to time as Footivo evolves, new features are introduced, our service providers or practices change, or legal and regulatory requirements develop.",
      },
      {
        type: "paragraph",
        text: "The latest version will be published through the Footivo website and/or application with the effective date shown at the top of the policy.",
      },
      {
        type: "paragraph",
        text: "Material changes may also be communicated through the Services where appropriate.",
      },
    ],
  },
  {
    heading: "Contact Us",
    blocks: [
      { type: "paragraph", text: "Footivo is operated by:" },
      { type: "paragraph", text: "MyGrandStand Pte. Ltd.\nSingapore" },
      { type: "paragraph", text: "For privacy questions, requests or concerns, please contact:" },
    ],
  },
];

