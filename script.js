const questions = [
    // Round 1
    [
        {
            question: "What is sin(30°)?",
            options: ["0.5", "0.707", "1", "0.866"],
            correct: 0,
        },
        {
            question: "What is cos(45°)?",
            options: ["0.707", "0.866", "0.5", "1"],
            correct: 0,
        },
        {
            question: "If tan(θ) = 3/4, what is sin(θ)?",
            options: ["3/5", "4/5", "3/7", "4/7"],
            correct: 0,
        },
        {
            question: "What is the value of cos(60°)?",
            options: ["0.5", "0.707", "1", "0.866"],
            correct: 0,
        },
        {
            question: "Solve for x: sin(x) = 1/2, 0° ≤ x ≤ 90°",
            options: ["30°", "45°", "60°", "90°"],
            correct: 0,
        },
    ],

    // Round 2
    [
        {
            question: "What is the value of tan(60°)?",
            options: ["√3", "1", "√2", "√3/2"],
            correct: 0,
        },
        {
            question: "If sin(θ) = 4/5, find cos(θ).",
            options: ["3/5", "4/5", "5/3", "5/4"],
            correct: 0,
        },
        {
            question: "What is the value of cos(30°)?",
            options: ["√3/2", "1/2", "√2/2", "1"],
            correct: 0,
        },
        {
            question: "What is sin(45°) × cos(45°)?",
            options: ["0.25", "0.5", "0.707", "1"],
            correct: 0,
        },
        {
            question: "Solve for x: cos(x) = √2/2, 0° ≤ x ≤ 90°",
            options: ["45°", "60°", "30°", "15°"],
            correct: 0,
        },
    ],

    // Round 3
    [
        {
            question: "What is sec(30°)?",
            options: ["2/√3", "2", "√3", "1"],
            correct: 1,
        },
        {
            question: "What is the value of tan(45°)?",
            options: ["0", "1", "√3", "∞"],
            correct: 1,
        },
        {
            question: "If sin(θ) = 5/13, find cos(θ).",
            options: ["12/13", "5/13", "3/13", "8/13"],
            correct: 3,
        },
        {
            question: "What is cot(60°)?",
            options: ["1/√3", "√3", "1", "0.577"],
            correct: 0,
        },
        {
            question: "What is the value of sin(90°)?",
            options: ["0", "1", "0.5", "0.866"],
            correct: 1,
        },
    ],

    // Round 4
    [
        {
            question: "What is cos(90°)?",
            options: ["1", "0", "0.5", "∞"],
            correct: 1,
        },
        {
            question: "What is the value of tan(30°)?",
            options: ["1/√3", "√3", "1", "0"],
            correct: 0,
        },
        {
            question: "If tan(θ) = 2/3, find sin(θ).",
            options: ["2/√13", "3/√13", "2/√9", "3/√9"],
            correct: 0,
        },
        {
            question: "What is sin(60°)?",
            options: ["√3/2", "1/2", "√2/2", "1"],
            correct: 0,
        },
        {
            question: "What is the value of sec(45°)?",
            options: ["1", "√2", "2", "√3"],
            correct: 1,
        },
    ],

    // Round 5
    [
        {
            question: "What is the value of cos(75°)?",
            options: ["0.2588", "0.5", "0.707", "1"],
            correct: 0,
        },
        {
            question: "If sin(θ) = 5/13, and cos(θ) = 12/13, find tan(θ).",
            options: ["5/12", "12/5", "13/5", "5/7"],
            correct: 0,
        },
        {
            question: "What is the value of sec(60°)?",
            options: ["2", "1", "√2", "2/√3"],
            correct: 3,
        },
        {
            question: "Solve for θ: cos(θ) = 1/2, 0° ≤ θ ≤ 90°",
            options: ["30°", "60°", "45°", "75°"],
            correct: 1,
        },
        {
            question: "If tan(θ) = 1, what is the value of θ?",
            options: ["45°", "30°", "60°", "90°"],
            correct: 0,
        },
    ],

    // Round 6
    [
        {
            question: "What is the value of cos(120°)?",
            options: ["-1/2", "1/2", "√3/2", "0"],
            correct: 0,
        },
        {
            question: "If sin(θ) = 0.6, find cos(θ).",
            options: ["0.8", "0.5", "0.9", "0.4"],
            correct: 0,
        },
        {
            question: "What is sin(90°) × cos(90°)?",
            options: ["1", "0", "0.5", "0.866"],
            correct: 1,
        },
        {
            question: "If tan(θ) = 3/4, what is the value of cos(θ)?",
            options: ["4/5", "3/5", "5/3", "3/4"],
            correct: 0,
        },
        {
            question: "What is the value of sec(60°)?",
            options: ["2", "√3/2", "1/2", "2/√3"],
            correct: 3,
        },
    ],

    // Round 7
    [
        {
            question: "What is the value of sin(120°)?",
            options: ["√3/2", "1/2", "0", "1"],
            correct: 0,
        },
        {
            question: "Solve for θ: sin(θ) = 1/√2, 0° ≤ θ ≤ 90°",
            options: ["45°", "30°", "60°", "15°"],
            correct: 0,
        },
        {
            question: "What is cos(135°)?",
            options: ["-√2/2", "√2/2", "1", "0"],
            correct: 0,
        },
        {
            question: "If cos(θ) = 3/5, find tan(θ).",
            options: ["4/5", "3/5", "5/3", "3/4"],
            correct: 0,
        },
        {
            question: "What is the value of tan(90°)?",
            options: ["0", "1", "∞", "undefined"],
            correct: 2,
        },
    ],
   // Round 8
    [
        {
            question: "What is the value of tan(120°)?",
            options: ["-√3", "√3", "1", "0"],
            correct: 0,
        },
        {
            question: "What is the value of sin(150°)?",
            options: ["1/2", "√3/2", "-1/2", "√2/2"],
            correct: 0,
        },
        {
            question: "What is cos(225°)?",
            options: ["-√2/2", "√2/2", "1", "0"],
            correct: 0,
        },
        {
            question: "If sec(θ) = 2, find cos(θ).",
            options: ["1/2", "2", "1", "1/√2"],
            correct: 0,
        },
        {
            question: "Solve for θ: sin(θ) = 1/√3, 0° ≤ θ ≤ 90°",
            options: ["30°", "60°", "45°", "15°"],
            correct: 1,
        },
    ],

    // Round 9
    [
        {
            question: "What is the value of cos(240°)?",
            options: ["-1/2", "1/2", "√3/2", "0"],
            correct: 0,
        },
        {
            question: "What is sin(75°) × cos(15°)?",
            options: ["1/2", "√2/2", "√3/2", "1"],
            correct: 2,
        },
        {
            question: "If sin(θ) = 4/5, find tan(θ).",
            options: ["3/5", "4/5", "5/4", "4/3"],
            correct: 3,
        },
        {
            question: "What is tan(90°)?",
            options: ["0", "1", "∞", "undefined"],
            correct: 2,
        },
        {
            question: "If cos(θ) = 1/√2, what is sin(θ)?",
            options: ["1/√2", "√2/2", "√3/2", "1"],
            correct: 0,
        },
    ],

    // Round 10
    [
        {
            question: "What is sec(45°)?",
            options: ["√2", "2", "1/√2", "√3"],
            correct: 0,
        },
        {
            question: "What is tan(45°) × cos(45°)?",
            options: ["0.5", "1", "0.707", "√2"],
            correct: 1,
        },
        {
            question: "What is the value of sin(120°)?",
            options: ["√3/2", "1/2", "0", "-√3/2"],
            correct: 0,
        },
        {
            question: "What is the value of cos(150°)?",
            options: ["-√3/2", "-1/2", "1/2", "√2/2"],
            correct: 1,
        },
        {
            question: "Solve for θ: tan(θ) = 1, 0° ≤ θ ≤ 90°",
            options: ["45°", "30°", "60°", "90°"],
            correct: 0,
        },
    ],

    // Round 11
    [
        {
            question: "What is the value of cos(90°)?",
            options: ["1", "0", "0.5", "∞"],
            correct: 1,
        },
        {
            question: "If tan(θ) = 1, find sin(θ).",
            options: ["1/√2", "1/2", "√3/2", "1"],
            correct: 0,
        },
        {
            question: "What is the value of sin(90°)?",
            options: ["0", "1", "0.5", "∞"],
            correct: 1,
        },
        {
            question: "What is cos(30°)?",
            options: ["√3/2", "1/2", "√2/2", "1"],
            correct: 0,
        },
        {
            question: "If sin(θ) = 5/13, find cos(θ).",
            options: ["12/13", "5/13", "8/13", "3/13"],
            correct: 0,
        },
    ],

    // Round 12
    [
        {
            question: "What is the value of tan(180°)?",
            options: ["0", "1", "-1", "∞"],
            correct: 0,
        },
        {
            question: "What is the value of cos(270°)?",
            options: ["0", "-1", "1", "-√2/2"],
            correct: 0,
        },
        {
            question: "If sec(θ) = 2, what is sin(θ)?",
            options: ["√3/2", "1/2", "1", "1/√2"],
            correct: 0,
        },
        {
            question: "Solve for θ: cos(θ) = 0.707, 0° ≤ θ ≤ 90°",
            options: ["45°", "30°", "60°", "75°"],
            correct: 0,
        },
        {
            question: "What is tan(30°)?",
            options: ["1/√3", "√3", "1", "0"],
            correct: 0,
        },
    ],

    // Round 13
    [
        {
            question: "What is the value of sin(45°)?",
            options: ["√2/2", "1/2", "0.707", "1"],
            correct: 0,
        },
        {
            question: "What is the value of cos(60°)?",
            options: ["0.5", "1/√2", "√3/2", "1"],
            correct: 0,
        },
        {
            question: "What is the value of sin(90°) × cos(90°)?",
            options: ["0", "1", "0.5", "0.707"],
            correct: 0,
        },
        {
            question: "What is sec(90°)?",
            options: ["1", "∞", "0", "undefined"],
            correct: 1,
        },
        {
            question: "What is the value of cot(45°)?",
            options: ["1", "√2", "0", "∞"],
            correct: 0,
        },
    ],

    // Round 14
    [
        {
            question: "If tan(θ) = 3/4, find cos(θ).",
            options: ["4/5", "3/5", "5/3", "3/4"],
            correct: 0,
        },
        {
            question: "What is the value of sin(30°)?",
            options: ["1/2", "0.707", "0.866", "1"],
            correct: 0,
        },
        {
            question: "What is tan(45°) × sec(45°)?",
            options: ["1", "√2", "0.707", "2"],
            correct: 0,
        },
        {
            question: "What is the value of sec(60°)?",
            options: ["2", "1/2", "1", "2/√3"],
            correct: 3,
        },
        {
            question: "If sin(θ) = 1/√2, find tan(θ).",
            options: ["1", "√3", "1/√3", "√2"],
            correct: 0,
        },
    ],
  // Round 15
    [
        {
            question: "What is the value of sin(225°)?",
            options: ["-√2/2", "√2/2", "1", "0"],
            correct: 0,
        },
        {
            question: "What is the value of cos(315°)?",
            options: ["√2/2", "-√2/2", "1", "0"],
            correct: 0,
        },
        {
            question: "If tan(θ) = 1/√3, find sin(θ).",
            options: ["1/2", "√3/2", "1/√3", "√2/2"],
            correct: 0,
        },
        {
            question: "What is the value of sin(270°)?",
            options: ["0", "-1", "1", "√3/2"],
            correct: 1,
        },
        {
            question: "Solve for θ: cos(θ) = -1/2, 90° ≤ θ ≤ 180°",
            options: ["120°", "135°", "150°", "180°"],
            correct: 0,
        },
    ],

    // Round 16
    [
        {
            question: "What is the value of sec(120°)?",
            options: ["2/√3", "-2/√3", "2", "√3"],
            correct: 1,
        },
        {
            question: "What is the value of cos(120°)?",
            options: ["-1/2", "1/2", "√3/2", "0"],
            correct: 0,
        },
        {
            question: "If cos(θ) = 5/13, find sin(θ).",
            options: ["12/13", "8/13", "5/13", "3/13"],
            correct: 1,
        },
        {
            question: "What is tan(90°)?",
            options: ["0", "1", "undefined", "∞"],
            correct: 2,
        },
        {
            question: "Solve for θ: sec(θ) = 2, 0° ≤ θ ≤ 90°",
            options: ["60°", "45°", "30°", "15°"],
            correct: 2,
        },
    ],

    // Round 17
    [
        {
            question: "What is the value of cos(45°)?",
            options: ["√2/2", "1/2", "1/√2", "√3/2"],
            correct: 0,
        },
        {
            question: "What is the value of sec(90°)?",
            options: ["1", "∞", "0", "undefined"],
            correct: 1,
        },
        {
            question: "What is tan(120°)?",
            options: ["-√3", "√3", "1", "0"],
            correct: 0,
        },
        {
            question: "Solve for θ: cos(θ) = -√3/2, 90° ≤ θ ≤ 180°",
            options: ["150°", "120°", "135°", "60°"],
            correct: 0,
        },
        {
            question: "What is the value of sin(60°)?",
            options: ["√3/2", "1/2", "√2/2", "1"],
            correct: 0,
        },
    ],

    // Round 18
    [
        {
            question: "What is sec(60°)?",
            options: ["2", "2/√3", "1", "√3"],
            correct: 1,
        },
        {
            question: "If sin(θ) = 3/5, find cos(θ).",
            options: ["4/5", "3/5", "2/5", "5/3"],
            correct: 0,
        },
        {
            question: "What is the value of tan(45°)?",
            options: ["0", "1", "√3", "∞"],
            correct: 1,
        },
        {
            question: "Solve for θ: tan(θ) = √3, 0° ≤ θ ≤ 90°",
            options: ["60°", "45°", "30°", "90°"],
            correct: 0,
        },
        {
            question: "What is the value of cos(60°)?",
            options: ["0.5", "√3/2", "1/√2", "1"],
            correct: 0,
        },
    ],

    // Round 19
    [
        {
            question: "What is the value of sin(15°)?",
            options: ["√6/4 - √2/4", "√2/4 + √3/4", "√3/4 - √6/4", "√2/4 - √3/4"],
            correct: 0,
        },
        {
            question: "What is the value of tan(30°)?",
            options: ["1/√3", "1/2", "√3/2", "√3"],
            correct: 0,
        },
        {
            question: "What is the value of cos(75°)?",
            options: ["√6/4 - √2/4", "√2/4 + √3/4", "√3/4 - √6/4", "√2/4 - √3/4"],
            correct: 0,
        },
        {
            question: "What is the value of sec(30°)?",
            options: ["2/√3", "2", "√3/2", "1/√3"],
            correct: 1,
        },
        {
            question: "If tan(θ) = 4/3, find sin(θ).",
            options: ["4/5", "3/5", "5/3", "5/4"],
            correct: 0,
        },
    ],

    // Round 20
    [
        {
            question: "What is the value of cos(180°)?",
            options: ["-1", "0", "1", "√3/2"],
            correct: 0,
        },
        {
            question: "What is the value of sec(45°)?",
            options: ["√2", "1", "2", "√3"],
            correct: 0,
        },
        {
            question: "Solve for θ: cos(θ) = √3/2, 0° ≤ θ ≤ 90°",
            options: ["30°", "60°", "45°", "90°"],
            correct: 0,
        },
        {
            question: "What is tan(60°)?",
            options: ["1/√3", "√3", "1", "0"],
            correct: 1,
        },
        {
            question: "If sin(θ) = 3/5, find cos(θ).",
            options: ["4/5", "3/5", "5/4", "5/3"],
            correct: 0,
        },
    ],
   // Round 21
    [
        {
            question: "What is the value of tan(45°)?",
            options: ["1", "0", "√3", "2"],
            correct: 0,
        },
        {
            question: "What is the value of sec(120°)?",
            options: ["-2/√3", "2/√3", "2", "√3"],
            correct: 0,
        },
        {
            question: "What is the value of cos(225°)?",
            options: ["-√2/2", "√2/2", "1", "0"],
            correct: 0,
        },
        {
            question: "Solve for θ: tan(θ) = 2, 0° ≤ θ ≤ 90°",
            options: ["63.4°", "45°", "30°", "60°"],
            correct: 0,
        },
        {
            question: "If sin(θ) = 1/√2, find cos(θ).",
            options: ["1/√2", "√2/2", "1/2", "√3/2"],
            correct: 0,
        },
    ],

    // Round 22
    [
        {
            question: "What is the value of sin(30°)?",
            options: ["1/2", "√3/2", "1", "0"],
            correct: 0,
        },
        {
            question: "What is the value of cos(135°)?",
            options: ["-√2/2", "√2/2", "-1/2", "1/2"],
            correct: 0,
        },
        {
            question: "What is sec(45°)?",
            options: ["√2", "1", "2", "√3"],
            correct: 0,
        },
        {
            question: "Solve for θ: sin(θ) = 3/5, 0° ≤ θ ≤ 90°",
            options: ["36.87°", "53.13°", "45°", "30°"],
            correct: 1,
        },
        {
            question: "What is the value of tan(90°)?",
            options: ["1", "0", "undefined", "∞"],
            correct: 2,
        },
    ],

    // Round 23
    [
        {
            question: "What is the value of cos(270°)?",
            options: ["0", "-1", "1", "-√3/2"],
            correct: 0,
        },
        {
            question: "If sin(θ) = 4/5, find tan(θ).",
            options: ["3/5", "4/5", "5/4", "4/3"],
            correct: 3,
        },
        {
            question: "What is the value of sec(60°)?",
            options: ["2", "1/2", "1", "√3"],
            correct: 0,
        },
        {
            question: "Solve for θ: cos(θ) = -1/2, 90° ≤ θ ≤ 180°",
            options: ["120°", "150°", "135°", "45°"],
            correct: 0,
        },
        {
            question: "What is the value of cos(330°)?",
            options: ["√3/2", "-√3/2", "1/2", "0"],
            correct: 0,
        },
    ],

    // Round 24
    [
        {
            question: "What is the value of sin(60°)?",
            options: ["√3/2", "1/2", "1/√2", "√2/2"],
            correct: 0,
        },
        {
            question: "What is the value of tan(0°)?",
            options: ["0", "1", "∞", "undefined"],
            correct: 0,
        },
        {
            question: "What is the value of sin(90°)?",
            options: ["0", "1", "√2/2", "√3/2"],
            correct: 1,
        },
        {
            question: "Solve for θ: sec(θ) = 2, 0° ≤ θ ≤ 90°",
            options: ["60°", "45°", "30°", "15°"],
            correct: 2,
        },
        {
            question: "What is tan(60°)?",
            options: ["1/√3", "√3", "0", "1"],
            correct: 1,
        },
    ],

    // Round 25
    [
        {
            question: "What is the value of cos(60°)?",
            options: ["1/2", "√3/2", "1", "√2/2"],
            correct: 0,
        },
        {
            question: "What is sec(30°)?",
            options: ["2/√3", "1/2", "2", "√3"],
            correct: 3,
        },
        {
            question: "What is the value of sin(45°)?",
            options: ["1/√2", "√2/2", "1", "0.5"],
            correct: 1,
        },
        {
            question: "What is the value of cos(120°)?",
            options: ["-1/2", "1/2", "√3/2", "0"],
            correct: 0,
        },
        {
            question: "Solve for θ: cos(θ) = √2/2, 0° ≤ θ ≤ 90°",
            options: ["45°", "60°", "30°", "90°"],
            correct: 0,
        },
    ],

    // Round 26
    [
        {
            question: "What is the value of sin(150°)?",
            options: ["1/2", "√3/2", "-1/2", "√2/2"],
            correct: 0,
        },
        {
            question: "What is the value of cos(150°)?",
            options: ["-√3/2", "-1/2", "1/2", "√2/2"],
            correct: 1,
        },
        {
            question: "What is tan(120°)?",
            options: ["-√3", "√3", "1", "0"],
            correct: 0,
        },
        {
            question: "What is the value of sec(45°)?",
            options: ["1", "√2", "2", "1/√2"],
            correct: 1,
        },
        {
            question: "Solve for θ: tan(θ) = 1, 0° ≤ θ ≤ 90°",
            options: ["45°", "30°", "60°", "90°"],
            correct: 0,
        },
    ],
  // Round 27
    [
        {
            question: "What is the value of sin(225°)?",
            options: ["-√2/2", "√2/2", "1", "0"],
            correct: 0,
        },
        {
            question: "What is the value of cos(330°)?",
            options: ["√3/2", "-√3/2", "1/2", "0"],
            correct: 0,
        },
        {
            question: "What is tan(45°)?",
            options: ["1", "0", "√3", "∞"],
            correct: 0,
        },
        {
            question: "What is the value of sec(150°)?",
            options: ["-2", "2", "√2", "-√2"],
            correct: 0,
        },
        {
            question: "Solve for θ: sin(θ) = -1/2, 180° ≤ θ ≤ 270°",
            options: ["210°", "240°", "270°", "180°"],
            correct: 1,
        },
    ],

    // Round 28
    [
        {
            question: "What is the value of cos(135°)?",
            options: ["-√2/2", "√2/2", "-1/2", "1/2"],
            correct: 0,
        },
        {
            question: "What is the value of sec(30°)?",
            options: ["√3", "2", "1/√3", "1"],
            correct: 1,
        },
        {
            question: "What is the value of tan(60°)?",
            options: ["1/√3", "√3", "0", "1"],
            correct: 1,
        },
        {
            question: "Solve for θ: sec(θ) = 2, 0° ≤ θ ≤ 90°",
            options: ["60°", "45°", "30°", "15°"],
            correct: 2,
        },
        {
            question: "What is the value of sin(75°)?",
            options: ["√6/4 + √2/4", "√3/4 - √6/4", "√2/4 - √3/4", "√2/4 + √3/4"],
            correct: 0,
        },
    ],

    // Round 29
    [
        {
            question: "What is the value of tan(120°)?",
            options: ["-√3", "√3", "1", "0"],
            correct: 0,
        },
        {
            question: "What is the value of cos(225°)?",
            options: ["-√2/2", "√2/2", "1", "0"],
            correct: 0,
        },
        {
            question: "Solve for θ: cos(θ) = -1/√2, 90° ≤ θ ≤ 180°",
            options: ["135°", "120°", "150°", "180°"],
            correct: 0,
        },
        {
            question: "What is the value of sec(0°)?",
            options: ["1", "2", "√2", "0"],
            correct: 0,
        },
        {
            question: "What is the value of sin(45°)?",
            options: ["1/√2", "√2/2", "1", "0.5"],
            correct: 0,
        },
    ],

    // Round 30
    [
        {
            question: "What is the value of tan(135°)?",
            options: ["-1", "1", "0", "√3"],
            correct: 0,
        },
        {
            question: "What is the value of cos(90°)?",
            options: ["0", "1", "-1", "1/2"],
            correct: 0,
        },
        {
            question: "What is the value of sin(0°)?",
            options: ["0", "1", "-1", "√2/2"],
            correct: 0,
        },
        {
            question: "What is sec(120°)?",
            options: ["2/√3", "-2/√3", "2", "√3"],
            correct: 1,
        },
        {
            question: "Solve for θ: cos(θ) = 1/2, 0° ≤ θ ≤ 90°",
            options: ["60°", "45°", "30°", "90°"],
            correct: 0,
        },
    ],

    // Round 31
    [
        {
            question: "What is the value of sin(45°)?",
            options: ["1/√2", "√2/2", "1", "0.5"],
            correct: 1,
        },
        {
            question: "What is the value of tan(30°)?",
            options: ["1/√3", "√3", "1", "0"],
            correct: 0,
        },
        {
            question: "What is the value of cos(180°)?",
            options: ["-1", "1", "0", "√2/2"],
            correct: 0,
        },
        {
            question: "What is sec(45°)?",
            options: ["√2", "1", "2", "1/√2"],
            correct: 0,
        },
        {
            question: "Solve for θ: tan(θ) = √3, 0° ≤ θ ≤ 90°",
            options: ["60°", "45°", "30°", "90°"],
            correct: 0,
        },
    ],

    // Round 32
    [
        {
            question: "What is the value of cos(0°)?",
            options: ["1", "0", "-1", "√2/2"],
            correct: 0,
        },
        {
            question: "What is sec(150°)?",
            options: ["-2/√3", "2/√3", "2", "√3"],
            correct: 0,
        },
        {
            question: "What is the value of tan(225°)?",
            options: ["1", "-1", "0", "√3"],
            correct: 1,
        },
        {
            question: "Solve for θ: cos(θ) = √3/2, 0° ≤ θ ≤ 90°",
            options: ["30°", "60°", "45°", "90°"],
            correct: 1,
        },
        {
            question: "What is the value of sin(90°)?",
            options: ["1", "0", "√3/2", "1/√2"],
            correct: 0,
        },
    ],
  // Round 33
    [
        {
            question: "What is the value of tan(210°)?",
            options: ["√3", "-√3", "1", "0"],
            correct: 1,
        },
        {
            question: "What is the value of cos(330°)?",
            options: ["√3/2", "-√3/2", "1/2", "0"],
            correct: 0,
        },
        {
            question: "What is the value of sec(180°)?",
            options: ["-1", "1", "0", "√2"],
            correct: 0,
        },
        {
            question: "Solve for θ: tan(θ) = 1/√3, 0° ≤ θ ≤ 90°",
            options: ["30°", "60°", "45°", "90°"],
            correct: 0,
        },
        {
            question: "What is the value of sin(210°)?",
            options: ["-1/2", "1/2", "-√3/2", "√3/2"],
            correct: 0,
        },
    ],

    // Round 34
    [
        {
            question: "What is the value of cos(270°)?",
            options: ["0", "1", "-1", "√3/2"],
            correct: 0,
        },
        {
            question: "What is the value of sin(330°)?",
            options: ["-1/2", "1/2", "√3/2", "0"],
            correct: 0,
        },
        {
            question: "What is tan(150°)?",
            options: ["-√3", "√3", "-1", "0"],
            correct: 0,
        },
        {
            question: "What is sec(60°)?",
            options: ["2", "√3", "1/2", "1"],
            correct: 0,
        },
        {
            question: "Solve for θ: sin(θ) = 1/2, 0° ≤ θ ≤ 90°",
            options: ["30°", "45°", "60°", "90°"],
            correct: 0,
        },
    ],

    // Round 35
    [
        {
            question: "What is the value of cos(60°)?",
            options: ["1/2", "√3/2", "1", "√2/2"],
            correct: 0,
        },
        {
            question: "What is the value of tan(120°)?",
            options: ["-√3", "√3", "1", "0"],
            correct: 0,
        },
        {
            question: "Solve for θ: cos(θ) = 1/√3, 0° ≤ θ ≤ 90°",
            options: ["30°", "45°", "60°", "90°"],
            correct: 2,
        },
        {
            question: "What is sec(45°)?",
            options: ["1", "√2", "2", "1/√2"],
            correct: 1,
        },
        {
            question: "What is the value of sin(120°)?",
            options: ["√3/2", "1/2", "1", "√2/2"],
            correct: 0,
        },
    ],

    // Round 36
    [
        {
            question: "What is the value of tan(45°)?",
            options: ["1", "0", "∞", "√3"],
            correct: 0,
        },
        {
            question: "What is the value of cos(150°)?",
            options: ["-√3/2", "1/2", "√2/2", "-1/2"],
            correct: 0,
        },
        {
            question: "What is the value of sec(30°)?",
            options: ["2/√3", "2", "1/√3", "√3"],
            correct: 1,
        },
        {
            question: "Solve for θ: tan(θ) = 0, 0° ≤ θ ≤ 90°",
            options: ["0°", "45°", "30°", "90°"],
            correct: 0,
        },
        {
            question: "What is the value of sin(60°)?",
            options: ["√3/2", "1/2", "√2/2", "0"],
            correct: 0,
        },
    ],

    // Round 37
    [
        {
            question: "What is the value of cos(45°)?",
            options: ["1/√2", "√2/2", "1", "0"],
            correct: 0,
        },
        {
            question: "What is the value of tan(90°)?",
            options: ["0", "1", "∞", "undefined"],
            correct: 2,
        },
        {
            question: "What is sec(0°)?",
            options: ["1", "0", "-1", "∞"],
            correct: 0,
        },
        {
            question: "Solve for θ: sin(θ) = √3/2, 0° ≤ θ ≤ 90°",
            options: ["60°", "45°", "30°", "90°"],
            correct: 0,
        },
        {
            question: "What is the value of cos(120°)?",
            options: ["-1/2", "1/2", "√3/2", "0"],
            correct: 0,
        },
    ],

    // Round 38
    [
        {
            question: "What is the value of sin(270°)?",
            options: ["-1", "1", "0", "√2/2"],
            correct: 0,
        },
        {
            question: "What is tan(60°)?",
            options: ["√3", "1", "0", "1/√3"],
            correct: 0,
        },
        {
            question: "What is sec(90°)?",
            options: ["∞", "1", "0", "undefined"],
            correct: 0,
        },
        {
            question: "Solve for θ: tan(θ) = 1, 0° ≤ θ ≤ 90°",
            options: ["45°", "30°", "60°", "90°"],
            correct: 0,
        },
        {
            question: "What is the value of cos(135°)?",
            options: ["-√2/2", "√2/2", "1", "0"],
            correct: 0,
        },
    ],

    // Round 39
    [
        {
            question: "What is sec(150°)?",
            options: ["2/√3", "-2/√3", "2", "√3"],
            correct: 1,
        },
        {
            question: "What is the value of cos(240°)?",
            options: ["-1/2", "1/2", "√2/2", "-√3/2"],
            correct: 0,
        },
        {
            question: "Solve for θ: tan(θ) = √3, 0° ≤ θ ≤ 90°",
            options: ["60°", "30°", "45°", "90°"],
            correct: 0,
        },
        {
            question: "What is the value of sin(90°)?",
            options: ["1", "0", "√3/2", "1/√2"],
            correct: 0,
        },
        {
            question: "What is the value of sec(120°)?",
            options: ["2/√3", "-2/√3", "2", "√3"],
            correct: 1,
        },
    ],

    // Round 40
    [
        {
            question: "What is the value of cos(45°)?",
            options: ["1/√2", "√2/2", "1", "0"],
            correct: 0,
        },
        {
            question: "What is the value of tan(30°)?",
            options: ["1/√3", "√3", "1", "0"],
            correct: 0,
        },
        {
            question: "What is the value of sin(60°)?",
            options: ["√3/2", "1/2", "√2/2", "0"],
            correct: 0,
        },
        {
            question: "Solve for θ: cos(θ) = 1/2, 0° ≤ θ ≤ 90°",
            options: ["60°", "45°", "30°", "90°"],
            correct: 0,
        },
        {
            question: "What is the value of tan(120°)?",
            options: ["-√3", "√3", "1", "0"],
            correct: 0,
        },
    ],
];



// Game State
let currentRound = 0;
let currentQuestion = 0;
let timer;
let timeLeft;
let isQuizActive = false;
let timeScore = 0;
let roundScore = 0;

// DOM Elements
const timerBar = document.querySelector('.timer-bar');
const timerDisplay = document.querySelector('.timer-display');
const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const startButton = document.querySelector('.start-quiz');
const nextRoundButton = document.querySelector('.next-round');
const progressDots = document.querySelectorAll('.progress-dot');
const roundDisplay = document.querySelector('#currentRound');
const timeScoreDisplay = document.querySelector('#timeScore');
const roundScoreDisplay = document.querySelector('#roundScore');
const feedbackElement = document.querySelector('.feedback');
const finalScoresElement = document.querySelector('.final-scores');

// Timer Function
function startTimer() {
    timeLeft = 60;
    timerBar.style.width = '100%';
    
    timer = setInterval(() => {
        timeLeft -= 0.1;
        timerDisplay.textContent = Math.ceil(timeLeft);
        timerBar.style.width = `${(timeLeft / 60) * 100}%`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showFeedback(false);
            setTimeout(() => nextQuestion(), 1000);
        }
    }, 100);
}

// Display Question Function
function displayQuestion() {
    const currentQuestionData = questions[currentRound][currentQuestion];
    questionElement.textContent = currentQuestionData.question;
    feedbackElement.classList.remove('show', 'correct', 'wrong');
    finalScoresElement.innerHTML = '';
    
    optionsContainer.innerHTML = '';
    currentQuestionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option fade-in';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    updateProgressDots();
}

// Check Answer Function
function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const currentQuestionData = questions[currentRound][currentQuestion];
    const isCorrect = selectedIndex === currentQuestionData.correct;
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.style.pointerEvents = 'none');
    
    options[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    options[currentQuestionData.correct].classList.add('correct');

    if (isCorrect) {
        roundScore++;
        timeScore += Math.ceil(timeLeft);
        roundScoreDisplay.textContent = roundScore;
        timeScoreDisplay.textContent = timeScore;
    }

    showFeedback(isCorrect);
    progressDots[currentQuestion].classList.add(isCorrect ? 'correct' : 'wrong');

    setTimeout(() => nextQuestion(), 1000);
}

// Show Feedback Function
function showFeedback(isCorrect) {
    feedbackElement.textContent = isCorrect ? 'Correct! 🎉' : 'Wrong! 😞';
    feedbackElement.className = `feedback show ${isCorrect ? 'correct' : 'wrong'}`;
}

// Next Question Function
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions[currentRound].length) {
        endRound();
    } else {
        displayQuestion();
        startTimer();
    }
}

// Update Progress Dots Function
function updateProgressDots() {
    progressDots.forEach((dot, index) => {
        if (index === currentQuestion) {
            dot.classList.add('active');
        } else if (index < currentQuestion) {
            dot.classList.remove('active');
        }
    });
}

// End Round Function
function endRound() {
    isQuizActive = false;
    timerDisplay.textContent = '60';
    timerBar.style.width = '100%';
    questionElement.textContent = 'Round Complete! 🎯';
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    
    finalScoresElement.innerHTML = `
        <div>Round Score: ${roundScore}/5 correct answers</div>
        <div>Time Bonus Points: ${timeScore}</div>
        <div>Great job! 🎉</div>
    `;
    
    nextRoundButton.style.display = 'block';
    startButton.style.display = 'none';
}

// Start New Round Function
function startNewRound() {
    currentQuestion = 0;
    currentRound++;
    roundScore = 0;
    roundDisplay.textContent = currentRound + 1;
    roundScoreDisplay.textContent = '0';
    nextRoundButton.style.display = 'none';
    startButton.style.display = 'block';
    questionElement.textContent = `Ready for Round ${currentRound + 1}? 🤩`;
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    finalScoresElement.innerHTML = '';
    
    // Reset progress dots
    progressDots.forEach(dot => {
        dot.className = 'progress-dot';
    });
    progressDots[0].classList.add('active');
}

// Event Listeners
startButton.addEventListener('click', () => {
    if (!isQuizActive) {
        isQuizActive = true;
        startButton.style.display = 'none';
        displayQuestion();
        startTimer();
    }
});

nextRoundButton.addEventListener('click', () => {
    if (currentRound < questions.length - 1) {
        startNewRound();
    } else {
        // End of all rounds
        questionElement.textContent = 'Quiz Complete! 🎉';
        finalScoresElement.innerHTML = `
            <div>Final Score: ${timeScore} points</div>
            <div>Thank you for playing! 🌟</div>
        `;
        nextRoundButton.style.display = 'none';
    }
});

// Initialize first round
questionElement.textContent = 'Ready for Round 1? 🏁';
