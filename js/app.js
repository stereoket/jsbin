$('#startingpoint').click(function () {
  if (localStorage) {
    localStorage.setItem('saved-javascript', editors.javascript.getCode());
    localStorage.setItem('saved-html', editors.html.getCode());
  }
  return false;
});

// has to be first because we need to set first
$(window).unload(function () {
  sessionStorage.setItem('javascript', editors.javascript.getCode());
  sessionStorage.setItem('html', editors.html.getCode());
  
  var panel = getFocusedPanel();
  sessionStorage.setItem('panel', panel);
  sessionStorage.setItem('line', editors[panel].currentLine());
  sessionStorage.setItem('character', editors[panel].cursorPosition().character);
});
