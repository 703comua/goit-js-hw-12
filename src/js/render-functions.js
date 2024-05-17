export const createMarkup = images => {
  return images.reduce(
    ( html, { tags, webformatURL, largeImageURL, likes, views, comments, downloads } ) => {
      return (
        html +
        `
			<li class="gallery__item item-gallery">
				<a class="item-gallery__link" href="${largeImageURL}">
					<img class="item-gallery__img" src="${webformatURL}" alt="${tags}">
				</a>
				<ul class="item-gallery__data">
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Likes</h2>
						<p class="item-gallery__counter">${likes}</p>
					</li>
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Views</h2>
						<p class="item-gallery__counter">${views}</p>
					</li>
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Comments</h2>
						<p class="item-gallery__counter">${comments}</p>
					</li>
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Downloads</h2>
						<p class="item-gallery__counter">${downloads}</p>
					</li>
				</ul>
			</li>
		`
      );
    },
    ''
  );
};
