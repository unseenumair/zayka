import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import FoodCard from '@/components/FoodCard';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { menuData, categories } from '@/data/menuData';

const Foods: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return menuData.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !activeCategory || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const groupedItems = useMemo(() => {
    if (activeCategory) {
      return { [activeCategory]: filteredItems };
    }
    return categories.reduce((acc, category) => {
      const items = filteredItems.filter((item) => item.category === category);
      if (items.length > 0) {
        acc[category] = items;
      }
      return acc;
    }, {} as Record<string, typeof filteredItems>);
  }, [filteredItems, activeCategory]);

  const categoryUrduNames: Record<string, string> = {
    Burgers: 'برگرز',
    Pizza: 'پیزا',
    Biryani: 'بریانی',
    'Other Foods': 'دیگر کھانے',
  };

  return (
    <div className="min-h-screen">
      {/* Search Bar - Sticky */}
      <div className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container py-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search Pakistani cuisine... Biryani, Burgers, Pizza"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-border bg-card py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Search food menu"
            />
          </div>

          {/* Category Filters */}
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                !activeCategory
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container py-8">
        {Object.keys(groupedItems).length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">No items found matching "{searchQuery}"</p>
          </div>
        ) : (
          Object.entries(groupedItems).map(([category, items]) => (
            <section key={category} className="mb-12">
              <AnimatedSection animation="fade-up" className="mb-6">
                <h2 className="font-urdu text-2xl font-bold text-foreground md:text-3xl">
                  {categoryUrduNames[category]}
                </h2>
                <p className="text-muted-foreground">{category}</p>
              </AnimatedSection>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((item, index) => (
                  <AnimatedSection key={item.id} animation="fade-up" delay={index * 50}>
                    <FoodCard item={item} />
                  </AnimatedSection>
                ))}
              </div>
            </section>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Foods;
