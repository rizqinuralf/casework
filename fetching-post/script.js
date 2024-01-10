// Event listener for the button click
document.getElementById('fetchButton').addEventListener('click', fetchPosts);

// Function to fetch posts from the API
function fetchPosts() {
  // Fetch posts using the JSONPlaceholder API
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      // Check if the response is successful (status code 200)
      if (!response.ok) {
        throw new Error(`Failed to fetch. Status: ${response.status}`);
      }
      // Parse JSON data from the response
      return response.json();
    })
    .then(posts => {
      // Update the DOM with the list of post titles
      updatePostList(posts);
    })
    .catch(error => {
      // Handle errors and display an error message
      console.error(error.message);
      alert('Failed to fetch. Please try again.');
    });
}

// Function to update the list of posts in the DOM
function updatePostList(posts) {
  const postList = document.getElementById('postsList');
  // Clear existing list items
  postList.innerHTML = '';

  // Create ordered list (<ol>) for post titles
  const orderedList = document.createElement('ol');

  // Iteration through posts and create list items
  posts.forEach(posts => {
    const listItem = document.createElement('li');

    // Set the text content of list item to the post title
    listItem.textContent = posts.title;

    // Append the list item to the postList
    orderedList.appendChild(listItem);
  });

  // Append the ordered list to the postList container
  postList.appendChild(orderedList);
}