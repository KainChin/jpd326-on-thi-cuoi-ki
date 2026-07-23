/**
 * Aggregates all modular grammar parts dynamically
 * Strictly < 200 lines requirement
 */
window.GrammarStore = {
  getAllGrammar: function() {
    const parts = [
      window.LESSON6_P1 || [], window.LESSON6_P2 || [], window.LESSON6_P3 || [],
      window.LESSON7_P1 || [], window.LESSON7_P2 || [],
      window.LESSON8_P1 || [], window.LESSON8_P2 || [],
      window.LESSON9_P1 || [], window.LESSON9_P2 || [], window.LESSON9_P3 || [],
      window.LESSON10_P1 || [], window.LESSON10_P2 || [], window.LESSON10_P3 || []
    ];
    return parts.reduce((acc, p) => acc.concat(p), []);
  },
  getGrammarByLesson: function(lesson) {
    return this.getAllGrammar().filter(g => g.lesson === parseInt(lesson));
  }
};
