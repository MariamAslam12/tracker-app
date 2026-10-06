import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

import {
  ShoppingBag,
  Plus,
  Minus,
  RotateCcw,
  User,
  Headphones,
  Sparkles,
  ShoppingCart,
} from "lucide-react";

export const ShoppingQuantityTracker: React.FC = () => {

  // ==========================================
  // CUSTOMER NAME
  // ==========================================

  const [customerName, setCustomerName] = useState<string>("");

  const inputRef = useRef<HTMLInputElement | null>(null);


  // ==========================================
  // QUANTITY
  // ==========================================

  const [quantity, setQuantity] = useState<number>(0);


  // ==========================================
  // PRODUCT DETAILS
  // ==========================================

  const productName = "Wireless Headphones";

  const price = 25;


  // ==========================================
  // TOTAL PRICE
  // ==========================================

  const totalPrice = quantity * price;


  // ==========================================
  // UPDATE BROWSER TITLE
  // ==========================================

  useEffect(() => {
    document.title = `Cart: ${quantity} ${
      quantity === 1 ? "Item" : "Items"
    }`;
  }, [quantity]);


  // ==========================================
  // ADD ITEM
  // ==========================================

  const handleAddItem = () => {
    setQuantity((prev) => prev + 1);
  };


  // ==========================================
  // REMOVE ITEM
  // ==========================================

  const handleRemoveItem = () => {
    setQuantity((prev) => Math.max(0, prev - 1));
  };


  // ==========================================
  // RESET CART
  // ==========================================

  const handleResetCart = () => {
    setQuantity(0);
  };


  // ==========================================
  // FOCUS INPUT
  // ==========================================

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };


  // ==========================================
  // STATUS MESSAGE
  // ==========================================

  const getStatusMessage = () => {

    if (quantity === 0) {
      return "Your cart is empty";
    }

    if (quantity >= 1 && quantity <= 4) {
      return "Items added to cart";
    }

    return "Bulk Order 🎉";
  };


  return (

    <main className="shopping-page">

      {/* ======================================
          CINEMATIC BACKGROUND
      ======================================= */}

      <div className="shopping-background">

        {/* Actual background image */}
        <div className="shopping-background-image" />

        {/* Dark overlay */}
        <div className="shopping-background-overlay" />

        {/* Moving light */}
        <div className="shopping-light shopping-light-one" />
        <div className="shopping-light shopping-light-two" />

        {/* Floating particles */}
        <span className="shopping-particle particle-1" />
        <span className="shopping-particle particle-2" />
        <span className="shopping-particle particle-3" />
        <span className="shopping-particle particle-4" />
        <span className="shopping-particle particle-5" />
        <span className="shopping-particle particle-6" />

      </div>


      {/* ======================================
          MAIN CONTENT
      ======================================= */}

      <div className="shopping-container">


        {/* ======================================
            TOP BADGE
        ======================================= */}

        <motion.div
          className="shopping-top-badge"

          initial={{
            opacity: 0,
            y: -25,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}
        >

          <Sparkles size={15} />

          <span>
            SMART SHOPPING SYSTEM
          </span>

        </motion.div>



        {/* ======================================
            PAGE HEADING
        ======================================= */}

        <motion.div
          className="shopping-heading"

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
        >

          <h1>
            Shopping
            <span> Quantity Tracker</span>
          </h1>

          <p>
            Add products, manage your cart,
            and watch your total update instantly.
          </p>

        </motion.div>



        {/* ======================================
            MAIN CARD
        ======================================= */}

        <motion.div

          initial={{
            opacity: 0,
            scale: 0.92,
            y: 45,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}

          className="shopping-card-wrapper"
        >

          <Card className="shopping-card">


            {/* Card glow */}

            <div className="shopping-card-glow" />



            {/* ======================================
                HEADER
            ======================================= */}

            <CardHeader className="shopping-card-header">

              <div className="shopping-title-area">

                <motion.div
                  className="shopping-icon-box"

                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 2, 0],
                  }}

                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >

                  <ShoppingBag size={23} />

                </motion.div>


                <div>

                  <CardTitle className="shopping-card-title">
                    Shopping Quantity Tracker
                  </CardTitle>

                  <CardDescription className="shopping-card-description">
                    React State & Effect Management
                  </CardDescription>

                </div>

              </div>



              {/* Cart badge */}

              <AnimatePresence>

                {quantity > 0 && (

                  <motion.div

                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      x: 15,
                    }}

                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }}

                    exit={{
                      opacity: 0,
                      scale: 0.5,
                    }}

                  >

                    <Badge className="shopping-cart-badge">

                      <ShoppingCart size={13} />

                      In Cart

                      <span className="cart-count">
                        {quantity}
                      </span>

                    </Badge>

                  </motion.div>

                )}

              </AnimatePresence>

            </CardHeader>



            <CardContent className="shopping-card-content">


              {/* ======================================
                  CUSTOMER NAME
              ======================================= */}

              <motion.div

                className="shopping-input-section"

                initial={{
                  opacity: 0,
                  x: -25,
                }}

                animate={{
                  opacity: 1,
                  x: 0,
                }}

                transition={{
                  delay: 0.45,
                }}
              >

                <div className="shopping-label-row">

                  <label htmlFor="customerName">
                    Customer Name
                  </label>


                  <Button

                    type="button"

                    variant="ghost"

                    size="sm"

                    onClick={handleFocusInput}

                    className="shopping-focus-button"
                  >

                    <User size={14} />

                    Focus Input

                  </Button>

                </div>



                <div className="shopping-input-wrapper">

                  <User className="shopping-input-icon" size={17} />


                  <Input

                    ref={inputRef}

                    id="customerName"

                    type="text"

                    placeholder="Enter customer name..."

                    value={customerName}

                    onChange={(e) =>
                      setCustomerName(e.target.value)
                    }

                    className="shopping-input"

                  />

                </div>

              </motion.div>



              {/* ======================================
                  CUSTOMER GREETING
              ======================================= */}

              <AnimatePresence mode="wait">

                {customerName && (

                  <motion.div

                    key={customerName}

                    className="shopping-greeting"

                    initial={{
                      opacity: 0,
                      height: 0,
                      y: -8,
                    }}

                    animate={{
                      opacity: 1,
                      height: "auto",
                      y: 0,
                    }}

                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                  >

                    Welcome,
                    <strong>
                      {" "}
                      {customerName}
                    </strong>
                    {" "}👋

                  </motion.div>

                )}

              </AnimatePresence>



              {/* ======================================
                  PRODUCT CARD
              ======================================= */}

              <motion.div

                className="product-card"

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: 0.55,
                }}

                whileHover={{
                  scale: 1.015,
                  y: -2,
                }}
              >

                <div className="product-left">


                  {/* Product icon */}

                  <motion.div

                    className="product-icon"

                    animate={{
                      rotate: [0, -4, 4, 0],
                    }}

                    transition={{
                      duration: 5,
                      repeat: Infinity,
                    }}
                  >

                    <Headphones size={27} />

                  </motion.div>



                  <div>

                    <h3>
                      {productName}
                    </h3>

                    <p>
                      ${price}
                      <span>
                        {" "} / unit
                      </span>
                    </p>

                  </div>

                </div>



                {/* Quantity */}

                <div className="product-quantity">

                  <span>
                    Quantity
                  </span>


                  <AnimatePresence mode="popLayout">

                    <motion.strong

                      key={quantity}

                      initial={{
                        opacity: 0,
                        scale: 0.4,
                        y: -12,
                      }}

                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}

                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                    >

                      {quantity}

                    </motion.strong>

                  </AnimatePresence>

                </div>

              </motion.div>



              {/* ======================================
                  QUANTITY BUTTONS
              ======================================= */}

              <motion.div

                className="shopping-controls"

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: 0.65,
                }}
              >


                {/* REMOVE */}

                <motion.div

                  whileHover={{
                    scale: quantity === 0 ? 1 : 1.03,
                  }}

                  whileTap={{
                    scale: 0.96,
                  }}
                >

                  <Button

                    variant="outline"

                    onClick={handleRemoveItem}

                    disabled={quantity === 0}

                    className="remove-item-button"
                  >

                    <Minus size={17} />

                    Remove Item

                  </Button>

                </motion.div>



                {/* ADD */}

                <motion.div

                  whileHover={{
                    scale: 1.03,
                  }}

                  whileTap={{
                    scale: 0.95,
                  }}
                >

                  <Button

                    onClick={handleAddItem}

                    className="add-item-button"
                  >

                    <Plus size={18} />

                    Add Item

                  </Button>

                </motion.div>

              </motion.div>



              {/* ======================================
                  STATUS
              ======================================= */}

              <AnimatePresence mode="wait">

                <motion.div

                  key={getStatusMessage()}

                  className="shopping-status"

                  initial={{
                    opacity: 0,
                    scale: 0.95,
                    y: 8,
                  }}

                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 0.3,
                  }}
                >

                  <Sparkles size={17} />

                  <span>
                    {getStatusMessage()}
                  </span>

                </motion.div>

              </AnimatePresence>



              {/* ======================================
                  TOTAL
              ======================================= */}

              <motion.div

                className="shopping-total"

                layout
              >

                <span>
                  Total Price
                </span>


                <AnimatePresence mode="popLayout">

                  <motion.span

                    key={totalPrice}

                    className="total-price"

                    initial={{
                      opacity: 0,
                      scale: 0.7,
                      y: 8,
                    }}

                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}

                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 18,
                    }}
                  >

                    ${totalPrice}

                  </motion.span>

                </AnimatePresence>

              </motion.div>

            </CardContent>



            {/* ======================================
                FOOTER
            ======================================= */}

            <CardFooter className="shopping-card-footer">

              <motion.div

                className="reset-wrapper"

                whileHover={{
                  scale: 1.01,
                }}

                whileTap={{
                  scale: 0.98,
                }}
              >

                <Button

                  variant="ghost"

                  onClick={handleResetCart}

                  disabled={quantity === 0}

                  className="reset-cart-button"
                >

                  <RotateCcw size={16} />

                  Reset Cart

                </Button>

              </motion.div>

            </CardFooter>

          </Card>

        </motion.div>



        {/* ======================================
            BOTTOM STATUS
        ======================================= */}

        <motion.div

          className="shopping-bottom-status"

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: 1,
          }}
        >

          <span className="online-dot" />

          Shopping system ready

        </motion.div>

      </div>

    </main>
  );
};

export default ShoppingQuantityTracker;