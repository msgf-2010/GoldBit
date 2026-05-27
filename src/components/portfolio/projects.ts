// Case-study data for the portfolio. Each project drives both the index card
// (/portfolio) and its detail page (/portfolio/[slug]). Sections are optional —
// the detail template renders only what a project provides.

export type Shot = {
  src: string;
  alt: string;
  caption?: string;
};

export type Item = {
  title: string;
  desc: string;
};

export type Project = {
  slug: string;
  /** Short title for the index card. */
  cardTitle: string;
  /** One-line description for the index card. */
  cardTagline: string;
  /** Full title for the detail hero. */
  title: string;
  /** Summary shown in the detail hero. */
  summary: string;
  tags: string[];
  meta: { label: string; value: string }[];
  hero: Shot;
  highlights?: { stat: string; label: string }[];
  overview: {
    heading: string;
    body: string;
    bullets?: string[];
  };
  /** "What we built" capability grid. */
  features?: Item[];
  /** "Challenges we solved" — rendered as numbered cards. */
  challenges?: Item[];
  /** "How we delivered" — rendered as numbered steps. */
  process?: Item[];
  gallery?: Shot[];
  /** "Results that speak for themselves" — rendered as a checklist. */
  results?: string[];
  closing?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "hrms-platform",
    cardTitle: "Comprehensive HRMS Platform",
    cardTagline:
      "An HR platform automating the full employee lifecycle — recruitment, onboarding, attendance, payroll, and more across 12+ modules.",
    title:
      "Building a Comprehensive HRMS Platform to Automate Every Layer of HR Operations",
    summary:
      "Built and continuously enhanced a comprehensive HRMS platform covering the full employee lifecycle — from recruitment and onboarding through attendance, payroll, and resignation — with 12+ modules and a 5.0 client rating.",
    tags: ["Human Resources", "HRMS Platform", "MERN Stack"],
    meta: [
      { label: "Industry", value: "Human Resources" },
      { label: "Type", value: "HRMS Platform" },
      { label: "Engagement", value: "Custom Build · 2 Years" },
      { label: "Stack", value: "MERN" },
    ],
    hero: {
      src: "/portfolio/hrms-platform-1.png",
      alt: "HRMS employee profile and attendance dashboard with monthly working hours",
      caption:
        "Employee self-service profile — attendance, working hours, and leave balance in one view.",
    },
    highlights: [
      { stat: "12+", label: "Modules live in production" },
      { stat: "5.0", label: "Client satisfaction rating" },
      { stat: "2 yrs", label: "Continuous development" },
      { stat: "Zero", label: "Third-party attendance tools" },
    ],
    overview: {
      heading: "About the Project",
      body: "An internal workforce management platform built to eliminate manual HR processes across attendance tracking, leave management, hiring, asset management, payroll, and team communications. It serves multiple roles simultaneously: HR and admin teams get a full operational dashboard with real-time notifications and automated workflows, while employees get a self-service portal for every day-to-day request. GoldBit Solutions built and has continuously enhanced the platform over two years, contributing across frontend, backend, and infrastructure.",
      bullets: [
        "Full recruitment pipeline from JD creation to candidate joining",
        "Clock in and clock out system replacing all third-party attendance tools",
        "Role-based dashboards for Admin, HR, Employees, and Sales",
        "Automated offer letters, salary slips, and HR document generation",
      ],
    },
    challenges: [
      {
        title: "Fragmented, Manual HR Processes",
        desc: "Attendance, leave requests, hiring workflows, and asset tracking were being managed across disconnected tools and manual processes. HR teams spent significant time on coordination that could be automated, and employees had no single place to manage their own requests.",
      },
      {
        title: "No Structured Hiring Pipeline",
        desc: "The hiring process had no systematic flow. There was no way to track a candidate from JD creation through interview rounds, offer letter generation, and joining — meaning steps were missed and the process depended on manual follow-up at every stage.",
      },
      {
        title: "Complex Data Relationships Across Modules",
        desc: "Modules like asset management and hiring involved deeply interconnected data: asset categories, types, attributes, and statuses all needed independent CRUD operations while staying consistent across the system.",
      },
      {
        title: "Real-Time Collaboration and Communication",
        desc: "The sales team needed a live lead pipeline with threaded communication per lead, similar to how Slack handles conversations. Building a recursive thread-style chat system within a lead dashboard was a non-trivial UI and data architecture challenge.",
      },
    ],
    process: [
      {
        title: "Recruitment and Hiring Module",
        desc: "Built the complete hiring pipeline from job description creation and publishing through interview slot selection, round management, candidate tracking, automated reminder emails via cron jobs, and offer letter generation. The entire flow is systematic: no stage can be skipped.",
      },
      {
        title: "Attendance and Clock In / Clock Out System",
        desc: "Implemented a web-based clock in and clock out system, eliminating the need for any third-party attendance tool. Built a comprehensive attendance dashboard showing total working days, leave count, absent days, paid leave count, and WFH days per employee.",
      },
      {
        title: "Leave, WFH, and Early Leave Management",
        desc: "Built end-to-end leave management covering all leave types, WFH requests, early leave requests, and leave adjustments. Employees manage all requests from their own portal, and HR receives real-time notifications for every action.",
      },
      {
        title: "Role-Based Dashboards",
        desc: "Designed and built separate dashboards for Admin, HR, Employee, and Sales roles. Each dashboard surfaces only what is relevant to that role: employees see attendance summaries and leave balances, while admins see pending approvals and team-wide metrics.",
      },
      {
        title: "Lead Dashboard with Threaded Chat",
        desc: "Built a Kanban-style lead dashboard for the sales team with live pipeline visibility. Implemented a thread-style chat system on individual lead pages using a recursive component architecture, replicating the communication pattern of tools like Slack.",
      },
      {
        title: "Document and Letter Generation",
        desc: "Implemented automated generation of offer letters, appointment letters, increment letters, and salary slips using Handlebars-based templates. Documents are generated dynamically and emailed automatically at the right stage of each workflow.",
      },
    ],
    gallery: [
      {
        src: "/portfolio/hrms-platform-2.png",
        alt: "HRMS onboarding dashboard with joining details, document collection, and admin checklist",
        caption:
          "Onboarding dashboard — joining timeline, document collection, asset allocation, and admin checklist.",
      },
    ],
    results: [
      "6 developers delivering across the full MERN stack over 2 years",
      "5.0 client rating reflecting consistent, high-quality delivery",
      "12+ modules live: hiring, attendance, leave, assets, leads, blogs, payroll, policies, notifications, password manager, letters, and settings",
      "Zero third-party attendance tools needed after clock in / clock out implementation",
      "Fully automated hiring pipeline from JD to offer letter with no manual steps",
      "Role-based access across Admin, HR, Employee, and Sales with dedicated dashboards per role",
    ],
  },
  {
    slug: "operations-platform",
    cardTitle: "Unified Operations Platform",
    cardTagline:
      "A single system bringing inventory, purchasing, logistics, fulfillment, and financial reporting together for a distribution & logistics business.",
    title: "A Unified Operations Platform for Distribution & Logistics",
    summary:
      "A custom-built operations platform developed for a large distribution and logistics business to centralize inventory, warehouse operations, purchasing, shipment coordination, customer order processing, and financial reporting into a single connected system.",
    tags: ["Logistics & Distribution", "Operations Platform", "Web Application"],
    meta: [
      { label: "Industry", value: "Distribution & Logistics" },
      { label: "Type", value: "Operations Platform" },
      { label: "Engagement", value: "Custom Build · Ongoing" },
      { label: "Platform", value: "Web Application" },
    ],
    hero: {
      src: "/portfolio/operations-platform-1.png",
      alt: "Operations platform order status dashboard showing shipments and accounting data",
      caption:
        "Order status dashboard — shipments, warehouses, quantities, and accounting reconciled side by side.",
    },
    highlights: [
      { stat: "7", label: "Integrated modules in one system" },
      { stat: "Real-time", label: "Dashboards & analytics" },
      { stat: "Multi-dept", label: "Unified across teams" },
      { stat: "End-to-end", label: "Purchase to fulfillment" },
    ],
    overview: {
      heading: "About the Project",
      body: "The business was running operations across spreadsheets, disconnected tools, and manual handoffs between departments. We built a platform that brings inventory, purchasing, logistics, fulfillment, and financial reporting into one connected system. Instead of forcing the team into off-the-shelf software, every module was designed around their actual day-to-day processes, with real-time dashboards giving each department the visibility it needs.",
      bullets: [
        "Real-time operational visibility through custom dashboards",
        "Vendor purchasing and end-to-end order tracking",
        "Logistics and shipment coordination with freight documents",
        "Financial and operational reporting tied to live data",
      ],
    },
    features: [
      {
        title: "Inventory & Warehouse Management",
        desc: "Live stock levels, warehouse locations, and movement tracking across multiple facilities.",
      },
      {
        title: "Vendor Purchasing & Order Tracking",
        desc: "Purchase orders, vendor offers, and confirmations managed from a single workflow.",
      },
      {
        title: "Logistics & Shipment Coordination",
        desc: "Pickup, in-transit, and delivery tracking with freight documents and communication logs.",
      },
      {
        title: "Customer & Fulfillment Workflows",
        desc: "Sales orders, proformas, and allocation charts that move orders from request to delivery.",
      },
      {
        title: "Financial & Operational Reporting",
        desc: "Receivables, payables, invoices, and deposit status tied directly to operational data.",
      },
      {
        title: "Internal Request & Task Management",
        desc: "Customer requests, offer feedback, and onboarding handled inside the same platform.",
      },
      {
        title: "Real-Time Dashboards & Analytics",
        desc: "Custom status tiles surface what needs attention across every department at a glance.",
      },
    ],
    gallery: [
      {
        src: "/portfolio/operations-platform-2.png",
        alt: "Company dashboard listing active customers and vendors with account managers",
        caption:
          "Company dashboard — managing customers, vendors, and account ownership in one view.",
      },
      {
        src: "/portfolio/operations-platform-3.png",
        alt: "Purchase order tracking view with shipment timeline and communications",
        caption:
          "Order status — live shipment timelines, freight documents, and communication history per PO.",
      },
    ],
    closing:
      "Unlike off-the-shelf software, the system is continuously developed around the company's evolving operational needs — improving efficiency, scalability, and process control across multiple departments.",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
