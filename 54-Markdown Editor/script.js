function updatePreview() {
    const markdownInput = document.getElementById("markdown-input").value;
    const htmlPreview = document.getElementById("html-preview");

    // Convert Markdown to HTML using the marked library
    const htmlContent = marked(markdownInput);

    // Update the preview area with the rendered HTML
    htmlPreview.innerHTML = htmlContent;
}
