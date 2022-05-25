let ratedRamen = [];

document.addEventListener('DOMContentLoaded', e => {
fetch('http://localhost:3000/ramens')
  .then(response => response.json())
  .then(data => {
      ratedRamen = data;
      for(let ramen of ratedRamen){
        const name = ramen.name;
        const restaurant = ramen.restaurant;
        const rating = ramen.rating;
        const comment = ramen.comment;
        const imgSrc = ramen.image;

        const menu = document.querySelector('#ramen-menu');
        const ramenOption = document.createElement('img');
        ramenOption.src = imgSrc;
        
        ramenOption.addEventListener('click', e => {
                const detail = document.querySelector('.detail-image');
                detail.src = imgSrc;

                const detailName = document.querySelector('.name');
                detailName.textContent = name;

                const detailRestaurant = document.querySelector('.restaurant');
                detailRestaurant.textContent = restaurant;

                const detailRating = document.querySelector('#rating-display');
                detailRating.textContent = rating;

                const detailComment = document.querySelector('#comment-display');
                detailComment.textContent = comment;
                
            });
            menu.append(ramenOption);
      }
  });

    const reviewForm = document.querySelector('#new-ramen');
    reviewForm.addEventListener('submit', e => {
        e.preventDefault();
        const newName = e.target.name.value;
        const newRestaurant = e.target.restaurant.value;
        const newImg = e.target.image.value;
        // const newRating = e.target.rating.value; /* couldn't figure out why I was getting an error on value here
        // const newComment = e.target.comment.value;/* couldn't figure out why I was getting an error on value here
        console.log(newName);
        console.log(newRestaurant);
        console.log(newImg);

        const newRamenOption = document.createElement('img')
        newRamenOption.src = `${newImg}`;
        const menu = document.querySelector('#ramen-menu');
        menu.append(newRamenOption);
        /* The above strategy of appending directly to the menu isn't correct, I think I actually should be using POST to add to the original dataset but ran out of time*/
        reviewForm.reset();
    });

});