import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);

const FREE_SHIPPING_THRESHOLD = 199;

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.id === action.payload.id && i.flavor === action.payload.flavor
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id && i.flavor === action.payload.flavor
              ? { ...i, qty: i.qty + action.payload.qty }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload }] };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.id === action.payload.id && i.flavor === action.payload.flavor)
        ),
      };
    case 'UPDATE_QTY': {
      if (action.payload.qty <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (i) => !(i.id === action.payload.id && i.flavor === action.payload.flavor)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id && i.flavor === action.payload.flavor
            ? { ...i, qty: action.payload.qty }
            : i
        ),
      };
    }
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const total = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = state.items.reduce((sum, i) => sum + i.qty, 0);
  const freeShippingLeft = Math.max(0, FREE_SHIPPING_THRESHOLD - total);
  const freeShippingPct = Math.min(100, (total / FREE_SHIPPING_THRESHOLD) * 100);

  const addItem = useCallback((item) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...item, qty: item.qty ?? 1 } });
  }, []);

  const removeItem = useCallback((id, flavor) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, flavor } });
  }, []);

  const updateQty = useCallback((id, flavor, qty) => {
    dispatch({ type: 'UPDATE_QTY', payload: { id, flavor, qty } });
  }, []);

  const clear = useCallback(() => dispatch({ type: 'CLEAR' }), []);

  return (
    <CartContext.Provider
      value={{ items: state.items, total, count, freeShippingLeft, freeShippingPct, addItem, removeItem, updateQty, clear }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
