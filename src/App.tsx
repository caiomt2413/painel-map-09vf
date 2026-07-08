import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  LineChart, Line, ReferenceLine, Cell
} from 'recharts';
import { 
  Activity, Clock, Award, Landmark, Filter, Info, Target, AlertCircle, BarChart2, Layers, Calendar, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, LayoutDashboard, LineChart as LineChartIcon, CheckCircle, FileText, TrendingDown, TrendingUp, Presentation, BookOpen, Users, Compass, Zap, Lightbulb, X
} from 'lucide-react';

const initialHistoricalData = {
  '2026-06': [
    { 
      id: '9', name: '9ª Vara Federal', color: '#1e3a8a',
      acervoTotal: 5657, acervo: 5139, acervoJef: 2475, acervoPi: 577, acervoOutros: 2087, evolucaoAcervo: -2.57,
      entradas: 644, saidas: 844, tempo: 993, arquivados: 353,
      sentTotal: 231, sentJef: 135, sentPi: 11, sentOutras: 31,
      sentTipoA: 69, sentTipoC: 32, sentEdcl: 3, sentExec: 54,
      meta1: 71.61, meta2_2011: 100.00, meta2_2022: 111.51, meta2_2023_jef: 100.00, meta3: 162.95, meta5: 103.83,
      cvDecisao: 15, cvSentenca: 11, cvTotal: 26,
      parados30: 572, parados60: 437, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 1009,
      tempoJulgamento: 589, tempoBaixa: 568, tempoPendenteLiquido: 391, tempoPendente: 511
    },
    { 
      id: '12', name: '12ª Vara Federal', color: '#94a3b8', 
      acervoTotal: 4193, acervo: 3188, acervoJef: 1455, acervoPi: 564, acervoOutros: 1169, evolucaoAcervo: 2.34,
      entradas: 819, saidas: 748, tempo: 1164, arquivados: 250,
      sentTotal: 352, sentJef: 213, sentPi: 50, sentOutras: 57,
      sentTipoA: 249, sentTipoC: 27, sentEdcl: 25, sentExec: 32,
      meta1: 80.10, meta2_2011: 99.86, meta2_2022: 112.71, meta2_2023_jef: 66.67, meta3: 135.51, meta5: 103.03,
      cvDecisao: 1, cvSentenca: 0, cvTotal: 1,
      parados30: 0, parados60: 0, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 0
    },
    { 
      id: '13', name: '13ª Vara Federal', color: '#cbd5e1',
      acervoTotal: 3552, acervo: 2954, acervoJef: 1387, acervoPi: 422, acervoOutros: 1145, evolucaoAcervo: -6.33,
      entradas: 740, saidas: 1044, tempo: 922, arquivados: 642,
      sentTotal: 265, sentJef: 172, sentPi: 23, sentOutras: 11,
      sentTipoA: 131, sentTipoC: 36, sentEdcl: 14, sentExec: 59,
      meta1: 98.91, meta2_2011: 100.00, meta2_2022: 116.90, meta2_2023_jef: 100.00, meta3: 146.58, meta5: 127.79,
      cvDecisao: 0, cvSentenca: 0, cvTotal: 0,
      parados30: 18, parados60: 0, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 18
    },
    { 
      id: '25', name: '25ª Vara Federal', color: '#64748b',
      acervoTotal: 3198, acervo: 2487, acervoJef: 1262, acervoPi: 392, acervoOutros: 833, evolucaoAcervo: -0.09,
      entradas: 667, saidas: 594, tempo: 724, arquivados: 212,
      sentTotal: 340, sentJef: 225, sentPi: 17, sentOutras: 28,
      sentTipoA: 176, sentTipoC: 37, sentEdcl: 18, sentExec: 70,
      meta1: 84.77, meta2_2011: 100.00, meta2_2022: 117.38, meta2_2023_jef: 100.00, meta3: 154.97, meta5: 100.00,
      cvDecisao: 2, cvSentenca: 0, cvTotal: 2,
      parados30: 34, parados60: 0, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 34
    },
    { 
      id: '31', name: '31ª Vara Federal', color: '#e2e8f0',
      acervoTotal: 4069, acervo: 3260, acervoJef: 1396, acervoPi: 481, acervoOutros: 1383, evolucaoAcervo: -1.57,
      entradas: 726, saidas: 865, tempo: 1255, arquivados: 511,
      sentTotal: 318, sentJef: 219, sentPi: 28, sentOutras: 39,
      sentTipoA: 160, sentTipoC: 29, sentEdcl: 40, sentExec: 32,
      meta1: 79.16, meta2_2011: 100.00, meta2_2022: 115.41, meta2_2023_jef: 87.50, meta3: 240.06, meta5: 100.00,
      cvDecisao: 0, cvSentenca: 0, cvTotal: 0,
      parados30: 10, parados60: 0, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 10
    }
  ],
  '2026-05': [
    { 
      id: '9', name: '9ª Vara Federal', color: '#1e3a8a',
      acervoTotal: 5806, acervo: 5367, acervoJef: 2457, acervoPi: 575, acervoOutros: 2335, evolucaoAcervo: 1.98,
      entradas: 673, saidas: 448, tempo: 1057, arquivados: 189,
      sentTotal: 347, sentJef: 227, sentPi: 32, sentOutras: 30,
      sentTipoA: 105, sentTipoC: 34, sentEdcl: 33, sentExec: 58,
      meta1: 73.96, meta2_2011: 100.00, meta2_2022: 111.12, meta2_2023_jef: 100.00, meta3: 160.31, meta5: 98.16,
      cvDecisao: 1, cvSentenca: 27, cvTotal: 28,
      parados30: 959, parados60: 31, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 990,
      tempoJulgamento: 598, tempoBaixa: 564, tempoPendenteLiquido: 411, tempoPendente: 541
    },
    { 
      id: '12', name: '12ª Vara Federal', color: '#94a3b8', 
      acervoTotal: 4097, acervo: 3110, acervoJef: 1397, acervoPi: 564, acervoOutros: 1149, evolucaoAcervo: -2.50,
      entradas: 792, saidas: 865, tempo: 1197, arquivados: 371,
      sentTotal: 287, sentJef: 165, sentPi: 24, sentOutras: 38,
      sentTipoA: 155, sentTipoC: 31, sentEdcl: 22, sentExec: 60,
      meta1: 80.16, meta2_2011: 99.86, meta2_2022: 111.85, meta2_2023_jef: 66.67, meta3: 138.05, meta5: 102.82,
      cvDecisao: 4, cvSentenca: 46, cvTotal: 50,
      parados30: 1, parados60: 0, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 1
    },
    { 
      id: '13', name: '13ª Vara Federal', color: '#cbd5e1',
      acervoTotal: 3792, acervo: 3206, acervoJef: 1345, acervoPi: 419, acervoOutros: 1442, evolucaoAcervo: 3.38,
      entradas: 712, saidas: 555, tempo: 1036, arquivados: 217,
      sentTotal: 404, sentJef: 270, sentPi: 27, sentOutras: 0,
      sentTipoA: 169, sentTipoC: 33, sentEdcl: 17, sentExec: 107,
      meta1: 109.69, meta2_2011: 100.00, meta2_2022: 116.60, meta2_2023_jef: 100.00, meta3: 146.18, meta5: 116.36,
      cvDecisao: 0, cvSentenca: 2, cvTotal: 2,
      parados30: 95, parados60: 1, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 96
    },
    { 
      id: '25', name: '25ª Vara Federal', color: '#64748b',
      acervoTotal: 3201, acervo: 2464, acervoJef: 1226, acervoPi: 379, acervoOutros: 859, evolucaoAcervo: 7.78,
      entradas: 692, saidas: 451, tempo: 753, arquivados: 148,
      sentTotal: 308, sentJef: 204, sentPi: 20, sentOutras: 51,
      sentTipoA: 169, sentTipoC: 35, sentEdcl: 36, sentExec: 33,
      meta1: 84.83, meta2_2011: 100.00, meta2_2022: 117.20, meta2_2023_jef: 100.00, meta3: 154.72, meta5: 100.00,
      cvDecisao: 0, cvSentenca: 0, cvTotal: 0,
      parados30: 20, parados60: 0, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 20
    },
    { 
      id: '31', name: '31ª Vara Federal', color: '#e2e8f0',
      acervoTotal: 4134, acervo: 3439, acervoJef: 1296, acervoPi: 489, acervoOutros: 1654, evolucaoAcervo: 0.36,
      entradas: 680, saidas: 495, tempo: 1433, arquivados: 156,
      sentTotal: 310, sentJef: 195, sentPi: 23, sentOutras: 41,
      sentTipoA: 157, sentTipoC: 36, sentEdcl: 25, sentExec: 51,
      meta1: 82.28, meta2_2011: 99.96, meta2_2022: 115.54, meta2_2023_jef: 87.50, meta3: 238.26, meta5: 100.00,
      cvDecisao: 0, cvSentenca: 0, cvTotal: 0,
      parados30: 2, parados60: 0, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 2
    }
  ],
  '2026-04': [
    { 
      id: '9', name: '9ª Vara Federal', color: '#1e3a8a',
      acervoTotal: 5693, acervo: 5232, acervoJef: 2344, acervoPi: 573, acervoOutros: 2315, evolucaoAcervo: 2.15,
      entradas: 579, saidas: 459, tempo: 1093, arquivados: 461,
      sentTotal: 405, sentJef: 152, sentPi: 16, sentOutras: 41,
      sentTipoA: 101, sentTipoC: 24, sentEdcl: 11, sentExec: 196,
      meta1: 77.76, meta2_2011: 99.93, meta2_2022: 110.15, meta2_2023_jef: 100.00, meta3: 163.91, meta5: 96.22,
      cvDecisao: 8, cvSentenca: 27, cvTotal: 35,
      parados30: 530, parados60: 191, parados90: 7, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 728,
      tempoJulgamento: 598, tempoBaixa: 564, tempoPendenteLiquido: 411, tempoPendente: 541
    },
    { 
      id: '12', name: '12ª Vara Federal', color: '#94a3b8', 
      acervoTotal: 4202, acervo: 3169, acervoJef: 1318, acervoPi: 564, acervoOutros: 1287, evolucaoAcervo: -2.66,
      entradas: 603, saidas: 651, tempo: 1291, arquivados: 1033,
      sentTotal: 506, sentJef: 125, sentPi: 21, sentOutras: 43,
      sentTipoA: 121, sentTipoC: 30, sentEdcl: 31, sentExec: 317,
      meta1: 79.54, meta2_2011: 99.86, meta2_2022: 111.64, meta2_2023_jef: 66.67, meta3: 135.26, meta5: 100.00,
      cvDecisao: 2, cvSentenca: 60, cvTotal: 62,
      parados30: 10, parados60: 1, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 11
    },
    { 
      id: '13', name: '13ª Vara Federal', color: '#cbd5e1',
      acervoTotal: 3668, acervo: 3020, acervoJef: 1229, acervoPi: 419, acervoOutros: 1372, evolucaoAcervo: 3.38,
      entradas: 599, saidas: 514, tempo: 1083, arquivados: 648,
      sentTotal: 522, sentJef: 117, sentPi: 19, sentOutras: 17,
      sentTipoA: 91, sentTipoC: 19, sentEdcl: 14, sentExec: 369,
      meta1: 121.06, meta2_2011: 100.00, meta2_2022: 117.19, meta2_2023_jef: 100.00, meta3: 139.38, meta5: 100.00,
      cvDecisao: 2, cvSentenca: 4, cvTotal: 6,
      parados30: 164, parados60: 1, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 165
    },
    { 
      id: '25', name: '25ª Vara Federal', color: '#64748b',
      acervoTotal: 2970, acervo: 2236, acervoJef: 1148, acervoPi: 379, acervoOutros: 709, evolucaoAcervo: -3.48,
      entradas: 553, saidas: 718, tempo: 796, arquivados: 734,
      sentTotal: 573, sentJef: 176, sentPi: 14, sentOutras: 68,
      sentTipoA: 164, sentTipoC: 37, sentEdcl: 25, sentExec: 315,
      meta1: 91.23, meta2_2011: 100.00, meta2_2022: 117.02, meta2_2023_jef: 100.00, meta3: 156.83, meta5: 100.00,
      cvDecisao: 1, cvSentenca: 0, cvTotal: 1,
      parados30: 88, parados60: 20, parados90: 3, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 111
    },
    { 
      id: '31', name: '31ª Vara Federal', color: '#e2e8f0',
      acervoTotal: 4119, acervo: 3365, acervoJef: 1206, acervoPi: 489, acervoOutros: 1670, evolucaoAcervo: 2.74,
      entradas: 585, saidas: 549, tempo: 1469, arquivados: 754,
      sentTotal: 526, sentJef: 141, sentPi: 21, sentOutras: 31,
      sentTipoA: 114, sentTipoC: 15, sentEdcl: 21, sentExec: 333,
      meta1: 84.92, meta2_2011: 99.91, meta2_2022: 115.60, meta2_2023_jef: 87.50, meta3: 230.77, meta5: 100.00,
      cvDecisao: 0, cvSentenca: 0, cvTotal: 0,
      parados30: 276, parados60: 1, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 277
    }
  ],
  '2026-03': [
    { 
      id: '9', name: '9ª Vara Federal', color: '#1e3a8a', 
      acervoTotal: 5573, acervo: 4985, acervoJef: 2265, acervoPi: 562, acervoOutros: 2158, evolucaoAcervo: 6.23, 
      entradas: 602, saidas: 362, tempo: 1102, arquivados: 588, 
      sentTotal: 248, sentJef: 155, sentPi: 15, sentOutras: 68, 
      sentTipoA: 137, sentTipoC: 8, sentEdcl: 25, sentExec: 10, 
      meta1: 81.56, meta2_2011: 99.85, meta2_2022: 109.24, meta2_2023_jef: 100.00, meta3: 172.60, meta5: 98.22, 
      cvDecisao: 38, cvSentenca: 24, cvTotal: 62, 
      parados30: 736, parados60: 432, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 1168,
      tempoJulgamento: 598, tempoBaixa: 564, tempoPendenteLiquido: 411, tempoPendente: 541 
    },
    { 
      id: '12', name: '12ª Vara Federal', color: '#94a3b8', 
      acervoTotal: 4317, acervo: 3031, acervoJef: 1330, acervoPi: 562, acervoOutros: 1139, evolucaoAcervo: 2.44, 
      entradas: 693, saidas: 649, tempo: 1324, arquivados: 1286, 
      sentTotal: 338, sentJef: 229, sentPi: 22, sentOutras: 57, 
      sentTipoA: 194, sentTipoC: 40, sentEdcl: 36, sentExec: 30, 
      meta1: 88.71, meta2_2011: 99.86, meta2_2022: 111.52, meta2_2023_jef: 66.67, meta3: 138.17, meta5: 100.00, 
      cvDecisao: 1, cvSentenca: 81, cvTotal: 82, 
      parados30: 13, parados60: 0, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 13 
    },
    { 
      id: '13', name: '13ª Vara Federal', color: '#cbd5e1', 
      acervoTotal: 3548, acervo: 2869, acervoJef: 1151, acervoPi: 412, acervoOutros: 1306, evolucaoAcervo: 1.55, 
      entradas: 723, saidas: 643, tempo: 1067, arquivados: 679, 
      sentTotal: 280, sentJef: 207, sentPi: 5, sentOutras: 31, 
      sentTipoA: 132, sentTipoC: 33, sentEdcl: 16, sentExec: 37, 
      meta1: 142.30, meta2_2011: 100.00, meta2_2022: 116.96, meta2_2023_jef: 100.00, meta3: 129.75, meta5: 100.00, 
      cvDecisao: 3, cvSentenca: 2, cvTotal: 5, 
      parados30: 101, parados60: 53, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 154 
    },
    { 
      id: '25', name: '25ª Vara Federal', color: '#64748b', 
      acervoTotal: 3077, acervo: 2126, acervoJef: 1046, acervoPi: 376, acervoOutros: 704, evolucaoAcervo: 3.08, 
      entradas: 652, saidas: 572, tempo: 924, arquivados: 951, 
      sentTotal: 354, sentJef: 225, sentPi: 17, sentOutras: 101, 
      sentTipoA: 234, sentTipoC: 46, sentEdcl: 24, sentExec: 11, 
      meta1: 95.48, meta2_2011: 100.00, meta2_2022: 117.11, meta2_2023_jef: 100.00, meta3: 158.66, meta5: 100.00, 
      cvDecisao: 0, cvSentenca: 0, cvTotal: 0, 
      parados30: 67, parados60: 8, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 75 
    },
    { 
      id: '31', name: '31ª Vara Federal', color: '#e2e8f0', 
      acervoTotal: 4009, acervo: 3007, acervoJef: 1169, acervoPi: 481, acervoOutros: 1357, evolucaoAcervo: 4.16, 
      entradas: 736, saidas: 595, tempo: 1529, arquivados: 1002, 
      sentTotal: 348, sentJef: 246, sentPi: 19, sentOutras: 54, 
      sentTipoA: 204, sentTipoC: 30, sentEdcl: 34, sentExec: 29, 
      meta1: 95.34, meta2_2011: 99.96, meta2_2022: 115.46, meta2_2023_jef: 87.50, meta3: 226.47, meta5: 100.00, 
      cvDecisao: 0, cvSentenca: 113, cvTotal: 113, 
      parados30: 0, parados60: 0, parados90: 0, parados120: 0, parados150: 0, paradosMais150: 0, paradosTotal: 0 
    }
  ]
};

// --- COMPONENTES VETORIAIS E INTERATIVOS ---

const JFLogo = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="logo-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
      </filter>
    </defs>
    <g filter="url(#logo-shadow)">
      {/* Bússola - Anel Externo */}
      <circle cx="50" cy="50" r="42" fill="none" stroke="#97999F" strokeWidth="6" />
      {/* Bússola - Anel Interno (Tracejado) */}
      <circle cx="50" cy="50" r="34" fill="none" stroke="#C8C9CB" strokeWidth="2" strokeDasharray="4 4" />
      
      {/* Agulha Norte (Azul JF - Pantone 294C) */}
      <polygon points="50,10 40,50 50,50" fill="#002F6C" />
      <polygon points="50,10 50,50 60,50" fill="#1e40af" />
      
      {/* Agulha Sul (Verde JF - Pantone 356C) */}
      <polygon points="50,90 40,50 50,50" fill="#007A33" />
      <polygon points="50,90 50,50 60,50" fill="#10b981" />
      
      {/* Agulha Leste (Cinza) */}
      <polygon points="90,50 50,40 50,50" fill="#C8C9CB" />
      <polygon points="90,50 50,50 50,60" fill="#97999F" />
      
      {/* Agulha Oeste (Cinza) */}
      <polygon points="10,50 50,40 50,50" fill="#C8C9CB" />
      <polygon points="10,50 50,50 50,60" fill="#97999F" />
      
      {/* Eixo Central */}
      <circle cx="50" cy="50" r="5" fill="#002F6C" />
      <circle cx="50" cy="50" r="2" fill="#ffffff" />
    </g>
  </svg>
);

const InfoTooltip = ({ text, position = 'top' }) => {
  const posClasses = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2 before:top-full before:left-1/2 before:-translate-x-1/2 before:border-t-slate-800",
    right: "left-full ml-2 top-1/2 -translate-y-1/2 before:right-full before:top-1/2 before:-translate-y-1/2 before:border-r-slate-800",
    left: "right-full mr-2 top-1/2 -translate-y-1/2 before:left-full before:top-1/2 before:-translate-y-1/2 before:border-l-slate-800",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2 before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-b-slate-800"
  };
  
  return (
    <span className="relative inline-flex items-center group cursor-help align-middle mx-1">
      <Info className="w-3.5 h-3.5 text-blue-400 group-hover:text-blue-600 transition-colors" />
      <div className={`absolute z-[9999] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-150 w-72 p-3 bg-slate-800 text-white text-[11px] leading-relaxed rounded-xl shadow-2xl pointer-events-none text-left font-normal before:content-[''] before:absolute before:border-4 before:border-transparent ${posClasses[position]}`}>
        {text}
      </div>
    </span>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-slate-200 shadow-xl rounded-xl min-w-[200px] z-50 relative">
        <p className="font-semibold text-slate-800 mb-3 border-b border-slate-100 pb-2">{label}</p>
        {payload.map((entry, index) => {
          let val = entry.value;
          if (Array.isArray(val)) val = val[1] - val[0];
          const displayVal = typeof val === 'number' && val % 1 !== 0 ? val.toFixed(2) : val;
          return (
            <div key={index} className="flex items-center justify-between text-sm text-slate-600 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color || entry.fill }} />
                <span>{entry.name}:</span>
              </div>
              <span className="font-semibold text-slate-900 ml-4">
                {displayVal}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};

const CustomXAxisTick = ({ x, y, payload, viewMode, data }) => {
  const vara = data.find(d => d.name === payload.value);
  const siglaVF = vara ? `${vara.id.padStart(2, '0')}VF` : payload.value;
  
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#475569" fontSize={11} fontWeight={vara?.id === '9' ? 'bold' : 'normal'}>
        {siglaVF}
      </text>
      {viewMode === 'composicao' && vara && (
        <text x={0} y={0} dy={32} textAnchor="middle" fill="#94a3b8" fontSize={11} fontWeight="bold">
          Σ {vara.acervo.toLocaleString('pt-BR')}
        </text>
      )}
    </g>
  );
};

const StatCard = ({ title, value, subtitle, icon: Icon, colorClass, highlight }) => (
  <div className={`bg-white p-4 rounded-xl shadow-sm border ${highlight ? 'border-blue-400 ring-2 ring-blue-100' : 'border-slate-200'} flex flex-col transition-all hover:shadow-md`}>
    <div className="flex items-center justify-between mb-2">
      <h4 className="text-slate-500 text-[11px] font-bold uppercase tracking-wider leading-tight">{title}</h4>
      <div className={`p-2 rounded-lg shrink-0 ${colorClass}`}>
        <Icon className="w-4 h-4" />
      </div>
    </div>
    <div className="text-2xl font-bold text-slate-800">{value}</div>
    {subtitle && <p className={`text-xs mt-1 truncate ${highlight ? 'text-blue-700 font-bold' : 'text-slate-400'}`}>{subtitle}</p>}
  </div>
);

const SectionHeader = ({ title, description, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="p-2 bg-slate-100 rounded-lg">
      <Icon className="w-5 h-5 text-slate-600" />
    </div>
    <div>
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
      <p className="text-sm text-slate-500">{description}</p>
    </div>
  </div>
);

const TemposCard = ({ title, value, tooltipDesc }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col relative group hover:border-blue-300 transition-colors">
    <div className="flex justify-between items-start mb-3">
      <span className="text-[11px] font-bold text-slate-500 uppercase leading-tight pr-2">{title}</span>
      <InfoTooltip text={tooltipDesc} position="top" />
    </div>
    <div className="text-2xl font-black text-slate-800">{value ? `${value} dias` : '-'}</div>
  </div>
);

export default function App() {
  const [dataStore, setDataStore] = useState(initialHistoricalData);
  const [selectedMonth, setSelectedMonth] = useState('2026-06');
  const [selectedVaras, setSelectedVaras] = useState(['9', '12', '13', '25', '31']);
  const [viewMode, setViewMode] = useState('composicao');
  const [meta2Expanded, setMeta2Expanded] = useState(false);
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('comparativo');

  // Estado do Plano de Gestão
  const [isPlanoModalOpen, setIsPlanoModalOpen] = useState(false);
  const [planoTab, setPlanoTab] = useState('identidade');

  const formatMonthName = (monthStr) => {
    if (!monthStr) return '';
    const [y, m] = monthStr.split('-');
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return `${months[parseInt(m) - 1]}/${y}`;
  };

  const currentMonthData = dataStore[selectedMonth] || [];
  const filteredData = currentMonthData.filter(v => selectedVaras.includes(v.id));

  const bestMeta1 = [...filteredData].sort((a, b) => b.meta1 - a.meta1)[0];
  const bestProdutividade = [...filteredData].sort((a, b) => b.sentTotal - a.sentTotal)[0];
  const lowestAcervo = [...filteredData].sort((a, b) => a.acervo - b.acervo)[0];
  const lowestVencidas = [...filteredData].sort((a, b) => a.cvTotal - b.cvTotal)[0];
  const lowestTempo = [...filteredData].sort((a, b) => a.tempo - b.tempo)[0];

  const renderComparativo = () => (
    <div className="animate-in fade-in duration-500">
      
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-slate-500" />
          <span className="font-semibold text-slate-700">Composição dos Gráficos:</span>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-lg w-full md:w-auto">
          <button 
            onClick={() => setViewMode('total')}
            className={`flex-1 md:flex-none px-6 py-2 text-sm font-medium rounded-md transition-all ${viewMode === 'total' ? 'bg-white shadow-sm text-blue-700' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Volume Total
          </button>
          <button 
            onClick={() => setViewMode('composicao')}
            className={`flex-1 md:flex-none px-6 py-2 text-sm font-medium rounded-md transition-all ${viewMode === 'composicao' ? 'bg-white shadow-sm text-blue-700' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Detalhar JEF / PI
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <StatCard 
          title="Maior Meta 1" 
          value={`${bestMeta1?.meta1 || 0}%`} 
          subtitle={bestMeta1?.id ? `${bestMeta1.id.padStart(2,'0')}VF` : ''}
          icon={Target} colorClass="bg-emerald-100 text-emerald-600"
          highlight={bestMeta1?.id === '9'}
        />
        <StatCard 
          title="Maior Produtividade" 
          value={`${bestProdutividade?.sentTotal || 0}`} 
          subtitle={bestProdutividade?.id ? `Julgados - ${bestProdutividade.id.padStart(2,'0')}VF` : ''}
          icon={Award} colorClass="bg-blue-100 text-blue-600"
          highlight={bestProdutividade?.id === '9'}
        />
        <StatCard 
          title="Menor Acervo Ativo" 
          value={(lowestAcervo?.acervo || 0).toLocaleString('pt-BR')} 
          subtitle={lowestAcervo?.id ? `${lowestAcervo.id.padStart(2,'0')}VF` : ''}
          icon={Activity} colorClass="bg-indigo-100 text-indigo-600"
          highlight={lowestAcervo?.id === '9'}
        />
        <StatCard 
          title="Menos Vencidos" 
          value={lowestVencidas?.cvTotal === 0 ? "Zero atrasos" : `${lowestVencidas?.cvTotal || 0}`} 
          subtitle={lowestVencidas?.id ? `Decisão/Sent. - ${lowestVencidas.id.padStart(2,'0')}VF` : ''}
          icon={CheckCircle} colorClass="bg-violet-100 text-violet-600"
          highlight={lowestVencidas?.id === '9'}
        />
        <StatCard 
          title="Menor Tempo" 
          value={`${lowestTempo?.tempo || 0}`} 
          subtitle={lowestTempo?.id ? `Dias - ${lowestTempo.id.padStart(2,'0')}VF` : ''}
          icon={Clock} colorClass="bg-amber-100 text-amber-600"
          highlight={lowestTempo?.id === '9'}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
          <SectionHeader title="Acervo em Tramitação" description="Volume de processos e composição" icon={Activity} />
          <div className="flex-1 min-h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredData} margin={{ top: 10, right: 10, left: -20, bottom: viewMode === 'composicao' ? 20 : 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis interval={0} dataKey="name" axisLine={false} tickLine={false} tick={<CustomXAxisTick viewMode={viewMode} data={filteredData} />} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <RechartsTooltip content={<CustomTooltip />} cursor={{fill: '#f8fafc'}} />
                <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '12px', color: '#475569' }} />
                {viewMode === 'composicao' ? (
                  <>
                    <Bar dataKey="acervoJef" name="Acervo JEF" stackId="a" fill="#1e40af" maxBarSize={60} />
                    <Bar dataKey="acervoPi" name="Acervo PI" stackId="a" fill="#3b82f6" maxBarSize={60} />
                    <Bar dataKey="acervoOutros" name="Outras Classes" stackId="a" fill="#cbd5e1" radius={[4, 4, 0, 0]} maxBarSize={60} />
                  </>
                ) : (
                  <>
                    <Bar dataKey="acervoTotal" name="Acervo Total" fill="#e2e8f0" radius={[4, 4, 0, 0]} maxBarSize={40} />
                    <Bar dataKey="acervo" name="Acervo Ativo" radius={[4, 4, 0, 0]} maxBarSize={40}>
                      {filteredData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </>
                )}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
          <SectionHeader title="Produtividade: Julgados (Sentenças)" description="Volume de sentenças no mês" icon={BarChart2} />
          <div className="flex-1 min-h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis interval={0} dataKey="name" axisLine={false} tickLine={false} tick={<CustomXAxisTick viewMode="total" data={filteredData} />} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <RechartsTooltip content={<CustomTooltip />} cursor={{fill: '#f8fafc'}} />
                <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '12px', color: '#475569' }} />
                {viewMode === 'composicao' ? (
                  <>
                    <Bar dataKey="sentJef" name="Sentenças JEF" stackId="a" fill="#10b981" maxBarSize={60} />
                    <Bar dataKey="sentPi" name="Sentenças PI" stackId="a" fill="#f59e0b" maxBarSize={60} />
                    <Bar dataKey="sentOutras" name="Outras Classes" stackId="a" fill="#cbd5e1" radius={[4, 4, 0, 0]} maxBarSize={60} />
                  </>
                ) : (
                  <Bar dataKey="sentTotal" name="Sentenças Totais" radius={[4, 4, 0, 0]} maxBarSize={60}>
                    {filteredData.map((entry, index) => (
                      <Cell key={`cell-prod-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                )}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col col-span-1">
          <SectionHeader title="Complexidade (Sentenças)" description="Tipos A, C e Edcl" icon={Layers} />
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis interval={0} dataKey="name" axisLine={false} tickLine={false} tick={<CustomXAxisTick viewMode="total" data={filteredData} />} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <RechartsTooltip content={<CustomTooltip />} cursor={{fill: '#f8fafc'}} />
                <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '11px', color: '#475569' }} />
                <Bar dataKey="sentTipoA" name="Tipo A" stackId="tipo" fill="#f59e0b" maxBarSize={45} />
                <Bar dataKey="sentTipoC" name="Tipo C" stackId="tipo" fill="#3b82f6" maxBarSize={45} />
                <Bar dataKey="sentEdcl" name="Embargos (Edcl)" stackId="tipo" fill="#94a3b8" radius={[4, 4, 0, 0]} maxBarSize={45} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col col-span-1 lg:col-span-2">
          <SectionHeader title="Cumprimento de Metas CNJ (%)" description="Acompanhamento (Linha verde = 100%)" icon={Target} />
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis interval={0} dataKey="name" axisLine={false} tickLine={false} tick={<CustomXAxisTick viewMode="total" data={filteredData} />} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} domain={[0, 150]} />
                <RechartsTooltip content={<CustomTooltip />} cursor={{fill: '#f8fafc'}} />
                <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '12px', color: '#475569' }} />
                <ReferenceLine y={100} stroke="#10b981" strokeDasharray="3 3" label={{ position: 'top', value: 'Alvo (100%)', fill: '#10b981', fontSize: 12 }} />
                <Bar dataKey="meta1" name="Meta 1" fill="#10b981" radius={[3, 3, 0, 0]} maxBarSize={30} />
                <Bar dataKey="meta2_2022" name="Meta 2 (2022)" fill="#3b82f6" radius={[3, 3, 0, 0]} maxBarSize={30} />
                <Bar dataKey="meta3" name="Meta 3" fill="#f59e0b" radius={[3, 3, 0, 0]} maxBarSize={30} />
                <Bar dataKey="meta5" name="Meta 5" fill="#8b5cf6" radius={[3, 3, 0, 0]} maxBarSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100 flex flex-col">
          <SectionHeader title="Gargalos: Conclusões Vencidas" description="Decisão vs Sentença" icon={AlertCircle} />
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis interval={0} dataKey="name" axisLine={false} tickLine={false} tick={<CustomXAxisTick viewMode="total" data={filteredData} />} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <RechartsTooltip content={<CustomTooltip />} cursor={{fill: '#fff1f2'}} />
                <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '12px', color: '#475569' }} />
                {viewMode === 'composicao' ? (
                  <>
                    <Bar dataKey="cvDecisao" name="Vencidos (Decisão)" stackId="v" fill="#fb923c" maxBarSize={50} />
                    <Bar dataKey="cvSentenca" name="Vencidos (Sentença)" stackId="v" fill="#ef4444" radius={[4, 4, 0, 0]} maxBarSize={50} />
                  </>
                ) : (
                  <Bar dataKey="cvTotal" name="Total de Conclusões Vencidas" fill="#ef4444" radius={[4, 4, 0, 0]} maxBarSize={50} />
                )}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 flex flex-col">
          <SectionHeader title="Gargalos: Tempo Parado" description="Dias sem movimentação" icon={Clock} />
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis interval={0} dataKey="name" axisLine={false} tickLine={false} tick={<CustomXAxisTick viewMode="total" data={filteredData} />} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <RechartsTooltip content={<CustomTooltip />} cursor={{fill: '#fffbeb'}} />
                <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '12px', color: '#475569' }} />
                {viewMode === 'composicao' ? (
                  <>
                    <Bar dataKey="parados30" name="30 a 60 dias" stackId="p" fill="#fde047" maxBarSize={60} />
                    <Bar dataKey="parados60" name="60 a 90 dias" stackId="p" fill="#fbbf24" maxBarSize={60} />
                    <Bar dataKey="parados90" name="Mais de 90 dias" stackId="p" fill="#d97706" radius={[4, 4, 0, 0]} maxBarSize={60} />
                  </>
                ) : (
                  <Bar dataKey="paradosTotal" name="Total Parados > 30 dias" fill="#f59e0b" radius={[4, 4, 0, 0]} maxBarSize={50} />
                )}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Tabela de Dados Extraídos ({formatMonthName(selectedMonth)})</h3>
            <p className="text-sm text-slate-500">Visão tabular consolidada.</p>
          </div>
          <button 
            onClick={() => setMeta2Expanded(!meta2Expanded)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
          >
            {meta2Expanded ? <ChevronUp className="w-4 h-4"/> : <ChevronDown className="w-4 h-4"/>}
            {meta2Expanded ? "Recolher Meta 2" : "Expandir Meta 2"}
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600 whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <tr>
                <th className="p-4 pl-6 border-r border-slate-100">Unidade</th>
                <th className="p-4 text-center border-r border-slate-100" colSpan={4}>Acervo</th>
                <th className="p-4 text-center border-r border-slate-100" colSpan={3}>Produtividade (Julgados)</th>
                <th className="p-4 text-center border-r border-slate-100" colSpan={meta2Expanded ? 5 : 3}>Metas Principais</th>
                <th className="p-4 text-center">Gargalos Totais</th>
              </tr>
              <tr className="bg-slate-50/50 text-xs">
                <th className="p-3 pl-6 border-r border-slate-100">Vara Federal</th>
                <th className="p-3 font-bold text-slate-800">Total Geral</th>
                <th className="p-3 font-bold text-slate-700">Ativo</th>
                <th className="p-3">JEF</th>
                <th className="p-3 border-r border-slate-100">PI</th>
                <th className="p-3 font-bold text-slate-700">Sent. Total</th>
                <th className="p-3">Sent. JEF</th>
                <th className="p-3 border-r border-slate-100">Sent. PI</th>
                <th className="p-3">Meta 1</th>
                {meta2Expanded ? (
                  <>
                    <th className="p-3 text-blue-600 bg-blue-50/50">M2 (2011)</th>
                    <th className="p-3 text-blue-600 bg-blue-50/50">M2 (2022)</th>
                    <th className="p-3 text-blue-600 bg-blue-50/50 border-r border-slate-100">M2 (23-JEF)</th>
                  </>
                ) : (
                  <th className="p-3 border-r border-slate-100">Meta 2 (Média)</th>
                )}
                <th className="p-3 border-r border-slate-100">Meta 3</th>
                <th className="p-3 font-bold text-slate-700">Total Vencidos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map(row => {
                const m2Media = ((row.meta2_2011 + row.meta2_2022 + row.meta2_2023_jef) / 3).toFixed(2);
                const is9 = row.id === '9';
                return (
                <tr key={row.id} className={`transition-colors ${is9 ? 'bg-blue-50/30 hover:bg-blue-50/60' : 'hover:bg-slate-50/80'}`}>
                  <td className={`p-4 pl-6 font-bold flex items-center gap-3 border-r border-slate-100 ${is9 ? 'text-blue-900' : 'text-slate-800'}`}>
                    <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: row.color }} />
                    {row.id.padStart(2, '0')}VF
                  </td>
                  <td className="p-4 font-bold text-slate-800">{row.acervoTotal.toLocaleString('pt-BR')}</td>
                  <td className="p-4 font-bold text-slate-700">{row.acervo.toLocaleString('pt-BR')}</td>
                  <td className="p-4 text-slate-500">{row.acervoJef.toLocaleString('pt-BR')}</td>
                  <td className="p-4 text-slate-500 border-r border-slate-100">{row.acervoPi.toLocaleString('pt-BR')}</td>
                  
                  <td className="p-4 font-bold text-slate-700">{row.sentTotal}</td>
                  <td className="p-4 text-slate-500">{row.sentJef}</td>
                  <td className="p-4 text-slate-500 border-r border-slate-100">{row.sentPi}</td>
                  
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${row.meta1 < 100 ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'}`}>
                      {row.meta1}%
                    </span>
                  </td>
                  {meta2Expanded ? (
                    <>
                      <td className="p-4 text-blue-700 bg-blue-50/20 text-xs font-medium">{row.meta2_2011}%</td>
                      <td className="p-4 text-blue-700 bg-blue-50/20 text-xs font-medium">{row.meta2_2022}%</td>
                      <td className="p-4 text-blue-700 bg-blue-50/20 text-xs font-medium border-r border-slate-100">{row.meta2_2023_jef}%</td>
                    </>
                  ) : (
                    <td className="p-4 border-r border-slate-100">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${m2Media < 100 ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'}`}>
                        {m2Media}%
                      </span>
                    </td>
                  )}
                  <td className="p-4 border-r border-slate-100">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${row.meta3 < 100 ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'}`}>
                      {row.meta3}%
                    </span>
                  </td>
                  <td className="p-4 font-bold text-slate-700">
                    {row.cvTotal}
                  </td>
                </tr>
              )})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderHistorico = () => {
    const months = Object.keys(dataStore).sort();
    const chartData = months.map(m => {
      const v = dataStore[m].find(d => d.id === '9');
      return { 
        month: formatMonthName(m), 
        Entradas: v?.entradas || 0,
        Saidas: v?.saidas || 0,
        Sentenças: v?.sentTotal || 0,
        'Acervo Total': v?.acervoTotal || 0,
        'Acervo Ativo': v?.acervo || 0
      };
    });

    const data9 = currentMonthData.find(v => v.id === '9');

    return (
      <div className="animate-in fade-in duration-500">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-6">
          <SectionHeader title="Histórico de Desempenho (09VF)" description="Evolução mensal exclusiva da 9ª Vara Federal" icon={LineChartIcon} />
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <RechartsTooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '13px', color: '#475569' }} />
                
                <Line yAxisId="left" type="monotone" dataKey="Entradas" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 7 }} />
                <Line yAxisId="left" type="monotone" dataKey="Saidas" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 7 }} />
                <Line yAxisId="left" type="monotone" dataKey="Sentenças" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 7 }} />
                <Line yAxisId="right" type="monotone" dataKey="Acervo Total" stroke="#0f172a" strokeWidth={3} strokeDasharray="5 5" dot={{ r: 4 }} activeDot={{ r: 7 }} />
                <Line yAxisId="right" type="monotone" dataKey="Acervo Ativo" stroke="#1e3a8a" strokeWidth={3} strokeDasharray="5 5" dot={{ r: 4 }} activeDot={{ r: 7 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 p-4 bg-blue-50 text-blue-900 rounded-lg text-sm border border-blue-100 flex gap-3 items-center">
            <Info className="w-5 h-5 shrink-0" />
            <p>O eixo esquerdo representa o fluxo (Entradas, Saídas, Sentenças). O eixo tracejado à direita monitora independentemente o Acervo Total (em preto) e o Acervo Ativo (em azul).</p>
          </div>
        </div>

        {data9 && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <SectionHeader title="Métricas de Tempos (09VF)" description={`Raio-x do andamento processual de ${formatMonthName(selectedMonth)}`} icon={Clock} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <TemposCard 
                title="Tempo até o julgamento" 
                value={data9.tempoJulgamento} 
                tooltipDesc="Tempo até o julgamento: média de dias decorridos entre o início da ação e a data do primeiro julgamento (filtra apenas processos julgados nos últimos 12 meses)." 
              />
              <TemposCard 
                title="Tempo até a baixa" 
                value={data9.tempoBaixa} 
                tooltipDesc="Tempo até a baixa: média de dias decorridos entre o início da ação até a primeira baixa (filtra apenas processos julgados nos últimos 12 meses)." 
              />
              <TemposCard 
                title="Tempo do pendente líquido" 
                value={data9.tempoPendenteLiquido} 
                tooltipDesc="Tempo do pendente líquido: média de dias entre o início da ação e o último dia do mês anterior para processos pendentes, excluídos suspensos, sobrestados ou em arquivo provisório, além dos períodos em que o processo permaneceu nessas situações." 
              />
              <TemposCard 
                title="Tempo do pendente" 
                value={data9.tempoPendente} 
                tooltipDesc="Tempo do pendente: média de dias em que cada processo esteve pendente, incluindo-se suspensos, sobrestados ou em arquivo provisório." 
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderKPI = () => {
    const data9 = currentMonthData.find(v => v.id === '9');
    if (!data9) return <div className="p-8 text-center text-slate-500">Selecione a 9ª Vara nos filtros.</div>;

    const calcAvg = (dataKey) => {
      const sum = currentMonthData.reduce((acc, curr) => acc + curr[dataKey], 0);
      return sum / currentMonthData.length;
    };

    const renderKpiRow = (label, dataKey, isMenorMelhor, isPercent = false, showMeta = false) => {
      const result = data9[dataKey];
      const benchmark = calcAvg(dataKey);
      let indice = isMenorMelhor ? (benchmark / result) * 100 : (result / benchmark) * 100;
      
      const isPositive = indice >= 100;
      const metaAtingida = result >= 100;
      const fmt = (val) => isPercent ? `${val.toFixed(2)}%` : val % 1 === 0 ? val : val.toFixed(2);

      return (
        <div key={label} className="grid grid-cols-12 gap-4 items-center py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 px-2 rounded-md transition-colors">
          <span className="col-span-4 text-sm font-medium text-slate-700">{label}</span>
          <span className={`text-sm font-bold text-blue-900 text-center ${showMeta ? 'col-span-2' : 'col-span-3'}`}>{fmt(result)}</span>
          <span className={`text-sm text-slate-500 text-center ${showMeta ? 'col-span-2' : 'col-span-3'}`}>{fmt(benchmark)}</span>
          <div className="col-span-2 flex justify-center">
            <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md ${isPositive ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
              {isPositive ? <TrendingUp className="w-3 h-3"/> : <TrendingDown className="w-3 h-3"/>}
              {indice.toFixed(1)}%
            </span>
          </div>
          {showMeta && (
            <div className="col-span-2 flex justify-center">
               <span className={`px-2 py-1 rounded text-xs font-bold ${metaAtingida ? 'text-emerald-700 bg-emerald-100' : 'text-rose-700 bg-rose-100'}`}>
                  {metaAtingida ? 'Sim' : 'Não'}
               </span>
            </div>
          )}
        </div>
      );
    };

    let meta1Esp = 100;
    if (data9.paradosMais150 > 0 || data9.parados150 > 0) meta1Esp = 0;
    else if (data9.parados120 > 0) meta1Esp = 20;
    else if (data9.parados90 > 0) meta1Esp = 40;
    else if (data9.parados60 > 0) meta1Esp = 60;
    else if (data9.parados30 > 0) meta1Esp = 80;

    let meta2Esp = (data9.cvDecisao > 0 || data9.cvSentenca > 0) ? 0 : 100;

    const metasEspData = [
      { name: 'Impulso Processual (ME1)', value: meta1Esp, fill: meta1Esp >= 80 ? '#10b981' : meta1Esp >= 40 ? '#f59e0b' : '#ef4444' },
      { name: 'Prazo de Conclusão (ME2)', value: meta2Esp, fill: meta2Esp === 100 ? '#10b981' : '#ef4444' }
    ];

    const me1Tooltip = "Considerando o disposto no art. 57 da Consolidação de Normas da Corregedoria Regional da Justiça Federal da 2ª Região (CNCR), que determina sejam inspecionados, por amostragem, processos sem movimentação pela Secretaria do Juízo há mais de 60 dias corridos, além de, obrigatoriamente, todos os processos sem movimentação há mais de 150 dias corridos, a unidade definiu faixas para cada indicador de processos 'Parados Não Conclusos' do 'Painel de Indicadores da Corregedoria'.";
    const me2Tooltip = "O art. 57 da CNCR determina que sejam inspecionados, por amostragem, processos conclusos para despacho ou decisão por mais de 60 dias corridos, além de, obrigatoriamente, todos os processos conclusos para sentença por mais de 150 dias corridos, salvo caso de Juizados Especiais Federais, quando o prazo cai para 120 dias corridos. Assim, a unidade criou uma meta específica, que só será cumprida se não houver nenhum processo com conclusão vencida.";

    return (
      <div className="animate-in fade-in duration-500">
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-200 mb-6 bg-gradient-to-br from-white to-blue-50">
          <SectionHeader title="Metas Específicas da 9ª Vara Federal" description="Acompanhamento exclusivo de Impulso Processual e Conclusões" icon={Target} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={metasEspData} layout="vertical" margin={{ top: 0, right: 30, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={180} tick={{fill: '#1e3a8a', fontWeight: 'bold', fontSize: 12}} />
                  <RechartsTooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={30} label={{ position: 'right', formatter: (val) => `${val}%`, fill: '#1e3a8a', fontWeight: 'bold' }}>
                    {metasEspData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm text-slate-600 space-y-4 bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
              <div>
                <h4 className="font-bold text-blue-900 flex items-center mb-2">ME1 – IMPULSO PROCESSUAL <InfoTooltip text={me1Tooltip} position="bottom" /></h4>
                <p className="mb-2">Impulsionar os processos parados não conclusos, observando-se as seguintes faixas de cumprimento:</p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Nenhum processo parado há mais de 30 dias: 100%</li>
                  <li>Processo(s) parado(s) entre 30 e 60 dias: 80%</li>
                  <li>Processo(s) parado(s) entre 60 e 90 dias: 60%</li>
                  <li>Processo(s) parado(s) entre 90 e 120 dias: 40%</li>
                  <li>Processo(s) parado(s) entre 120 e 150 dias: 20%</li>
                  <li>Processo(s) parado(s) há mais de 150 dias: 0%</li>
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <h4 className="font-bold text-blue-900 flex items-center mb-2">ME2 – PRAZO DE CONCLUSÃO <InfoTooltip text={me2Tooltip} position="bottom" /></h4>
                <p>Impedir o vencimento dos prazos de conclusão para despachos, decisões e sentenças.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <SectionHeader title="Gestão do Acervo" description="Indicadores onde MENOR é melhor" icon={Activity} />
            <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2 border-b border-slate-200 pb-2">
              <span className="col-span-4">Indicador</span>
              <span className="col-span-3 text-center text-blue-800">09VF</span>
              <span className="col-span-3 text-center">Benchmark</span>
              <span className="col-span-2 text-center">Índice</span>
            </div>
            {renderKpiRow('Acervo Total', 'acervoTotal', true)}
            {renderKpiRow('Evolução Mensal', 'evolucaoAcervo', true, true)}
            {renderKpiRow('Acervo Ativo', 'acervo', true)}
            {renderKpiRow('Acervo JEF', 'acervoJef', true)}
            {renderKpiRow('Acervo PI', 'acervoPi', true)}
            {renderKpiRow('Arquivados', 'arquivados', false)}
            {renderKpiRow('Saída Total', 'saidas', false)} 
            {renderKpiRow('Tempo Médio (dias)', 'tempo', true)}
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <SectionHeader title="Produtividade" description="Indicadores de Sentenças" icon={Award} />
              <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2 border-b border-slate-200 pb-2">
                <span className="col-span-4">Indicador</span>
                <span className="col-span-3 text-center text-blue-800">09VF</span>
                <span className="col-span-3 text-center">Benchmark</span>
                <span className="col-span-2 text-center">Índice</span>
              </div>
              {renderKpiRow('Sent. TOTAL', 'sentTotal', false)}
              {renderKpiRow('Sent. Exec', 'sentExec', false)}
              {renderKpiRow('Sent. JEF', 'sentJef', false)}
              {renderKpiRow('Sent. PI', 'sentPi', false)}
              {renderKpiRow('Sent. Outras Classes', 'sentOutras', false)}
              {renderKpiRow('Sent. TIPO A', 'sentTipoA', false)}
              {renderKpiRow('Sent. TIPO C', 'sentTipoC', false)}
              {renderKpiRow('Sent. Edcl', 'sentEdcl', true)}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <SectionHeader title="Metas CNJ" description="Grau de Atingimento percentual" icon={Target} />
              <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2 border-b border-slate-200 pb-2">
                <span className="col-span-4">Indicador</span>
                <span className="col-span-2 text-center text-blue-800">09VF</span>
                <span className="col-span-2 text-center">Benchmark</span>
                <span className="col-span-2 text-center">Resultado<br/>Comparativo</span>
                <span className="col-span-2 text-center">Meta<br/>Cumprida?</span>
              </div>
              {renderKpiRow('% META 1', 'meta1', false, true, true)}
              {renderKpiRow('% META 2 (2011)', 'meta2_2011', false, true, true)}
              {renderKpiRow('% META 2 (2022)', 'meta2_2022', false, true, true)}
              {renderKpiRow('% META 2 (2023-JEF)', 'meta2_2023_jef', false, true, true)}
              {renderKpiRow('% META 3', 'meta3', false, true, true)}
              {renderKpiRow('% META 5', 'meta5', false, true, true)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderRelatorio = () => {
    const data9 = currentMonthData.find(v => v.id === '9');
    if (!data9) return null;

    // Calcular evolução das conclusões vencidas
    const months = Object.keys(dataStore).sort();
    const currentMonthIdx = months.indexOf(selectedMonth);
    const prevMonth = currentMonthIdx > 0 ? months[currentMonthIdx - 1] : null;
    const prevData9 = prevMonth ? dataStore[prevMonth].find(v => v.id === '9') : null;

    const currentCvTotal = data9.cvTotal || (data9.cvDecisao + data9.cvSentenca);
    const prevCvTotal = prevData9 ? (prevData9.cvTotal || (prevData9.cvDecisao + prevData9.cvSentenca)) : null;
    
    // É positivo APENAS se for zero OU se houve redução real em relação ao mês anterior
    const isCvPositive = currentCvTotal === 0 || (prevCvTotal !== null && currentCvTotal < prevCvTotal);

    const iad = (data9.saidas / data9.entradas) * 100;
    const pesoJef = (data9.acervoJef / data9.acervo) * 100;

    const meta1Tooltip = "Julgar quantidade maior de processos de conhecimento do que os distribuídos no ano corrente.";
    const meta2Tooltip = "Identificar e julgar processos antigos, abrangendo faixas de 2011, 2022 e 2023(JEF).";
    const meta3Tooltip = "Aumentar o Índice de Conciliação em 0,5 ponto percentual em relação ao biênio anterior.";
    const iadTooltip = "Índice de Atendimento à Demanda (IAD): mede a relação entre processos baixados (Saídas) e casos novos (Entradas). Ideal que seja maior que 100%.";

    return (
      <div className="animate-in fade-in duration-500 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-blue-900 p-8 text-white">
            <h2 className="text-2xl font-bold mb-2">Relatório Analítico de Gestão</h2>
            <p className="text-blue-200 mb-4">09VF - Referência: {formatMonthName(selectedMonth)}</p>
            <div className="bg-blue-800 p-4 rounded-xl border border-blue-700 text-sm leading-relaxed">
              <strong>Nossa Missão:</strong> "Prestar uma jurisdição acessível, rápida e efetiva nas demandas previdenciárias e de propriedade intelectual."
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div>
                <h3 className="text-lg font-bold text-emerald-700 flex items-center gap-2 mb-4 border-b border-emerald-100 pb-2">
                  <CheckCircle className="w-5 h-5" /> Fatores Positivos
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <div>
                      <strong className="text-slate-800 block text-sm flex items-center">Produtividade Absoluta <InfoTooltip text="Volume bruto de sentenças proferidas no mês." position="top" /></strong>
                      <span className="text-sm text-slate-600">A unidade proferiu {data9.sentTotal} sentenças totais. Esse volume de entrega vai ao encontro da nossa <strong>Missão</strong> e materializa o <strong>Pilar Lean (Eficiência)</strong>, garantindo vazão que apoia diretamente o atingimento da <strong>Meta 1 do CNJ <InfoTooltip text={meta1Tooltip} position="top" /></strong>.</span>
                    </div>
                  </li>
                  {isCvPositive && (
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <div>
                        <strong className="text-slate-800 block text-sm flex items-center">Controle de Prazos (Conclusões) <InfoTooltip text="Acompanhamento do prazo legal para prolação de decisões e sentenças." position="top" /></strong>
                        <span className="text-sm text-slate-600">
                          {currentCvTotal === 0 
                            ? `Com zero conclusões vencidas, a equipe sustenta o `
                            : `Com a redução para ${currentCvTotal} conclusões vencidas (em relação às ${prevCvTotal} do mês anterior), a equipe fortalece o `}
                          <strong>Pilar Equipe (Cooperação e Engajamento)</strong>, mitigando desperdícios de tempo de espera e apoiando o atingimento da <strong>ME2 <InfoTooltip text="Meta Específica 2: Zero Conclusões Vencidas." position="right" /></strong>.
                        </span>
                      </div>
                    </li>
                  )}
                  {data9.meta3 >= 8 && (
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <div>
                        <strong className="text-slate-800 block text-sm flex items-center">Superação da Meta 3 do CNJ <InfoTooltip text={meta3Tooltip} position="top" /></strong>
                        <span className="text-sm text-slate-600">O índice de conciliação atinge {data9.meta3}%, demonstrando a força do <strong>Pilar Social (Humanização e Empatia)</strong> ao focar na construção de soluções dialogadas para as partes.</span>
                      </div>
                    </li>
                  )}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-rose-700 flex items-center gap-2 mb-4 border-b border-rose-100 pb-2">
                  <AlertCircle className="w-5 h-5" /> Pontos de Atenção
                </h3>
                <ul className="space-y-4">
                  {!isCvPositive && (
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <div>
                        <strong className="text-slate-800 block text-sm flex items-center">Gargalo de Prazos (Conclusões) <InfoTooltip text="Acompanhamento do prazo legal para prolação de decisões e sentenças." position="top" /></strong>
                        <span className="text-sm text-slate-600">
                          O registro de {currentCvTotal} conclusões vencidas {prevCvTotal !== null && currentCvTotal >= prevCvTotal ? `(sem redução em relação às ${prevCvTotal} do mês anterior) ` : ''}
                          impacta o tempo de espera. A eliminação desse gargalo é fundamental sob a ótica do <strong>Pilar Equipe</strong> e para o atingimento da <strong>ME2 <InfoTooltip text="Meta Específica 2: Zero Conclusões Vencidas." position="right" /></strong>.
                        </span>
                      </div>
                    </li>
                  )}
                  {iad < 100 && (
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <div>
                        <strong className="text-slate-800 block text-sm flex items-center">Déficit no IAD <InfoTooltip text={iadTooltip} position="top" /> e Meta 1 <InfoTooltip text={meta1Tooltip} position="right" /></strong>
                        <span className="text-sm text-slate-600">Com {data9.entradas} entradas e {data9.saidas} saídas (IAD de {iad.toFixed(1)}%), o acúmulo temporário de acervo impacta a <strong>Meta 1 do CNJ</strong>. Este cenário convida à reflexão sob a ótica do <strong>Pilar Mudança e Pilar Equipe</strong> para otimização de fluxos.</span>
                      </div>
                    </li>
                  )}
                  {pesoJef > 40 && (
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <div>
                        <strong className="text-slate-800 block text-sm flex items-center">Concentração de Acervo JEF <InfoTooltip text="Proporção de processos de Juizado Especial no acervo ativo." position="top" /></strong>
                        <span className="text-sm text-slate-600">O acervo JEF representa {pesoJef.toFixed(1)}% do total ativo. Considerando o <strong>Pilar Social</strong> (vulnerabilidade), essa concentração influencia o tempo médio geral e representa um desafio para a <strong>Meta 2 do CNJ <InfoTooltip text={meta2Tooltip} position="top" /></strong>.</span>
                      </div>
                    </li>
                  )}
                  {data9.sentEdcl > 10 && (
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <div>
                        <strong className="text-slate-800 block text-sm flex items-center">Volume de Embargos (Edcl) <InfoTooltip text="Sentenças de embargos de declaração que podem indicar retrabalho ou falhas de clareza prévias." position="left" /></strong>
                        <span className="text-sm text-slate-600">O registro de {data9.sentEdcl} sentenças em EDcl aponta indícios de retrabalho. O <strong>Pilar Lean</strong> nos ensina a identificar as causas raízes e focar em procedimentos que gerem valor direto ao cidadão.</span>
                      </div>
                    </li>
                  )}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      
      <aside className={`bg-slate-900 text-slate-300 transition-all duration-300 flex flex-col relative z-20 ${isSidebarOpen ? 'w-[340px]' : 'w-24'}`}>
        <div className="pt-14 pb-6 flex flex-col items-center border-b border-slate-800 relative z-30 min-h-[120px]">
          <div className={`w-full flex items-center ${isSidebarOpen ? 'justify-start px-6' : 'justify-center px-2'}`}>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-slate-400 hover:text-white shrink-0 absolute left-5 top-14 z-40 transition-colors">
              {isSidebarOpen ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
            </button>
            
            <div className={`flex items-center transition-all duration-300 ${isSidebarOpen ? 'ml-10 flex-row' : 'mt-12 flex-col'}`}>
              <div className={`shrink-0 flex items-center justify-center transition-all duration-300 ${isSidebarOpen ? 'w-12 h-12 mr-3' : 'w-10 h-10'}`}>
                <JFLogo className="w-full h-full drop-shadow-md" />
              </div>

              {isSidebarOpen && (
                <div className="flex flex-col overflow-hidden whitespace-nowrap animate-in fade-in duration-300">
                  <span className="text-[28px] font-black text-white tracking-wide leading-none drop-shadow-sm mb-1">Painel MAP</span>
                  <span className="text-[9px] text-blue-300 font-medium tracking-wider uppercase leading-tight">Painel gerencial inteligente<br/>da 9ª Vara Federal</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <nav className="flex-1 py-6 px-4 flex flex-col gap-2">
          {[
            { id: 'comparativo', icon: LayoutDashboard, label: 'Comparativo' },
            { id: 'historico', icon: LineChartIcon, label: 'Histórico' },
            { id: 'kpi', icon: Target, label: 'Painel de KPI' },
            { id: 'relatorio', icon: FileText, label: 'Relatório Gerencial' },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center px-3 py-3.5 rounded-xl transition-all ${activeTab === item.id ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`}
              title={!isSidebarOpen ? item.label : ''}
            >
              <item.icon className="w-6 h-6 shrink-0 mx-auto sm:mx-0" />
              {isSidebarOpen && <span className="ml-4 text-sm font-semibold">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={() => setIsPlanoModalOpen(true)}
            className={`flex items-center justify-center w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all ${isSidebarOpen ? 'px-4 py-3' : 'p-3'}`}
            title="Plano de Gestão 2026-2027"
          >
            <Presentation className="w-6 h-6 shrink-0" />
            {isSidebarOpen && <span className="ml-3 font-bold text-sm leading-tight text-left">Plano de Gestão<br/><span className="text-[10px] font-medium text-blue-200">2026-2027</span></span>}
          </button>
        </div>
      </aside>

      {isPlanoModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col h-[700px] max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
            
            <div className="bg-blue-900 p-5 text-white flex justify-between items-center shrink-0">
              <div>
                <h3 className="font-bold text-xl flex items-center gap-2"><BookOpen className="w-6 h-6"/> Plano de Gestão 2026-2027</h3>
                <p className="text-blue-200 text-sm mt-1">9ª Vara Federal - Seção Judiciária do Rio de Janeiro</p>
              </div>
              <button onClick={() => setIsPlanoModalOpen(false)} className="text-blue-200 hover:text-white transition-colors bg-blue-800 hover:bg-blue-700 p-2 rounded-lg"><X className="w-6 h-6"/></button>
            </div>
            
            <div className="flex bg-slate-100 shrink-0 border-b border-slate-200">
              <button onClick={() => setPlanoTab('identidade')} className={`flex-1 py-3 px-4 text-sm font-bold transition-colors flex items-center justify-center gap-2 ${planoTab === 'identidade' ? 'bg-white text-blue-700 border-b-2 border-blue-700' : 'text-slate-500 hover:bg-slate-200'}`}><Compass className="w-4 h-4"/> Identidade Estratégica</button>
              <button onClick={() => setPlanoTab('cenario')} className={`flex-1 py-3 px-4 text-sm font-bold transition-colors flex items-center justify-center gap-2 ${planoTab === 'cenario' ? 'bg-white text-blue-700 border-b-2 border-blue-700' : 'text-slate-500 hover:bg-slate-200'}`}><LayoutDashboard className="w-4 h-4"/> Análise de Cenário (SWOT)</button>
              <button onClick={() => setPlanoTab('projetos')} className={`flex-1 py-3 px-4 text-sm font-bold transition-colors flex items-center justify-center gap-2 ${planoTab === 'projetos' ? 'bg-white text-blue-700 border-b-2 border-blue-700' : 'text-slate-500 hover:bg-slate-200'}`}><Lightbulb className="w-4 h-4"/> Carteira de Projetos</button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
              {planoTab === 'identidade' && (
                <div className="space-y-6 animate-in fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Nossa Missão</h4>
                      <p className="text-lg font-medium text-slate-800 leading-relaxed">"Prestar uma jurisdição acessível, rápida e efetiva nas demandas previdenciárias e de propriedade intelectual."</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Nossa Visão de Futuro</h4>
                      <p className="text-lg font-medium text-slate-800 leading-relaxed">"Ser reconhecida como unidade modelo em efetividade e gestão humanizada."</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><Target className="w-5 h-5 text-blue-600"/> Nossos Valores (Pilares de Gestão)</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-rose-100 text-rose-600 rounded-lg group-hover:bg-rose-600 group-hover:text-white transition-colors"><Users className="w-5 h-5"/></div>
                          <h5 className="font-bold text-slate-800">Pilar Social</h5>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed"><strong>Humanização e Empatia.</strong> A gestão e a atividade-fim são indissociáveis. Foco na vulnerabilidade social e na geração de valor para a subsistência ou segurança jurídica do cidadão.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors"><CheckCircle className="w-5 h-5"/></div>
                          <h5 className="font-bold text-slate-800">Pilar Equipe</h5>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed"><strong>Cooperação e Engajamento.</strong> As metas são atingidas coletivamente. Valorização da gestão participativa, onde quem executa a tarefa ajuda a construir a solução e identificar desperdícios.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors"><Zap className="w-5 h-5"/></div>
                          <h5 className="font-bold text-slate-800">Pilar Lean</h5>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed"><strong>Eficiência e Padronização.</strong> Processos inteligentes e livres de desperdício. Compromisso em eliminar retrabalho, tempos de espera e equilibrar demandas através de rotinas claras.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-amber-100 text-amber-600 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors"><Layers className="w-5 h-5"/></div>
                          <h5 className="font-bold text-slate-800">Pilar Mudança</h5>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed"><strong>Inovação e Flexibilidade.</strong> Abertura a novas tecnologias e automatizações. Evoluir práticas de sucesso e manter a adaptabilidade frente aos desafios futuros.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {planoTab === 'cenario' && (
                <div className="space-y-6 animate-in fade-in">
                  <p className="text-slate-600 text-sm bg-blue-50 p-4 rounded-xl border border-blue-100">O mapeamento de cenário foi realizado com escuta ativa da equipe, identificando os principais ofensores e potencializadores do nosso ambiente de trabalho, embasando as nossas estratégias ofensivas e defensivas.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl border border-emerald-200 shadow-sm overflow-hidden">
                      <div className="bg-emerald-50 border-b border-emerald-200 p-3 px-5 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-emerald-600"/>
                        <h4 className="font-bold text-emerald-800">Forças (Ambiente Interno)</h4>
                      </div>
                      <ul className="p-5 space-y-3 text-sm text-slate-700">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></div> Capacidade técnica e disponibilidade dos servidores.</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></div> Ambiente de trabalho colaborativo, saudável e empático.</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></div> Estrutura física adequada e equipamentos modernos.</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl border border-rose-200 shadow-sm overflow-hidden">
                      <div className="bg-rose-50 border-b border-rose-200 p-3 px-5 flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-rose-600"/>
                        <h4 className="font-bold text-rose-800">Fraquezas (Ambiente Interno)</h4>
                      </div>
                      <ul className="p-5 space-y-3 text-sm text-slate-700">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></div> Resistência e desconfiança naturais frente a mudanças estruturais.</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></div> Carência de treinamento avançado para extrair o máximo do sistema e-Proc.</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></div> Vícios e ineficiências em modelos de minutas e fluxos de longa data.</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl border border-blue-200 shadow-sm overflow-hidden">
                      <div className="bg-blue-50 border-b border-blue-200 p-3 px-5 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-blue-600"/>
                        <h4 className="font-bold text-blue-800">Oportunidades (Ambiente Externo)</h4>
                      </div>
                      <ul className="p-5 space-y-3 text-sm text-slate-700">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5"></div> Capacitação contínua em reuniões para troca de experiências.</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5"></div> Automatização de rotinas para melhorar números na Corregedoria e atuar como "Vara Piloto".</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5"></div> Apoio logístico e de infraestrutura dos setores de manutenção.</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl border border-amber-200 shadow-sm overflow-hidden">
                      <div className="bg-amber-50 border-b border-amber-200 p-3 px-5 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-600"/>
                        <h4 className="font-bold text-amber-800">Ameaças (Ambiente Externo)</h4>
                      </div>
                      <ul className="p-5 space-y-3 text-sm text-slate-700">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></div> Instabilidade e lentidão do sistema e-Proc prejudicando a produtividade.</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></div> Contabilização de dias não-úteis no Painel Corregedoria gerando pressão desproporcional.</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></div> Pressão puramente quantitativa desfocando a equipe da Missão qualitativa.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {planoTab === 'projetos' && (
                <div className="space-y-6 animate-in fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                      <h4 className="font-bold text-indigo-800 text-sm mb-1 uppercase tracking-wider">Gestão do Valor Humano</h4>
                      <p className="text-xs text-indigo-600"><strong>Iniciativa Nossa Causa:</strong> Foco no pilar social e externo.<br/><strong>Iniciativa Excelências:</strong> Foco no pilar equipe e interno.</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-xl border border-teal-100">
                      <h4 className="font-bold text-teal-800 text-sm mb-1 uppercase tracking-wider">Gestão de Processos</h4>
                      <p className="text-xs text-teal-600"><strong>Iniciativa Qualidade:</strong> Foco em melhoria contínua (Lean).<br/><strong>Iniciativa i9:</strong> Foco na quebra de paradigmas e inovação.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <table className="w-full text-left text-sm text-slate-700">
                      <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                        <tr>
                          <th className="p-4 font-semibold w-1/4">Projeto</th>
                          <th className="p-4 font-semibold w-1/2">Objetivo Principal</th>
                          <th className="p-4 font-semibold w-1/4">Iniciativa Mestre</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-blue-700">P01. Avaliação de Atendimento</td>
                          <td className="p-4">Monitorar a satisfação do usuário externo com a unidade.</td>
                          <td className="p-4"><span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs font-bold">Nossa Causa</span></td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-blue-700">P02. Gestão à Vista</td>
                          <td className="p-4">Publicizar dados e dar transparência aos processos internos.</td>
                          <td className="p-4"><span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs font-bold">Nossa Causa</span></td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-blue-700">P03. Projeto CNJ 100%</td>
                          <td className="p-4">Gestão preditiva de dados para otimização das Metas do CNJ.</td>
                          <td className="p-4"><span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-md text-xs font-bold">Qualidade</span></td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-blue-700">P04. Ações Coletivas (CACOL)</td>
                          <td className="p-4">Priorização e maximização da baixa e sentenças em coletivas.</td>
                          <td className="p-4"><span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-md text-xs font-bold">Qualidade</span></td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-blue-700">P05. Fluxo Eficiente</td>
                          <td className="p-4">Mapeamento e padronização "Lean" das rotinas cartorárias.</td>
                          <td className="p-4"><span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-md text-xs font-bold">Qualidade</span></td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-blue-700">P06. Projeto Conquistas</td>
                          <td className="p-4">Reconhecimento contínuo, feedback e alinhamento de equipe.</td>
                          <td className="p-4"><span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs font-bold">Excelências</span></td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-blue-700">P07. Matriz de Competências</td>
                          <td className="p-4">Alocação inteligente (CHA) priorizando a aptidão do servidor.</td>
                          <td className="p-4"><span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs font-bold">Excelências</span></td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-blue-700">P08. Instrução Concentrada</td>
                          <td className="p-4">Adequação aos ritos unificados dos Juizados (Ato nº 1/2025).</td>
                          <td className="p-4"><span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs font-bold">Nossa Causa</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        <header className="bg-white min-h-[110px] pt-16 pb-4 border-b border-slate-200 px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between shrink-0 relative z-10">
          <h1 className="text-xl font-bold text-slate-800 truncate mb-2 sm:mb-0">
            {activeTab === 'comparativo' && 'Visão Comparativa: Metas, Acervo e Produtividade'}
            {activeTab === 'historico' && 'Histórico de Desempenho Exclusivo'}
            {activeTab === 'kpi' && 'Key Performance Indicators (09VF)'}
            {activeTab === 'relatorio' && 'Relatório Analítico de Gestão (09VF)'}
          </h1>
          
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto mt-2 sm:mt-0 mr-12 sm:mr-6 lg:mr-10">
            <Calendar className="w-4 h-4 text-slate-400" />
            <select 
              value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 outline-none cursor-pointer flex-1 sm:flex-none shadow-sm hover:border-blue-300 transition-colors"
            >
              {Object.keys(dataStore).sort((a,b) => b.localeCompare(a)).map(monthKey => (
                <option key={monthKey} value={monthKey}>{formatMonthName(monthKey)}</option>
              ))}
            </select>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto pb-10">
            {activeTab === 'comparativo' && (
              <div className="mb-6 flex flex-wrap gap-2 items-center bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <Filter className="w-4 h-4 text-slate-400 ml-2 mr-1" />
                {currentMonthData.map(vara => {
                  const isSelected = selectedVaras.includes(vara.id);
                  return (
                    <button
                      key={vara.id} onClick={() => {
                        if (isSelected && selectedVaras.length > 1) setSelectedVaras(selectedVaras.filter(v => v !== vara.id));
                        else if (!isSelected) setSelectedVaras([...selectedVaras, vara.id]);
                      }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
                        isSelected ? (vara.id === '9' ? 'bg-blue-800 text-white border-blue-800' : 'bg-slate-700 text-white border-slate-700') 
                        : 'bg-slate-50 text-slate-400 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: isSelected ? (vara.id === '9' ? '#1e3a8a' : vara.color) : '#cbd5e1' }} />
                      {vara.id.padStart(2, '0')}VF
                    </button>
                  )
                })}
              </div>
            )}

            {activeTab === 'comparativo' && renderComparativo()}
            {activeTab === 'historico' && renderHistorico()}
            {activeTab === 'kpi' && renderKPI()}
            {activeTab === 'relatorio' && renderRelatorio()}
          </div>
        </main>
      </div>
    </div>
  );
}
