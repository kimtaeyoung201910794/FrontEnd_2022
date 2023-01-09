const APIKEY = "7b6804016de3c85e45788accffc75f10"
//api에서 영화 지금 상영중인 api가져오기
//이미지 가져오기 쉽게 이미지 URL앞부분 저장해놓기
const IMAGE_URL ='https://image.tmdb.org/t/p/w500'
const options={
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
};

//지금 상영중인 영화정보들 정보가져와서 입력해주기
const now_playingURL = "https://api.themoviedb.org/3/movie/now_playing?api_key="+APIKEY+"&language=en-US&page=1"
//response를 다시한번 파싱하기 숩게 json형태로 가공하기
const now_playing = document.getElementById("now-playing")

fetch(now_playingURL, options)
    .then(response => response.json())
    .then(response => {  
        response.results.forEach((element)=> {
            //데이터들 콘솔에서 뽑아와서 얻기
            console.log(element.backdrop_path);
            console.log(element.title);
            console.log(element.vote_average);

            let movie = document.createElement("li");
            let moviediv = document.createElement("div");
            let backdrop = document.createElement("img");
            //이미지 써주기
            backdrop.setAttribute("src",IMAGE_URL+element.backdrop_path);
            let title = document.createElement("h4");
            //title 써주기
            title.innerText = element.title;
            //평점 써주기
            let rate = document.createElement("span");
            rate.innerText = "*" + element.vote_average;
            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            movie.appendChild(moviediv);
            now_playing.appendChild(movie);

        })
    });

//인기있는 영화정보들 가져와서 입력해주기
const popularURL = "https://api.themoviedb.org/3/movie/popular?api_key="+APIKEY+"&language=en-US&page=1"
//response를 다시한번 파싱하기 숩게 json형태로 가공하기
const popular = document.getElementById("popular")

fetch(popularURL, options)
    .then(response => response.json())
    .then(response => {  
        response.results.forEach((element)=> {
            //데이터들 콘솔에서 뽑아와서 얻기
            console.log(element.backdrop_path);
            console.log(element.title);
            console.log(element.vote_average);

            let movie = document.createElement("li");
            let moviediv = document.createElement("div");
            let backdrop = document.createElement("img");
            //이미지 써주기
            backdrop.setAttribute("src",IMAGE_URL+element.backdrop_path);
            let title = document.createElement("h4");
            //title 써주기
            title.innerText = element.title;
            //평점 써주기
            let rate = document.createElement("span");
            rate.innerText = "*" + element.vote_average;
            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            movie.appendChild(moviediv);
            popular.appendChild(movie);
            
        })
    });

//평점이 높은 영화들 정보가져와서 입력해주기
const top_ratedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key="+APIKEY+"&language=en-US&page=1"
//response를 다시한번 파싱하기 숩게 json형태로 가공하기
const top_rated = document.getElementById("top-rated")

fetch(top_ratedURL, options)
    .then(response => response.json())
    .then(response => {  
        response.results.forEach((element)=> {
            //데이터들 콘솔에서 뽑아와서 얻기
            console.log(element.backdrop_path);
            console.log(element.title);
            console.log(element.vote_average);

            let movie = document.createElement("li");
            let moviediv = document.createElement("div");
            let backdrop = document.createElement("img");
            //이미지 써주기
            backdrop.setAttribute("src",IMAGE_URL+element.backdrop_path);
            let title = document.createElement("h4");
            //title 써주기
            title.innerText = element.title;
            //평점 써주기
            let rate = document.createElement("span");
            rate.innerText = "*" + element.vote_average;
            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            movie.appendChild(moviediv);
            top_rated.appendChild(movie);
            
        })
    });

//곧 개봉되는 영화들 정보 가져와서 입력해주기
const up_comingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key="+APIKEY+"&language=en-US&page=1"
//response를 다시한번 파싱하기 숩게 json형태로 가공하기
const up_coming = document.getElementById("up-coming")

fetch(up_comingURL, options)
    .then(response => response.json())
    .then(response => {  
        response.results.forEach((element)=> {
            //데이터들 콘솔에서 뽑아와서 얻기
            console.log(element.backdrop_path);
            console.log(element.title);
            console.log(element.vote_average);

            let movie = document.createElement("li");
            let moviediv = document.createElement("div");
            let backdrop = document.createElement("img");
            //이미지 써주기
            backdrop.setAttribute("src",IMAGE_URL+element.backdrop_path);
            let title = document.createElement("h4");
            //title 써주기
            title.innerText = element.title;
            //평점 써주기
            let rate = document.createElement("span");
            rate.innerText = "*" + element.vote_average;
            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            movie.appendChild(moviediv);
            up_coming.appendChild(movie);
            
        })
    });