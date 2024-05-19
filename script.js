const tabButtons = document.querySelectorAll('nav button');
const contentDivs = document.querySelectorAll('main div');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const clickedTabIndex = button.id.slice(-1); // Extract the last digit from the button ID (tab1, tab2, etc.)
    contentDivs.forEach((div, index) => {
      div.style.display = index === Number(clickedTabIndex) - 1 ? 'block' : 'none';
    });
  });
});
