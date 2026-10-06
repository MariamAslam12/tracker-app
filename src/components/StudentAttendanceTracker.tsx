import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, UserRound, RotateCcw, Focus } from "lucide-react";

function StudentAttendenceTracker() {
  // -----------------------------------------
  // State management
  // -----------------------------------------
  const [studentName, setStudentName] = useState<string>("");
  const [attendance, setAttendance] = useState(0);

  // -----------------------------------------
  // Ref for focusing input
  // -----------------------------------------
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  // -----------------------------------------
  // Update browser title
  // -----------------------------------------
  useEffect(() => {
    document.title = `Attendance: ${attendance}`;
  }, [attendance]);

  // -----------------------------------------
  // Attendance status
  // -----------------------------------------
  const getAttendanceStatusMessage = (count: number): string => {
    if (count === 0) return "No attendance recorded";
    if (count >= 1 && count <= 4) return "Attendance in progress";
    return "Good Attendance ⭐";
  };

  // -----------------------------------------
  // Attendance percentage
  // -----------------------------------------
  const attendancePercentage = Math.min((attendance / 10) * 100, 100);

  // -----------------------------------------
  // Button handlers
  // -----------------------------------------
  const handleIncrease = () => {
    setAttendance((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setAttendance((prev) => Math.max(0, prev - 1));
  };

  const handleReset = () => {
    setAttendance(0);
  };

  const handleFocusInput = () => {
    nameInputRef.current?.focus();
  };

  return (
    <main className="attendance-page">

      {/* ---------------------------------
          Animated background
      ---------------------------------- */}
      <div className="attendance-background">
        <div className="background-overlay" />

        <div className="background-grid" />

        {/* Floating particles */}
        <span className="particle particle-one" />
        <span className="particle particle-two" />
        <span className="particle particle-three" />
        <span className="particle particle-four" />
        <span className="particle particle-five" />
        <span className="particle particle-six" />
      </div>

      {/* ---------------------------------
          Main content
      ---------------------------------- */}
      <div className="attendance-container">

        {/* Small top label */}
        <motion.div
          className="top-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <CheckCircle2 size={16} />
          <span>SMART ATTENDANCE SYSTEM</span>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="attendance-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <h1>
            Student
            <span> Attendance</span>
          </h1>

          <p>
            Track attendance effortlessly with a simple,
            interactive student dashboard.
          </p>
        </motion.div>

        {/* ---------------------------------
            Main Glass Card
        ---------------------------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Card className="attendance-card">

            {/* Card glow */}
            <div className="card-glow" />

            <CardHeader className="attendance-card-header">

              <div className="title-icon">
                <UserRound size={22} />
              </div>

              <div>
                <CardTitle className="attendance-card-title">
                  Attendance Tracker
                </CardTitle>

                <p className="attendance-card-subtitle">
                  Manage student attendance
                </p>
              </div>

            </CardHeader>

            <CardContent className="attendance-card-content">

              {/* ---------------------------------
                  Student Name
              ---------------------------------- */}
              <motion.div
                className="input-section"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="student-name">
                  Student Name
                </label>

                <div className="input-wrapper">

                  <div className="input-icon">
                    <UserRound size={18} />
                  </div>

                  <Input
                    id="student-name"
                    ref={nameInputRef}
                    type="text"
                    placeholder="Enter student name..."
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="student-input"
                  />

                  <Button
                    variant="outline"
                    type="button"
                    onClick={handleFocusInput}
                    className="focus-button"
                  >
                    <Focus size={16} />
                    Focus
                  </Button>

                </div>
              </motion.div>

              {/* ---------------------------------
                  Student greeting
              ---------------------------------- */}
              <AnimatePresence mode="wait">
                {studentName && (
                  <motion.div
                    key={studentName}
                    className="student-greeting"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <span>Welcome,</span>{" "}
                    <strong>{studentName}</strong> 👋
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ---------------------------------
                  Attendance display
              ---------------------------------- */}
              <motion.div
                className="attendance-display"
                whileHover={{
                  scale: 1.02,
                }}
                transition={{ duration: 0.25 }}
              >

                <div className="attendance-label">
                  TOTAL ATTENDANCE
                </div>

                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={attendance}
                    className="attendance-number"
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
                    {attendance}
                  </motion.div>
                </AnimatePresence>

                <motion.div
                  className="attendance-status"
                  key={getAttendanceStatusMessage(attendance)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {getAttendanceStatusMessage(attendance)}
                </motion.div>

                {/* Progress */}
                <div className="progress-container">

                  <div className="progress-label">
                    <span>Progress</span>
                    <span>{Math.round(attendancePercentage)}%</span>
                  </div>

                  <div className="progress-track">
                    <motion.div
                      className="progress-bar"
                      animate={{
                        width: `${attendancePercentage}%`,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                    />
                  </div>

                </div>

              </motion.div>

              {/* ---------------------------------
                  Buttons
              ---------------------------------- */}
              <motion.div
                className="attendance-controls"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >

                <motion.div
                  className="button-container"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Button
                    onClick={handleIncrease}
                    className="present-button"
                  >
                    <CheckCircle2 size={18} />
                    Present +
                  </Button>
                </motion.div>

                <motion.div
                  className="button-container"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Button
                    onClick={handleDecrease}
                    disabled={attendance === 0}
                    variant="destructive"
                    className="remove-button"
                  >
                    Remove −
                  </Button>
                </motion.div>

              </motion.div>

              {/* ---------------------------------
                  Reset
              ---------------------------------- */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleReset}
                  variant="ghost"
                  className="reset-button"
                >
                  <RotateCcw size={16} />
                  Reset Attendance
                </Button>
              </motion.div>

            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          className="bottom-caption"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="status-dot" />
          Attendance system is ready
        </motion.div>

      </div>
    </main>
  );
}

export default StudentAttendenceTracker;