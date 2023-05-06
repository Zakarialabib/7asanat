import { getRandomNumber } from './utils/helpers';

// Example Hadith data (replace with your API or database calls)
const hadithData = [
  {
    id: 1,
    content: 'Hadith content 1',
    reference: 'Hadith reference 1',
  },
  {
    id: 2,
    content: 'Hadith content 2',
    reference: 'Hadith reference 2',
  },
  // Add more Hadith data here
];

// Function to fetch all Hadiths
export async function fetchAllHadiths() {
  // Replace this with a call to your API or database
  return hadithData;
}

// Function to fetch a random Hadith
export async function fetchRandomHadith() {
  // Replace this with a call to your API or database
  const randomIndex = getRandomNumber(0, hadithData.length - 1);
  return hadithData[randomIndex];
}

// Function to fetch a Hadith by ID
export async function fetchHadithById(id) {
  // Replace this with a call to your API or database
  return hadithData.find(hadith => hadith.id === id);
}