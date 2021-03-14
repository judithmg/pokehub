const data = [
  {
      ['Flying'], {
    Bug: 2, Dark: 1, Dragon: 1, Electric: 0.5, Fairy: 1, Fighting: 2, Fire: 1, Flying: 1, Ghost: 1, Grass: 2, Ground: 0, Ice: 0.5, Normal: 1, Poison: 1, Psychic: 1, Rock: 0.5, Steel: 1, Water: 1,
  },
},
  {['Ghost'], {
    Bug: 2, Dark: 0.5, Dragon: 1, Electric: 1, Fairy: 1, Fighting: 0, Fire: 1, Flying: 1, Ghost: 0.5, Grass: 1, Ground: 1, Ice: 1, Normal: 0, Poison: 2, Psychic: 1, Rock: 1, Steel: 1, Water: 1,
  },
},
  {['Grass'], {
    Bug: 0.5, Dark: 1, Dragon: 1, Electric: 2, Fairy: 1, Fighting: 1, Fire: 0.5, Flying: 0.5, Ghost: 1, Grass: 2, Ground: 2, Ice: 0.5, Normal: 1, Poison: 0.5, Psychic: 1, Rock: 1, Steel: 1, Water: 2,
  },
},
  {['Ground'], {
    sandstorm: 0, Bug: 1, Dark: 1, Dragon: 1, Electric: 0, Fairy: 1, Fighting: 1, Fire: 1, Flying: 1, Ghost: 1, Grass: 0.5, Ground: 1, Ice: 0.5, Normal: 1, Poison: 2, Psychic: 1, Rock: 2, Steel: 1, Water: 0.5,
  },
},
  {['Ice'], {
    hail: 0, frz: 0, Bug: 1, Dark: 1, Dragon: 1, Electric: 1, Fairy: 1, Fighting: 0.5, Fire: 0.5, Flying: 1, Ghost: 1, Grass: 1, Ground: 1, Ice: 2, Normal: 1, Poison: 1, Psychic: 1, Rock: 0.5, Steel: 0.5, Water: 1,
  },
},
  {['Normal'], {
    Bug: 1, Dark: 1, Dragon: 1, Electric: 1, Fairy: 1, Fighting: 0.5, Fire: 1, Flying: 1, Ghost: 0, Grass: 1, Ground: 1, Ice: 1, Normal: 1, Poison: 1, Psychic: 1, Rock: 1, Steel: 1, Water: 1,
  },
},
  {['Poison'], {
    psn: 0, tox: 0, Bug: 2, Dark: 1, Dragon: 1, Electric: 1, Fairy: 2, Fighting: 2, Fire: 1, Flying: 1, Ghost: 1, Grass: 2, Ground: 0.5, Ice: 1, Normal: 1, Poison: 2, Psychic: 0.5, Rock: 1, Steel: 1, Water: 1,
  },
},
  {['Psychic'], {
    Bug: 0.5, Dark: 0.5, Dragon: 1, Electric: 1, Fairy: 1, Fighting: 2, Fire: 1, Flying: 1, Ghost: 0.5, Grass: 1, Ground: 1, Ice: 1, Normal: 1, Poison: 1, Psychic: 2, Rock: 1, Steel: 1, Water: 1,
  },
},
  {['Rock'], {
    sandstorm: 0, Bug: 1, Dark: 1, Dragon: 1, Electric: 1, Fairy: 1, Fighting: 0.5, Fire: 2, Flying: 2, Ghost: 1, Grass: 0.5, Ground: 0.5, Ice: 1, Normal: 2, Poison: 2, Psychic: 1, Rock: 1, Steel: 0.5, Water: 0.5,
  },
},
  {['Steel'], {
    psn: 0, tox: 0, sandstorm: 0, Bug: 2, Dark: 1, Dragon: 2, Electric: 1, Fairy: 2, Fighting: 0.5, Fire: 0.5, Flying: 2, Ghost: 1, Grass: 2, Ground: 0.5, Ice: 2, Normal: 2, Poison: 0, Psychic: 2, Rock: 2, Steel: 2, Water: 1,
  },
},
  {['Water'], {
    Bug: 1, Dark: 1, Dragon: 1, Electric: 0.5, Fairy: 1, Fighting: 1, Fire: 2, Flying: 1, Ghost: 1, Grass: 0.5, Ground: 1, Ice: 2, Normal: 1, Poison: 1, Psychic: 1, Rock: 1, Steel: 2, Water: 2,
  },
},
  {['Bug'], {
    Bug: 1, Dark: 1, Dragon: 1, Electric: 1, Fairy: 1, Fighting: 2, Fire: 0.5, Flying: 0.5, Ghost: 1, Grass: 2, Ground: 2, Ice: 1, Normal: 1, Poison: 1, Psychic: 1, Rock: 0.5, Steel: 1, Water: 1,
  },
},
  {['Dark'], {
    prankster: 0, Bug: 0.5, Dark: 2, Dragon: 1, Electric: 1, Fairy: 0.5, Fighting: 0.5, Fire: 1, Flying: 1, Ghost: 2, Grass: 1, Ground: 1, Ice: 1, Normal: 1, Poison: 1, Psychic: 0, Rock: 1, Steel: 1, Water: 1,
  },
},
  {['Dragon'], {
    Bug: 1, Dark: 1, Dragon: 0.5, Electric: 2, Fairy: 0.5, Fighting: 1, Fire: 2, Flying: 1, Ghost: 1, Grass: 2, Ground: 1, Ice: 0.5, Normal: 1, Poison: 1, Psychic: 1, Rock: 1, Steel: 1, Water: 2,
  },
},
  {['Electric'], {
    par: 0, Bug: 1, Dark: 1, Dragon: 1, Electric: 2, Fairy: 1, Fighting: 1, Fire: 1, Flying: 2, Ghost: 1, Grass: 1, Ground: 0.5, Ice: 1, Normal: 1, Poison: 1, Psychic: 1, Rock: 1, Steel: 2, Water: 1,
  },
},
  {['Fairy'], {
    Bug: 2, Dark: 2, Dragon: 0, Electric: 1, Fairy: 1, Fighting: 2, Fire: 1, Flying: 1, Ghost: 1, Grass: 1, Ground: 1, Ice: 1, Normal: 1, Poison: 0.5, Psychic: 1, Rock: 1, Steel: 0.5, Water: 1,
  },
},
  {['Fighting'], {
    Bug: 2, Dark: 2, Dragon: 1, Electric: 1, Fairy: 0.5, Fighting: 1, Fire: 1, Flying: 0.5, Ghost: 1, Grass: 1, Ground: 1, Ice: 1, Normal: 1, Poison: 1, Psychic: 0.5, Rock: 2, Steel: 1, Water: 1,
  },
},
  {['Fire'], {
    brn: 0, Bug: 2, Dark: 1, Dragon: 1, Electric: 1, Fairy: 2, Fighting: 1, Fire: 2, Flying: 1, Ghost: 1, Grass: 2, Ground: 0.5, Ice: 2, Normal: 1, Poison: 1, Psychic: 1, Rock: 0.5, Steel: 2, Water: 0.5,
  },
};
]