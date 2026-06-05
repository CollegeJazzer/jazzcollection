const releases = [
  {
    title: 'Kind of Blue',
    artist: 'Miles Davis',
    year: 1959,
    label: 'Columbia',
    format: 'Vinyl',
    notes: 'Original US pressing. Moody modal classic.',
    cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'A Love Supreme',
    artist: 'John Coltrane',
    year: 1965,
    label: 'Impulse!',
    format: 'CD',
    notes: 'Quarter-note shaped label edition.',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Blue Train',
    artist: 'John Coltrane',
    year: 1958,
    label: 'Blue Note',
    format: 'Vinyl',
    notes: 'First pressing with blue note sleeve.',
    cover: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Head Hunters',
    artist: 'Herbie Hancock',
    year: 1973,
    label: 'Columbia',
    format: 'Digital',
    notes: 'Funk-jazz fusion, great for modern digging.',
    cover: 'https://images.unsplash.com/photo-1512381169733-57f8d1c77746?auto=format&fit=crop&w=400&q=80'
  }
];

const releaseList = document.getElementById('releaseList');
const searchInput = document.getElementById('search');
const formatFilter = document.getElementById('formatFilter');

function renderReleases(items) {
  releaseList.innerHTML = items.map(release => `
    <article class="release-card">
      <img src="${release.cover}" alt="${release.title} cover" />
      <div class="release-meta">
        <h4>${release.title}</h4>
        <p>${release.artist} · ${release.year}</p>
        <span>${release.label}</span>
        <div class="release-tags">
          <span class="tag">${release.format}</span>
          <span class="tag">${release.notes}</span>
        </div>
      </div>
    </article>
  `).join('');
}

function filterReleases() {
  const searchTerm = searchInput.value.toLowerCase();
  const formatValue = formatFilter.value;

  const filtered = releases.filter(item => {
    const matchesSearch = [item.title, item.artist, item.label, item.notes]
      .join(' ')
      .toLowerCase()
      .includes(searchTerm);

    const matchesFormat = formatValue === 'all' || item.format === formatValue;
    return matchesSearch && matchesFormat;
  });

  renderReleases(filtered);
}

searchInput.addEventListener('input', filterReleases);
formatFilter.addEventListener('change', filterReleases);

renderReleases(releases);
