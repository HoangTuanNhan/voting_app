window.Data = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const data = [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/daniel.jpg',
      product_image_url: 'images/image-aqua.png',
    },
    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/elliot.jpg',
      product_image_url: 'images/image-rose.png',
    },
    {
      id: 3,
      title: 'Tinfoild: Tailored tinfoil hats',
      description: 'We already have your measurements and shipping address.',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/elliot.jpg',
      product_image_url: 'images/image-steel.png',
    },
    {
      id: 4,
      title: 'Haught or Naught',
      description: 'High-minded or absent-minded? You decide.',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/elliot.jpg',
      product_image_url: 'images/image-yellow.png',
    },
  ];

  return data;
})();
