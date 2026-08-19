function qs(id) {
  return document.getElementById(id);
}

function show(id) {
  const el = qs(id);

  if (el) {
    el.classList.remove('hidden');
  }
}

function hide(id) {
  const el = qs(id);

  if (el) {
    el.classList.add('hidden');
  }
}

function resetPage() {
  window.location.reload();
}

function setProgress(step, label) {
  const text = qs('progress-text');
  const bar = qs('progress-bar');

  if (text) {
    text.textContent = `Bước ${step}/3`;
    const strong = text.parentElement.querySelector('strong');
    if (strong) {
      strong.textContent = label;
    }
  }

  if (bar) {
    bar.style.width = `${Math.round((step / 3) * 100)}%`;
  }
}

const SOURCE_CONTEXT = {
  '03:15': {
    title: 'INNER JOIN — Chỉ giữ dữ liệu khớp',
    text: 'INNER JOIN chỉ trả về các dòng có bản ghi tương ứng ở cả hai bảng. Nếu một dòng không có bản ghi khớp, dòng đó không xuất hiện trong kết quả.'
  },
  '06:32': {
    title: 'LEFT JOIN — Giữ toàn bộ bảng bên trái',
    text: 'LEFT JOIN giữ tất cả dòng từ bảng bên trái. Khi không có dữ liệu tương ứng ở bảng bên phải, các cột phía phải nhận giá trị NULL.'
  },
  '09:48': {
    title: 'Điều kiện ON',
    text: 'Mệnh đề ON xác định điều kiện ghép hai bảng. Điều kiện này ảnh hưởng trực tiếp đến những dòng được xem là khớp.'
  },
  '10:20': {
    title: 'ON và WHERE trong LEFT JOIN',
    text: 'Điều kiện đặt trong ON tác động đến lúc ghép bảng; điều kiện đặt trong WHERE lọc kết quả sau khi ghép. Với LEFT JOIN, hai vị trí có thể tạo ra kết quả khác nhau.'
  },
  '12:05': {
    title: 'FULL OUTER JOIN',
    text: 'FULL OUTER JOIN giữ các dòng khớp và cả những dòng không khớp từ hai phía. Phần còn thiếu ở mỗi phía được điền bằng NULL.'
  },
  '14:30': {
    title: 'JOIN nhiều bảng',
    text: 'Khi mỗi bảng có nhiều dòng cùng khóa, phép JOIN có thể làm số dòng kết quả tăng nhanh. Cần kiểm tra tính duy nhất của khóa trước khi ghép.'
  }
};

function ensureSourceModal() {
  if (qs('source-modal')) {
    return;
  }

  const modal = document.createElement('div');
  modal.id = 'source-modal';
  modal.className = 'modal hidden';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'source-modal-title');
  modal.innerHTML = `
    <div class="modal-backdrop" data-close-modal></div>
    <div class="modal-card">
      <div class="modal-head">
        <div>
          <span class="modal-kicker" id="source-modal-time">Bài 4</span>
          <h2 id="source-modal-title">Ngữ cảnh trong bài học</h2>
        </div>
        <button class="icon-btn" type="button" data-close-modal aria-label="Đóng">×</button>
      </div>
      <p id="source-modal-text"></p>
      <div class="source-player" aria-hidden="true">
        <span class="play-icon">▶</span>
        <div><strong>Mô phỏng đoạn bài giảng</strong><small>Prototype dùng nội dung dựng sẵn, không phát video thật.</small></div>
      </div>
      <button class="btn" type="button" data-close-modal>Đã hiểu</button>
    </div>`;
  document.body.appendChild(modal);
}

function openSource(sourceElement) {
  const match = sourceElement.textContent.match(/\d{2}:\d{2}/);

  if (!match) {
    return;
  }

  const timestamp = match[0];
  const context = SOURCE_CONTEXT[timestamp] || {
    title: 'Ngữ cảnh trong bài học',
    text: 'Đây là nội dung gốc được liên kết với mục ghi chú này.'
  };

  ensureSourceModal();
  qs('source-modal-time').textContent = `Bài 4 · ${timestamp}`;
  qs('source-modal-title').textContent = context.title;
  qs('source-modal-text').textContent = context.text;
  show('source-modal');
  document.body.classList.add('modal-open');
  qs('source-modal').querySelector('.icon-btn').focus();
}

function closeSourceModal() {
  hide('source-modal');
  document.body.classList.remove('modal-open');
}

document.addEventListener('click', (event) => {
  const closeControl = event.target.closest('[data-close-modal]');
  if (closeControl) {
    closeSourceModal();
    return;
  }

  const source = event.target.closest('.source');
  if (source && /\d{2}:\d{2}/.test(source.textContent)) {
    openSource(source);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeSourceModal();
  }

  if ((event.key === 'Enter' || event.key === ' ') && event.target.classList.contains('source')) {
    event.preventDefault();
    openSource(event.target);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.source').forEach((source) => {
    if (/\d{2}:\d{2}/.test(source.textContent)) {
      source.classList.add('source-link');
      source.setAttribute('role', 'button');
      source.setAttribute('tabindex', '0');
      source.setAttribute('title', 'Mở ngữ cảnh trong bài học');
    }
  });
});

function toggleEditing(containerId, button) {
  const container = qs(containerId);

  if (!container) {
    return;
  }

  const items = container.querySelectorAll('.note-item');
  const willEdit = !Array.from(items).some(
    (item) => item.getAttribute('contenteditable') === 'true'
  );

  items.forEach((item) => {
    item.setAttribute('contenteditable', willEdit ? 'true' : 'false');
  });

  if (button) {
    button.textContent = willEdit ? 'Xong chỉnh sửa' : 'Sửa nội dung';
  }
}


/* ========================================
   OPTION A
   ======================================== */

function optionAOrganize() {
  setProgress(3, 'Kiểm tra và quyết định');
  const buckets = {
    main: qs('a-main-result'),
    unclear: qs('a-unclear-result'),
    next: qs('a-next-result')
  };

  Object.values(buckets).forEach((bucket) => {
    if (bucket) {
      const heading = bucket.querySelector('h3');
      bucket.innerHTML = heading ? heading.outerHTML : '';
    }
  });

  document.querySelectorAll('.a-classification').forEach((select) => {
    const bucket = buckets[select.value];

    if (!bucket) {
      return;
    }

    const item = document.createElement('div');
    item.className = 'note-item';
    item.textContent = select.dataset.content;

    const source = document.createElement('span');
    source.className = 'source source-link';
    source.textContent = `Nguồn: Bài 4 · ${select.dataset.source}`;
    source.setAttribute('role', 'button');
    source.setAttribute('tabindex', '0');
    source.setAttribute('title', 'Mở ngữ cảnh trong bài học');
    item.appendChild(source);
    bucket.appendChild(item);
  });

  hide('a-raw');
  show('a-organized');
}

function optionASuggest() {
  show('a-suggestion');
}

function optionAAddSuggestion() {

  const next = qs('a-next-result');

  if (next) {

    next.innerHTML += `
      <div class="note-item">
        Khi nào nên dùng FULL OUTER JOIN?
        <small>
          Được thêm từ gợi ý AI theo yêu cầu của bạn.
        </small>
      </div>
    `;

  }

  hide('a-suggestion');
}


/* ========================================
   OPTION B
   ======================================== */

function optionBStart() {
  hide('b-intro');
  show('b-confirm');
}

function optionBConfirm() {
  setProgress(3, 'Kiểm tra và quyết định');

  const checked =
    document.querySelector(
      'input[name="classification"]:checked'
    );

  const choice =
    checked
      ? checked.value
      : 'Phần chưa hiểu';

  const choiceHeading = qs('b-choice');

  if (choiceHeading) {
    choiceHeading.textContent = choice;
  }

  hide('b-confirm');
  show('b-result');
}

function optionBSkip() {
  setProgress(3, 'Kiểm tra và quyết định');

  const choiceHeading = qs('b-choice');

  if (choiceHeading) {
    choiceHeading.textContent =
      'Giữ ở mục Chưa phân loại';
  }

  hide('b-confirm');
  show('b-result');
}


/* ========================================
   OPTION C
   ======================================== */

function optionCGenerate() {
  setProgress(3, 'Kiểm tra và quyết định');
  hide('c-intro');
  show('c-draft');
}

function optionCRejectLow() {

  const low = qs('c-low');

  if (low) {
    low.remove();
  }
}

function optionCSave() {
  hide('c-draft');
  show('c-saved');
}

function optionCUndo() {
  hide('c-saved');
  show('c-draft');
}
