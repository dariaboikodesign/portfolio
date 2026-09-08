import wood from './wood-texture.png'
import laptopOutdoor from './c1-laptop-outdoor.png'
import eduP1Hero from './edu-p1-hero.jpg'
import eduP1Ui3 from './edu-p1-ui-3.png'
import eduP1Sunset from './edu-p1-sunset.png'
import eduP1Classroom from './edu-p1-classroom.png'
import eduP1Laptop from './edu-p1-laptop.png'
import eduP2Ui1 from './edu-p2-ui-1.png'
import eduP2Ui2 from './edu-p2-ui-2.png'
import eduP2Ui3 from './edu-p2-ui-3.png'
import eduP2Homepage from './edu-p2-homepage.png'
import eduP2Dec1 from './edu-p2-dec-1.png'
import eduP2Dec2 from './edu-p2-dec-2.png'
import eduP2Dec3 from './edu-p2-dec-3.png'
import screen1 from './c1-screen-1.png'
import screen2 from './c1-screen-2.png'
import screen3 from './c1-screen-3.png'
import screen4 from './c1-screen-4.png'
import slide05 from './c1-slide05.png'
import outcomeMock from './c1-outcome-mock.png'
import homepage from './c1-homepage.png'
import decisions from './c1-decisions.png'
import eduSunset from './edu-sunset.png'
import eduClassroom from './edu-classroom.png'
import eduSunsetCluster from './edu-sunset-cluster.png'
import devices from './c2-devices.png'
import world3d from './c2-3d.png'
import laptop from './c2-laptop.png'
import phone from './c2-phone.png'
import metrics from './c2-metrics.png'
import gdMap from './gd-map.png'
import gdPhone from './gd-phone.png'
import gdGlow1 from './gd-glow-1.svg'
import gdGlow2 from './gd-glow-2.svg'
import gd2Map from './gd2-map.png'
import gd2Phone from './gd2-phone.png'
import gd2Glow1 from './gd2-glow-1.svg'
import gd2Glow2 from './gd2-glow-2.svg'
import gd2Boards from './gd2-boards.png'
import gd2Devices from './gd2-devices.png'
import gd2Gallery1 from './gd2-gallery-1.png'
import gd2Funnels from './gd2-funnels.png'
import gd2Tournament from './gd2-tournament.png'
import gdMiro from './gd-miro.png'
import gdFlow from './gd-flow.png'
import gdMapUi from './gd-map-ui.png'
import gdDevices from './gd-devices.png'
import gdLanding from './gd-landing.png'
import gdPhonesUi from './gd-phones-ui.png'
import gdDashboard from './gd-dashboard.png'
import gdFunnels from './gd-funnels.png'
import gdTournament from './gd-tournament.png'
import gdCardShop from './gd-card-shop.png'
import gdCardNews from './gd-card-news.png'
import gdCardHome from './gd-card-home.png'
import phones from './c3-phones.png'
import field from './c3-field.png'
import careerHero from './c4-hero.png'
import careerProto from './c4-proto.png'
import careerDecisions from './c4-decisions.png'
import careerOutcome from './c4-outcome.png'

export const caseImages: Record<string, string> = {
  wood,
  'c1-laptop-outdoor': laptopOutdoor,
  'edu-hero': eduP1Hero,
  'edu-p1-ui-3': eduP1Ui3,
  'edu-p1-sunset': eduP1Sunset,
  'edu-p1-classroom': eduP1Classroom,
  'edu-p1-laptop': eduP1Laptop,
  'edu-p2-ui-1': eduP2Ui1,
  'edu-p2-ui-2': eduP2Ui2,
  'edu-p2-ui-3': eduP2Ui3,
  'edu-p2-homepage': eduP2Homepage,
  'edu-p2-dec-1': eduP2Dec1,
  'edu-p2-dec-2': eduP2Dec2,
  'edu-p2-dec-3': eduP2Dec3,
  'c1-screen-1': screen1,
  'c1-screen-2': screen2,
  'c1-screen-3': screen3,
  'c1-screen-4': screen4,
  'c1-slide05': slide05,
  'c1-outcome': outcomeMock,
  'c1-homepage': homepage,
  'c1-decisions': decisions,
  'edu-sunset': eduSunset,
  'edu-classroom': eduClassroom,
  'edu-sunset-cluster': eduSunsetCluster,
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
  'gd-map': gdMap,
  'gd-phone': gdPhone,
  'gd-glow-1': gdGlow1,
  'gd-glow-2': gdGlow2,
  'gd2-map': gd2Map,
  'gd2-phone': gd2Phone,
  'gd2-glow-1': gd2Glow1,
  'gd2-glow-2': gd2Glow2,
  'gd2-boards': gd2Boards,
  'gd2-devices': gd2Devices,
  'gd2-gallery-1': gd2Gallery1,
  'gd2-funnels': gd2Funnels,
  'gd2-tournament': gd2Tournament,
  'gd-miro': gdMiro,
  'gd-flow': gdFlow,
  'gd-map-ui': gdMapUi,
  'gd-devices': gdDevices,
  'gd-landing': gdLanding,
  'gd-phones-ui': gdPhonesUi,
  'gd-dashboard': gdDashboard,
  'gd-funnels': gdFunnels,
  'gd-tournament': gdTournament,
  'gd-card-shop': gdCardShop,
  'gd-card-news': gdCardNews,
  'gd-card-home': gdCardHome,
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
