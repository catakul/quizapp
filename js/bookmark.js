export default function toggleBookmark() {
  const bookmarks = document.querySelectorAll("[data-js=bookmark__question]");
  bookmarks.forEach((bookmark) => {
    bookmark.addEventListener("click", () => {
      bookmark.classList.toggle("bookmark__button--active");
    });
  });
}
