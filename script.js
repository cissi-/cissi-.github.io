function openTab(evt, tabId) {
  // Declare all variables
  var i, tabcontent, tablinks, tabCategory;

  var element = document.getElementById(tabId);
  var tabCategory = element.className.replace("tabcontent ", "");

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent " + tabCategory);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    if (tablinks[i].parentNode.className.replace("tab ", "") == tabCategory) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  element.style.display = "block";
  evt.currentTarget.className += " active";
}