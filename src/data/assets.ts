import hero from '../assets/placeholders/hero-automotive.png';
import heroMobile from '../assets/placeholders/hero-automotive-mobile.png';
import autumnRoad from '../assets/placeholders/autumn-road.png';
import technologyCar from '../assets/placeholders/technology-car.png';
import factoryRobots from '../assets/placeholders/factory-robots.png';
import categoryAutomobile from '../assets/categories/automobile-corolla.png';
import categorySuv from '../assets/categories/suv-land-cruiser.png';
import categoryPerformance from '../assets/categories/performance-porsche-911.png';
import categoryElectric from '../assets/categories/electric-tesla-model-3.png';
import categorySports from '../assets/categories/sports-corvette-c8.png';

export const assetMode = import.meta.env.REFERENCE_ASSETS_MODE === 'licensed' ? 'licensed' : 'placeholder';

// Licensed mode intentionally resolves to the placeholders until authorized files are supplied.
export const homeAssets = {
  hero,
  heroMobile,
  autumnRoad,
  technologyCar,
  factoryRobots,
  categoryAutomobile,
  categorySuv,
  categoryPerformance,
  categoryElectric,
  categorySports,
} as const;
