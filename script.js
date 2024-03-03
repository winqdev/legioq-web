document.addEventListener("DOMContentLoaded", (event) => {
  var tracksText = document.getElementsByClassName('tracks');

  fetch('https://api.legioq.lol/userinfo')
  .then(response => response.json())
  .then(data => {

    if(data.tracks) {

      for(let i = 0; i < 10; i++) {
        var newTracksText = document.createElement('h3');
        newTracksText.classList.add('tracks');
        newTracksText.innerHTML = `<a href="${data.tracks[i].url}">${i + 1}. ${data.tracks[i].title}</a>`;

        tracksText[1].parentNode.appendChild(newTracksText);
      }
    } else {
      var newTracksText = document.createElement('h3');
      newTracksText.classList.add('tracks');
      newTracksText.textContent = '(Error while getting tracks)';

      tracksText[0].textContent = 'ERROR: LEGIOQ_PLS_RELEASE_TRACK'
      tracksText[1].parentNode.appendChild(newTracksText);
    }
  })
  .catch(error => {
    console.log(error);
    var newTracksText = document.createElement('h3');
    newTracksText.classList.add('tracks');
    newTracksText.textContent = '(Theres a fatal server error / Api server down)';

    tracksText[0].textContent = 'ERROR: WINQDEV_SUCKS_IN_CODING'
    tracksText[1].parentNode.appendChild(newTracksText);
  });
});
