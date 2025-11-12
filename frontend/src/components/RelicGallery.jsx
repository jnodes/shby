import React, { useState } from 'react';
import { Shield, CheckCircle2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

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
      detailImages: [
        '/images/relics/001-song-ru-washer/detail-1.jpg',
        '/images/relics/001-song-ru-washer/detail-2.jpg',
        '/images/relics/001-song-ru-washer/detail-3.jpg'
      ],
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
      detailImages: [
        '/images/relics/002-song-ru-bottle/detail-1.jpg',
        '/images/relics/002-song-ru-bottle/detail-2.jpg'
      ],
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
      detailImages: [
        '/images/relics/003-ming-cloisonne/detail-1.jpg',
        '/images/relics/003-ming-cloisonne/detail-2.jpg',
        '/images/relics/003-ming-cloisonne/detail-3.jpg',
        '/images/relics/003-ming-cloisonne/detail-4.jpg'
      ],
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
      detailImages: [
        '/images/relics/004-yuan-jilan-ewer/detail-1.jpg',
        '/images/relics/004-yuan-jilan-ewer/detail-2.jpg',
        '/images/relics/004-yuan-jilan-ewer/detail-3.jpg',
        '/images/relics/004-yuan-jilan-ewer/detail-4.jpg'
      ],
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
      detailImages: [
        '/images/relics/005-ming-jingtai-casket/detail-1.jpg',
        '/images/relics/005-ming-jingtai-casket/detail-2.jpg',
        '/images/relics/005-ming-jingtai-casket/detail-3.jpg',
        '/images/relics/005-ming-jingtai-casket/detail-4.jpg'
      ],
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
      detailImages: [
        '/images/relics/006-yuan-celadon-glazed-jar/detail-1.jpeg',
        '/images/relics/006-yuan-celadon-glazed-jar/detail-2.jpeg',
        '/images/relics/006-yuan-celadon-glazed-jar/detail-3.jpeg',
        '/images/relics/006-yuan-celadon-glazed-jar/detail-4.jpeg'
      ],
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
      detailImages: [
        '/images/relics/007-floral-harmony-vase/detail-1.jpg',
        '/images/relics/007-floral-harmony-vase/detail.2.jpg',
        '/images/relics/007-floral-harmony-vase/detail.3.jpg'
      ],
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
      detailImages: [
        '/images/relics/008-imperial-lotus-bottle/detail-1.jpg',
        '/images/relics/008-imperial-lotus-bottle/detail-2.jpg',
        '/images/relics/008-imperial-lotus-bottle/detail-3.jpg',
        '/images/relics/008-imperial-lotus-bottle/detail-4.jpg'
      ],
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
      detailImages: [
        '/images/relics/009-imperial-cloisonne-tripod/detail-1.jpg',
        '/images/relics/009-imperial-cloisonne-tripod/detail-2.jpg',
        '/images/relics/009-imperial-cloisonne-tripod/detail.3.jpg'
      ],
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
      detailImages: [
        '/images/relics/010-junyao-octagon-vessel/detail-1.jpeg',
        '/images/relics/010-junyao-octagon-vessel/detail-2.jpeg',
        '/images/relics/010-junyao-octagon-vessel/detail-3.jpeg',
        '/images/relics/010-junyao-octagon-vessel/detail-4.jpeg'
      ],
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
      detailImages: [
        '/images/relics/011-yuan-blue-white-porcelain-pot/detail-1.jpeg',
        '/images/relics/011-yuan-blue-white-porcelain-pot/detail-2.jpeg',
        '/images/relics/011-yuan-blue-white-porcelain-pot/detail-3.jpeg',
        '/images/relics/011-yuan-blue-white-porcelain-pot/detail.4.jpeg'
      ],
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
      detailImages: [
        '/images/relics/012-ru-kiln-yuhuchun-vase/detail-1.jpeg',
        '/images/relics/012-ru-kiln-yuhuchun-vase/detail-2.jpeg',
        '/images/relics/012-ru-kiln-yuhuchun-vase/detail-3.jpeg',
        '/images/relics/012-ru-kiln-yuhuchun-vase/detail-4.jpeg'
      ],
      aiEvaluation: 'Est. $32,000,000',
      verificationStatus: 'In Verification Pipeline',
    },
  ];

  const [hoveredRelic, setHoveredRelic] = useState(null);
  const [selectedRelic, setSelectedRelic] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
            Explore our collection of museum-grade assets in the verification pipeline. These fine art and collectibles are undergoing authentication by our autonomous AI agents.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
          {relics.map((relic) => (
            <div key={relic.id} className="mb-6 break-inside-avoid">
              <Dialog>
                <DialogTrigger asChild>
                  <Card 
                    className="glass border-card-border hover-lift transition-all duration-300 overflow-hidden cursor-pointer"
                    onMouseEnter={() => setHoveredRelic(relic.id)}
                    onMouseLeave={() => setHoveredRelic(null)}
                    onClick={() => {
                      setSelectedRelic(relic);
                      setCurrentImageIndex(0);
                    }}
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
                </DialogTrigger>
                
                {/* Image Modal */}
                <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden glass border-card-border">
                  <div className="relative h-[70vh]">
                    {selectedRelic && (
                      <>
                        {/* Main Image Display */}
                        <img
                          src={currentImageIndex === 0 
                            ? selectedRelic.mainImage 
                            : selectedRelic.detailImages[currentImageIndex - 1]}
                          alt={`${selectedRelic.title} - View ${currentImageIndex}`}
                          className="w-full h-full object-contain"
                        />
                        
                        {/* Navigation Arrows */}
                        <button
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 glass p-2 rounded-full hover:bg-primary/20 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(prev => 
                              (prev - 1 + (selectedRelic.detailImages.length + 1)) % (selectedRelic.detailImages.length + 1)
                            );
                          }}
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        
                        <button
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 glass p-2 rounded-full hover:bg-primary/20 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(prev => 
                              (prev + 1) % (selectedRelic.detailImages.length + 1)
                            );
                          }}
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                        
                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 glass px-3 py-1 rounded-full">
                          <span className="text-sm font-medium">
                            {currentImageIndex + 1} / {selectedRelic.detailImages.length + 1}
                          </span>
                        </div>
                        
                        {/* Close Button */}
                        <button
                          className="absolute top-4 right-4 glass p-2 rounded-full hover:bg-primary/20 transition-colors"
                          onClick={() => setSelectedRelic(null)}
                        >
                          <X className="w-6 h-6" />
                        </button>
                        
                        {/* Relic Info */}
                        <div className="absolute bottom-0 left-0 right-0 glass p-4">
                          <h3 className="font-serif font-semibold text-foreground mb-1">
                            {selectedRelic.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {selectedRelic.chinese}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  <div className="p-4 bg-background/50">
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      <button
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${currentImageIndex === 0 ? 'border-secondary shadow-gold' : 'border-border hover:border-primary-glow'}`}
                        onClick={() => setCurrentImageIndex(0)}
                      >
                        <img
                          src={selectedRelic?.mainImage}
                          alt="Main view"
                          className="w-full h-full object-cover"
                        />
                      </button>
                      
                      {selectedRelic?.detailImages.map((image, index) => (
                        <button
                          key={index}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${currentImageIndex === index + 1 ? 'border-secondary shadow-gold' : 'border-border hover:border-primary-glow'}`}
                          onClick={() => setCurrentImageIndex(index + 1)}
                        >
                          <img
                            src={image}
                            alt={`Detail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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