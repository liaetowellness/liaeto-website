export default function robots(){return {rules:{userAgent:'*',allow:'/',disallow:'/api/'},...(process.env.SITE_URL?{sitemap:process.env.SITE_URL.replace(/\/$/,'')+'/sitemap.xml'}:{})};}
