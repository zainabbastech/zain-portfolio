// Generate sitemap content
const generateSitemap = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://zainabbas.netlify.app/</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>1.00</priority>
  </url>
</urlset>`;

    // Create a Blob and generate a URL
    const blob = new Blob([sitemapContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);

    // Create a link element to download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.innerText = 'Download Sitemap';
    document.body.appendChild(a);
};

// Call the function to generate the sitemap
generateSitemap();