import { GITHUB_URL } from './socialLinks';

// Project content. To add a project-specific repository, set `repoUrl`.
// While `repoUrl` is null the button honestly links to the GitHub *profile*
// and is labelled accordingly — it never pretends to be a project repo.

export const featuredProject = {
  id: 'ai-voice-sales',
  title: 'AI VOICE SALES CALLING SYSTEM',
  tagline: 'AUTONOMOUS OUTBOUND AGENT • LIVE LEAD DISPATCH • WHATSAPP RELAY',
  demoUrl: 'https://lnkd.in/p/e3QwEwNF',
  videoUrl: '/videos/Elevatebox-Demo.mp4',
  repoUrl: 'https://github.com/parineetkakde11/elevatebox-agent',
  image: {
    src: '/images/elevatebox-thumbnail.png',
    alt: 'AI voice calling dashboard with live outbound calls, an audio waveform, Hot/Warm/Cold lead tags and WhatsApp dispatch notifications',
  },
  feedLabel: 'FEED: REC_VOICE_CALL_01.MP4',
  timecode: 'TIMECODE: 02:45 / 03:12',
  mission:
    'An end-to-end autonomous voice outreach platform designed to bridge conversation and sales execution. The system executes telephone outreach, captures customer intents dynamically, performs structured qualification via LLM APIs, and triggers live transactional workflows while the caller is still on the line.',
  tiers: [
    { id: 'hot', label: '• HOT', detail: 'Instant Rep Ping + Brochure' },
    { id: 'warm', label: '• WARM', detail: 'Calendar Invite Triggered' },
    { id: 'cold', label: '• COLD', detail: 'Nurture Vault Logging' },
  ],
  pipeline: [
    { step: 1, tone: 'red', title: 'OUTBOUND CALL ENGINE:', text: 'Natural dialogue agent initiates targeted outreach and captures voice input.' },
    { step: 2, tone: 'gold', title: 'INTENT & QUALIFICATION ENGINE:', text: 'LLM decodes budget, timeline, and tags caller into Hot/Warm/Cold tiers.' },
    { step: 3, tone: 'cyan', title: 'REAL-TIME WEBHOOK RELAYS:', text: 'Fast FastAPI endpoints consume live events exposed via ngrok tunnels.' },
    { step: 4, tone: 'green', title: 'WHATSAPP AUTOMATION (ULTRAMSG):', text: 'Personalized PDF collateral & call recap pushed mid-conversation.' },
  ],
  stack: ['Python', 'FastAPI', 'PocketBase', 'UltraMsg API', 'Webhooks • ngrok', 'OpenAPI Spec'],
};

export const projects = [
  {
    id: 'transitops',
    title: 'TransitOps',
    subtitle: 'FLEET LOGISTICS PLATFORM',
    badge: { label: 'STAGE 02', tone: 'red' },
    icon: 'truck',
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHyIMpVtoFaQ7ByBL8SQip0LOcoP7I4lSCWvFPz4jQx3zu9jeM0AP7zGLtCm-3rkTaYj7rxdn3NlVsjGtuTiXdxmM7iJYLGCi0J6BVAoixeEPoHoMF77mBcBp0n-nNE1I9VbGwI4CaHtk4Qkep7rF3SVYwR-nGDcB_2sa7TYE1FLj7HWI74SlnPFUS0c1MSx3pWHIl3OLc3OkgtvkmhlLaNomddap8K8YrDNj2pMfS',
      alt: 'TransitOps dashboard showing vehicle telemetry, driver logs, maintenance reminders and trip dispatch schedules',
    },
    imageTag: 'AI FLEET COPILOT',
    description:
      'Unified logistics engine managing vehicle lifecycle dispatch, driver compliance scoring, AI document extraction, and maintenance tracking.',
    tech: ['FastAPI', 'Next.js', 'PocketBase', 'Gemini 2.5'],
    repoUrl: 'https://github.com/parineetkakde11/odoo-hackathon-2026',
    footnote: '> 12 MODULES',
  },
  {
    id: 'qr-scanner',
    title: 'QR Scanner Mobile',
    subtitle: 'HARDWARE-ACCELERATED TOOL',
    badge: { label: 'ANDROID OS', tone: 'green' },
    icon: 'qr',
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3zt94S_JHJmjion4qrN2jej3_-l5HxNxfaFBbBLJG2HQaLAYOzkkh-IDspWk0B3f5wfoxkwh2g5PtpGIL-wsD02nxsgLRGs14Ncb68erYvLsS0KALr5GkxZ2T7AqUkpoxApkxfMvbwpind4kXlXVWKBTQDnsu0R2DLSMO18Juk_ZPXYuu7FhZLKlWUK5ckfJXtdThKYecScBFhcSGIy3EAlWNqrFWQpSAMCPbdtW7',
      alt: 'Android phone camera view detecting a QR code with a green bounding box and a data extraction panel',
    },
    imageTag: 'CAMERA2 API',
    description:
      'High-speed native Android utility built in Kotlin. Delivers sub-100ms barcode recognition, memory-lean frame buffers, and secure URL preview sandboxing.',
    tech: ['Kotlin', 'Android SDK', 'CameraX', 'ML Kit'],
    repoUrl: 'https://github.com/parineetkakde11/QRScanner',
    codeLabel: 'VIEW APK / CODE',
    footnote: '< 10MB PKG',
  },
  {
    id: 'rest-core',
    title: 'REST Microservice Core',
    subtitle: 'ASYNC API FOUNDATION',
    badge: { label: 'MICROSERVICE', tone: 'indigo' },
    icon: 'hub',
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdCit7DbmMxd4zqJ-1qMKFQsiqfKEoZPJvhhhcxqgDXYnT0bUcnAENVliJcV1DKXdS4GHolszB89krPieCMvu6m7S5RkyDdHyHJB43yD6OjnV4a0Ooh7N7W1q249AmOFPDAhu3EDP7J8G1PPLL1FuHU2QdB0xd-8FVmzkgBqzzhGi8r0Iievyx7PYx7vEs9QraqwdtiKT_vqW0Uh8njj7L41h2SnOXclhL8KgSGvoj',
      alt: 'Code terminal showing JSON payloads, OpenAPI documentation endpoints and database connection pools',
    },
    imageTag: 'UVICORN / ASYNC',
    description:
      'Production template for async REST microservices. Incorporates strict Pydantic model contracts, JWT validation, automated OpenAPI docs, and Docker orchestration.',
    tech: ['Python', 'FastAPI', 'Pydantic v2', 'Docker'],
    repoUrl: 'https://github.com/parineetkakde11/eve-healthcare-backend',
    footnote: 'READY RUNTIME',
  },
];


/**
 * Resolves the code button for a project. Without a project-specific repo the
 * button is labelled as the GitHub *profile* so it never misrepresents the link.
 */
export const codeLink = (project, repoLabel = 'INSPECT CODE') =>
  project.repoUrl
    ? { href: project.repoUrl, label: project.codeLabel ?? repoLabel, isRepo: true }
    : { href: GITHUB_URL, label: 'GITHUB PROFILE', isRepo: false };

export const allReposLinked = [featuredProject, ...projects].every((p) => Boolean(p.repoUrl));
