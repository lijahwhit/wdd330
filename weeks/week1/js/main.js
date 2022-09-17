function loadStory(){
    let storyName = document.querySelector("#story-name").value
    let storyHTML = localStorage.getItem(storyName)
    document.querySelector("#story-text").value = storyHTML
  }
  
function saveStory(){
    let storyName = document.querySelector("#story-name").value
    let storyHTML = document.querySelector("#story-text").value
    localStorage.setItem(storyName, storyHTML)
  }
  
function displayStory(){
    let storyName = document.querySelector("#story-name").value
    let storyHTML = document.querySelector("#story-text").value
    document.querySelector("#story-display-title").innerHTML = storyName
    document.querySelector("#story-display").innerHTML = storyHTML
  }