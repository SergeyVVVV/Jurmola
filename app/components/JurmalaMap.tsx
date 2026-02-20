'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type Language = 'ru' | 'en' | 'lv';

interface Sight {
  lat: number;
  lng: number;
  name: Record<Language, string>;
  category: Record<Language, string>;
}

const sights: Sight[] = [
  {
    lat: 56.9685, lng: 23.7960,
    name: { ru: 'Пляж Майори', en: 'Majori Beach', lv: 'Majoru pludmale' },
    category: { ru: 'Пляж', en: 'Beach', lv: 'Pludmale' },
  },
  {
    lat: 56.9720, lng: 23.7560,
    name: { ru: 'Пляж Булдури', en: 'Bulduri Beach', lv: 'Bulduru pludmale' },
    category: { ru: 'Пляж', en: 'Beach', lv: 'Pludmale' },
  },
  {
    lat: 56.9698, lng: 23.8110,
    name: { ru: 'Пляж Дзинтари', en: 'Dzintari Beach', lv: 'Dzintaru pludmale' },
    category: { ru: 'Пляж', en: 'Beach', lv: 'Pludmale' },
  },
  {
    lat: 56.9200, lng: 23.4900,
    name: { ru: 'Кемерский национальный парк', en: 'Kemeri National Park', lv: 'Ķemeru nacionālais parks' },
    category: { ru: 'Природа', en: 'Nature', lv: 'Daba' },
  },
  {
    lat: 56.9790, lng: 23.8650,
    name: { ru: 'Природный парк Рагакапа', en: 'Ragakapa Nature Park', lv: 'Ragakapas dabas parks' },
    category: { ru: 'Природа', en: 'Nature', lv: 'Daba' },
  },
  {
    lat: 56.9660, lng: 23.8150,
    name: { ru: 'Дзинтарский лесопарк', en: 'Dzintari Forest Park', lv: 'Dzintaru mežaparks' },
    category: { ru: 'Природа', en: 'Nature', lv: 'Daba' },
  },
  {
    lat: 56.9686, lng: 23.8090,
    name: { ru: 'Концертный зал «Дзинтари»', en: 'Dzintari Concert Hall', lv: 'Dzintaru koncertzāle' },
    category: { ru: 'Культура', en: 'Culture', lv: 'Kultūra' },
  },
  {
    lat: 56.9728, lng: 23.7380,
    name: { ru: 'Музей под открытым небом', en: 'Jurmala Open Air Museum', lv: 'Jūrmalas brīvdabas muzejs' },
    category: { ru: 'Музей', en: 'Museum', lv: 'Muzejs' },
  },
  {
    lat: 56.9655, lng: 23.7700,
    name: { ru: 'Дом Аспазии', en: 'Aspazija House', lv: 'Aspazijas māja' },
    category: { ru: 'Музей', en: 'Museum', lv: 'Muzejs' },
  },
  {
    lat: 56.9678, lng: 23.7975,
    name: { ru: 'Городской музей Юрмалы', en: 'Jurmala City Museum', lv: 'Jūrmalas pilsētas muzejs' },
    category: { ru: 'Музей', en: 'Museum', lv: 'Muzejs' },
  },
  {
    lat: 56.9695, lng: 23.7950,
    name: { ru: 'Улица Йомас', en: 'Jomas Street', lv: 'Jomas iela' },
    category: { ru: 'Достопримечательность', en: 'Landmark', lv: 'Apskates vieta' },
  },
  {
    lat: 56.9692, lng: 23.7940,
    name: { ru: 'Глобус Юрмалы', en: 'Jurmala Globe', lv: 'Jūrmalas globuss' },
    category: { ru: 'Достопримечательность', en: 'Landmark', lv: 'Apskates vieta' },
  },
  {
    lat: 56.9280, lng: 23.4850,
    name: { ru: 'Кемерская водонапорная башня', en: 'Kemeri Water Tower', lv: 'Ķemeru ūdenstornis' },
    category: { ru: 'Достопримечательность', en: 'Landmark', lv: 'Apskates vieta' },
  },
  {
    lat: 56.9780, lng: 23.8700,
    name: { ru: 'Аквапарк Ливу', en: 'Livu Aquapark', lv: 'Līvu akvaparks' },
    category: { ru: 'Развлечения', en: 'Entertainment', lv: 'Izklaide' },
  },
];

function createMarkerIcon(category: string): L.DivIcon {
  const colors: Record<string, string> = {
    'Пляж': '#2563eb', 'Beach': '#2563eb', 'Pludmale': '#2563eb',
    'Природа': '#16a34a', 'Nature': '#16a34a', 'Daba': '#16a34a',
    'Культура': '#9333ea', 'Culture': '#9333ea', 'Kultūra': '#9333ea',
    'Музей': '#ca8a04', 'Museum': '#ca8a04', 'Muzejs': '#ca8a04',
    'Достопримечательность': '#dc2626', 'Landmark': '#dc2626', 'Apskates vieta': '#dc2626',
    'Развлечения': '#0891b2', 'Entertainment': '#0891b2', 'Izklaide': '#0891b2',
  };
  const color = colors[category] || '#6b7280';
  return L.divIcon({
    className: '',
    html: `<div style="width:28px;height:28px;background:${color};border:3px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.35);"></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -16],
  });
}

export default function JurmalaMap({ language }: { language: Language }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [56.960, 23.68],
      zoom: 12,
      scrollWheelZoom: false,
    });
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    sights.forEach((sight) => {
      const marker = L.marker([sight.lat, sight.lng], {
        icon: createMarkerIcon(sight.category[language]),
      }).addTo(map);
      marker.bindPopup(
        `<div style="font-family:sans-serif;min-width:140px;">` +
        `<strong style="font-size:14px;">${sight.name[language]}</strong>` +
        `<br/><span style="color:#6b7280;font-size:12px;">${sight.category[language]}</span>` +
        `</div>`
      );
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [language]);

  const legendItems: Record<Language, Array<{ label: string; color: string }>> = {
    ru: [
      { label: 'Пляжи', color: '#2563eb' },
      { label: 'Природа', color: '#16a34a' },
      { label: 'Культура', color: '#9333ea' },
      { label: 'Музеи', color: '#ca8a04' },
      { label: 'Достопримечательности', color: '#dc2626' },
      { label: 'Развлечения', color: '#0891b2' },
    ],
    en: [
      { label: 'Beaches', color: '#2563eb' },
      { label: 'Nature', color: '#16a34a' },
      { label: 'Culture', color: '#9333ea' },
      { label: 'Museums', color: '#ca8a04' },
      { label: 'Landmarks', color: '#dc2626' },
      { label: 'Entertainment', color: '#0891b2' },
    ],
    lv: [
      { label: 'Pludmales', color: '#2563eb' },
      { label: 'Daba', color: '#16a34a' },
      { label: 'Kultūra', color: '#9333ea' },
      { label: 'Muzeji', color: '#ca8a04' },
      { label: 'Apskates vietas', color: '#dc2626' },
      { label: 'Izklaide', color: '#0891b2' },
    ],
  };

  return (
    <div>
      <div ref={mapRef} style={{ height: 420, width: '100%', borderRadius: 8, border: '1px solid #e5e7eb' }} />
      <div className="flex flex-wrap gap-3 mt-3">
        {legendItems[language].map((item) => (
          <div key={item.label} className="flex items-center gap-1.5 text-xs text-gray-600">
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: item.color, display: 'inline-block' }} />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
