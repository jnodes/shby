import React, { useState } from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export const RelicGallery = () => {
  // Relic data for all 12 relics
  const relics = [
    {
      id: '001',
      lotNumber: '001',
      title: 'AN EXCEPTIONALLY RARE RU KILN SUNFLOWER-FORM WASHER',
      chinese: '北宋 汝官窯天青釉葵花洗',
      dynasty: 'Northern Song Dynasty',
      dynastyPeriod: '1086-1106',
      mainImage: '/images/relics/001-song-ru-washer/main.jpg',
      aiEvaluation: 'Est. $45,000,000',
      verificationStatus: 'In Verification Pipeline',
    },
    {
      id: '002',
      lotNumber: '002',
      title: 'SONG DYNASTY RU KILN BOTTLE',
      chinese: '宋 汝窯青瓷膽瓶',
      dynasty: 'Northern Song Dynasty',
      dynastyPeriod: '1086-1106',
      mainImage: '/images/relics/002-song-ru-bottle/main.jpg',
      aiEvaluation: 'Est. $28,000,000',
      verificationStatus: 'In Verification Pipeline',
    },
    {
      id: '003',
      lotNumber: '003',
      title: 'MING DYNASTY CLOISONNÉ ENAMEL JAR',
      chinese: '明 景泰藍花鳥紋梅瓶',
      dynasty: 'Ming Dynasty',
      dynastyPeriod: '1425-1435',
      mainImage: '/images/relics/003-ming-cloisonne/main.jpg',
      aiEvaluation: 'Est. $12,500,000',
      verificationStatus: 'In Verification Pipeline',
    },
    {
      id: '004',
      lotNumber: '004',
      title: 'YUAN DYNASTY JILAN EWER',
      chinese: '元 鈞窯玫瑰紫釉花觚',
      dynasty: 'Yuan Dynasty',
      dynastyPeriod: '1271-1368',
      mainImage: '/images/relics/004-yuan-jilan-ewer/main.jpg',
      aiEvaluation: 'Est. $8,200,000',
      verificationStatus: 'In Verification Pipeline',
    },
    {
      id: '005',
      lotNumber: '005',
      title: 'MING DYNASTY JINGTAI CASKET',
      chinese: '明 景泰款掐絲琺琅盒',
      dynasty: 'Ming Dynasty',
      dynastyPeriod: '1450-1456',
      mainImage: '/images/relics/005-ming-jingtai-casket/main.jpg',
      aiEvaluation: 'Est. $15,800,000',
      verificationStatus: 'In Verification Pipeline',
    },
    {
      id: '006',
      lotNumber: '006',
      title: 'YUAN DYNASTY CELADON GLAZED JAR',
      chinese: '元 龍泉窯青瓷梅瓶',
      dynasty: 'Yuan Dynasty',
      dynastyPeriod: '1271-1368',
      mainImage: '/images/relics/006-yuan-celadon-glazed-jar/main.jpeg',
      aiEvaluation: 'Est. $6,400,000',
      verificationStatus: 'In Verification Pipeline',
    },
    {
      id: '007',
      lotNumber: '007',
      title: 'FLORAL HARMONY VASE',
      chinese: '清 珐琅彩花卉紋瓶',
      dynasty: 'Qing Dynasty',
      dynastyPeriod: '1722-1735',
      mainImage: '/images/relics/007-floral-harmony-vase/main.jpg',
      aiEvaluation: 'Est. $9,600,000',
      verificationStatus: 'In Verification Pipeline',
    },
    {
      id: '008',
      lotNumber: '008',
      title: 'IMPERIAL LOTUS BOTTLE',
      chinese: '清 乾隆款粉彩蓮花紋膽瓶',
      dynasty: 'Qing Dynasty',
      dynastyPeriod: '1735-1796',
      mainImage: '/images/relics/008-imperial-lotus-bottle/main.jpg',
      aiEvaluation: 'Est. $7,300,000',
      verificationStatus: 'In Verification Pipeline',
    },
    {
      id: '009',
      lotNumber: '009',
      title: 'IMPERIAL CLOISONNÉ TRIPOD',
      chinese: '明 宣德款掐絲琺琅三足爐',
      dynasty: 'Ming Dynasty',
      dynastyPeriod: '1425-1435',
      mainImage: '/images/relics/009-imperial-cloisonne-tripod/main.jpg',
      aiEvaluation: 'Est. $11,200,000',
      verificationStatus: 'In Verification Pipeline',
    },
    {
      id: '010',
      lotNumber: '010',
      title: 'JUNYAO OCTAGON VESSEL',
      chinese: '宋 鈞窯天藍釉八方盆',
      dynasty: 'Song Dynasty',
      dynastyPeriod: '1110-1127',
      mainImage: '/images/relics/010-junyao-octagon-vessel/main.jpeg',
      aiEvaluation: 'Est. $13,700,000',
      verificationStatus: 'In Verification Pipeline',
    },
    {
      id: '011',
      lotNumber: '011',
      title: 'YUAN BLUE & WHITE PORCELAIN POT',
      chinese: '元 青花雲龍紋梅瓶',
      dynasty: 'Yuan Dynasty',
      dynastyPeriod: '1300-1350',
      mainImage: '/images/relics/011-yuan-blue-white-porcelain-pot/main.jpeg',
      aiEvaluation: 'Est. $18,900,000',
      verificationStatus: 'In Verification Pipeline',
    },
    {
      id: '012',
      lotNumber: '012',
      title: 'RU KILN YUHU CHUN VASE',
      chinese: '北宋 汝窯天青釉玉壺春瓶',
      dynasty: 'Northern Song Dynasty',
      dynastyPeriod: '1086-1106',
      mainImage: '/images/relics/012-ru-kiln-yuhuchun-vase/main.jpeg',
      aiEvaluation: 'Est. $32,000,000',
      verificationStatus: 'In Verification Pipeline',
    },
  ];

  const [hoveredRelic, setHoveredRelic] = useState(null);

  return (
    <section id="relic-gallery" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="glass border-warning/30 mb-4">
            <Shield className="w-4 h-4 mr-2 inline" />
            Verification Pipeline
          </Badge>
          <h2 className="font-serif font-bold mb-6">
            <span className="text-gradient-gold">Relic Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our collection of cultural treasures in the verification pipeline. These artifacts are undergoing authentication by our autonomous AI agents.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
          {relics.map((relic) => (
            <div key={relic.id} className="mb-6 break-inside-avoid">
              <Card 
                className="glass border-card-border hover-lift transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setHoveredRelic(relic.id)}
                onMouseLeave={() => setHoveredRelic(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={relic.mainImage}
                    alt={relic.title}
                    className="w-full h-auto object-cover transition-transform duration-500"
                    style={{ transform: hoveredRelic === relic.id ? 'scale(1.05)' : 'scale(1)' }}
                  />
                  
                  {/* Verification Badge */}
                  <div className="absolute top-3 left-3 glass px-2 py-1 rounded-lg border border-warning/10 bg-background/40 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-warning" />
                      <span className="text-xs font-medium text-warning">In Pipeline</span>
                    </div>
                  </div>
                  
                  {/* AI Evaluation */}
                  <div className="absolute bottom-3 left-3 glass px-2 py-1 rounded-lg border border-secondary/10 bg-background/40 backdrop-blur-sm">
                    <span className="text-xs font-medium text-foreground">{relic.aiEvaluation}</span>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="border-primary/30 text-primary-glow text-xs">
                      Lot #{relic.lotNumber}
                    </Badge>
                    <Badge variant="outline" className="border-warning/30 text-warning text-xs">
                      {relic.dynasty}
                    </Badge>
                  </div>
                  
                  <h3 className="font-serif font-semibold text-foreground mb-1 line-clamp-2">
                    {relic.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
                    {relic.chinese}
                  </p>
                  
                  <p className="text-xs text-muted-foreground">
                    {relic.dynastyPeriod}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 glass border border-card-border rounded-lg text-foreground font-medium hover:bg-primary/10 transition-colors duration-300">
            View Complete Collection
          </button>
        </div>
      </div>
    </section>
  );
};