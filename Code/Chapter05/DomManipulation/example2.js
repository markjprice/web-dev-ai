const nameInput = document.querySelector("#nameInput");
const moodSelect = document.querySelector("#moodSelect");
const btnApplyProfile = document.querySelector("#btnApplyProfile");
const profilePreview = document.querySelector("#profilePreview");

btnApplyProfile.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const mood = moodSelect.value;

  const displayName = name === "" ? "Anonymous" : name;
  profilePreview.textContent = `${displayName} (${mood})`;
});
