import { FoodItem } from '@/contexts/CartContext';

// Import all food images
import zingerBurger from '@/assets/food/zinger-burger.webp';
import beefBurger from '@/assets/food/beef-burger.webp';
import doubleDecker from '@/assets/food/double-decker.webp';
import pepperoniPizza from '@/assets/food/pepperoni-pizza.webp';
import chickenFajita from '@/assets/food/chicken-fajita.webp';
import bbqChicken from '@/assets/food/bbq-chicken.webp';
import chickenBiryani from '@/assets/food/chicken-biryani.webp';
import muttonBiryani from '@/assets/food/mutton-biryani.webp';
import beefBiryani from '@/assets/food/beef-biryani.webp';
import chickenKarahi from '@/assets/food/chicken-karahi.webp';
import seekhKebab from '@/assets/food/seekh-kebab.webp';
import chickenTikka from '@/assets/food/chicken-tikka.webp';
import loadedFries from '@/assets/food/loaded-fries.webp';

export const menuData: FoodItem[] = [
  // Burgers
  {
    id: 'burger-1',
    name: 'Zinger Burger',
    description: 'Crispy fried chicken fillet with special sauce, lettuce, and mayo in a toasted bun',
    price: 450,
    image: zingerBurger,
    category: 'Burgers',
  },
  {
    id: 'burger-2',
    name: 'Beef Burger',
    description: 'Juicy beef patty with cheese, onions, pickles, and house sauce',
    price: 550,
    image: beefBurger,
    category: 'Burgers',
  },
  {
    id: 'burger-3',
    name: 'Double Decker',
    description: 'Two beef patties, double cheese, bacon, and all the toppings',
    price: 750,
    image: doubleDecker,
    category: 'Burgers',
  },

  // Pizza
  {
    id: 'pizza-1',
    name: 'Pepperoni Pizza',
    description: 'Classic pepperoni with mozzarella cheese and tangy tomato sauce',
    price: 850,
    image: pepperoniPizza,
    category: 'Pizza',
  },
  {
    id: 'pizza-2',
    name: 'Chicken Fajita',
    description: 'Loaded with chicken, bell peppers, onions, and special fajita sauce',
    price: 950,
    image: chickenFajita,
    category: 'Pizza',
  },
  {
    id: 'pizza-3',
    name: 'BBQ Chicken',
    description: 'Tender chicken pieces with BBQ sauce, cheese, and fresh vegetables',
    price: 900,
    image: bbqChicken,
    category: 'Pizza',
  },

  // Biryani
  {
    id: 'biryani-1',
    name: 'Chicken Biryani',
    description: 'Aromatic basmati rice with tender chicken, traditional spices, and raita',
    price: 350,
    image: chickenBiryani,
    category: 'Biryani',
  },
  {
    id: 'biryani-2',
    name: 'Mutton Biryani',
    description: 'Premium mutton pieces cooked with fragrant rice and secret spice blend',
    price: 550,
    image: muttonBiryani,
    category: 'Biryani',
  },
  {
    id: 'biryani-3',
    name: 'Beef Biryani',
    description: 'Slow-cooked beef with layered rice, caramelized onions, and herbs',
    price: 450,
    image: beefBiryani,
    category: 'Biryani',
  },

  // Other Foods
  {
    id: 'other-1',
    name: 'Chicken Karahi',
    description: 'Traditional karahi with fresh tomatoes, green chilies, and ginger',
    price: 800,
    image: chickenKarahi,
    category: 'Other Foods',
  },
  {
    id: 'other-2',
    name: 'Seekh Kebab',
    description: 'Spiced minced meat kebabs grilled to perfection, served with naan',
    price: 400,
    image: seekhKebab,
    category: 'Other Foods',
  },
  {
    id: 'other-3',
    name: 'Chicken Tikka',
    description: 'Marinated chicken pieces grilled in tandoor with special spices',
    price: 450,
    image: chickenTikka,
    category: 'Other Foods',
  },
  {
    id: 'other-4',
    name: 'Loaded Fries',
    description: 'Crispy fries topped with cheese sauce, jalapeños, and chicken chunks',
    price: 350,
    image: loadedFries,
    category: 'Other Foods',
  },
];

export const categories = ['Burgers', 'Pizza', 'Biryani', 'Other Foods'];

export const featuredItems = menuData.filter((item) =>
  ['burger-1', 'pizza-2', 'biryani-1', 'other-1'].includes(item.id)
);
