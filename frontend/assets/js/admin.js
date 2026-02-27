const API_BASE = 'http://localhost:5000/api';

const authPanel = document.getElementById('authPanel');
const dashboard = document.getElementById('dashboard');
const tokenKey = 'idcAdminToken';

const getToken = () => localStorage.getItem(tokenKey);
const authHeaders = () => ({ Authorization: `Bearer ${getToken()}` });

function toggleDashboard() {
  const loggedIn = Boolean(getToken());
  authPanel.hidden = loggedIn;
  dashboard.hidden = !loggedIn;
  if (loggedIn) loadAll();
}

async function apiForm(endpoint, formData) {
  return fetch(`${API_BASE}/${endpoint}`, {
    method: 'POST',
    headers: authHeaders(),
    body: formData
  });
}

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = Object.fromEntries(new FormData(e.target));
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  if (!res.ok) return (document.getElementById('loginMsg').textContent = data.message || 'Login failed');
  localStorage.setItem(tokenKey, data.token);
  toggleDashboard();
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem(tokenKey);
  toggleDashboard();
});

document.getElementById('eventForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await apiForm('events', new FormData(e.target));
  if (res.ok) {
    e.target.reset();
    loadEvents();
  }
});

document.getElementById('teamForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await apiForm('team', new FormData(e.target));
  if (res.ok) {
    e.target.reset();
    loadTeam();
  }
});

document.getElementById('galleryForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await apiForm('gallery', new FormData(e.target));
  if (res.ok) {
    e.target.reset();
    loadGallery();
  }
});


async function updateItem(endpoint, id, payload, callback) {
  const res = await fetch(`${API_BASE}/${endpoint}/${id}`, {
    method: 'PUT',
    headers: { ...authHeaders(), 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (res.ok) callback();
}

async function removeItem(endpoint, id, callback) {
  const res = await fetch(`${API_BASE}/${endpoint}/${id}`, {
    method: 'DELETE',
    headers: authHeaders()
  });
  if (res.ok) callback();
}

async function loadEvents() {
  const res = await fetch(`${API_BASE}/events`);
  const events = await res.json();
  document.getElementById('eventList').innerHTML = events
    .map((e) => `<li><span>${e.title} (${new Date(e.date).toLocaleDateString()})</span><div><button class=\"btn btn-outline\" onclick=\"const title=prompt('New title', '${e.title}'); if(title) updateItem('events','${e._id}',{title},loadEvents)\">Edit</button> <button class=\"btn btn-outline\" onclick=\"removeItem('events','${e._id}',loadEvents)\">Delete</button></div></li>`)
    .join('');
}

async function loadTeam() {
  const res = await fetch(`${API_BASE}/team`);
  const members = await res.json();
  document.getElementById('teamList').innerHTML = members
    .map((m) => `<li><span>${m.name} - ${m.role}</span><div><button class=\"btn btn-outline\" onclick=\"const role=prompt('Update role', '${m.role}'); if(role) updateItem('team','${m._id}',{role},loadTeam)\">Edit Role</button> <button class=\"btn btn-outline\" onclick=\"removeItem('team','${m._id}',loadTeam)\">Delete</button></div></li>`)
    .join('');
}

async function loadGallery() {
  const res = await fetch(`${API_BASE}/gallery`);
  const images = await res.json();
  document.getElementById('galleryList').innerHTML = images
    .map((i) => `<li><span>${i.caption || 'Untitled image'}</span><button class="btn btn-outline" onclick="removeItem('gallery','${i._id}',loadGallery)">Delete</button></li>`)
    .join('');
}

async function loadRegistrations() {
  const res = await fetch(`${API_BASE}/registrations`, { headers: authHeaders() });
  if (!res.ok) return;
  const registrations = await res.json();
  document.getElementById('registrationList').innerHTML = registrations
    .map((r) => `<li><span>${r.name} | ${r.course} | ${r.email} | ${r.interests}</span></li>`)
    .join('');
}

function loadAll() {
  loadEvents();
  loadTeam();
  loadGallery();
  loadRegistrations();
}

toggleDashboard();
window.removeItem = removeItem;
window.updateItem = updateItem;
window.loadEvents = loadEvents;
window.loadTeam = loadTeam;
window.loadGallery = loadGallery;
