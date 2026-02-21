import * as amplitude from '@amplitude/analytics-browser';

const AMPLITUDE_API_KEY = '9aad92f438457b91c1dafcbdfa46729';

let initialized = false;

export const initAmplitude = () => {
  if (!initialized) {
    amplitude.init(AMPLITUDE_API_KEY, undefined, {
      defaultTracking: {
        pageViews: true,
        sessions: true,
        formInteractions: false,
        fileDownloads: false,
      },
    });
    initialized = true;
    console.log('Amplitude initialized');
  }
};

export const trackEvent = (eventName, properties = {}) => {
  if (!initialized) {
    console.warn('Amplitude not initialized');
    return;
  }
  amplitude.track(eventName, properties);
};

// Landing page specific events
export const events = {
  PAGE_VIEW: 'Landing Page Viewed',
  LANGUAGE_CHANGED: 'Language Changed',
  EMAIL_SUBMITTED: 'Waitlist Email Submitted',
  EMAIL_FAILED: 'Waitlist Email Failed',
  CTA_CLICKED: 'CTA Button Clicked',
  FEATURE_CARD_HOVERED: 'Feature Card Hovered',
};
