export function navigation() {
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('[data-js=navLink]');
  const headline = document.querySelector('[data-js=headline]')
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
      const selectedPage = document.querySelector(
        `[data-js=${navLink.dataset.link}]`
      );
      pages.forEach(page => {
        page.classList.remove('current');
      });
      selectedPage.classList.add('current');
      headline.textContent = navLink.dataset.headline;
    });
  });
}
// export function navigation() {
//   const pages = document.querySelectorAll('.page')
//   const navLinks = document.querySelectorAll('[data-js="navLink"]')
//   navLinks.forEach(navLink => {
//       navLink.addEventListener('click', () => {
//         const selectedPage = document.querySelector(
//           `[data-js=${navLink.dataset.link}]`
//           );
//         pages.forEach(page => {
//           page.classList.remove('current');
//         });
//         selectedPage.classList.add('current');
//       });
//     });
// }