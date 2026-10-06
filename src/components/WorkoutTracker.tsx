import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Dumbbell,
  Plus,
  Minus,
  RotateCcw,
  Target,
  Flame,
  Zap,
} from "lucide-react";

export default function WorkoutTracker() {
  // ==========================================
  // STATE
  // ==========================================

  const [exerciseName, setExerciseName] = useState<string>("");
  const [completedSets, setCompletedSets] = useState<number>(0);

  // ==========================================
  // INPUT REF
  // ==========================================

  const inputRef = useRef<HTMLInputElement>(null);

  // ==========================================
  // DOCUMENT TITLE
  // ==========================================

  useEffect(() => {
    document.title = `Workout: ${completedSets} Sets`;
  }, [completedSets]);

  // ==========================================
  // ADD SET
  // ==========================================

  const handleAddSet = () => {
    setCompletedSets((prev) => prev + 1);
  };

  // ==========================================
  // REMOVE SET
  // ==========================================

  const handleRemoveSet = () => {
    setCompletedSets((prev) => Math.max(0, prev - 1));
  };

  // ==========================================
  // RESET
  // ==========================================

  const handleReset = () => {
    setCompletedSets(0);
  };

  // ==========================================
  // FOCUS INPUT
  // ==========================================

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  // ==========================================
  // WORKOUT MESSAGE
  // ==========================================

  const getWorkoutMessage = () => {
    if (completedSets === 0) {
      return "Start your workout!";
    }

    if (completedSets <= 4) {
      return "Keep going! 💪";
    }

    return "Great workout! 🔥";
  };

  // ==========================================
  // PROGRESS
  // ==========================================

  const progress = Math.min((completedSets / 5) * 100, 100);

  return (
    <main className="workout-page">

      {/* ======================================
          CINEMATIC BACKGROUND
      ======================================= */}

      <div className="workout-background">

        {/* Real workout image */}
        <div className="workout-background-image" />

        {/* Dark cinematic overlay */}
        <div className="workout-background-overlay" />

        {/* Animated lights */}
        <div className="workout-light workout-light-one" />
        <div className="workout-light workout-light-two" />

        {/* Floating particles */}
        <span className="workout-particle workout-particle-1" />
        <span className="workout-particle workout-particle-2" />
        <span className="workout-particle workout-particle-3" />
        <span className="workout-particle workout-particle-4" />
        <span className="workout-particle workout-particle-5" />
        <span className="workout-particle workout-particle-6" />

      </div>


      {/* ======================================
          MAIN CONTAINER
      ======================================= */}

      <div className="workout-container">


        {/* ======================================
            TOP LABEL
        ======================================= */}

        <motion.div
          className="workout-top-label"

          initial={{
            opacity: 0,
            y: -20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}
        >
          <Zap size={14} />

          <span>
            FITNESS PERFORMANCE TRACKER
          </span>
        </motion.div>



        {/* ======================================
            HERO HEADING
        ======================================= */}

        <motion.div
          className="workout-heading"

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
            Train.
            <span> Track.</span>
            <br />
            <strong>Transform.</strong>
          </h1>

          <p>
            Track every set, stay consistent,
            and push yourself toward your next goal.
          </p>

        </motion.div>



        {/* ======================================
            MAIN CARD
        ======================================= */}

        <motion.div

          className="workout-card-wrapper"

          initial={{
            opacity: 0,
            y: 50,
            scale: 0.94,
          }}

          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}

          transition={{
            duration: 0.85,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <Card className="workout-card">

            {/* Card glow */}
            <div className="workout-card-glow" />


            {/* ======================================
                HEADER
            ======================================= */}

            <CardHeader className="workout-card-header">

              <motion.div

                className="workout-icon-box"

                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 3, -3, 0],
                }}

                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <Dumbbell size={27} />

              </motion.div>


              <div className="workout-header-text">

                <CardTitle className="workout-card-title">
                  Workout Tracker
                </CardTitle>

                <p className="workout-card-subtitle">
                  Build consistency. Beat yesterday.
                </p>

              </div>


              <div className="workout-live-badge">

                <span />

                LIVE

              </div>

            </CardHeader>



            <CardContent className="workout-card-content">


              {/* ======================================
                  EXERCISE INPUT
              ======================================= */}

              <motion.div

                className="workout-input-section"

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

                <div className="workout-label-row">

                  <label>
                    Exercise Name
                  </label>


                  <Button

                    variant="ghost"

                    type="button"

                    onClick={handleFocusInput}

                    className="workout-focus-button"
                  >

                    <Target size={14} />

                    Focus

                  </Button>

                </div>


                <div className="workout-input-wrapper">

                  <Dumbbell
                    className="workout-input-icon"
                    size={17}
                  />

                  <Input

                    ref={inputRef}

                    type="text"

                    placeholder="e.g. Bench Press, Squats..."

                    value={exerciseName}

                    onChange={(e) =>
                      setExerciseName(e.target.value)
                    }

                    className="workout-input"

                  />

                </div>

              </motion.div>



              {/* ======================================
                  EXERCISE NAME
              ======================================= */}

              <AnimatePresence mode="wait">

                {exerciseName && (

                  <motion.div

                    key={exerciseName}

                    className="exercise-active"

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

                    <span>
                      CURRENT EXERCISE
                    </span>

                    <strong>
                      {exerciseName}
                    </strong>

                  </motion.div>

                )}

              </AnimatePresence>



              {/* ======================================
                  SETS DISPLAY
              ======================================= */}

              <motion.div

                className="workout-counter"

                initial={{
                  opacity: 0,
                  scale: 0.92,
                }}

                animate={{
                  opacity: 1,
                  scale: 1,
                }}

                transition={{
                  delay: 0.55,
                }}
              >

                <div className="counter-top">

                  <span>
                    {exerciseName || "SETS COMPLETED"}
                  </span>

                  <Flame
                    size={18}
                    className={
                      completedSets >= 5
                        ? "flame-active"
                        : ""
                    }
                  />

                </div>


                {/* Animated number */}

                <AnimatePresence mode="popLayout">

                  <motion.div

                    key={completedSets}

                    className="sets-number"

                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      y: 15,
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

                    {completedSets}

                  </motion.div>

                </AnimatePresence>


                {/* Message */}

                <AnimatePresence mode="wait">

                  <motion.p

                    key={getWorkoutMessage()}

                    className="workout-message"

                    initial={{
                      opacity: 0,
                      y: 8,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                  >

                    {getWorkoutMessage()}

                  </motion.p>

                </AnimatePresence>


                {/* ======================================
                    PROGRESS BAR
                ======================================= */}

                <div className="workout-progress-wrapper">

                  <div className="workout-progress-label">

                    <span>
                      Daily Goal
                    </span>

                    <span>
                      {completedSets >= 5
                        ? "100%"
                        : `${Math.round(progress)}%`}
                    </span>

                  </div>


                  <div className="workout-progress">

                    <motion.div

                      className="workout-progress-fill"

                      animate={{
                        width: `${progress}%`,
                      }}

                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    />

                  </div>

                </div>



                {/* ======================================
                    GOAL COMPLETED
                ======================================= */}

                <AnimatePresence>

                  {completedSets >= 5 && (

                    <motion.div

                      initial={{
                        opacity: 0,
                        scale: 0.7,
                        y: 10,
                      }}

                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}

                      exit={{
                        opacity: 0,
                        scale: 0.7,
                      }}

                      className="goal-completed"
                    >

                      <Flame
                        size={17}
                        fill="currentColor"
                      />

                      GOAL COMPLETED

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>



              {/* ======================================
                  CONTROLS
              ======================================= */}

              <div className="workout-controls">


                {/* COMPLETE SET */}

                <motion.div

                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}

                  whileTap={{
                    scale: 0.95,
                  }}
                >

                  <Button

                    onClick={handleAddSet}

                    className="complete-set-button"
                  >

                    <Plus size={18} />

                    Complete Set

                  </Button>

                </motion.div>



                {/* REMOVE SET */}

                <motion.div

                  whileHover={{
                    scale:
                      completedSets === 0
                        ? 1
                        : 1.03,

                    y:
                      completedSets === 0
                        ? 0
                        : -2,
                  }}

                  whileTap={{
                    scale: 0.95,
                  }}
                >

                  <Button

                    onClick={handleRemoveSet}

                    disabled={completedSets === 0}

                    variant="outline"

                    className="remove-set-button"
                  >

                    <Minus size={18} />

                    Remove Set

                  </Button>

                </motion.div>

              </div>

            </CardContent>



            {/* ======================================
                FOOTER
            ======================================= */}

            <CardFooter className="workout-card-footer">

              <motion.div

                whileHover={{
                  scale: 1.01,
                }}

                whileTap={{
                  scale: 0.98,
                }}

                className="workout-reset-wrapper"
              >

                <Button

                  onClick={handleReset}

                  variant="ghost"

                  className="reset-workout-button"
                >

                  <RotateCcw size={16} />

                  Reset Workout

                </Button>

              </motion.div>

            </CardFooter>

          </Card>

        </motion.div>



        {/* ======================================
            BOTTOM STATUS
        ======================================= */}

        <motion.div

          className="workout-bottom-status"

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

          <span className="workout-status-dot" />

          Workout system ready

        </motion.div>

      </div>

    </main>
  );
}