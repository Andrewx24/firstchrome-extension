async function getData() {
    const response = await fetch('https://nextjs-freestyle.vercel.app/api/users');
    const data = await response.json();
    console.log(data);
    document.getElementById('data').innerHTML = JSON.stringify(data, null, 2); // Adding indentation for better readability
}

// Optionally, you can call getData on page load
window.onload = function() {
    getData();
};

getData();