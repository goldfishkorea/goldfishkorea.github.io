const shortenerSettings = {
  "async": true,
  "crossDomain": true,
  "url": "https://url-shortener-service.p.rapidapi.com/shorten",
  "method": "POST",
  "headers": {
    "content-type": "application/x-www-form-urlencoded",
    "x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
    "x-rapidapi-key": "gGlMHyeEalmshDi9ikBOgQKKoiX6p1cJrOPjsnOL4ddxEdLmig"
  },
  "data": {
    "url": "https://selery.co.kr/?vendor=1&company=%EB%AA%BD%EC%9D%B4%EB%84%A4%EC%9E%A1%ED%99%94%EC%A0%90&tel=010-3024-8589&addr=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EB%8D%95%EC%96%91%EA%B5%AC%20%ED%99%94%EC%A0%95%EB%8F%99%20CJ%ED%99%94%EC%A0%95%EB%8C%80%EB%A6%AC%EC%A0%90%20%EB%AA%BD%EC%9D%B4%EB%84%A4%EC%9E%A1%ED%99%94%EC%A0%90"
  }
};

function createShortUrl(){
  $.ajax(shortenerSettings).done(function (response) {
    console.log(response);
  });
}


