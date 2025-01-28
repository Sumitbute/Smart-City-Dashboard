document.addEventListener('DOMContentLoaded', () => {
    const events = [
        { title: 'Music Festival', date: '2025-02-15', description: 'Enjoy a variety of music performances.', rsvp: false, bookmarked: false },
        { title: 'Art Exhibition', date: '2025-03-10', description: 'Explore contemporary art pieces.', rsvp: false, bookmarked: false },
        { title: 'Tech Conference', date: '2025-04-20', description: 'Learn about the latest in technology.', rsvp: false, bookmarked: false }
    ];

    const eventList = document.getElementById('eventList');
    const calendarView = document.getElementById('calendarView');

    events.forEach((event, index) => {
        const eventItem = document.createElement('li');
        eventItem.className = 'p-4 bg-gray-100 rounded shadow flex justify-between items-center';

        const eventInfo = document.createElement('div');
        eventInfo.className = 'flex-1';
        eventInfo.innerHTML = `<h3 class="font-bold">${event.title}</h3>
                                <p>${event.date}</p>
                                <p>${event.description}</p>`;
        eventItem.appendChild(eventInfo);

        const eventActions = document.createElement('div');
        eventActions.className = 'flex space-x-4';
        
        const rsvpButton = document.createElement('button');
        rsvpButton.className = 'bg-blue-500 text-white py-1 px-3 rounded';
        rsvpButton.innerText = event.rsvp ? 'RSVPed' : 'RSVP';
        rsvpButton.addEventListener('click', () => {
            event.rsvp = !event.rsvp;
            rsvpButton.innerText = event.rsvp ? 'RSVPed' : 'RSVP';
        });
        eventActions.appendChild(rsvpButton);

        const bookmarkButton = document.createElement('button');
        bookmarkButton.className = 'bg-green-500 text-white py-1 px-3 rounded';
        bookmarkButton.innerText = event.bookmarked ? 'Bookmarked' : 'Bookmark';
        bookmarkButton.addEventListener('click', () => {
            event.bookmarked = !event.bookmarked;
            bookmarkButton.innerText = event.bookmarked ? 'Bookmarked' : 'Bookmark';
        });
        eventActions.appendChild(bookmarkButton);

        eventItem.appendChild(eventActions);
        eventList.appendChild(eventItem);
    });

    const calendar = document.createElement('table');
    calendar.className = 'w-full text-center';
    const headerRow = calendar.insertRow();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(day => {
        const cell = headerRow.insertCell();
        cell.className = 'p-2 font-bold';
        cell.innerText = day;
    });

    // Generate calendar days (example for simplicity)
    for (let week = 0; week < 5; week++) {
        const row = calendar.insertRow();
        for (let day = 1; day <= 7; day++) {
            const cell = row.insertCell();
            cell.className = 'p-2';
            cell.innerText = day + week * 7;
        }
    }
    
    calendarView.appendChild(calendar);
});
