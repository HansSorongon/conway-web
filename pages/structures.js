
export function displayStructures(count, frame) {
  // frame[y[x]

  // PULSAR
  // first leg
  frame[19][10] = 1 // top
  frame[19][11] = 1
  frame[19][12] = 1

  frame[21][8] = 1 // left
  frame[22][8] = 1
  frame[23][8] = 1

  frame[24][10] = 1 // bottom
  frame[24][11] = 1
  frame[24][12] = 1

  frame[23][13] = 1 // right
  frame[22][13] = 1
  frame[21][13] = 1
  // second leg top right
  frame[19][16] = 1 // top
  frame[19][17] = 1
  frame[19][18] = 1

  frame[21][15] = 1 // left
  frame[22][15] = 1
  frame[23][15] = 1

  frame[24][16] = 1 // bottom
  frame[24][17] = 1
  frame[24][18] = 1

  frame[23][20] = 1 // right
  frame[22][20] = 1
  frame[21][20] = 1

  // third leg bottom left
  frame[26][10] = 1 // top
  frame[26][11] = 1
  frame[26][12] = 1

  frame[27][8] = 1 // left
  frame[28][8] = 1
  frame[29][8] = 1

  frame[31][10] = 1 // bottom
  frame[31][11] = 1
  frame[31][12] = 1

  frame[27][13] = 1 // right
  frame[28][13] = 1
  frame[29][13] = 1

  // fourth bottom right
  frame[26][16] = 1 // top
  frame[26][17] = 1
  frame[26][18] = 1

  frame[27][15] = 1 // left
  frame[28][15] = 1
  frame[29][15] = 1

  frame[31][16] = 1 // bottom
  frame[31][17] = 1
  frame[31][18] = 1

  frame[27][20] = 1 // right
  frame[28][20] = 1
  frame[29][20] = 1


  // middle-weight spaceship
  frame[35][70] = 1
  frame[35][71] = 1
  frame[35][72] = 1
  frame[35][73] = 1
  frame[35][74] = 1
  frame[36][74] = 1
  frame[37][74] = 1
  frame[38][73] = 1
  frame[39][71] = 1
  frame[38][69] = 1
  frame[36][69] = 1

  // beehive
  frame[36][93] = 1
  frame[35][94] = 1
  frame[35][95] = 1
  frame[36][96] = 1
  frame[37][94] = 1
  frame[37][95] = 1

  //penta decathlon
  frame[10][85] = 1
  frame[11][85] = 1
  frame[13][85] = 1
  frame[14][85] = 1
  frame[15][85] = 1
  frame[16][85] = 1
  frame[18][85] = 1
  frame[19][85] = 1
  frame[12][84] = 1
  frame[12][86] = 1
  frame[17][84] = 1
  frame[17][86] = 1

  // r-pentomino the gigachad
  frame[17][40] = 1
  frame[18][40] = 1
  frame[19][40] = 1
  frame[18][39] = 1
  frame[17][41] = 1

}




