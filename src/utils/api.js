// Local simulated saved articles
let savedArticles = [];

export const getSavedArticles = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(savedArticles);
    }, 300);
  });
};

export const saveArticle = (article) => {
  return new Promise((resolve) => {
    // Just return the new saved article with an ID
    const saved = {
      ...article,
      _id: `fake-${Date.now()}`,
    };
    resolve(saved);
  });
};

export const deleteArticle = (id) => {
  return new Promise((resolve) => {
    savedArticles = savedArticles.filter((article) => article._id !== id);
    setTimeout(() => {
      resolve({ message: "Deleted successfully" });
    }, 300);
  });
};
