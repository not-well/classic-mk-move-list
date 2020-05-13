let characters = [
  {
    name: "Liu Kang",
    specialMoves: [
      { name: "Bicycle Kick", command: "Hold LK 5 seconds, release" },
      { name: "Fireball", command: "F, F, HP (can be done in mid-air)" },
      { name: "Low Fireball", command: "F, F, LP" },
      { name: "Flying Kick", command: "F, F, HK" },
    ],
    finishMoves: [
      { name: "Dragon", command: "D, F, B, B, HK (close)" },
      {
        name: "Spinning Uppercut",
        command: "Hold BL, rotate 360 degrees counterclockwise (sweep)",
      },
      { name: "Stage Fatality", command: "B, F, F, LK" },
      { name: "Friendship", command: "F, B, B, B, LK" },
      { name: "Babality", command: "D, D, F, B, LK" },
    ],
  },
  {
    name: "Kung Lao",
    specialMoves: [
      { name: "Dive Kick", command: "D + HK in mid-air" },
      {
        name: "Spinning Tackdown",
        command: "U, U, LK (Tap Low Kick to keep spinning)",
      },
      { name: "Teleport", command: "D, U" },
      { name: "Hat Toss", command: "B, F, LP (U or D to aim)" },
    ],
    finishMoves: [
      { name: "Hat Slice ", command: "F, F, F, LK (two steps closer)" },
      {
        name: "Hat Decapatation",
        command: "Hold LP, B, F, release and aim for head",
      },
      { name: "Stage Fatality", command: "F, F, F, HP" },
      { name: "Friendship", command: "B, B, B, D, HK" },
      { name: "Babality", command: "B, B, F, F, HK" },
    ],
  },
  {
    name: "Johnny Cage",
    specialMoves: [
      { name: "Axe-Kick", command: "LK or HK (close)" },
      { name: "High Fireball", command: "F, D, B, HP" },
      { name: "Low Fireball", command: "B, D, F, LP" },
      { name: "Nutcracker", command: "BL+LP" },
      { name: "Shadow Kick", command: "B, F, LK" },
      { name: "Shadow Uppercut", command: "B, D, B, HP" },
    ],
    finishMoves: [
      { name: "Torso Rip", command: "D, D, F, F, LP (close)" },
      {
        name: "Decaping Uppercut",
        command: "F, F, D, U (close, hold D + LP + LK + BL for rip more heads)",
      },
      { name: "Stage Fatality", command: "D, D, D, HK" },
      { name: "Friendship", command: "D, D, D, D, HK" },
      { name: "Babality", command: "B, B, B, HK" },
    ],
  },
  {
    name: "Reptile",
    specialMoves: [
      { name: "Acid Spit", command: "F, F, HP" },
      { name: "Forceball", command: "B, B, LP + HP" },
      { name: "Slide", command: "B + LP + LK + BL" },
      { name: "Invisibility", command: "Hold BL, U, U, D, HP" },
    ],
    finishMoves: [
      { name: "Tounge Lash", command: "B, B, D, LP (half screen)" },
      {
        name: "Invisi-Slice",
        command: "Go invisible, then F, F, D, HK (close)",
      },
      { name: "Stage Fatality", command: "D, F, F, BL" },
      { name: "Friendship", command: "B, B, D, LK" },
      { name: "Babality", command: "D, B, B, LK" },
    ],
  },
  {
    name: "Sub-Zero",
    specialMoves: [
      { name: "Ice Blast", command: "D, F, LP" },
      { name: "Ground Ice", command: "D, B, LK" },
      { name: "Slide", command: "B + LP + LK + BL" },
    ],
    finishMoves: [
      {
        name: "Ice Shatter",
        command: "F, F, D, HK (half screen) then F, D, F, F, HP (close)",
      },
      {
        name: "Ice Grenade",
        command: "Hold LP, B, B, D, F, release (full screen)",
      },
      { name: "Stage Fatality", command: "D, F, F, BL" },
      { name: "Friendship", command: "B, B, D, HK" },
      { name: "Babality", command: "D, B, B, HK" },
    ],
  },
  {
    name: "Shang Tsung",
    specialMoves: [
      { name: "One Flaming Skull", command: "B, B, HP" },
      { name: "Two Flaming Skull", command: "B, B, F, HP" },
      { name: "Three Flaming Skull", command: "B, B, F, F, HP" },
      { name: "Morphs", command: [
        "Liu Kang: B, F, F, BL",
        "Kung Lao: B, D, B, HK",
        "Johnny Cage: B, B, D, LP",
        "Reptile: Hold BL, U, D, HP",
        "Sub-Zero: F, D, F, HP",
        "Kitana: BL, BL, BL",
        "Jax: D, F, B, HK",
        "Mileena: Hold HP 2 seconds, release",
        "Baraka: D, D, LK",
        "Scorpion: Hold BL, U, U",
        "Raiden: D, B, F, LK",
      ] }
    ],
    finishMoves: [
      { name: "Inner Ear", command: "Hold HK 2 seconds, release (close)" },
      { name: "Soul Steal", command: "Hold BL, U, D, U, LK (close)" },
      {
        name: "Kintaro Morph",
        command: "Hold LP entire winning round, release (two steps closer)",
      },
      { name: "Stage Fatality", command: "Hold BL, D, D, U, D" },
      { name: "Friendship", command: "B, B, D, F, HK" },
      { name: "Babality", command: "B, F, D, HK" },
    ],
  },
  {
    name: "Kitana",
    specialMoves: [
      { name: "Fan Lift", command: "B, B, B, HP" },
      { name: "Fan Throw", command: "F, F, LP+HP (can be done im mid-air)" },
      { name: "Fan Swipe", command: "B + HP" },
      { name: "Square Punch", command: "F, D, B, HP" },
    ],
    finishMoves: [
      { name: "Kiss of Death", command: "Hold LK, F, F, D, F (close)" },
      { name: "Fan Decapatation", command: "BL, BL, BL, HK (close)" },
      { name: "Stage Fatality", command: "F, D, F, HK" },
      { name: "Friendship", command: "D, D, D, U, LK" },
      { name: "Babality", command: "D, D, D, LK" },
    ],
  },
  {
    name: "Jax",
    specialMoves: [
      {
        name: "Gotcha Grab",
        command: "F, F, LP (keep pushing LP for more punches)",
      },
      { name: "Back Breaker", command: "BL in air (close)" },
      { name: "Ground Pound", command: "Hold LK 3 seconds, release" },
      { name: "Wave Punch", command: "F, D, B, HK" },
      { name: "Quad Slam", command: "Throw and tap HP" },
    ],
    finishMoves: [
      { name: "Head Smash", command: "Hold LP, F, F, F (close)" },
      { name: "Arm Rip", command: "BL, BL, BL, BL, LP (two steps closer)" },
      { name: "Stage Fatality", command: "Hold BL,U, U, D, LK" },
      { name: "Friendship", command: "Hold BL, D, D, U, U, LK" },
      { name: "Babality", command: "Hold BL, D, U, D, U, LK" },
    ],
  },
  {
    name: "Mileena",
    specialMoves: [
      {
        name: "Sai Throw",
        command: "Hold HP 2 Seconds, release (can be done in mid-air)",
      },
      { name: "Teleport Kick", command: "F, F, LK" },
      { name: "Ground Roll", command: "B, B, D, HK" },
    ],
    finishMoves: [
      { name: "Surgery", command: "F, B, F, LP (close)" },
      { name: "Man Eater", command: "Hold HK for 2 seconds, release (close)" },
      { name: "Stage Fatality", command: "F, D, F, LK" },
      { name: "Friendship", command: "D, D, D, U, HK" },
      { name: "Babality", command: "D, D, D, HK" },
    ],
  },
  {
    name: "Baraka",
    specialMoves: [
      { name: "Blade Spark", command: "D, B, HP" },
      { name: "Shredder", command: "B, B, B, LP" },
      { name: "Blade Swipe", command: "B+HP" },
      { name: "Double Kick", command: "HK, HK, HK (close)" },
    ],
    finishMoves: [
      { name: "Decapitation", command: "B, B, B, B, HP (close)" },
      { name: "Stab Lift", command: "B, F, D, F, LP (close)" },
      { name: "Stage Fatality", command: "F, F, D, HK" },
      { name: "Friendship", command: "Hold BL, U, F, F, HK" },
      { name: "Babality", command: "F, F, F, HK" },
    ],
  },
  {
    name: "Scorpion",
    specialMoves: [
      { name: "Spear", command: "B, B, LP" },
      { name: "Air Throw", command: "BL in air (close)" },
      { name: "Teleport", command: "D, B, HP (can be done im mid-air)" },
      { name: "Takedown", command: "F, D, B, LK" },
    ],
    finishMoves: [
      { name: "Flaming Skull", command: "Hold BL, U, U, HP (half screen)" },
      { name: "Flaming Skull Toasty", command: "Hold BL, D, D, U, U, HP" },
      { name: "Spear Slice", command: "Hold HP, D, F, F, F, release (close)" },
      { name: "Stage Fatality", command: "D, F, F, BL" },
      { name: "Friendship", command: "B, B, D, LK" },
      { name: "Babality", command: "D, B, B, HK" },
    ],
  },
  {
    name: "Raiden",
    specialMoves: [
      { name: "Lightning Blast", command: "D, F, LP" },
      { name: "Flying Thunderbolt", command: "B, B, F (can be done in mid-air)" },
      { name: "Teleport", command: "D, U" },
      { name: "Shocker", command: "Hold HP 4 seconds, release (close)" },
    ],
    finishMoves: [
      { name: "Electrocution", command: "Hold LK 4 seconds, release, tap BL + LK (close)" },
      { name: "Uppercut Explosion", command: "Hold HP 8 seconds, release (close)" },
      { name: "Stage Fatality", command: "Hold BL, U, U, U, HP" },
      { name: "Friendship", command: "D, B, F, HK" },
      { name: "Babality", command: "D, D, U, HK" },
    ],
  },
];

export default characters;
