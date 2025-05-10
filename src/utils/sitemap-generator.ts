
/**
 * Sitemap Generator Utility for the UFP Vision Platform
 * 
 * This utility will generate XML sitemaps for the platform following
 * geo-specific and interplanetary SEO architecture requirements.
 */

interface SitemapURL {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  alternateLanguages?: { hreflang: string; href: string }[];
  geoLocation?: string;
}

export const generateSitemap = (baseUrl: string, urls: SitemapURL[]): string => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:geo="http://www.google.com/geo/schemas/sitemap/1.0"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;

  // Add each URL to the sitemap
  urls.forEach((item) => {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${item.url}</loc>\n`;
    
    // Add optional lastmod
    if (item.lastmod) {
      xml += `    <lastmod>${item.lastmod}</lastmod>\n`;
    }
    
    // Add optional changefreq
    if (item.changefreq) {
      xml += `    <changefreq>${item.changefreq}</changefreq>\n`;
    }
    
    // Add optional priority
    if (item.priority !== undefined) {
      xml += `    <priority>${item.priority}</priority>\n`;
    }
    
    // Add alternate language versions
    if (item.alternateLanguages && item.alternateLanguages.length > 0) {
      item.alternateLanguages.forEach((lang) => {
        xml += `    <xhtml:link rel="alternate" hreflang="${lang.hreflang}" href="${lang.href}" />\n`;
      });
    }
    
    // Add geo location if provided
    if (item.geoLocation) {
      xml += `    <geo:geo>\n`;
      xml += `      <geo:format>${item.geoLocation}</geo:format>\n`;
      xml += `    </geo:geo>\n`;
    }
    
    xml += `  </url>\n`;
  });
  
  xml += `</urlset>`;
  return xml;
};

// Example usage for generating main sitemap
export const generateMainSitemap = (baseUrl: string): string => {
  const languages = ['en', 'es', 'fr', 'zh', 'ar', 'hi'];
  const urls: SitemapURL[] = [
    {
      url: '/',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 1.0,
      alternateLanguages: languages.map(lang => ({
        hreflang: lang,
        href: `${baseUrl}/${lang}/`
      }))
    },
    {
      url: '/onboarding',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.8,
      alternateLanguages: languages.map(lang => ({
        hreflang: lang,
        href: `${baseUrl}/${lang}/onboarding`
      }))
    }
  ];
  
  // Add initiative pages
  const initiatives = [
    'consciousverse-engine',
    'genesis-accords',
    'temporal-democracy-framework',
    'starseed-laboratories',
    'project-aeonNexus',
    'lightforge-ring',
    'exodus-mirror'
  ];
  
  initiatives.forEach(initiative => {
    urls.push({
      url: `/initiatives/${initiative}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.7,
      alternateLanguages: languages.map(lang => ({
        hreflang: lang,
        href: `${baseUrl}/${lang}/initiatives/${initiative}`
      }))
    });
  });
  
  return generateSitemap(baseUrl, urls);
};

/**
 * This function would be used in a build script or API endpoint
 * to generate and save the sitemap.xml file
 */
