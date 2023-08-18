const backBtn = document.getElementById('back');
const forwardBtn = document.getElementById('forward');
const addressInput = document.getElementById('address');
const goBtn = document.getElementById('go');
const tabsContainer = document.getElementById('tabs');
const addTabBtn = document.getElementById('add-tab');
const contentFrame = document.getElementById('content');

// Handle tab switching
tabsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('tab')) {
        contentFrame.src = event.target.dataset.url;
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        event.target.classList.add('active');
    }
});

// Handle adding new tabs
addTabBtn.addEventListener('click', () => {
    const newTab = document.createElement('div');
    newTab.classList.add('tab');
    newTab.textContent = 'New Tab';
    newTab.dataset.url = 'https://www.example.com';
    tabsContainer.insertBefore(newTab, addTabBtn);
});

// Handle navigation
backBtn.addEventListener('click', () => contentFrame.contentWindow.history.back());
forwardBtn.addEventListener('click', () => contentFrame.contentWindow.history.forward());
goBtn.addEventListener('click', () => contentFrame.src = addressInput.value);
