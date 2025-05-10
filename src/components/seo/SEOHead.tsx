
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  geoRegion?: string;
  language?: string;
  schema?: Record<string, any>;
}

export const SEOHead = ({
  title = "United Federation Vision Platform",
  description = "Explore visionary initiatives spanning Earth and beyond. Join the future of interplanetary cooperation and human potential.",
  keywords = [],
  canonicalUrl,
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogType = "website",
  geoRegion = "global",
  language = "en",
  schema,
}: SEOHeadProps) => {
  // Build default keywords with visionary and interplanetary concepts
  const defaultKeywords = [
    "United Federation",
    "future vision",
    "space ethics",
    "interplanetary",
    "human potential",
    "consciousness",
    "sustainable futures",
    "global cooperation",
  ];
  
  const allKeywords = [...defaultKeywords, ...keywords].join(", ");

  // Handle language alternates
  const languages = ["en", "es", "fr", "zh", "ar", "hi"];
  const baseUrl = canonicalUrl ? canonicalUrl.split("/").slice(0, -2).join("/") : "https://ufp-vision.org";
  
  // Build structured data
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "United Federation Vision Platform",
    "url": baseUrl,
    "logo": ogImage,
  };
  
  const schemaData = schema ? { ...defaultSchema, ...schema } : defaultSchema;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={`${language}_${language.toUpperCase()}`} />
      
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Geo Tags */}
      {geoRegion && <meta name="geo.region" content={geoRegion} />}
      
      {/* Language Alternates */}
      {languages.map((lang) => (
        <link key={lang} rel="alternate" hreflang={lang} href={`${baseUrl}/${lang}/`} />
      ))}
      <link rel="alternate" hreflang="x-default" href={baseUrl} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
