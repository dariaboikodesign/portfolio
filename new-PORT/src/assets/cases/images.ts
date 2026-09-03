import wood from './wood-texture.png'
import laptopOutdoor from './c1-laptop-outdoor.png'
import screen1 from './c1-screen-1.png'
import screen2 from './c1-screen-2.png'
import screen3 from './c1-screen-3.png'
import screen4 from './c1-screen-4.png'
import slide05 from './c1-slide05.png'
import outcomeMock from './c1-outcome-mock.png'
import homepage from './c1-homepage.png'
import decisions from './c1-decisions.png'
import devices from './c2-devices.png'
import world3d from './c2-3d.png'
import laptop from './c2-laptop.png'
import phone from './c2-phone.png'
import metrics from './c2-metrics.png'
import phones from './c3-phones.png'
import field from './c3-field.png'
import careerHero from './c4-hero.png'
import careerProto from './c4-proto.png'
import careerDecisions from './c4-decisions.png'
import careerOutcome from './c4-outcome.png'

export const caseImages: Record<string, string> = {
  wood,
  'c1-laptop-outdoor': laptopOutdoor,
  'c1-screen-1': screen1,
  'c1-screen-2': screen2,
  'c1-screen-3': screen3,
  'c1-screen-4': screen4,
  'c1-slide05': slide05,
  'c1-outcome': outcomeMock,
  'c1-homepage': homepage,
  'c1-decisions': decisions,
  'c1-gallery-1': screen2,
  'c1-gallery-2': screen3,
  'c1-gallery-3': screen4,
  'c2-devices': devices,
  'c2-3d-1': world3d,
  'c2-3d-2': laptop,
  'c2-metrics': metrics,
  'c2-journey-1': phone,
  'c2-journey-2': laptop,
  'c2-journey-3': world3d,
  'c3-phones': phones,
  'c3-field': field,
  'c4-hero': careerHero,
  'c4-proto': careerProto,
  'c4-interviews-1': screen2,
  'c4-interviews-2': screen3,
  'c4-decisions': careerDecisions,
  'c4-outcome-1': careerOutcome,
  'c4-outcome-2': phones,
  'c4-outcome-3': field,
}

export function caseImage(key: string): string {
  return caseImages[key] ?? wood
}
