import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      name: "Name",
      description: "Description",
      quantity: "Quantity",
      features: "Features",
      cpu: "CPU",
      memory: "Memory",
      baseClock: "Base Clock",
      boostClock: "Boost Clock",
      cache: "Cache",
      cores: "Cores",
      threads: "Threads",
      TDP: "TDP",
      socket: "Socket",
      memorySupport: "Memory Support",
      maxMemory: "Max Memory",
      channels: "Channels",
    },
  },
  fr: {
    translation: {
      name: "Nom",
      description: "Description",
      quantity: "Quantité",
      features: "Caractéristiques",
      cpu: "CPU",
      memory: "Mémoire",
      baseClock: "Fréquence de base",
      boostClock: "Fréquence boost",
      cache: "Cache",
      cores: "Cœurs",
      threads: "Threads",
      TDP: "TDP",
      socket: "Socket",
      memorySupport: "Support de mémoire",
      maxMemory: "Mémoire max",
      channels: "Canaux",
    },
  },
  es: {
    translation: {
      name: "Nombre",
      description: "Descripción",
      quantity: "Cantidad",
      features: "Características",
      cpu: "CPU",
      memory: "Memoria",
      baseClock: "Reloj base",
      boostClock: "Reloj turbo",
      cache: "Caché",
      cores: "Núcleos",
      threads: "Hilos",
      TDP: "TDP",
      socket: "Socket",
      memorySupport: "Soporte de memoria",
      maxMemory: "Memoria máxima",
      channels: "Canales",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
