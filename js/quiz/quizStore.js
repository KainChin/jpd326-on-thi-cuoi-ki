/**
 * Merges all Mario Gem Quiz question pools into window.ALL_QUIZ_DATA
 * < 200 lines per file requirement
 */
(function() {
  const pools = [
    window.QUIZ_LESSON6 || [],
    window.QUIZ_LESSON7 || [],
    window.QUIZ_LESSON8 || [],
    window.QUIZ_LESSON9 || [],
    window.QUIZ_LESSON10 || []
  ];

  window.ALL_QUIZ_DATA = pools.reduce((acc, p) => acc.concat(p), []);
})();
