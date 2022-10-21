const quotes = [
  {
    quote: 'The only way to have a life is to commit to it like crazy.',
    author: 'Angelina Jolie',
  },
  {
    quote: 'Believe in yourself. Stay in your own lane. There’s only one you.',
    author: 'Queen Latifah',
  },
  {
    quote:
      'Experience is not what happens to you it is what you do with what happens to you.',
    author: 'Aldous Huxley',
  },
  {
    quote:
      'People often say that beauty is in the eye of the beholder, and I say that the most liberating thing about beauty is realizing you are the beholder.',
    author: 'Salma Hayek',
  },
  {
    quote: 'Living is the art of getting used to what we didn’t expect.',
    author: 'Eleanor C. Wood',
  },
  {
    quote: 'A person without regrets is a nincompoop.',
    author: 'Mia Farrow',
  },
  {
    quote:
      'Love doesn’t make the world go round. Love is what makes the ride worthwhile.',
    author: 'Franklin P. Jones',
  },
  {
    quote: 'Kindness is one thing you can’t give away. It always comes back.',
    author: 'George Skolsky',
  },
  {
    quote:
      'Great opportunities to help others seldom come, but small ones surround us every day.',
    author: 'Sally Koch',
  },
  {
    quote: 'Try to be a rainbow in someone else’s cloud.',
    author: 'Maya Angelou',
  },
  {
    quote: 'Success is falling nine times and getting up ten.',
    author: 'Jon Bon Jovi',
  },
  {
    quote:
      'The greatest mistake you can make is to be continually fearing that you’ll make one.',
    author: 'Elbert Hubbard',
  },
  {
    quote:
      'Real courage is when you know you’re licked before you begin, but you begin anyway and see it through no matter what.',
    author: 'Harper Lee',
  },
  {
    quote:
      'There is only one certainty in life and that is that nothing is certain.',
    author: 'G.K. Chesterton',
  },
  {
    quote: 'The most sincere compliment we can pay is attention.',
    author: 'Walter Anderson',
  },
  {
    quote: 'A problem is a chance for you to do your best.',
    author: 'Duke Ellington',
  },
  {
    quote:
      'The most important trip you may take in life is meeting people halfway.',
    author: 'Henry Boye',
  },
  {
    quote: 'Happiness makes up in height for what it lacks in length.',
    author: 'Robert Frost',
  },
  {
    quote:
      'Never fear shadows. They simply mean there’s a light shining nearby.',
    author: 'Ruth E. Renkel',
  },
  {
    quote: 'You can’t turn back the clock. But you can wind it up again.',
    author: 'Bonnie Prudden',
  },
];

const quote = document.querySelector('.quotes__quote');
const author = document.querySelector('.quotes__author');

function makeRandomNumber() {
  const count = quotes.length;
  const randomNumber = Math.floor(Math.random() * count);
  return randomNumber;
}

const randomNumber = makeRandomNumber();

quote.innerText = `"${quotes[randomNumber].quote}"`;
author.innerText = ` - ${quotes[randomNumber].author}`;
