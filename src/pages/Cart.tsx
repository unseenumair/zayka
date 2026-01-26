import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import Footer from "@/components/Footer";

const Cart: React.FC = () => {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } =
    useCart();
  const [specialNote, setSpecialNote] = useState("");

  const handlePlaceOrder = () => {
    if (items.length === 0) return;

    // Format order message
    const orderItems = items
      .map(
        (item) =>
          `• ${item.name} x${item.quantity} = Rs. ${item.price * item.quantity}`
      )
      .join("%0A");

    const totalText = `%0A%0A*Total: Rs. ${totalPrice}*`;
    const noteText = specialNote
      ? `%0A%0ANote: ${encodeURIComponent(specialNote)}`
      : "";
    const greeting = `Assalam o Alaikum! 🍕%0A%0AI would like to place an order:%0A%0A`;

    const message = `${greeting}${orderItems}${totalText}${noteText}%0A%0APlaced order from Zayka ✨`;

    // WhatsApp redirect
    window.open(`https://wa.me/+923284256840?text=${message}`, "_blank");
  };

  if (items.length === 0) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] flex-col">
        <div className="container flex flex-1 flex-col items-center justify-center py-16 text-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
          <h2 className="font-urdu text-2xl font-bold text-foreground md:text-3xl">
            کارٹ خالی ہے
          </h2>
          <p className="mt-2 text-muted-foreground">Your cart is empty</p>
          <Link to="/foods" className="zayka-btn-primary mt-6">
            <span className="font-urdu">مینو دیکھیں</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/foods"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Continue Shopping</span>
          </Link>
          <h1 className="mt-4 font-urdu text-3xl font-bold text-foreground md:text-4xl">
            آپ کا آرڈر
          </h1>
          <p className="text-muted-foreground">Your Order</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="zayka-card flex gap-4 p-4 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Rs. {item.price} each
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors hover:bg-secondary/80"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors hover:bg-secondary/80"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-bold text-primary">
                          Rs. {item.price * item.quantity}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground transition-colors hover:text-accent"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Note */}
            <div className="mt-6">
              <label className="mb-2 block font-semibold text-foreground">
                Special Instructions (Optional)
              </label>
              <textarea
                value={specialNote}
                onChange={(e) => setSpecialNote(e.target.value)}
                placeholder="Any special requests? e.g., extra spicy, no onions..."
                rows={3}
                className="resize-none w-full rounded-2xl border border-border bg-card p-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="zayka-card sticky top-24 p-6">
              <h2 className="font-urdu text-xl font-semibold text-foreground">
                آرڈر کا خلاصہ
              </h2>
              <p className="text-sm text-muted-foreground">Order Summary</p>

              <div className="my-6 space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-medium text-foreground">
                      Rs. {item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary">Rs. {totalPrice}</span>
                </div>
              </div>

              {/* Payment Note */}
              <div className="mt-4 rounded-xl bg-primary/10 p-3 text-center">
                <p className="text-sm font-medium text-foreground">
                  💵 Cash on Delivery
                </p>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                className="zayka-btn-accent mt-6 w-full justify-center text-lg"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-urdu">آرڈر بھیجیں</span>
              </button>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                You'll be redirected to WhatsApp to complete your order
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
