const API_BASE = 'http://localhost:5000/api';
const ASSET_BASE = 'http://localhost:5000';

const defaultTeam = [
  { name: 'Aarav Sharma', role: 'President', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800', linkedin: '#', github: '#' },
  { name: 'Riya Singh', role: 'Vice President', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800', linkedin: '#', github: '#' },
  { name: 'Kunal Verma', role: 'Technical Lead', photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800', linkedin: '#', github: '#' }
];

const defaultGallery = [
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900',
  'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=900',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900'
];

const stats = [
  { label: 'Total Members', value: 220 },
  { label: 'Events Conducted', value: 32 },
  { label: 'Workshops', value: 18 },
  { label: 'Achievements', value: 46 }
];

const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
menuBtn?.addEventListener('click', () => navMenu.classList.toggle('open'));

const animateCount = (el, end) => {
  let start = 0;
  const step = () => {
    start += Math.ceil(end / 55);
    if (start >= end) el.textContent = end;
    else {
      el.textContent = start;
      requestAnimationFrame(step);
    }
  };
  step();
};

const renderStats = () => {
  document.getElementById('statsGrid').innerHTML = stats
    .map((s) => `<article class="stat-card"><h3 data-count="${s.value}">0</h3><p>${s.label}</p></article>`)
    .join('');
  document.querySelectorAll('[data-count]').forEach((el) => animateCount(el, Number(el.dataset.count)));
};

const cardTemplate = (item, type) => `
  <article class="card">
    <img src="${item.poster || item.photo || item.imageUrl}" alt="${item.title || item.name || 'gallery'}" />
    <h3>${item.title || item.name || item.caption || ''}</h3>
    ${type === 'event' ? `<p class="meta">${new Date(item.date).toDateString()}</p><p>${item.description}</p><a class="btn" target="_blank" href="${item.registrationLink || '#'}">Register</a>` : ''}
    ${type === 'team' ? `<p class="meta">${item.role}</p>` : ''}
  </article>
`;

async function fetchData(endpoint) {
  const response = await fetch(`${API_BASE}/${endpoint}`);
  if (!response.ok) throw new Error('Failed request');
  return response.json();
}

async function loadDynamicSections() {
  try {
    const [events, team, gallery] = await Promise.all([
      fetchData('events'),
      fetchData('team'),
      fetchData('gallery')
    ]);

    const normalizedEvents = events.map((e) => ({ ...e, poster: e.poster ? `${ASSET_BASE}${e.poster}` : defaultGallery[0] }));
    const normalizedTeam = (team.length ? team : defaultTeam).map((m) => ({ ...m, photo: m.photo?.startsWith('/uploads') ? `${ASSET_BASE}${m.photo}` : m.photo }));
    const normalizedGallery = (gallery.length ? gallery : defaultGallery.map((url) => ({ imageUrl: url, caption: 'Club moment' }))).map((g) => ({ ...g, imageUrl: g.imageUrl?.startsWith('/uploads') ? `${ASSET_BASE}${g.imageUrl}` : g.imageUrl }));

    document.getElementById('eventGrid').innerHTML = normalizedEvents.map((e) => cardTemplate(e, 'event')).join('') || '<p>No events available.</p>';
    document.getElementById('teamGrid').innerHTML = normalizedTeam.map((m) => cardTemplate(m, 'team')).join('');
    document.getElementById('galleryGrid').innerHTML = normalizedGallery.map((g) => `<img src="${g.imageUrl}" alt="${g.caption || 'Gallery image'}" />`).join('');

    document.querySelectorAll('#galleryGrid img').forEach((img) => {
      img.addEventListener('click', () => {
        document.getElementById('lightboxImg').src = img.src;
        document.getElementById('lightbox').classList.add('show');
      });
    });
  } catch {
    document.getElementById('eventGrid').innerHTML = '<p>Could not load events right now.</p>';
    document.getElementById('teamGrid').innerHTML = defaultTeam.map((m) => cardTemplate(m, 'team')).join('');
    document.getElementById('galleryGrid').innerHTML = defaultGallery.map((url) => `<img src="${url}" alt="Gallery image" />`).join('');
  }
}

document.getElementById('lightbox').addEventListener('click', () => document.getElementById('lightbox').classList.remove('show'));

document.getElementById('joinForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target));
  const msg = document.getElementById('formMsg');
  msg.textContent = 'Submitting...';

  try {
    const res = await fetch(`${API_BASE}/registrations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (!res.ok) throw new Error();
    msg.textContent = 'Registration submitted successfully!';
    e.target.reset();
  } catch {
    msg.textContent = 'Unable to submit right now. Please try later.';
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
renderStats();
loadDynamicSections();
