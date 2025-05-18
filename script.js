function changeBackground() {
    document.body.style.backgroundColor = "#2a38b0";
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            const div = document.getElementById('apiData');
            div.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
        });

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const feedback = document.getElementById('formFeedback');

        if (name.trim() === "") {
            feedback.textContent = "Name is required!";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Form submitted successfully!";
            feedback.style.color = "green";
        }
    });
});
