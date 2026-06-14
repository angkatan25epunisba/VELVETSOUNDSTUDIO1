/* ============================================================
   VELVET SOUND — app.js
   Full luxury music vault application
   ============================================================ */

'use strict';

/* ─── DATA ──────────────────────────────────────────────── */
const PLAYLISTS = [
  {
    id: 'midnight-drive',
    name: 'Midnight Drive',
    emoji: '🌙',
    gradient: 'linear-gradient(135deg, #0d1b2a, #1a0a2e)',
    tags: ['Night', 'Cinematic'],
    tracks: [
      { id: 'md1', title: 'Neon Highway', artist: 'Midnight Collective', duration: 243, emoji: '🌃' },
      { id: 'md2', title: 'City Lights', artist: 'Urban Noir', duration: 198, emoji: '✨' },
      { id: 'md3', title: 'Dark Velocity', artist: 'Chrome Horizon', duration: 217, emoji: '🚗' },
      { id: 'md4', title: 'Glass Rain', artist: 'Nocturne', duration: 262, emoji: '🌧' },
      { id: 'md5', title: 'Tunnel Vision', artist: 'Asphalt Dreams', duration: 231, emoji: '🌉' },
    ],
    lyrics: {
      'md1': [
        { time: 0, text: 'Chasing the neon glow at 2 AM' },
        { time: 8, text: 'The city whispers secrets only speed can comprehend' },
        { time: 16, text: 'Headlights carve through velvet black' },
        { time: 24, text: 'No destination, never looking back' },
        { time: 34, text: 'Neon highway, neon highway' },
        { time: 42, text: 'Running through the veins of midnight light' },
        { time: 50, text: 'Neon highway, neon highway' },
        { time: 58, text: 'Where the asphalt meets the edge of night' },
      ],
      'md2': [
        { time: 0, text: 'From forty floors I watch the city breathe' },
        { time: 8, text: 'A million lives illuminate beneath' },
        { time: 16, text: 'Each window holds a world I\'ll never know' },
        { time: 24, text: 'City lights — a constellation down below' },
        { time: 34, text: 'We are all just lights in the dark' },
        { time: 42, text: 'Burning bright before we fade' },
      ],
    }
  },
  {
    id: 'luxury-nights',
    name: 'Luxury Nights',
    emoji: '🥃',
    gradient: 'linear-gradient(135deg, #1a0f00, #2d1a00)',
    tags: ['Premium', 'Lounge'],
    tracks: [
      { id: 'ln1', title: 'Single Malt Sessions', artist: 'The Velvet Lounge', duration: 285, emoji: '🥃' },
      { id: 'ln2', title: 'Gold Standard', artist: 'Prestige Audio', duration: 312, emoji: '⚜️' },
      { id: 'ln3', title: 'Black Card Nights', artist: 'Exclusive Order', duration: 268, emoji: '🖤' },
      { id: 'ln4', title: 'Penthouse View', artist: 'Skyline Theory', duration: 299, emoji: '🏙' },
      { id: 'ln5', title: 'Reserve Collection', artist: 'Aged & Refined', duration: 241, emoji: '🍷' },
      { id: 'ln6', title: 'After Hours Elite', artist: 'Nocturnal Club', duration: 277, emoji: '🌟' },
    ],
    lyrics: {
      'ln1': [
        { time: 0, text: 'Poured over silence, twelve years in the making' },
        { time: 10, text: 'The glass reflects a world worth celebrating' },
        { time: 20, text: 'No rush, no noise, just amber in the light' },
        { time: 30, text: 'Single malt sessions on a Thursday night' },
        { time: 42, text: 'Some things take time to become what they are' },
        { time: 50, text: 'Like oak and grain and music from afar' },
      ],
    }
  },
  {
    id: 'sad-hours',
    name: 'Sad Hours',
    emoji: '🌧',
    gradient: 'linear-gradient(135deg, #0a0a14, #0d1520)',
    tags: ['Emotional', 'Introspective'],
    tracks: [
      { id: 'sh1', title: 'Blue Monday Protocol', artist: 'Hollow Frequency', duration: 334, emoji: '🫧' },
      { id: 'sh2', title: 'Dissolve', artist: 'Static Empathy', duration: 289, emoji: '💧' },
      { id: 'sh3', title: 'Three AM Clarity', artist: 'Insomnia Wave', duration: 267, emoji: '🌑' },
      { id: 'sh4', title: 'Analog Grief', artist: 'Signal Loss', duration: 318, emoji: '📼' },
      { id: 'sh5', title: 'Quiet Ruin', artist: 'Pale Architecture', duration: 245, emoji: '🏚' },
    ],
    lyrics: {
      'sh1': [
        { time: 0, text: 'Blue Monday and I\'m still here' },
        { time: 9, text: 'Searching for a signal through the static and the fear' },
        { time: 18, text: 'Every room feels smaller than the last' },
        { time: 27, text: 'Holding conversations with the ghost of what has passed' },
        { time: 38, text: 'Protocol says keep it all inside' },
        { time: 46, text: 'But silence is a currency I can no longer provide' },
      ],
    }
  },
  {
    id: 'focus-mode',
    name: 'Focus Mode',
    emoji: '⚡',
    gradient: 'linear-gradient(135deg, #001a0d, #001428)',
    tags: ['Productivity', 'Flow'],
    tracks: [
      { id: 'fm1', title: 'Deep Work State', artist: 'Neural Architect', duration: 384, emoji: '🧠' },
      { id: 'fm2', title: 'Alpha Frequency', artist: 'Binaural Labs', duration: 421, emoji: '⚡' },
      { id: 'fm3', title: 'Zero Distraction', artist: 'Monolith Sound', duration: 356, emoji: '🎯' },
      { id: 'fm4', title: 'Flow State Protocol', artist: 'Cognitive Edge', duration: 399, emoji: '🌊' },
      { id: 'fm5', title: 'Executive Function', artist: 'Cortex Drive', duration: 367, emoji: '💡' },
      { id: 'fm6', title: 'Locked In', artist: 'The Focus Engine', duration: 412, emoji: '🔒' },
      { id: 'fm7', title: 'Signal Clear', artist: 'Precision Audio', duration: 388, emoji: '📡' },
    ],
    lyrics: {}
  },
  {
    id: 'late-rain',
    name: 'Late Rain',
    emoji: '☔',
    gradient: 'linear-gradient(135deg, #050a14, #0a1420)',
    tags: ['Ambient', 'Melancholic'],
    tracks: [
      { id: 'lr1', title: 'Petrichor', artist: 'Weathered Sound', duration: 298, emoji: '🌿' },
      { id: 'lr2', title: 'Grey Afternoon', artist: 'Cloud Formation', duration: 312, emoji: '☁️' },
      { id: 'lr3', title: 'Window Fog', artist: 'Humid Air', duration: 276, emoji: '🪟' },
      { id: 'lr4', title: 'The Drip', artist: 'Rooftop Sessions', duration: 334, emoji: '💧' },
      { id: 'lr5', title: 'Autumn Descent', artist: 'October Theory', duration: 289, emoji: '🍂' },
    ],
    lyrics: {
      'lr1': [
        { time: 0, text: 'The earth remembers what the sky has given' },
        { time: 9, text: 'Petrichor rising like a prayer half-written' },
        { time: 18, text: 'Ancient scent of stone and wet and green' },
        { time: 27, text: 'The most honest thing this world has ever seen' },
        { time: 38, text: 'Rain as memory, rain as release' },
        { time: 46, text: 'The only language that brings me peace' },
      ],
    }
  },
  {
    id: 'power-motivation',
    name: 'Power Motivation',
    emoji: '🔥',
    gradient: 'linear-gradient(135deg, #1a0800, #2d0a00)',
    tags: ['Energy', 'Drive'],
    tracks: [
      { id: 'pm1', title: 'Lion Protocol', artist: 'Alpha Drive', duration: 198, emoji: '🦁' },
      { id: 'pm2', title: 'Iron Will', artist: 'Steel Circuit', duration: 214, emoji: '⚙️' },
      { id: 'pm3', title: 'The Grind', artist: 'Work Ethic Records', duration: 187, emoji: '🔥' },
      { id: 'pm4', title: 'No Ceiling', artist: 'Limitless Audio', duration: 223, emoji: '🚀' },
      { id: 'pm5', title: 'Built Different', artist: 'Tier One Sound', duration: 204, emoji: '💎' },
      { id: 'pm6', title: 'Apex Predator', artist: 'Dominant Force', duration: 195, emoji: '⚡' },
    ],
    lyrics: {
      'pm1': [
        { time: 0, text: 'They said it couldn\'t be done' },
        { time: 5, text: 'Said the climb was too steep for anyone' },
        { time: 11, text: 'But lions don\'t ask for permission' },
        { time: 17, text: 'Lions don\'t seek validation' },
        { time: 23, text: 'Lion protocol — rise before the sun' },
        { time: 29, text: 'Build before they wake, work till it\'s done' },
        { time: 36, text: 'Every rep, every mile, every sleepless night' },
        { time: 43, text: 'Is just another stone in the mountain you\'re about to climb' },
      ],
    }
  },
  {
    id: 'romantic-collection',
    name: 'Romantic Collection',
    emoji: '🌹',
    gradient: 'linear-gradient(135deg, #1a0010, #200010)',
    tags: ['Romantic', 'Intimate'],
    tracks: [
      { id: 'rc1', title: 'Candlelight Sonata', artist: 'Velvet Romance', duration: 267, emoji: '🕯' },
      { id: 'rc2', title: 'Silk & Smoke', artist: 'Intimate Hours', duration: 289, emoji: '🌹' },
      { id: 'rc3', title: 'Her Presence', artist: 'Still Life Sound', duration: 312, emoji: '✨' },
      { id: 'rc4', title: 'Slow Dance Protocol', artist: 'Body Language', duration: 298, emoji: '💃' },
      { id: 'rc5', title: 'Perfume Trail', artist: 'Memory Sense', duration: 276, emoji: '🌸' },
    ],
    lyrics: {
      'rc1': [
        { time: 0, text: 'The candle writes your name in shadow on the wall' },
        { time: 9, text: 'And everything I thought I knew begins to fall' },
        { time: 18, text: 'Into something softer, something real' },
        { time: 27, text: 'The kind of silence that I finally want to feel' },
        { time: 38, text: 'Play the sonata slow, let the evening breathe' },
        { time: 46, text: 'Two souls finding rhythm in the candlelight reprieve' },
      ],
    }
  },
  {
    id: 'vault-selection',
    name: 'The Vault',
    emoji: '🔮',
    gradient: 'linear-gradient(135deg, #0d0010, #0a0a20)',
    tags: ['Exclusive', 'Rare'],
    tracks: [
      { id: 'vs1', title: 'Archive Edition', artist: 'Vault Masters', duration: 344, emoji: '🔮' },
      { id: 'vs2', title: 'Limited Release', artist: 'Prestige Collective', duration: 367, emoji: '💜' },
      { id: 'vs3', title: 'Private Session', artist: 'Exclusive Sound', duration: 298, emoji: '🔑' },
      { id: 'vs4', title: 'Collector\'s Cut', artist: 'Rare Audio', duration: 312, emoji: '🏆' },
      { id: 'vs5', title: 'First Edition', artist: 'Origin Masters', duration: 356, emoji: '⭐' },
    ],
    lyrics: {}
  },
];

/* ─── STATE ─────────────────────────────────────────────── */
const state = {
  currentPlaylist: null,
  currentTrackIndex: 0,
  isPlaying: false,
  isShuffle: false,
  isRepeat: false,
  volume: 0.8,
  currentTime: 0,
  duration: 0,
  favorites: JSON.parse(localStorage.getItem('vs_favorites') || '[]'),
  recentlyPlayed: JSON.parse(localStorage.getItem('vs_recent') || '[]'),
  ambientMode: false,
  fullscreenOpen: false,
  lyricsOpen: false,
  audioCtx: null,
  analyser: null,
  source: null,
};

/* Simulated playback timer */
let playbackTimer = null;
let simTime = 0;

/* ─── DOM REFS ─────────────────────────────────────────── */
const $ = id => document.getElementById(id);
const audio = $('audioEl');

/* ─── INIT ──────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  runLoader();
  initCursor();
  initParticles();
  initNav();
  initHero();
  renderPlaylists();
  initPlayer();
  initSearch();
  initFullscreen();
  initLyrics();
  initAmbient();
  initMobileMenu();
  updateStats();
  renderFavorites();
  renderRecent();
  initRevealObserver();
});

/* ─── LOADER ─────────────────────────────────────────────── */
function runLoader() {
  const screen = $('loadingScreen');
  const fill = $('loadingFill');
  let prog = 0;
  const iv = setInterval(() => {
    prog += Math.random() * 18;
    if (prog >= 100) { prog = 100; clearInterval(iv); }
    fill.style.width = prog + '%';
    if (prog === 100) setTimeout(() => screen.classList.add('hidden'), 500);
  }, 120);
}

/* ─── CURSOR ─────────────────────────────────────────────── */
function initCursor() {
  const outer = $('cursorOuter');
  const inner = $('cursorInner');
  let mx = 0, my = 0, ox = 0, oy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  inner.style.transition = 'none';
  function animate() {
    ox += (mx - ox) * 0.14;
    oy += (my - oy) * 0.14;
    outer.style.left = ox + 'px';
    outer.style.top = oy + 'px';
    inner.style.left = mx + 'px';
    inner.style.top = my + 'px';
    requestAnimationFrame(animate);
  }
  animate();
}

/* ─── PARTICLES ─────────────────────────────────────────── */
function initParticles() {
  const canvas = $('particleCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COUNT = 90;
  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * 1920,
      y: Math.random() * 1080,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18 - 0.06,
      opacity: Math.random() * 0.6 + 0.1,
      gold: Math.random() > 0.5,
    });
  }

  let ambientMultiplier = 1;
  function loop() {
    ctx.clearRect(0, 0, W, H);
    ambientMultiplier += (state.ambientMode ? 2.5 : 1 - ambientMultiplier) * 0.02;
    ambientMultiplier = Math.max(1, Math.min(2.5, ambientMultiplier));

    particles.forEach(p => {
      p.x += p.vx * ambientMultiplier;
      p.y += p.vy * ambientMultiplier;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x % W, p.y % H, p.r, 0, Math.PI * 2);
      const col = p.gold ? `rgba(196,160,80,${p.opacity * 0.7})` : `rgba(168,168,184,${p.opacity * 0.3})`;
      ctx.fillStyle = col;
      if (p.gold && state.ambientMode) {
        ctx.shadowColor = 'rgba(196,160,80,0.8)';
        ctx.shadowBlur = 6;
      } else {
        ctx.shadowBlur = 0;
      }
      ctx.fill();
    });
    requestAnimationFrame(loop);
  }
  loop();
}

/* ─── NAV ────────────────────────────────────────────────── */
function initNav() {
  const nav = $('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
  document.querySelectorAll('.nav-link, .mobile-link').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(el.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      $('mobileMenu').classList.remove('open');
    });
  });
}

function initMobileMenu() {
  const toggle = $('mobileMenuToggle');
  const menu = $('mobileMenu');
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
}

/* ─── HERO ───────────────────────────────────────────────── */
function initHero() {
  $('exploreBtn').addEventListener('click', () => {
    $('playlists').scrollIntoView({ behavior: 'smooth' });
  });
  $('playFeaturedBtn').addEventListener('click', () => {
    const pl = PLAYLISTS[0];
    loadPlaylist(pl);
    playTrack(0);
  });

  // Mouse parallax on vinyl
  const vinyl = document.querySelector('.vinyl-container');
  document.addEventListener('mousemove', e => {
    if (!vinyl) return;
    const dx = (e.clientX / window.innerWidth - 0.5) * 12;
    const dy = (e.clientY / window.innerHeight - 0.5) * 12;
    vinyl.style.transform = `translate(${dx}px, ${dy}px)`;
  });
}

/* ─── REVEAL ON SCROLL ───────────────────────────────────── */
function initRevealObserver() {
  const els = document.querySelectorAll('.reveal-text');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('revealed'), i * 80);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

/* ─── PLAYLISTS ──────────────────────────────────────────── */
function renderPlaylists() {
  const grid = $('playlistsGrid');
  grid.innerHTML = '';
  PLAYLISTS.forEach(pl => {
    const totalMin = Math.floor(pl.tracks.reduce((s, t) => s + t.duration, 0) / 60);
    const card = document.createElement('div');
    card.className = 'playlist-card';
    card.innerHTML = `
      <div class="playlist-cover" style="background: ${pl.gradient}">
        <span>${pl.emoji}</span>
        <div class="playlist-cover-overlay">
          <div class="playlist-play-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>
      <div class="playlist-info">
        <p class="playlist-name">${pl.name}</p>
        <p class="playlist-meta">${pl.tracks.length} tracks · ${totalMin} min</p>
        <div class="playlist-tags">${pl.tags.map(t => `<span class="playlist-tag">${t}</span>`).join('')}</div>
      </div>
    `;
    card.addEventListener('click', () => openPlaylist(pl));
    grid.appendChild(card);
  });
}

function openPlaylist(pl) {
  state.currentPlaylist = pl;
  renderTracklist(pl);
  $('tracklistSection').style.display = 'block';
  $('tracklistSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderTracklist(pl) {
  const section = $('tracklistSection');
  const meta = $('tracklistMeta');
  const list = $('tracklist');

  meta.innerHTML = `
    <div style="display:flex;align-items:center;gap:16px">
      <div style="width:60px;height:60px;border-radius:8px;background:${pl.gradient};display:flex;align-items:center;justify-content:center;font-size:28px">${pl.emoji}</div>
      <div>
        <h2 style="font-family:'Cormorant Garamond',serif;font-weight:300;font-size:24px;color:#f0f0f5">${pl.name}</h2>
        <p style="font-size:12px;color:#a8a8b8">${pl.tracks.length} tracks</p>
      </div>
    </div>
  `;

  list.innerHTML = '';
  pl.tracks.forEach((track, i) => {
    const isFav = state.favorites.includes(track.id);
    const item = document.createElement('div');
    item.className = 'track-item' + (isActiveTrack(track.id) ? ' active' : '');
    item.dataset.trackId = track.id;
    item.innerHTML = `
      <div class="track-num">${isActiveTrack(track.id) ? '' : (i + 1)}</div>
      <div class="track-cover-small">${track.emoji}</div>
      <div class="track-info">
        <p class="track-name">${track.title}</p>
        <p class="track-artist">${track.artist}</p>
      </div>
      <div class="track-duration">${formatTime(track.duration)}</div>
      <button class="track-fav ${isFav ? 'active' : ''}" data-track-id="${track.id}" title="Favorite">
        ${isFav ? '♥' : '♡'}
      </button>
    `;
    item.addEventListener('click', e => {
      if (e.target.closest('.track-fav')) return;
      loadPlaylist(pl);
      playTrack(i);
    });
    item.querySelector('.track-fav').addEventListener('click', e => {
      e.stopPropagation();
      toggleFavorite(track.id, e.currentTarget);
    });
    list.appendChild(item);
  });

  $('playAllBtn').onclick = () => { loadPlaylist(pl); playTrack(0); };
  $('backBtn').onclick = () => {
    section.style.display = 'none';
    $('playlists').scrollIntoView({ behavior: 'smooth' });
  };
}

function isActiveTrack(id) {
  if (!state.currentPlaylist) return false;
  const t = state.currentPlaylist.tracks[state.currentTrackIndex];
  return t && t.id === id;
}

/* ─── PLAYER ─────────────────────────────────────────────── */
function initPlayer() {
  $('playPauseBtn').addEventListener('click', togglePlay);
  $('fspPlayPause').addEventListener('click', togglePlay);
  $('prevBtn').addEventListener('click', prevTrack);
  $('nextBtn').addEventListener('click', nextTrack);
  $('fspPrev').addEventListener('click', prevTrack);
  $('fspNext').addEventListener('click', nextTrack);
  $('shuffleBtn').addEventListener('click', () => toggleShuffle($('shuffleBtn')));
  $('fspShuffle').addEventListener('click', () => toggleShuffle($('fspShuffle')));
  $('repeatBtn').addEventListener('click', () => toggleRepeat($('repeatBtn')));
  $('fspRepeat').addEventListener('click', () => toggleRepeat($('fspRepeat')));
  $('npbFav').addEventListener('click', () => {
    if (!state.currentPlaylist) return;
    const t = state.currentPlaylist.tracks[state.currentTrackIndex];
    if (t) toggleFavorite(t.id, $('npbFav'));
  });
  $('volSlider').addEventListener('input', e => {
    state.volume = e.target.value / 100;
  });

  // Progress bars
  setupProgressBar($('npbProgress'), $('npbFill'), $('npbThumb'));
  setupProgressBar($('fspProgress'), $('fspFill'), $('fspThumb'));
}

function setupProgressBar(bar, fill, thumb) {
  bar.addEventListener('click', e => {
    const rect = bar.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    seekTo(pct);
  });
  let dragging = false;
  bar.addEventListener('mousedown', () => dragging = true);
  document.addEventListener('mouseup', () => dragging = false);
  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    const rect = bar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    seekTo(pct);
  });
}

function loadPlaylist(pl) {
  state.currentPlaylist = pl;
}

function playTrack(index) {
  if (!state.currentPlaylist) return;
  const tracks = state.currentPlaylist.tracks;
  if (index < 0 || index >= tracks.length) return;

  state.currentTrackIndex = index;
  const track = tracks[index];
  simTime = 0;
  clearInterval(playbackTimer);

  // Update UI
  updateNowPlayingUI(track);
  updateActiveTrackUI(track);
  addToRecent(track);
  startPlayback(track);
}

function startPlayback(track) {
  state.isPlaying = true;
  clearInterval(playbackTimer);
  simTime = 0;

  playbackTimer = setInterval(() => {
    simTime += 0.25;
    state.currentTime = simTime;
    state.duration = track.duration;
    updateProgress();
    updateLyrics();
    if (simTime >= track.duration) {
      if (state.isRepeat) {
        simTime = 0;
      } else {
        nextTrack();
      }
    }
  }, 250);

  updatePlayPauseUI();
  document.querySelector('.vinyl')?.classList.add('playing');
  $('npbCover').classList.add('glowing');
}

function togglePlay() {
  if (!state.currentPlaylist) {
    loadPlaylist(PLAYLISTS[0]);
    playTrack(0);
    return;
  }
  if (state.isPlaying) {
    state.isPlaying = false;
    clearInterval(playbackTimer);
    document.querySelector('.vinyl')?.classList.remove('playing');
    $('npbCover').classList.remove('glowing');
  } else {
    const track = state.currentPlaylist.tracks[state.currentTrackIndex];
    state.isPlaying = true;
    playbackTimer = setInterval(() => {
      simTime += 0.25;
      state.currentTime = simTime;
      updateProgress();
      updateLyrics();
      if (simTime >= track.duration) {
        if (state.isRepeat) simTime = 0;
        else nextTrack();
      }
    }, 250);
    document.querySelector('.vinyl')?.classList.add('playing');
    $('npbCover').classList.add('glowing');
  }
  updatePlayPauseUI();
}

function nextTrack() {
  if (!state.currentPlaylist) return;
  const tracks = state.currentPlaylist.tracks;
  let next;
  if (state.isShuffle) {
    next = Math.floor(Math.random() * tracks.length);
  } else {
    next = (state.currentTrackIndex + 1) % tracks.length;
  }
  playTrack(next);
}

function prevTrack() {
  if (!state.currentPlaylist) return;
  if (simTime > 5) { simTime = 0; return; }
  const prev = (state.currentTrackIndex - 1 + state.currentPlaylist.tracks.length) % state.currentPlaylist.tracks.length;
  playTrack(prev);
}

function seekTo(pct) {
  if (!state.currentPlaylist) return;
  const track = state.currentPlaylist.tracks[state.currentTrackIndex];
  simTime = pct * track.duration;
  state.currentTime = simTime;
  updateProgress();
}

function toggleShuffle(btn) {
  state.isShuffle = !state.isShuffle;
  btn.classList.toggle('active', state.isShuffle);
  $('shuffleBtn').classList.toggle('active', state.isShuffle);
  $('fspShuffle').classList.toggle('active', state.isShuffle);
}

function toggleRepeat(btn) {
  state.isRepeat = !state.isRepeat;
  btn.classList.toggle('active', state.isRepeat);
  $('repeatBtn').classList.toggle('active', state.isRepeat);
  $('fspRepeat').classList.toggle('active', state.isRepeat);
}

function updateNowPlayingUI(track) {
  $('npbTitle').textContent = track.title;
  $('npbArtist').textContent = track.artist;
  $('npbCover').innerHTML = `<div style="font-size:28px;display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:${state.currentPlaylist.gradient};border-radius:6px">${track.emoji}</div>`;

  $('fspTitle').textContent = track.title;
  $('fspArtist').textContent = track.artist;
  $('fspPlaylist').textContent = state.currentPlaylist.name.toUpperCase();
  $('fspCover').innerHTML = `<div style="font-size:80px;display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:${state.currentPlaylist.gradient}">${track.emoji}</div><div class="fsp-cover-glow"></div>`;
  $('fspBg').style.background = state.currentPlaylist.gradient;

  const isFav = state.favorites.includes(track.id);
  $('npbFav').textContent = isFav ? '♥' : '♡';
  $('npbFav').classList.toggle('active', isFav);

  if (state.lyricsOpen) renderLyricsOverlay(track);
  renderFspLyrics(track);
}

function updatePlayPauseUI() {
  document.querySelectorAll('.icon-play').forEach(el => el.style.display = state.isPlaying ? 'none' : 'block');
  document.querySelectorAll('.icon-pause').forEach(el => el.style.display = state.isPlaying ? 'block' : 'none');
}

function updateProgress() {
  if (!state.duration) return;
  const pct = (state.currentTime / state.duration) * 100;
  $('npbFill').style.width = pct + '%';
  $('npbThumb').style.left = pct + '%';
  $('fspFill').style.width = pct + '%';
  $('fspThumb').style.left = pct + '%';
  $('npbCurrentTime').textContent = formatTime(state.currentTime);
  $('npbDuration').textContent = formatTime(state.duration);
  $('fspCurrentTime').textContent = formatTime(state.currentTime);
  $('fspDuration').textContent = formatTime(state.duration);
}

function updateActiveTrackUI(track) {
  document.querySelectorAll('.track-item').forEach(el => {
    const active = el.dataset.trackId === track.id;
    el.classList.toggle('active', active);
    if (active) {
      const num = el.querySelector('.track-num');
      if (num) num.textContent = '';
    }
  });
}

/* ─── AUDIO VISUALIZER (canvas) ─────────────────────────── */
function drawVisualizer() {
  const canvases = [$('npbVisualizer'), $('fspVisualizer')];
  canvases.forEach(canvas => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth || canvas.parentElement.offsetWidth;
    canvas.height = canvas.offsetHeight || 80;
    const W = canvas.width, H = canvas.height;
    const bars = Math.floor(W / 4);
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < bars; i++) {
      const t = Date.now() / 1000;
      const amplitude = state.isPlaying ? 0.5 + 0.5 * Math.sin(i * 0.3 + t * 3) : 0.08;
      const h = H * amplitude * (0.3 + 0.7 * Math.sin(i * 0.15 + t * 2));
      const x = i * 4;
      const grad = ctx.createLinearGradient(0, H, 0, H - h);
      grad.addColorStop(0, 'rgba(196,160,80,0.3)');
      grad.addColorStop(1, 'rgba(196,160,80,0.8)');
      ctx.fillStyle = grad;
      ctx.fillRect(x, H - h, 2, h);
    }
  });
  requestAnimationFrame(drawVisualizer);
}
drawVisualizer();

/* ─── SEARCH ─────────────────────────────────────────────── */
function initSearch() {
  const input = $('searchInput');
  const results = $('searchResults');
  const clear = $('searchClear');

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.classList.remove('active'); return; }
    const hits = [];
    PLAYLISTS.forEach(pl => {
      pl.tracks.forEach(t => {
        if (t.title.toLowerCase().includes(q) || t.artist.toLowerCase().includes(q) || pl.name.toLowerCase().includes(q)) {
          hits.push({ ...t, playlistId: pl.id, playlistName: pl.name, pl });
        }
      });
    });
    results.innerHTML = hits.slice(0, 8).map(h => `
      <div class="search-result-item" data-playlist-id="${h.playlistId}" data-track-id="${h.id}">
        <div class="search-result-cover">${h.emoji}</div>
        <div class="search-result-info">
          <p>${h.title}</p>
          <span>${h.artist} · ${h.playlistName}</span>
        </div>
        <span style="font-size:11px;color:#a8a8b8;margin-left:auto">${formatTime(h.duration)}</span>
      </div>
    `).join('') || '<div style="padding:20px;text-align:center;font-size:13px;color:#2a2a36">No tracks found</div>';
    results.classList.add('active');
    results.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const pl = PLAYLISTS.find(p => p.id === el.dataset.playlistId);
        const idx = pl.tracks.findIndex(t => t.id === el.dataset.trackId);
        loadPlaylist(pl);
        playTrack(idx);
        input.value = '';
        results.classList.remove('active');
      });
    });
  });

  clear.addEventListener('click', () => { input.value = ''; results.classList.remove('active'); });
  document.addEventListener('click', e => { if (!e.target.closest('.search-wrap')) results.classList.remove('active'); });
}

/* ─── FAVORITES ─────────────────────────────────────────── */
function toggleFavorite(trackId, btn) {
  const idx = state.favorites.indexOf(trackId);
  if (idx === -1) {
    state.favorites.push(trackId);
    btn.textContent = '♥'; btn.classList.add('active');
  } else {
    state.favorites.splice(idx, 1);
    btn.textContent = '♡'; btn.classList.remove('active');
  }
  // Sync all fav buttons for this track
  document.querySelectorAll(`.track-fav[data-track-id="${trackId}"]`).forEach(b => {
    b.textContent = state.favorites.includes(trackId) ? '♥' : '♡';
    b.classList.toggle('active', state.favorites.includes(trackId));
  });
  // Sync bar fav button
  if (state.currentPlaylist) {
    const ct = state.currentPlaylist.tracks[state.currentTrackIndex];
    if (ct && ct.id === trackId) {
      $('npbFav').textContent = state.favorites.includes(trackId) ? '♥' : '♡';
      $('npbFav').classList.toggle('active', state.favorites.includes(trackId));
    }
  }
  localStorage.setItem('vs_favorites', JSON.stringify(state.favorites));
  renderFavorites();
  updateStats();
}

function renderFavorites() {
  const list = $('favoritesList');
  const favTracks = [];
  PLAYLISTS.forEach(pl => pl.tracks.forEach(t => {
    if (state.favorites.includes(t.id)) favTracks.push({ ...t, pl });
  }));
  if (!favTracks.length) {
    list.innerHTML = '<p class="empty-state">Your favorites will appear here. Press ♡ on any track.</p>';
    return;
  }
  list.innerHTML = '';
  favTracks.forEach((track, i) => {
    const item = document.createElement('div');
    item.className = 'track-item';
    item.innerHTML = `
      <div class="track-num">${i + 1}</div>
      <div class="track-cover-small">${track.emoji}</div>
      <div class="track-info">
        <p class="track-name">${track.title}</p>
        <p class="track-artist">${track.artist} · ${track.pl.name}</p>
      </div>
      <div class="track-duration">${formatTime(track.duration)}</div>
      <button class="track-fav active" data-track-id="${track.id}">♥</button>
    `;
    item.addEventListener('click', e => {
      if (e.target.closest('.track-fav')) return;
      loadPlaylist(track.pl);
      const idx = track.pl.tracks.findIndex(t => t.id === track.id);
      playTrack(idx);
    });
    item.querySelector('.track-fav').addEventListener('click', e => {
      e.stopPropagation();
      toggleFavorite(track.id, e.currentTarget);
    });
    list.appendChild(item);
  });
}

/* ─── RECENTLY PLAYED ────────────────────────────────────── */
function addToRecent(track) {
  state.recentlyPlayed = state.recentlyPlayed.filter(r => r.id !== track.id);
  state.recentlyPlayed.unshift({ ...track, playlistId: state.currentPlaylist.id, playlistName: state.currentPlaylist.name, playlistEmoji: state.currentPlaylist.emoji });
  if (state.recentlyPlayed.length > 12) state.recentlyPlayed.pop();
  localStorage.setItem('vs_recent', JSON.stringify(state.recentlyPlayed));
  renderRecent();
}

function renderRecent() {
  const list = $('recentList');
  if (!state.recentlyPlayed.length) {
    list.innerHTML = '<p class="empty-state">Your listening history will appear here.</p>';
    return;
  }
  list.innerHTML = '';
  state.recentlyPlayed.forEach((track, i) => {
    const item = document.createElement('div');
    item.className = 'track-item';
    item.innerHTML = `
      <div class="track-num">${i + 1}</div>
      <div class="track-cover-small">${track.emoji}</div>
      <div class="track-info">
        <p class="track-name">${track.title}</p>
        <p class="track-artist">${track.artist} · ${track.playlistName}</p>
      </div>
      <div class="track-duration">${formatTime(track.duration)}</div>
      <button class="track-fav ${state.favorites.includes(track.id) ? 'active' : ''}" data-track-id="${track.id}">
        ${state.favorites.includes(track.id) ? '♥' : '♡'}
      </button>
    `;
    item.addEventListener('click', e => {
      if (e.target.closest('.track-fav')) return;
      const pl = PLAYLISTS.find(p => p.id === track.playlistId);
      if (!pl) return;
      loadPlaylist(pl);
      const idx = pl.tracks.findIndex(t => t.id === track.id);
      playTrack(idx);
    });
    item.querySelector('.track-fav').addEventListener('click', e => {
      e.stopPropagation();
      toggleFavorite(track.id, e.currentTarget);
    });
    list.appendChild(item);
  });
}

/* ─── STATS ──────────────────────────────────────────────── */
function updateStats() {
  let totalTracks = 0, totalDur = 0;
  PLAYLISTS.forEach(pl => { totalTracks += pl.tracks.length; pl.tracks.forEach(t => totalDur += t.duration); });
  const hours = Math.floor(totalDur / 3600);
  const mins = Math.floor((totalDur % 3600) / 60);

  animateCount($('statTracks'), totalTracks);
  animateCount($('statPlaylists'), PLAYLISTS.length);
  $('statDuration').textContent = `${hours}h ${mins}m`;
  animateCount($('statFavs'), state.favorites.length);
}

function animateCount(el, target) {
  let start = 0;
  const step = Math.ceil(target / 30);
  const iv = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = start;
    if (start >= target) clearInterval(iv);
  }, 40);
}

/* ─── FULLSCREEN PLAYER ─────────────────────────────────── */
function initFullscreen() {
  $('fullscreenBtn').addEventListener('click', openFullscreen);
  $('fspClose').addEventListener('click', closeFullscreen);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && state.fullscreenOpen) closeFullscreen(); });
}

function openFullscreen() {
  const fp = $('fullscreenPlayer');
  fp.classList.add('open');
  requestAnimationFrame(() => fp.classList.add('visible'));
  state.fullscreenOpen = true;
  document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
  const fp = $('fullscreenPlayer');
  fp.classList.remove('visible');
  setTimeout(() => { fp.classList.remove('open'); state.fullscreenOpen = false; }, 500);
  document.body.style.overflow = '';
}

/* ─── LYRICS ─────────────────────────────────────────────── */
function initLyrics() {
  $('lyricsToggleBtn').addEventListener('click', () => {
    if (!state.currentPlaylist) return;
    const track = state.currentPlaylist.tracks[state.currentTrackIndex];
    renderLyricsOverlay(track);
    $('lyricsOverlay').classList.add('open');
    state.lyricsOpen = true;
  });
  $('lyricsClose').addEventListener('click', () => {
    $('lyricsOverlay').classList.remove('open');
    state.lyricsOpen = false;
  });
}

function getLyricsForTrack(track) {
  if (!state.currentPlaylist) return [];
  const lyricsMap = state.currentPlaylist.lyrics || {};
  return lyricsMap[track.id] || [];
}

function renderLyricsOverlay(track) {
  const lines = getLyricsForTrack(track);
  $('lyricsTrackName').textContent = track.title;
  const body = $('lyricsBody');
  if (!lines.length) {
    body.innerHTML = '<p class="lyric-line" style="text-align:center;color:#2a2a36">No lyrics available</p>';
    return;
  }
  body.innerHTML = lines.map((l, i) =>
    `<p class="lyric-line" data-index="${i}" data-time="${l.time}">${l.text}</p>`
  ).join('');
}

function renderFspLyrics(track) {
  const lines = getLyricsForTrack(track);
  const content = $('fspLyricsContent');
  if (!lines.length) {
    content.innerHTML = '<p class="lyric-line" style="text-align:center;color:#2a2a36;margin-top:80px">No lyrics available</p>';
    return;
  }
  content.innerHTML = lines.map((l, i) =>
    `<p class="lyric-line" data-index="${i}" data-time="${l.time}">${l.text}</p>`
  ).join('');
}

function updateLyrics() {
  const ct = state.currentTime;
  ['.lyrics-body', '.fsp-lyrics-content'].forEach(selector => {
    const container = document.querySelector(selector);
    if (!container) return;
    const lines = container.querySelectorAll('.lyric-line[data-time]');
    let activeEl = null;
    lines.forEach(el => {
      const t = parseFloat(el.dataset.time);
      const next = el.nextElementSibling;
      const nextT = next ? parseFloat(next.dataset.time) : Infinity;
      if (ct >= t && ct < nextT) {
        el.classList.add('active');
        el.classList.remove('passed');
        activeEl = el;
      } else if (ct >= nextT) {
        el.classList.remove('active');
        el.classList.add('passed');
      } else {
        el.classList.remove('active', 'passed');
      }
    });
    if (activeEl) activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

/* ─── AMBIENT MODE ─────────────────────────────────────── */
function initAmbient() {
  const btn = $('ambientToggle');
  btn.addEventListener('click', () => {
    state.ambientMode = !state.ambientMode;
    btn.classList.toggle('active', state.ambientMode);
    document.body.classList.toggle('ambient-mode', state.ambientMode);
  });
}

/* ─── HELPERS ─────────────────────────────────────────── */
function formatTime(secs) {
  const s = Math.floor(secs);
  const m = Math.floor(s / 60);
  const ss = (s % 60).toString().padStart(2, '0');
  return `${m}:${ss}`;
}
