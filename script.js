function generateResume() {
    document.getElementById('previewName').textContent = document.getElementById('name').value;
    document.getElementById('previewEmail').textContent = document.getElementById('email').value;
    document.getElementById('previewPhone').textContent = document.getElementById('phone').value;
    document.getElementById('previewEducation').textContent = document.getElementById('education').value;
    document.getElementById('previewSkills').textContent = document.getElementById('skills').value;
    document.getElementById('previewExperience').textContent = document.getElementById('experience').value;
    document.getElementById('previewHobbies').textContent = document.getElementById('hobbies').value;
}

function downloadPDF() {
const { jsPDF } = window.jspdf;
let doc = new jsPDF();

doc.setFont("helvetica");
doc.setFontSize(16);
doc.text("Resume", 105, 15, null, null, "center");


let name = document.getElementById('previewName').textContent;
let email = document.getElementById('previewEmail').textContent;
let phone = document.getElementById('previewPhone').textContent;
let education = document.getElementById('previewEducation').textContent;
let skills = document.getElementById('previewSkills').textContent;
let experience = document.getElementById('previewExperience').textContent;
let hobbies = document.getElementById('previewHobbies').textContent;


doc.setFontSize(12);
doc.setFillColor(255, 255, 255); 
doc.setTextColor(0, 0, 0); 
doc.rect(10, 25, 190, 15, 'F'); 
doc.text(`${name}`, 15, 35);
doc.setTextColor(0, 0, 0);
doc.text(`Email: ${email}`, 15, 45);
doc.text(`Phone: ${phone}`, 15, 55);


function drawCard(title, content, yPos) {
    doc.setFillColor(240, 240, 240); 
    doc.rect(10, yPos, 90, 40, 'F'); 
    doc.rect(110, yPos, 90, 40, 'F'); 
    doc.setTextColor(0, 0, 0);

    doc.setFontSize(14);
    doc.text(title, 15, yPos + 10);
    doc.setFontSize(12);
    doc.text(content, 15, yPos + 20, { maxWidth: 80 });

    return yPos + 50; 
}

let yPosition = 65;
yPosition = drawCard("Education", education, yPosition);
yPosition = drawCard("Experience", experience, yPosition);
yPosition = drawCard("Skills", skills, yPosition);
yPosition = drawCard("Hobbies", hobbies, yPosition);


doc.save("Resume.pdf");
}