const speakers = [
  {
    imgUrl: './images/image-1.png',
    name: 'Alan Turing',
    tagline: 'Inventor, mathematician and computer scientist',
    description:
      'Turing Machine is one of the first, basic computers to be created.',
  },
  {
    imgUrl: './images/image-2.png',
    name: 'Ross Quillian',
    tagline: 'Leading scientist and researcher in the fields of electronics',
    description:
      'Troject SYNTHEX is most widely concerned as his foremost contribution to artificial intelligence.',
  },
  {
    imgUrl: './images/image-3.png',
    name: 'Edina Feigenbaum',
    tagline: 'Dendral was the most important to AI science',
    description:
      'Edina Feigenbaum is another important contributor to the science of AI.',
  },
  {
    imgUrl: './images/image-4.png',
    name: 'IBM',
    tagline: 'Important pioneer in artificial intelligence.',
    description:
      'IBM hit a major milestone with its development and final creation of Deep Blue.',
  },
  {
    imgUrl: './images/image-5.png',
    name: 'Marvin Minsky',
    tagline: 'A Space Odyssey',
    description:
      "Minsky's contributions to the field of AI were many and continued until his death in early 2016.",
  },
  {
    imgUrl: './images/image-6.png',
    name: 'Elon Musk',
    tagline: 'A Pioneer of Our Future.',
    description:
      'As our technology advances and our impact on the world grows, the problems which we will face could be directly.',
  },
];
const speakersContainer = document.querySelector('.speakers-container');
speakers.forEach((speaker) => {
  const speakerItem = `
          <div class="speaker-item">
              <img src="${speaker.imgUrl}" alt="" class="speaker-img">
              <div class="speaker-container">
                  <h3 class="speaker-title">${speaker.name}</h3>
                  <p class="speaker-tagline">${speaker.tagline}</p>
                  <hr class="speaker-line">
                  <p class="speaker-description">${speaker.description}</p>
              </div>
          </div>
      `;
  speakersContainer.innerHTML += speakerItem;
});
