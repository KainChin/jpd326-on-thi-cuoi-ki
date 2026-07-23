/**
 * Aggregates all modular grammar parts into a unified store
 * < 200 lines requirement
 */
(function() {
  const allParts = [
    window.LESSON6_P1 || [],
    window.LESSON6_P2 || [],
    window.LESSON6_P3 || [],
    window.LESSON7_P1 || [],
    window.LESSON7_P2 || [],
    window.LESSON8_P1 || [],
    window.LESSON8_P2 || [],
    window.LESSON9_P1 || [],
    window.LESSON9_P2 || [],
    window.LESSON9_P3 || [],
    window.LESSON10_P1 || [],
    window.LESSON10_P2 || [],
    window.LESSON10_P3 || []
  ];

  window.ALL_GRAMMAR_DATA = allParts.reduce((acc, part) => acc.concat(part), []);
})();
