let characters = [
  {
    name: "Johnny Cage",
    specialMoves: [
      { name: "Forceball", command: "B, F, LP" },
      { name: "Shadow Kick", command: "B, F, LK" },
      { name: "NutPunch", command: "LP + BL" },
    ],
    finishMoves: [{ name: "", command: "F, F, F, HP (close)" }],
  },
  {
    name: "Kano",
    specialMoves: [
      { name: "Knife Throw", command: "Hold Block, B, F, Release" },
      { name: "CannonBall", command: "Rotate d-pad clockwise" },
    ],
    finishMoves: [{ name: "", command: "B, D, F, LP (close)" }],
  },
  {
    name: "Sub-Zero",
    specialMoves: [
      { name: "Freeze", command: "D, F, LP" },
      { name: "Slide", command: "B + LP + LK + BL" },
    ],
    finishMoves: [{ name: "", command: "F, D, F, HP (close)" }],
  },
  {
    name: "Sonya",
    specialMoves: [
      { name: "Energy Rings", command: "LP, B, LP" },
      { name: "Leg Grab", command: "D + LP + LK + BL" },
      { name: "Wave Punch", command: "F, B, HP" },
    ],
    finishMoves: [{ name: "", command: "F, F, B, B, BL (anywhere)" }],
  },
  {
    name: "Raiden",
    specialMoves: [
      { name: "Lightning Bolt", command: "D, F, LP" },
      { name: "SuperMan", command: "B, B, F" },
      { name: "Teleport", command: "D, U" },
    ],
    finishMoves: [{ name: "", command: "F, B, B, B, HP (close)" }],
  },
  {
    name: "Liu Kang",
    specialMoves: [
      { name: "Dragon Fire", command: "F, F, HP" },
      { name: "Dragon Kick", command: "F, F, HK" },
    ],
    finishMoves: [
      { name: "", command: "Rotate d-pad counterclockwise (anywhere)" },
    ],
  },
  {
    name: "Scorpion",
    specialMoves: [
      { name: "Spear", command: "B, B, LP" },
      { name: "Teleport Punch", command: "D, B, HP" },
    ],
    finishMoves: [{ name: "", command: "Hold BL U, U (sweep)" }],
  },
];

export default characters;
