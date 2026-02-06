const platforms = [
  { name: "Amazon", logo: "/platforms/amazon.png" },
  { name: "eBay", logo: "/platforms/ebay.png" },
  { name: "Walmart", logo: "/platforms/walmart.png" },
  { name: "Etsy", logo: "/platforms/etsy.png" },
  { name: "Shopify", logo: "/platforms/shopify.png" },
  { name: "Alibaba", logo: "/platforms/alibaba.png" },
  { name: "AliExpress", logo: "/platforms/aliexpress.png" },
  { name: "Flipkart", logo: "/platforms/flipkart.png" },
];

export function PlatformsMarquee() {
  return (
    <section className="py-14 bg-[#3b2a1f] overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <p className="text-center text-[#E6D8C7] text-sm uppercase tracking-widest">
          E-Commerce Platforms We Support
        </p>
      </div>

      <div className="relative">
        <div className="flex items-center marquee">
          {[...platforms, ...platforms].map((platform, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-10 px-10 py-6 bg-white/10 rounded-xl backdrop-blur-md hover:bg-white/20 transition-all duration-300"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
