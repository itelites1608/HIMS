document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("admission-form").addEventListener("submit", function(e) {
        e.preventDefault();  // Prevent form from submitting the traditional way

        const formData = new FormData(this);
        const formObject = {};

        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        fetch("https://script.google.com/macros/s/AKfycbzfZJq7AKw9T_YaQNn9Hrp6k39D69WBK4LSTy6xsmAmF6BVN8F112UoMsV6KlFTKLMR5Q/exec", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formObject).toString()
        }).then(response => {
            alert("Data submitted successfully!");
            document.getElementById("admission-form").reset(); // Clear the form after submission
        }).catch(error => {
            alert("There was an error submitting your data.");
            console.error("Error:", error);
        });
    });
});
