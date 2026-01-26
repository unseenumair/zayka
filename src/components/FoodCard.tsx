import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { FoodItem } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';
import ImagePlaceholder from './ImagePlaceholder';

interface FoodCardProps {
  item: FoodItem;
  featured?: boolean;
}

const FoodCard: React.FC<FoodCardProps> = ({ item, featured = false }) => {
  const { items, addItem } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  const isInCart = items.some((i) => i.id === item.id);
  const cartItem = items.find((i) => i.id === item.id);

  return (
    <div className={`zayka-card group overflow-hidden ${featured ? 'flex flex-col' : ''}`}>
      {/* Image */}
      <div className="food-image-overlay relative aspect-square overflow-hidden">
        {!imageLoaded && <ImagePlaceholder />}
        <img
          src={item.image}
          alt={item.name}
          className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
        <p className="mt-1 line-clamp-2 flex-1 text-sm text-muted-foreground">
          {item.description}
        </p>

        {/* Price & Add to Cart */}
        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="text-xl font-bold text-primary">
            Rs. {item.price}
          </span>

          <button
            onClick={() => addItem(item)}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
              isInCart
                ? 'bg-accent text-accent-foreground'
                : 'zayka-btn-accent'
            }`}
          >
            {isInCart ? (
              <>
                <Check className="h-4 w-4" />
                <span>{cartItem?.quantity}</span>
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
