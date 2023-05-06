// A function to format a Hadith's content for display
export function formatHadithContent(content) {
    // Replace line breaks with HTML line breaks
    return content.replace(/\n/g, '<br>');
  }
  
  // A function to generate a random number between min and max (inclusive)
  export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // A function to shuffle an array using the Fisher-Yates algorithm
  export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // A function to validate an email address
  export function isValidEmail(email) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }

  export function readConfig() {
    if (typeof localStorage === 'undefined') {
      return null; // or handle the error
    }
    const userConfig = JSON.parse(localStorage.getItem('userConfig'));
    return userConfig;
  }
  
  export const saveConfig = (config) => {
    localStorage.setItem('userConfig', JSON.stringify(config));
  };
  