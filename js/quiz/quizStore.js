/**
 * Unified Quiz Store for Lessons 6-10
 * Strictly < 200 lines
 */
window.QuizStore = {
  getAllQuizzes: function() {
    const pools = [
      window.QUIZ_LESSON6 || [],
      window.QUIZ_LESSON7 || [],
      window.QUIZ_LESSON8 || [],
      window.QUIZ_LESSON9 || [],
      window.QUIZ_LESSON10 || []
    ];
    return pools.reduce((acc, p) => acc.concat(p), []);
  },
  getQuizzesByLesson: function(lesson) {
    const all = this.getAllQuizzes();
    if (lesson === 'all' || lesson === 'ALL') return all;
    return all.filter(q => q.lesson === parseInt(lesson));
  }
};
