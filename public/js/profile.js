const followBtn = document.getElementById('follow-btn');
const followersCount = document.getElementById('followers-count');
let following = false;
const baseCount = 249;

followBtn.addEventListener('click', () => {
  following = !following;
  followBtn.textContent = following ? 'Following' : 'Follow';
  followBtn.setAttribute('aria-pressed', following);
  followBtn.classList.toggle('following', following);
  followersCount.textContent = following ? baseCount + 1 : baseCount;
  showToast(
    following ? 'You are now following @username' : 'Unfollowed @username',
  );
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

document.querySelectorAll('.post-img-wrap').forEach((wrap) => {
  const open = () => {
    const img = wrap.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  };
  wrap.addEventListener('click', open);
  wrap.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  });
});

const closeLightbox = () => {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
};

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

document.querySelectorAll('.post-img-wrap img').forEach((img) => {
  if (img.complete) {
    img.classList.replace('loading', 'loaded');
  } else {
    img.addEventListener('load', () =>
      img.classList.replace('loading', 'loaded'),
    );
  }
});

const toast = document.getElementById('toast');
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}
