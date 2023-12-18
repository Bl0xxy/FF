function toggleSection(sectionId) {
    print("Toggle Section Ran with section id of " + sectionId);
    const section = document.getElementById(sectionId);
    section.classList.toggle('revealed');
}
