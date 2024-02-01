const copyrightYear = () => {
  const d = new Date();
  const year = d.getFullYear();
  const copyrightYear = document.getElementById('year')
  copyrightYear.textContent = year;
}

copyrightYear()