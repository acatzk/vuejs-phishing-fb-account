<template>
    <div>
        <div class="container card-photo">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100 img-size" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRg6Qyjb0oJddYDYOGGiK_7Tq98sjVR89Dm9WpsYrFoCOlg5-oJ" alt="First slide">
              </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.ytimg.com/vi/ne9yppP4lNg/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCSfqpDL8X_I0SPQJcVdr3kVL_w7w" alt="Third slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://i.ytimg.com/vi/Lv6aEhuy8D8/mqdefault.jpg" alt="Second slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel'
}
</script>

<style scoped>

.card-photo {
  width: 250px !important;
  margin-top: 10px;
}


</style>