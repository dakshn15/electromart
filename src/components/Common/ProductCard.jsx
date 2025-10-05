
import React from "react";
import { useCart } from "../../context/CartContext";
import { useCompare } from "../../context/CompareContext";
import { useWishlist } from "../../context/WishlistContext";
import { Link, useNavigate } from "react-router-dom";

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={"full-"+i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      ))}
      {halfStar && (
        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stopColor="#facc15"/><stop offset="50%" stopColor="#d1d5db"/></linearGradient></defs><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="url(#half)"/></svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={"empty-"+i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { dispatch: cartDispatch, cart } = useCart();
  const { dispatch: compareDispatch, compare } = useCompare();
  const { dispatch: wishlistDispatch, wishlist } = useWishlist();
  const isWishlisted = wishlist.some(item => item.id === product.id);
  const isCompared = compare.some(item => item.id === product.id);
  const navigate = useNavigate();

  const inCart = cart && cart.some(item => item.id === product.id);
  const handleAddToCart = () => {
    if (!product.inStock) return;
    if (!inCart) {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: {
          ...product,
          quantity: 1,
          price: product.price,
        },
      });
    }
  };

  const handleWishlistClick = () => {
    if (isWishlisted) {
      navigate('/wishlist');
    } else {
      wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
    }
  };

  const handleCompareClick = () => {
    if (isCompared) {
      navigate('/compare');
    } else {
      compareDispatch({ type: "ADD_TO_COMPARE", payload: product });
    }
  };
  // ...existing code...

  return (
    <div className="card product-card flex flex-col h-full group">
      <div className="product-image relative h-48 bg-gray-100 overflow-hidden">
        <Link to={product.link}>
          <img src={product.image} alt={product.name} className="w-full h-full object-contain p-4" />
        </Link>
        {product.badge && (
          <div className={
            product.badge.type === "sale"
              ? "absolute top-4 left-4 bg-red-500 text-white text-xs font-medium px-2.5 py-0.5 rounded"
              : "absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2.5 py-0.5 rounded"
          }>
            {product.badge.text}
          </div>
        )}
        <div className="pro-btn-wrapper absolute top-4 right-4 flex flex-col gap-3 transition-all duration-300 lg:translate-x-[200%] lg:group-hover:translate-0">
          <button
            className={`wishlist-btn shadow-lg border !border-primary h-8 w-8 rounded flex items-center justify-center transition-all duration-300 ${isWishlisted ? 'bg-white text-primary' : 'bg-primary hover:bg-primary/80 text-white'}`}
            onClick={handleWishlistClick}
            title={isWishlisted ? 'View Wishlist' : 'Add to Wishlist'}
          >
            {/* Heart SVG */}
            {isWishlisted ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="currentColor"><path d="M8.5 14.335c-.22 0-.432-.028-.609-.092C5.185 13.315.886 10.022.886 5.155c0-2.479 2.004-4.491 4.469-4.491 1.197 0 2.316.467 3.145 1.303.829-.836 1.948-1.303 3.145-1.303 2.465 0 4.47 2.019 4.47 4.491 0 4.873-4.3 8.16-7.006 9.088-.177.064-.39.092-.609.092z"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="currentColor"><path d="M8.50033 14.3354C8.28074 14.3354 8.06824 14.3071 7.89116 14.2433C5.18533 13.3154 0.885742 10.0216 0.885742 5.15538C0.885742 2.67622 2.89033 0.664551 5.35533 0.664551C6.55241 0.664551 7.67158 1.13205 8.50033 1.96788C9.32908 1.13205 10.4482 0.664551 11.6453 0.664551C14.1103 0.664551 16.1149 2.6833 16.1149 5.15538C16.1149 10.0287 11.8153 13.3154 9.10949 14.2433C8.93241 14.3071 8.71991 14.3354 8.50033 14.3354ZM5.35533 1.72705C3.47824 1.72705 1.94824 3.26413 1.94824 5.15538C1.94824 9.9933 6.60199 12.685 8.23824 13.2446C8.36574 13.2871 8.64199 13.2871 8.76949 13.2446C10.3987 12.685 15.0595 10.0004 15.0595 5.15538C15.0595 3.26413 13.5295 1.72705 11.6524 1.72705C10.5757 1.72705 9.57699 2.22997 8.93241 3.10122C8.73408 3.37038 8.28074 3.37038 8.08241 3.10122C7.42366 2.22288 6.43199 1.72705 5.35533 1.72705Z" fill="currentColor"></path></svg>
            )}
          </button>
          <button
            className={`compare-btn shadow-lg border !border-primary h-8 w-8 rounded flex items-center justify-center transition-all duration-300 ${isCompared ? 'bg-white text-primary' : 'bg-primary hover:bg-primary/80 text-white'}`}
            title={isCompared ? 'View Compare' : 'Add to Compare'}
            onClick={handleCompareClick}
          >
            {/* Compare SVG */}
            {isCompared ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="currentColor"><rect x="2" y="6" width="13" height="5" rx="2"/><rect x="5" y="2" width="7" height="3" rx="1.5"/><rect x="5" y="12" width="7" height="3" rx="1.5"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="currentColor"><path d="M15.5837 16.1147H1.41699C1.12658 16.1147 0.885742 15.8739 0.885742 15.5835C0.885742 15.2931 1.12658 15.0522 1.41699 15.0522H15.5837C15.8741 15.0522 16.1149 15.2931 16.1149 15.5835C16.1149 15.8739 15.8741 16.1147 15.5837 16.1147Z" fill="currentColor"></path><path d="M10.0938 16.1144H6.90625C6.61583 16.1144 6.375 15.8736 6.375 15.5832V2.83317C6.375 1.61484 7.04792 0.885254 8.18125 0.885254H8.81875C9.95208 0.885254 10.625 1.61484 10.625 2.83317V15.5832C10.625 15.8736 10.3842 16.1144 10.0938 16.1144ZM7.4375 15.0519H9.5625V2.83317C9.5625 2.01859 9.18 1.94775 8.81875 1.94775H8.18125C7.82 1.94775 7.4375 2.01859 7.4375 2.83317V15.0519Z" fill="currentColor"></path><path d="M4.95833 16.1144H2.125C1.83458 16.1144 1.59375 15.8736 1.59375 15.5832V7.08317C1.59375 5.86484 2.21708 5.13525 3.25833 5.13525H3.825C4.86625 5.13525 5.48958 5.86484 5.48958 7.08317V15.5832C5.48958 15.8736 5.24875 16.1144 4.95833 16.1144ZM2.65625 15.0519H4.42708V7.08317C4.42708 6.19775 4.0375 6.19775 3.825 6.19775H3.25833C3.04583 6.19775 2.65625 6.19775 2.65625 7.08317V15.0519Z" fill="currentColor"></path><path d="M14.8753 16.1147H12.042C11.7516 16.1147 11.5107 15.8739 11.5107 15.5835V10.6252C11.5107 9.40683 12.1341 8.67725 13.1753 8.67725H13.742C14.7832 8.67725 15.4066 9.40683 15.4066 10.6252V15.5835C15.4066 15.8739 15.1657 16.1147 14.8753 16.1147ZM12.5732 15.0522H14.3441V10.6252C14.3441 9.73975 13.9545 9.73975 13.742 9.73975H13.1753C12.9628 9.73975 12.5732 9.73975 12.5732 10.6252V15.0522Z" fill="currentColor"></path></svg>
            )}
          </button>
        </div>
      </div>
      <div className="product-content flex-1 h-full flex flex-col">
        <div className="p-4 flex-1">
          <div className="text-sm text-gray-500 mb-2">{product.category}</div>
          <h3 className="font-medium text-gray-900 mb-1 lg:text-xl text-lg">
            <Link to={product.link}>{product.name}</Link>
          </h3>
          <div className="flex items-center mt-2">
            <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>
          <div className="flex items-center mt-2">
            {renderStars(product.rating)}
            <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
          </div>
        </div>
        <div className="border-t p-4">
          {product.inStock ? (
            <button
              className={`w-full btn-primary flex items-center justify-center gap-2 ${inCart ? "opacity-60 cursor-not-allowed" : ""}`}
              onClick={handleAddToCart}
              title={inCart ? "Added to Cart" : "Add to Cart"}
              disabled={inCart}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              {inCart ? "Added to Cart" : "Add to Cart"}
            </button>
          ) : (
            <button
              className="w-full flex items-center justify-center gap-2 bg-red-100 text-red-500 font-semibold rounded-lg border border-red-200 py-2 px-5 !cursor-not-allowed"
              disabled
              title="Out of Stock"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><line x1="8" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="2"/><line x1="16" y1="8" x2="8" y2="16" stroke="currentColor" strokeWidth="2"/></svg>
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 